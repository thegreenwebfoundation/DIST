---
title: Schema
permalink: "/schema/tutorial"
layout: sidebar-navigation
sidebar_navigation: schema_categories
---

## DIST Schema Tutorial


This tutorial walks you through the process of expressing your digital technology’s impact measurements in a JSON file using the DIST schema.

### Before you start

The tutorial assumes the following:
 - You’re comfortable working with data in JSON format;
 - You’ve already produced some numbers for some or all of the [DIST taxonomy categories](/taxonomy) for one or more impact dimensions;
 - You want to put those numbers into a format to share with others to demonstrate transparency around your scope boundaries and approach.
 - You are using **version 0.0.1** of the DIST schema.

If you don’t have any impact measurements yet, you might find it useful to start with the [DIST methodology map](/methodologies), in order to find appropriate methods to measure your impacts.

We’ll use examples to explain the structure of the file and the data it contains. For further information, you can consult the [syntax reference](/schema/reference), or the [JSON schema definition file](/schema/dist/dist-v0.0.1.json) directly.

### Overview of a DIST file

A valid DIST.json file consists of three main sections of information:
 - the `$schema` declaration
 - the `organisation` block
 - the `report` block

{% highlight javascript %}
{% raw %}
{
    "$schema": "https://dist.greenweb.org/schema/dist/dist-v0.0.1.json",
    "organization": {},
    "report": {}
}
{% endraw %}
{% endhighlight %}

Let's examine each of these in turn.

### The `$schema` declaration

All DIST files MUST contain a special `$schema` element, pointing to the URL of the JSON schema definition for the version of DIST you’re using - this will be a URL in the format `https://dist.greenweb.org/schema/dist/dist-${VERSION_NUMBER}.json`.


