---
title: Schema
permalink: /schema/confidence
layout: sidebar-navigation
sidebar_navigation: "schema_categories"
---

## Guidance on confidence

In the DIST schema, any measurement can be rated as **high**, **medium** or **low** confidence. This allows your organization to communicate uncertainties in the underlying data and methodology.

Confidence measurements are subjective - they’re there to provide a signal about how confident you are in the numbers you publish, and how defensible you think they are. Your ratings don’t have to be exact, and they’re not formal measurements of statistical confidence. For example numbers based on real measurements of actual applications or devices would probably yield a higher confidence rating than estimates based on aggregate or average data.

In order to help you determine which rating - high, medium or low - best suits your situation, here’s  some guidelines about how to choose a confidence level for your measurements. You’ll also find useful information in our [methodology map](/methodologies) - we publish guidelines on the appropriate level of confidence for measurements produced with particular methods there.

### What counts as HIGH confidence?

Calculations that use real, device-specific primary data (manufacturer Product Carbon Footprint datasheets, actual usage data) with a clear, documented methodology count as high confidence numbers.

You should indicate **HIGH confidence** if you’re using a **clear, documented methodology**, **AND** you have based your calculations on:

 - **EITHER** actual product-level data (PCF datasheets, real utility bills, metered API logs) for the specific devices or services in scope;
 - **OR** appropriate region-specific impact intensity, from peer-reviewed sources rather than global averages

In addition, where bring your own devices (BYOD) or shared assets are involved, you should make an explicit, documented attribution decision about how much usage is attributable to your organization, based on real usage patterns.

### What counts as MEDIUM confidence?

Medium confidence measurements also follow a documented methodology, and make clear any assumptions which go into their calculation, but may rely on generalisations or estimates where real product-level data is unavailable.

You should indicate **MEDIUM** confidence if you’re using **a clear, documented methodology**, **BUT**:

 - **EITHER** you're using a published industry average or a single research-paper value rather than a product-specific datasheet;
 - **OR** you're applying a generic spend-based model;
 - **OR** you're making reasonable but unverified judgments about attribution, usage hours, or impact intensity.

### What counts as LOW confidence?

Finally, low confidence measurements are those which result from larger assumptions or estimates, or from a less robust methodology. This might include stacking models (using one estimate as input to another estimation model), using very uncertain sources of data, or using proxies - taking data from one provider as an estimate for the impact of another.

Low confidence estimates aren’t bad per se - they can be extremely useful, and for particular tricky-to-measure impacts might be the best available approximation. However, it’s important to mark them as such so that anyone reading your DIST file can interpret them accordingly.

You should indicate **LOW** confidence **IF**:
 - You are **NOT** using a well-documented, established methodology;
 - **OR** you are using a model's output as input to another model (e.g. SWD model applied to aggregate analytics data);
 - **OR** you are using a proxy provider's emission factors for a different provider you don't have data for;
 - **OR** key activity variables (user counts, compute hours, download frequency) are estimated rather than measured.
