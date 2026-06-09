---
title: Taxonomy
date: 2026-05-06 10:15:00 Z
layout: taxonomy
---

<div class="prose">
<p>The taxonomy part of Digital Impacts Schema and Taxonomy (DIST) is a standardised categorisation system that can be applied across multiple impact dimensions. It's a common approach for structuring impact estimates data, enabling comparison across different organisations and applications.</p>
<p>To apply the taxonomy in practice, use DIST's <a href="/methodologies">methodologies map</a> and <a href="/schema">schema</a> to produce and share impact estimates.</p>
</div>

<div class="mt-10 mb-6">
  {% include DIST/taxonomy-overview.html title=true %}
</div>


<div class="mt-6 mb-10">
  <h2 class="text-2xl">Impact dimensions</h2>
  <div class="prose mt-6">
    <p>DIST's default taxonomy is extensible so it can be applied to multiple environmental impact dimensions. We welcome contributions to improve all aspects of this work - see <a href="get-involved/">get involved</a>.</p>
    <p>Use the buttons below to toggle between the default taxonomy and versions tailored to specific  impact dimensions the DIST community have worked on.</p>
  </div>
</div>


<div class="my-6">

<p>Available impact dimensions:</p>

{% tabs log %}
  {% tab log Default taxonomy %}
  <div class="my-8 info-box">
    The full, default taxonomy.
  </div>
  <div class="mb-8">
    {% include DIST/taxonomy-visual.html %}
  </div>
  {% endtab %}

  {% tab log Carbon %}
  <div class="my-8 info-box">
    <p>A tailored view of the taxonomy to support categorising carbon emission impacts.</p>
    <p>Use this in conjunction with the carbon <a href="/methodologies/">methodologies map</a> and <a href="/schema/">schema</a> to estimate and share your digital estate's carbon emission information.</p>
  </div>

  <div class="mb-8">
  {% include DIST/taxonomy-visual.html dimension="carbon" %}
  </div>
  {% endtab %}

  {% tab log Water %}
  <div class="my-8 info-box">
    <p>The DIST community are currently working to map the default taxonomy to water impacts.</p>
    <p>If you would like to contribute, please see the <a href="get-involved/">get involved</a> page.</p>
  </div>
  {% endtab %}
{% endtabs %}
</div>