This serves two purposes. First it ensures you can use [existing JSON schema validator tools](https://www.jsonschemavalidator.net/) to ensure your DIST file is valid, and secondly, it ensures that any readers of your DIST file know which version of the DIST schema it uses, which means that they can interpret it correctly.

### The `organization` section

The organization section contains general background information about your organization.

At a bare minimum, this must contain your organization’s official **`name`**:


{% highlight javascript %}
{% raw %}
{
    "name": "Green Web Foundation",
}
{% endraw %}
{% endhighlight %}

Optionally, you may include additional information about your organization - each additional field is entirely optional, you may pick and choose as you like:

{% highlight javascript %}
{% raw %}
{
    "name": "Green Web Foundation",
    "description": "Green Web Foundation is a non-profit organization working towards a fossil-free internet by 2030.",
    "open_corporates_url": "https://opencorporates.com/companies/nl/52191494",
    "country": "NL",
    "size": "0-9",
    "sector": "non_profit",
    "activity_description": "Technical and policy research, development and advocacy",
    "industries": ["J62", "J63", "M", "S"]
}

{% endraw %}
{% endhighlight %}

For more information on each of these fields, their purpose, and the possible values they can take, please see the [syntax reference](/schema/reference).

### The `report` section

The other top level section of the DIST file is the **report** section, where you include information about your organization’s impacts. At a minimum, this needs to include the **reporting period**, the type of **verification** carried out, and the **impacts** measured.


{% highlight javascript %}
{% raw %}
{
    "reporting_period": {
        "from": "2023-01-01",
        "to": "2023-12-31"
    },
    "verification": "self_reported",
    "impacts": {
        "carbon": [ ]
    }
}
{% endraw %}
{% endhighlight %}

The `reporting_period` contains the start (`from`) and end (`to`) dates for the period over which impacts were measured or estimated. These are both compulsory, and should be represented as an [ISO8601 date string](https://www.iso.org/iso-8601-date-and-time-format.html), that is, in the format `YYYY-MM-DD`.

The type of `verification` should also be included - this indicates what sort of verification (if any) was carried out of the figures listed in the impacts section. The available options are: `"self_reported"` if no independent verification was carried out, `"peer_reviewed"` if the figures and methodology have been verified by independent, informal peer review, or `"independently_verified"` if the impacts have been formally audited, validated or certified by a third party.  When `"independently_verified"` is selected, you should include the details of the verifying entity in the optional `verifier` property:


{% highlight javascript %}
{% raw %}
{
    "reporting_period": {
        "from": "2023-01-01",
        "to": "2023-12-31"
    },
    "verification": "independently_verified",
    "verifier": {
        "name": "Some Auditing Firm Ltd.",
        "url": "https://example.com"
    },
    "impacts": {
        "carbon": [ ]
    }
}
{% endraw %}
{% endhighlight %}

### Impacts

The report section also contains an `impacts` object, which is broken down by **impact dimension**.

<div class="my-8 info-box">
    Currently DIST only supports <code>carbon</code> emissions as a reportable impact, but further versions will include additional dimensions such as water, human health and land use, as the methodologies to quantify these impacts develop.
</div>

Each impact dimension contains a list of impacts related to particular [taxonomy categories](/taxonomy), all of which have the following structure.

At a minimum, an impact needs a numerical `value` in a particular `unit`, associated with one or more `categories` from the [DIST taxonomy](/taxonomy):

{% highlight javascript %}
{% raw %}
{
    "categories": ["upstream:employee_hardware"],
    "value": 186,
    "unit": "kgCO2e"
}
{% endraw %}
{% endhighlight %}

The `value` must be numeric, and is measured in the specified `unit`. If the value is `0`, this is interpreted as zero - i.e. there is no impact in this category, and it should be listed in the impacts list. If a particular category has not been measured, and therefore its impact is unknown or unreported, you can use the special value `null` to indicate this (or simply omit the category from your DIST file). For more information, see our [documentation on unmeasured impacts](/schema/unmeasured-impacts).

Impacts may contain a number of optional additional fields, which give additional context to the measurement:

{% highlight javascript %}
{% raw %}
{
    "categories": ["upstream:employee_hardware"],
    "value": 42000,
    "unit": "kgCO2e",
    "methodology_description": "Manufacturer LCA data amortised over device lifespan",
    "confidence": "medium",
    "notes": "200 laptops, 180 monitors, peripherals. 4-year refresh for laptops, 6 years for monitors.",
    "data_sources": ["https://www.apple.com/environment/"]
}

{% endraw %}
{% endhighlight %}

As before, for more information on each of these fields, their purpose, and the possible values they can take, please see the [syntax reference](/schema/reference), and for more information on the `confidence` field in particular, the [guidance note on confidence](/schema/confidence).

#### Reporting an impact across multiple categories

The `categories` field is flexible, and you don’t need to list each category individually. You can combine them into a single block. When more than one is listed in a single block, the value would then be interpreted as the total emissions across those categories combined.

One place where it is useful to be able to provide measurements across multiple categories, is in order to explain any gaps in your measurements, or to specify which particular impact categories do not exist in your organization.

For example, for an organization which operates no generators, and uses no managed services or cloud service providers, we might include the following entry:

{% highlight javascript %}
{% raw %}
{
    "categories": [
        "operational:direct:generators",
        "operational:indirect:cloud_services",
        "operational:indirect:managed_services"
    ],
    "value": 0,
    "unit": "kgCO2e",
    "confidence": "high",
    "notes": "We do not operate generators, nor use cloud or managed services"
}
{% endraw %}
{% endhighlight %}

This way, we can avoid repetition in the DIST file, marking all these categories as zero in one go.

#### Using null values to describe unmeasured impacts

For categories which are unreported on, but which might have an impact, we can set the value to be `null`.

For example, if an organization had not yet succeeded in measuring their downstream impacts such as end user devices or data transfer, due to a lack of reliable usage data, they might include the following.

{% highlight javascript %}
{% raw %}
{
    "categories": [
        "downstream:end_user_devices",
        "downstream:network_data_transfer",
    ],
    "value": null,
    "unit": "kgCO2e",
    "notes": "Downstream impacts not measured, due to a lack of usage data on which to base calculations."
}
{% endraw %}
{% endhighlight %}

For further information on the difference between zero and null impacts, please see the [guidance note](/schema/unmeasured-impacts).

### Putting it all together

Put together, the minimal example might look something like this - including only a single impact category from one impact dimension (carbon) for brevity:


{% highlight javascript %}
{% raw %}
{
    "$schema": "https://dist.greenweb.org/schemas/dist/v0.0.1.json",
    "organization":  {
        "name": "Green Web Foundation",
    },
    "report": {
        "reporting_period": {
            "from": "2023-01-01",
            "to": "2023-12-31"
        },
        "verification": "self_reported",
        "impacts": {
            "carbon": [
                {
                    "categories": ["upstream:employee_hardware"],
                    "value": 186,
                    "unit": "kgCO2e"
                }
            ]
        }
    }
}
{% endraw %}
{% endhighlight %}


A complete example, with all optional fields populated, would look like this:



{% highlight javascript %}
{% raw %}
{
    "$schema": "https://dist.greenweb.org/schemas/dist/v0.0.1.json",
    "organization": {
        "name": "Green Web Foundation",
        "description": "Green Web Foundation is a non-profit organization working towards a fossil-free internet by 2030.",
        "open_corporates_url": "https://opencorporates.com/companies/nl/52191494",
        "country": "NL",
        "size": "0-9",
        "sector": "non_profit",
        "activity_description": "Technical and policy research, development and advocacy",
        "industries": ["J62", "J63", "M", "S"]
    },
    "report": {
        "reporting_unit": "Global operations",
        "reporting_period": {
            "from": "2023-01-01",
            "to": "2023-12-31"
        },
        "verification": "independently_verified",
        "verifier": {
            "name": "Some Auditing Firm Ltd.",
            "url": "https://example.com"
        },
        "impacts": {
            "carbon": [
                {
                    "categories": ["upstream:employee_hardware"],
                    "value": 42000,
                    "unit": "kgCO2e",
                    "methodology_description": "Manufacturer LCA data amortised over device lifespan",
                    "confidence": "medium",
                    "notes": "200 laptops, 180 monitors, peripherals. 4-year refresh for laptops, 6 years for monitors.",
                    "data_sources": ["https://www.apple.com/environment/"]
                }
            ]
        }
    }
}
{% endraw %}
{% endhighlight %}

Here are some further examples of DIST files to refer to:
 - [The worked example, provided in our git repository](https://github.com/thegreenwebfoundation/DIST/blob/main/schema/dist/dist-example-v0.0.1.json)
 - [The Green Web Foundation's own DIST file](https://github.com/thegreenwebfoundation/gwf-dist)
