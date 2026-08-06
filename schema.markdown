---
title: Schema
date: 2026-05-06 10:15:00 Z
permalink: "/schema"
layout: sidebar-navigation
sidebar_navigation: schema_categories
---

<p class="font-bold text-xl text-orange-700">Create transparency about your impacts, scope and measurement approaches.</p>

## Introduction

The DIST Schema is a  JSON data format for sharing quantified digital technology impacts. It provides a way to present the numbers you produce into a single JSON file, along with more context about your organization, scope boundaries, methods used and confidence ratings. This helps you provide transparency about the nuances of your reported numbers so others can make sense of them.

The schema is metrics-focused, in that it works best on impact dimensions which can be measured quantitatively using a clearly defined unit. The JSON format follows the [taxonomy](/taxonomy) categories of upstream, operational and downstream impacts, and the sub-categories therein.  The schema is open source, and we welcome feedback and contributions to improve it from practitioners in the community.

DIST is fully compatible with the [carbon.txt](https://www.carbontxt.org) standard. We recommend that your completed DIST file is published on your website  and linked to from a carbon.txt file to ensure it’s easily findable by others.

## The DIST schema IS:

* An [open-source](/schema/contributing) schema (data structure) for reporting digital/technology impacts.
* A foundation that other frameworks, tools, calculators and methodologies can plug into.
* Aligned with [life cycle assessment](https://green-forum.ec.europa.eu/green-business/environmental-footprint-methods/lca-ef-methods_en) (LCA) principles and widely recognised upstream/operational/downstream categories where applicable.
* Designed to be discoverable via [carbon.txt](https://carbontxt.org/) and machine-readable from day one.
* Designed with specific [use cases](/schema/user-cases) in mind, but generally applicable to a wide variety of digital impact reporting challenges.

The DIST schema is designed to do one specific job well -  reporting impact metrics in an accessible, standardised format. Therefore, it’s also worth noting a few things that it IS NOT.

## The DIST schema IS NOT:

* A prescriptive methodology - the schema defines what to report, not how to calculate it; recommended methodologies will be available through the [DIST methodology map](/methodologies) but are not required.
* A certification or compliance framework - though it should be useful for those who need to comply with regulations like [CSRD](https://finance.ec.europa.eu/financial-markets/company-reporting-and-auditing/company-reporting/corporate-sustainability-reporting_en).
* A commercial product - it is open source, dual-licensed for open adoption and ISO standardisation. However, it is commercial product friendly - it can be used in commercial products and services.


## Getting Started

The best place to get started with the DIST schema is with the [tutorial](/schema/tutorial), which runs you through the process of creating a DIST file, and introduces its structure and content.

<p class="button"> <a href="/schema/tutorial">Go to the tutorial!</a></p>

The documentation contains a complete [syntax reference](/schema/reference), as well as more detailed specifications on how DIST [models confidence](/schema/confidence), and how it treats [unmeasured impacts](/schema/unmeasured-impacts).

The [Use cases](/schema/use-cases) section describes how the DIST schema might can be used in products, services, data analysis and broader reporting processes.

Finally, the [contributing](/schema/contributing) section explains how to get involved in future development of DIST.


