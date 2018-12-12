---
layout: tutorial
title: 01 Loading and symbolizing raster layers
category: pyqgis
repo: https://github.com/opensourceoptions/pyqgis-tutorials/blob/master/01_load-symbolize-rasters.py
---

More information can be found in the [PyQGIS Developer Cookbook](https://docs.qgis.org/testing/en/docs/pyqgis_developer_cookbook/)

# Requirements
- QGIS version 3.0, or greater

# Objectives
- Load and symbolize a raster layer with pyqgis
- Get statistics from a raster band

# Open the QGIS Python Console
From the menu, select Plugins -> Python Console, or Ctrl + Alt + P (windows)

You can type directly into the console, or select the pad and paper icon to
write code in the editor. I prefer to write code in the editor because
it allows me to save my work and run a compilation of commands.

# Load a raster layer

## Define the path to a raster
In the code editor, or console, create a variable containing the path to your
raster file.

{% highlight python %}
fn = 'c:/path/to/raster/file.tif'
{% endhighlight %}

## Load raster into QGIS interface
Now we'll simultaneously assign the raster layer to the `rlayer` variable and
load it into the QGIS interface.

{% highlight python %}
rlayer = iface.addRasterLayer(fn, 'layer name')
{% endhighlight %}

This adds the raster into the QGIS interface. In the legend, the raster is
labeled 'layer name'. My raster is symbolized with a grayscale color ramp.
We'll change the symbology next.

# Change raster symbology

## Get raster band statistics
First, we'll get statistics for the raster band so we can properly stretch
a color ramp. The number 1 is the raster band we are getting stats for.

{% highlight python %}
stats = rlayer.dataProvider().bandStatistics(1, QgsRasterBandStats.All)
{% endhighlight %}

Then we'll get the minimum and maximum values.

{% highlight python %}
min = stats.minimumValue
max = stats.maximumValue
{% endhighlight %}

## Create a color ramp shader
The color ramp shader will define the new color ramp we create to symbolize
the raster. First we'll create and empty color ramp shader. We also need to set
type of color ramp we want to use. Options are `Interpolated`, `Discrete`, or
`Exact`.

- `Interpolated` stretches colors across a range of values
- `Discrete` gives all values in a range the same color
- `Exact` gives each unique pixel value a unique colors

The data I'm using represent elevations, they are continuous data so I'll use
an `Interpolated` ramp.

{% highlight python %}
fnc = QgsColorRampShader()
fnc.setColorRampType(QgsColorRampShader.Interpolated)
{% endhighlight %}

### Define the colors for the `QgsColorRampShader`
Now we need to define a color scheme. For this example,
I'm going to create a very simple color ramp that interpolates from green
(low values) to yellow (high values).

{% highlight python %}
lst = [QgsColorRampShader.ColorRampItem(min, QColor(0,255,0)),\
  QgsColorRampShader.ColorRampItem(max, QColor(255,255,0))]
fnc.setColorRampItemList(lst)
{% endhighlight %}

### Assign the color ramp to a `QgsRasterShader`
We'll assign the color ramp to a `QgsRasterShader` so it can be used to
symbolize a raster layer.

{% highlight python %}
shader = QgsRasterShader()
shader.setRasterShaderFunction(fnc)
{% endhighlight %}

## Apply symbology to raster
Finally, we need to apply the symbology we've create to the raster layer.
First, we'll create a renderer using our raster shader. Then we'll Assign
the renderer to our raster layer.

{% highlight python %}
renderer = QgsSingleBandPseudoColorRenderer(rlayer.dataProvider(), 1, shader)
rlayer.setRenderer(renderer)
{% endhighlight %}

There you have it. You can watch the video below to see the results of my
raster symbolization. In a future tutorial we'll cover how to use functions to
make more complicated color ramps for rasters.
