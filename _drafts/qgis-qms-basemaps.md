---
layout: post
title:  "Access Hundreds of Basemaps in QGIS with the QuickMapServices Plugin"
date:   2018-04-28
category: qgis
---

In QGIS version 2.x, the OpenLayers plugin provided a way to get many widely used basemaps including the various Google Maps. However, it appears that OpenLayers has not been updated for compatibility with QGIS 3.0. Not to worry, the QuickMapServices plugin can provide much of the same functionality for QGIS 3.0, with even more basemap options.

# Quick Map Services (QMS)

[qms.nextgis.com](https://qms.nextgis.com) make geospatial data readily available by hosting Quick Map Services (QMS) that can be quickly added to a GIS. The [nextgis help page](https://qms.nextgis.com/faq) has more information on the data types that are hosted, and how to contribute. This post will walk you through how to use the QuickMapServices plugin for QGIS to quickly add any of these layers to your project. If you run into any snags, or want more details, visit the [nextgis how to use page](https://qms.nextgis.com/about) for additional information.

# The QuickMapServices Plugin

On top of providing a ton of great datasets, nextgis makes it all readily available with a QGIS plugin. There also ways to use QMS for [ArcGIS, Mobile, and Web](https://qms.nextgis.com/about).

## Install the QGIS Plugin

QGIS makes installing plugins simple. On the Menu Toolbar select Plugins -> Manage and Install Plugins. 

This will bring up the plugin manager dialog. On the left, select the "All" tab. Search for "QuickMapServices". Select the QuickMapServices plugin (searching should filter the list to contain just one result) and install it.

Simple as that.

## Using the Plugin
