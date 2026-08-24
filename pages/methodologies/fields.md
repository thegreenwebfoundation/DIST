---
title: Map fields
date: 2026-05-20 10:15:00 Z
permalink: "/methodologies/fields"
layout: sidebar-navigation
sidebar_navigation: methodology_categories
---

The table below illustrates the fields that are represented in the DIST Methodologies Map.

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
