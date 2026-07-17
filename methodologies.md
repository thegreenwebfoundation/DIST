---
title: Methodologies
date: 2026-05-20 10:15:00 Z
---

A curated list of measurement methodologies to support data production for all categories of the [taxonomy](/taxonomy).

## Methodologies Map - Coming soon

Our plan is to publish an open mapping of various methodologies to different categories of the DIST taxonomy. We envisage this will be useful for adopters of DIST who require guidance on methodologies that can be adopted for different DIST impact dimensions or categories.

To track progress, or get involved in the shaping of the vision and implementation of this section of DIST, take a look at the [issues we are working on in gtihub](https://github.com/thegreenwebfoundation/DIST/issues?q=state%3Aopen%20label%3A%22Methodologies%20map%22).

## Contribute

A paragraph about contribution ...

### Contribution guidelines

Summary of contribution guidelines. Link to GitHub CONTRIBUTION - METHODOLOGIES doc.

### Contribution process

- FLowchart

Button linking to GitHub template for submission

## Methodology fields

A paragraph explaining what this is.


<table class="table-auto">
<thead>
<tr>
<th colspan="4">DIST Methodologies Map - Definitions</th>
</tr>
</thead>
<tbody>
{% for sect in site.data.methodology %}
  <tr>
    <th colspan="4">{{ sect.heading }}</th>
  </tr>
  <tr>
    <th scope="col">Fields</th>
    <th scope="col">Definition</th>
    <th scope="col">Required</th>
    <th scope="col">Example</th>
  </tr>
  {% for field in sect.fields %}
    <tr>
      <th scope="row">{{ field.name }}</th>
      <td>
        {{ field.definition }}
        {% if field.options %}
        <ul>
        {% for opt in field.options %}
          {% if opt.id %}
            <li>{{opt.id}}: {{opt.title}}</li>
          {% else %}
            <li>{{ opt }}</li>
          {% endif %}
        {% endfor %}
        </ul>
        {% endif %}
      </td>
      <td>{% if field.required %}Required{% elsif field.required == "maintainer" %}Updated by maintainers{% else %}Optional{% endif %}</td>
      <td>{{ field.example }}</td>
    </tr>
  {% endfor %}
{% endfor %}
</tbody>
</table>