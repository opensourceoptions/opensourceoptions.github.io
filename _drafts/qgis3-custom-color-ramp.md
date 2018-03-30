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
I've clipped this DEM to a watershed boundary. This is the Logan River watershed in northern Utah. I've done a fair amount of work in this watershed, so I use it frequently in my examples. 

When displaying DEMs, I like to include a hillshade underneath to give better context to the topography. So in preparation for this tutorial I've created a hillshade and have it layered underneath the DEM.

# Creating a color ramp in QGIS

## Add raster and set symbology renderer
The raster will most likely be symbolized on a the QGIS default black to white color ramp. Double click the raster (DEM) in the Layers (table of contents) panel. This opens the layer properties. Click the style tab on the left. Now change the render type from 'Singleband gray' to 'Singleband pseudocolor'. You will now have the option to select various color ramps that come with packaged with QGIS.

## Create new color ramp
Instead of using one of the QGIS ramps we want to create our own custom ramp. To this click the down arrow (triangle) directly to the right of the color ramp graphic. Select 'Create new color ramp'. This will open the 'Select Color Ramp' dialog. This is where we can create a custom ramp. I like to display elevation with a green, brown, white ramp. It doesn't come packaged with QGIS, so let's create it here. You'll need to add some gradient stops to get the appropriate colors at the appropriate locations. Gradient stops are added by double clicking in the colored area of the color ramp. To change the position of the gradient stop you will first need to click and drag. You can the proceed to drag the stop to the correct location, or set the position precisely in the 'Relative position' box.

## Gradient stops
Add the following gradient stops to recreate the green, brown, white elevational color ramp.

Position: 00.0% RGB: 0, 120, 0
Position: 28.0% RGB: 89, 86, 0
Position: 47.0% RGB: 119, 75, 0
Position: 60.0% RGB: 146, 110, 49
Position: 74.0% RGB: 173, 146, 101
Position: 100% RBG: 255, 255, 255

## Save the new color ramp
Hopefully you've been able to successfully reproduce the color ramp, or create one of your own. You can now save it for use again in the future. Save the color ramp by once again clicking the down arrow (triangle) to the right of the color ramp display in the style properties window. This time select 'Save color ramp'. Now you can type in a name and tags for color ramp. This will make it easy to find in the future.

# Displaying the DEM
I'm not going to apply my new elevation color ramp to my Logan River watershed DEM. Remember, I have a hillshade layered underneath this DEM. To get a better elevational effect, I'll make the DEM slightly transparent so the hillshade shows through. This is accomplished by opening the layer properties (double-click, or right click on the layer) and selecting the 'Transparency' option. Then adjust the 'Global opacity' slider. I've found an opacity of about 60% works well for DEM display.

# Video
This video tutorial walks you through the steps explained above.
