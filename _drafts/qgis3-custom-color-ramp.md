---
layout: post
title:  "Custom Color Ramps with QGIS 3.0"
date:   2018-03-16
category: qgis
---
# QGIS 3.0 makes color ramps easy
The most recent release of QGIS 3.0 has introduced a lot of great new features. One of these is the ability to easily create and save custom color ramps. This post will walk through how to create and apply a color ramp to raster data. Color ramps can also be easily applied to vector data. 

# Data
For this exercise I'll be using a DEM from the National Elevation Dataset (NED). NED DEMs are publicly available from the [NRCS Geospatial Data Gateway](https://datagateway.nrcs.usda.gov).

## Data prep
I've clipped this DEM to a watershed boundary. This is the Temple Fork watershed in northern Utah. I've done a fair amount of work in this watershed, so I use it frequently in my examples. 

When displaying DEMs, I like to include a hillshade underneath to give better context to the topography. So in preparation

# Creating a color ramp in QGIS

## Add raster and set symbology renderer
The raster will most likely be symbolized on a the QGIS default black to white color ramp. Double click the raster in the Layers (table of contents) panel. This opens the layer properties. Click the style tab on the left. Now change the render type from 'Singleband gray' to 'Singleband pseudocolor'. You will now have the option to select various color ramps that come with packaged with QGIS.

## Create new color ramp
Instead of using one of the QGIS ramps we want to create our own custom ramp. To this click the down arrow (triangle) directly to the right of the color ramp graphic. Select 'Create new color ramp'. This will open the 'Select Color Ramp' dialog. This is where we can create a custom ramp. I like to display elevation with a green, brown, white ramp. It doesn't come packaged with QGIS, so let's create it here.

## Gradient stops
Position: 00.0% RGB: 0, 120, 0
Position: 28.0% RGB: 89, 86, 0
Position: 47.0% RGB: 119, 75, 0
Position: 60.0% RGB: 146, 110, 49
Position: 74.0% RGB: 173, 146, 101

# Video
This video tutorial walks you through the steps explained above.
