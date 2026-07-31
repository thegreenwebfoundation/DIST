---
title: Impact Dimensions
permalink: "/taxonomy/dimensions"
layout: taxonomy-tabs
---


  <div class="prose mt-6">
    <p>DIST's default taxonomy is extensible so it can be applied to multiple environmental impact dimensions. We welcome contributions to improve all aspects of this work - see <a href="/get-involved">get involved</a>.</p>
    <p>Use the buttons below to toggle between the default taxonomy and versions tailored to specific  impact dimensions the DIST community have worked on.</p>
  </div>



<div class="my-10">

<h3 class="my-8">Available impact dimensions</h3>

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
  <div class="my-8 warning-box">
    <p>The DIST community are currently working to map the default taxonomy to water impacts.</p>
    <p>If you would like to contribute, please see the <a href="get-involved/">get involved</a> page.</p>
  </div>
  {% endtab %}

  {% tab log Health %}
  <div class="my-8 warning-box">
    <p>The DIST community are currently working to map the default taxonomy to human health impacts.</p>
    <p>If you would like to contribute, please see the <a href="get-involved/">get involved</a> page.</p>
  </div>
  {% endtab %}  
{% endtabs %}
</div>