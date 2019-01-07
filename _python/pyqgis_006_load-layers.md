---
layout: tutorial
title: 06 Load layers without adding to QGIS interface
category: pyqgis
repo: https://github.com/opensourceoptions/pyqgis-tutorials/blob/master/06_load-layers.py
---

More information can be found in the [PyQGIS Developer Cookbook](https://docs.qgis.org/testing/en/docs/pyqgis_developer_cookbook/)

# Objectives
- Get statistics for a raster band

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

## Load a raster layer

Now we can load the raster layer without adding it to the QGIS interface. This process is basically the same as the previous method we've used, but instead of calling `iface.addRasterLayer()` we will use `QgsRasterLayer()`. We just need to pass the file name and layer name (in this case the layer name is empty).

{% highlight python %}
rlayer = QgsRasterLayer(fn, '')
{% endhighlight %}

# Load a vector layer

## Define the path to a vector
In the code editor, or console, create a variable containing the path to your
vector file.

{% highlight python %}
fn = 'c:/path/to/vector/file.tif'
{% endhighlight %}

## Load a vector layer
We can load a vector layer by the same process, but using `QgsVectorLayer()` instead of `QgsRasterLayer()`, and specifying the data provider ('ogr' in this case) in addition to the file name and layer name (empty in this case). This is done as follows.

{% highlight python %}
vlayer = QgsVectorLayer(fn, '', 'ogr')
{% endhighlight %}

# Video tutorial
See this tutorial described in a video.

<div class="intrinsic-container intrinsic-container-ws"><iframe src="https://www.youtube.com/embed/eN0Y7JX_b3k" frameborder="0" allowfullscreen></iframe></div>
