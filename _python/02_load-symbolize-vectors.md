---
layout: tutorial
title: 01 Loading and symbolizing raster layers
category: pyqgis
repo: https://github.com/opensourceoptions/pyqgis-tutorials/blob/master/01_load-symbolize-vectors.py
---

More information can be found in the [PyQGIS Developer Cookbook](https://docs.qgis.org/testing/en/docs/pyqgis_developer_cookbook/)

# Objectives
- Load and symbolize a vector layer with pyqgis
- Apply basic and graduated symbology

# Open the QGIS Python Console
From the menu, select Plugins -> Python Console, or Ctrl + Alt + P (windows)

You can type directly into the console, or select the pad and paper icon to
write code in the editor. I prefer to write code in the editor because
it allows me to save my work and run a compilation of commands.

# Load a vector layer

## Define the path to a shapefile
In the code editor, or console, create a variable containing the path to your
raster file.

{% highlight python %}
fn = 'c:/path/to/shapefile.shp'
{% endhighlight %}

## Load raster into QGIS interface
Now we'll simultaneously assign the raster layer to the `layer` variable and
load it into the QGIS interface. We need to provide a layer and data provider.
In this case I leave the layer name empty (the layer name will be the file name),
and set the data provide to `'ogr'`.

{% highlight python %}
rlayer = iface.addVectorLayer(fn, '', 'ogr')
{% endhighlight %}

This adds the layer into the QGIS interface with default symbology. We'll
change the symbology next.

# Change vector symbology

## Basic symbology
I have loaded a shapefile containing line geometries. There are slightly
different methods for changing symbology for lines, points, and polygons. I'll
focus on methods for lines but make mention of what to do for points and
polygons.

Let's change the default line symbology to a dashed, red line. To do this,
we'll create a new symbol, apply it to the layer renderer, then repaint the
layer.

{% highlight python %}
# create a new symbol
symbol = QgsLineSymbol.createSimple({'line_style': 'dash', 'color': 'red'})

# apply symbol to layer renderer
layer.renderer().setSymbol(symbol)

# repaint the layer
layer.triggerRepaint()
{% endhighlight %}

The steps for changing the basic symbology of point and polygon layers are the
same. You just need to call the appropriate symbol. For example, instead of
calling `QgsLineSymbol`, you would call `QgsMarkerSymbol` (for points), or
`QgsFillSymbol` (for polygons).

## Symbology properties
You may find it useful to view basic symbology properties. This can be done by
accessing the symbol properties in the layer renderer as follows.

{% highlight python %}
print(layer.renderer().symbol().symbolLayers()[0].properties())

#output
{'capstyle': 'square', 'customdash': '5;2', 'customdash_map_unit_scale': '3x:0,0,0,0,0,0', 'customdash_unit': 'MM', 'draw_inside_polygon': '0', 'joinstyle': 'bevel', 'line_color': '152,125,183,255', 'line_style': 'solid', 'line_width': '0.26', 'line_width_unit': 'MM', 'offset': '0', 'offset_map_unit_scale': '3x:0,0,0,0,0,0', 'offset_unit': 'MM', 'use_custom_dash': '0', 'width_map_unit_scale': '3x:0,0,0,0,0,0'}
{% endhighlight %}

{% highlight python %}
{% endhighlight %}

{% highlight python %}
{% endhighlight %}
