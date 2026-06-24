import $RefParser from '@apidevtools/json-schema-ref-parser';
import { writeFileSync } from 'fs';
import { basename, extname } from 'path';

const inputFile = process.argv[2];
const outputFile = process.argv[3]

if (!inputFile || !outputFile) {
  console.error('Usage: node scripts/schema-to-data.js <inputPath> <outputPath>');
  process.exit(1);
}

function processProperty(name, prop, required = []) {
  const base = {
    name,
    required: required.includes(name),
    description: prop.description || '',
    default: prop.default ?? null,
    enum: prop.enum || null,
    properties: null,
    variants: null,
  };

  if (prop.type && prop.type !== 'object') {
    return { ...base, type: prop.type };
  }

  if (prop.type === 'object' || prop.properties) {
    return {
      ...base,
      type: 'object',
      properties: processSchema(prop),
    };
  }

  if (prop.type === 'array' && prop.items) {
    const items = prop.items;
    return {
      ...base,
      type: 'array',
      items: items.properties
        ? { type: 'object', properties: processSchema(items) }
        : { type: items.type || 'any' },
    };
  }

  const combiner = ['anyOf', 'oneOf', 'allOf'].find(k => prop[k]);
  if (combiner) {
    return {
      ...base,
      type: combiner,
      variants: prop[combiner].map((variant, i) => ({
        name: variant.title || `Option ${i + 1}`,
        description: variant.description || '',
        type: variant.type || 'object',
        properties: variant.properties ? processSchema(variant) : null,
      })),
    };
  }

  return { ...base, type: 'any' };
}

function processSchema(schema) {
  return Object.entries(schema.properties || {}).map(([name, prop]) =>
    processProperty(name, prop, schema.required || [])
  );
}

try {
  const schema = await $RefParser.dereference(inputFile);

  const data = {
    title: schema.title || '',
    description: schema.description || '',
    properties: processSchema(schema),
  };

  writeFileSync(outputFile, JSON.stringify(data, null, 2));
  console.log(`Written to ${outputFile}`);
} catch (err) {
  console.error('Failed to process schema:', err.message);
  process.exit(1);
}
