#!/bin/bash
node scripts/schema-to-data.js schema/dist/dist-v0.0.1.json _data/generated/schema.json
npm run schema-to-data
jekyll build
