---
layout: tutorial
title: 04 Query raster values
category: pyqgis
repo: https://github.com/opensourceoptions/pyqgis-tutorials/blob/master/04_query-raster-values.py
---

More information can be found in the [PyQGIS Developer Cookbook](https://docs.qgis.org/testing/en/docs/pyqgis_developer_cookbook/)

# Objectives
- Query the value of a raster layer at a points

# Open the QGIS Python Console
From the menu, select Plugins -> Python Console, or Ctrl + Alt + P (Windows)

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
labeled 'layer name'. 

# Query raster value at a point
You'll need to know the coordinates of a point that falls somewhere with the area your raster layer covers. The coordinates will need to be in the same units as the projection used to display your layer. For this example, the layer is displayed in a NAD83 UTM projection, so the units are meters. We'll query values using two different methods.

## Query value with `sample()`
First, we'll use the `sample()` method of `layer.dataProvider()`. `sample()` takes two arguments: a point (x, y coordinates) and the raster band to query from. We'll pass the point as a `QgsPointXY` and query the value from raster band 1 (my raster only has one band)

{% highlight python %}
val, res = layer.dataProvider().sample(QgsPointXY(246572, 4306418), 1)
print(val, res)
{% endhighlight %}

Output:
{% highlight python %}
2975.84814453125 True
{% endhighlight %}

If the point occurs outside of the raster extent `sample()` the output would be `nan False`.

## Query value with `identify()`
Second, we'll use the `identify()` method of `layer.dataProvider()`. This is similar to using the identify pointer in the QGIS interface. `identify()` will return a dictionary containing the band number and value for all bands in the raster layer. We just need to specify the point to query at and the format of the result (`IdentifyFormatValue`).

{% highlight python %}
ident = layer.dataProvider().identify(QgsPointXY(246572, 4306418), QgsRaster.IdentifyFormatValue)
print(ident.isValid())
print(ident.results())
{% endhighlight %}

Output:
{% highlight python %}
True
{1: 2975.84814453125}
{% endhighlight %}

If the point occurs outside of the raster extent `identify()` will return `None`.

# Video tutorial
See this tutorial described in a video.

<div class="intrinsic-container intrinsic-container-ws"><iframe src="https://www.youtube.com/embed/aemGjVwBGzQ" frameborder="0" allowfullscreen></iframe></div>
