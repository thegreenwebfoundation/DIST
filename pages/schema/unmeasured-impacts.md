---
title: Schema
permalink: "/schema/unmeasured-impacts"
layout: sidebar-navigation
sidebar_navigation: schema_categories
---

## Guidance on unmeasured impacts

The [DIST taxonomy](/taxonomy) defines 14 different impact categories, all of which might be measured, either individually or in aggregate in some combination.

However, there are often cases where we cannot measure a particular impact, or are not sufficiently confident in the result to publish it at all, even with a low confidence rating. In these cases the best practice is to explicitly mention that category as unmeasured, in order to make it clear that there **is** or **may be** an impact, but that its precise quantity is unknown, rather than implying there is no impact at all.

We do this with the special `null` value in our dist file. Here’s an example:

{% highlight javascript %}
{% raw %}
{
    "categories": ["operational:indirect:saas"],
    "value": null,
    "unit": "kgCO2e",
    "notes": "Reliable data not available in order to estimate."
}
{% endraw %}
{% endhighlight %}

In this case, we see clearly from the DIST json file, that the organization is unable to provide a reliable estimate for indirect impacts from Software-as-a-Service packages. The category is explicitly included  with a `null` value, and the `notes` field is used to explain the absence of a measurement.

Compare this to another example showing the carbon impact from generators:


{% highlight javascript %}
{% raw %}
{
    "categories": ["operational:direct:generators"],
    "value": 0,
    "unit": "kgCO2e",
    "confidence": "high",
    "notes": "GWF does not own or operate any generators."
}
{% endraw %}
{% endhighlight %}


In this case, the value is zero as Green Web Foundation does not operate any generators, so there is _no impact_. This is a real measurement, and the impact itself is measured to be zero.

We strongly recommend that your DIST file include a listed impact for **all 14 of the taxonomy categories**, and that you clearly mark all unknown or unmeasured impacts as `null`, and all nonexistent impacts as **zero**. If there are multiple categories that are unknown or nonexistent, you can list these in a single impact entry, for brevity:


{% highlight javascript %}
{% raw %}
{
    "categories": [
        "operational:indirect:saas",
        "operational:indirect:managed_services",
        "operational:indirect:cloud_services"
    ],
    "value": null,
    "unit": "kgCO2e",
    "notes": "Data unavailable to measure these impacts"
}
{% endraw %}
{% endhighlight %}

For instance, in this example, none of the operational indirect impact categories have been measured.

While we recommend that you ensure that every taxonomy category is listed, to ensure that incomplete DIST files remain valid and useful, **any unlisted taxonomy category will be assumed to be unmeasured (i.e. `null`)**. **Therefore, for categories where your impact is nonexistent, it is very important to list them explicitly as a zero measurement.**
