---
title: Operational Emissions
permalink: taxonomy/operational
layout: sidebar-navigation
sidebar_navigation: taxonomy_categories
---

{% include DIST/categoryLabel.html label="CatO" %}
{% include DIST/categoryLabel.html label="CatG" %}
{% include DIST/categoryLabel.html label="CatC" %}

**This category is about understanding and assessing the impacts arising from operating an organisation's own technology assets.** These impacts are grouped into two sets - direct and indirect impacts - to help distinguish the level of ownership and control an organisation has over the assets.

In direct, there are two main categories - On-Premise (O) and Generator (G) impacts. In the indirect grouping there's the Cloud (C) category. Each category aligns to a different GHG Protocol scope.

Understanding operational impacts allows organisations to quantify, monitor, and benchmark the climate impacts of their technology infrastructure and business operations. It enables setting reduction targets and strategies, and facilitates compliance with current and emerging climate disclosure legislations.

## Direct Impacts

Direct impacts are a result of the organisation's direct consumption of resources. The organisation should be able to directly measure and account for impacts from owned assets.

### On-premise

{% include DIST/categoryLabel.html label="CatO" %}

Category O (On-premise) emissions can be related to GHG Protocol Scope 2. This category breaks down into three sub-categories to consider.

#### Employee Devices

{% include DIST/categoryItem.html item="CatOEmployeeDevices" %}

The impacts from resources consumed by computers (desktops, laptops), monitors, printers, and other devices used by employees.

#### Networking Devices

{% include DIST/categoryItem.html item="CatONetworkDevices" %}

Networks are typically split into four categories - the operational network, the wired backbone internet, the wireless internet and your consumer's network. Of these, the first three need to be considered in Operational Emissions.

Within the operational network, consider the running cost of the connected devices. These include, but are not limited to:
- routers
- switches
- bridges
- Wi-Fi access points
- firewalls
- modems
- hubs
- repeaters

NB: as the power usage of networking equipment has very little variance while it is running, attributing the power consumption to specific applications or processes is less important.

#### Servers and Storage

{% include DIST/categoryItem.html item="CatOServers" %}

The impacts arising from resources consumed by on-premise servers and data centres, such as energy or water.


### Generators

{% include DIST/categoryLabel.html label="CatG" %}

Category G (Generators) can be related to GHG Protocol Scope 1.

{% include DIST/categoryItem.html item="CatGGenerators" %}

Any fossil fuel-powered generators, solar PV, wind turbines, or other systems installed on-site to supply electricity to technology equipment.


## Indirect Impacts

{% include DIST/categoryLabel.html label="CatC" %}

Indirect impacts result from the organisation's purchase of cloud computing services, software, or managed IT services from third-party technology providers. This is all considered in one category, Cloud (C).

Category C (Cloud) impacts can be related to GHG Protocol Scope 3.

As the organisation does not own or control the IT assets delivering these services, impact assessments should be obtained from providers to account for these indirect, supply chain impacts. Use of these services can contribute substantially to the organisation's overall technology impact.

Data consumed from a supplier's API, that is external to your organisation, is accounted for in this, the indirect category. Public wired and wireless internet usage does not need to be assessed. Data sent from a service in the organisation's control service to end users is accounted for in [the downstream impacts](./downstream) category.

### Cloud Services

{% include DIST/categoryItem.html item="CatCCloud" %}

The impacts associated with cloud platform services like compute, storage, and networking. Services are backed by computing hardware with associated upstream and operational emissions. The proportion of such emissions attributable to an organisation will vary based on service, server instance types, and region.

### SaaS

{% include DIST/categoryItem.html item="CatCSaas" %}

Software-as-a-Service (SaaS) applications.

### Managed Services

{% include DIST/categoryItem.html item="CatCManaged" %}

Managed Security Operations, IT support and data backup services.

**Next:** [Downstream Impacts](/taxonomy/downstream)
