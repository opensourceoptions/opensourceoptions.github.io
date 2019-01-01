---
layout: tutorial
title: 05 Get raster band statistics
category: pyqgis
repo: https://github.com/opensourceoptions/pyqgis-tutorials/blob/master/05_raster-stats.py
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

# Video tutorial
See this tutorial described in a video.

<div class="intrinsic-container intrinsic-container-ws"><iframe src="https://www.youtube.com/embed/bHK6qzNkfoU" frameborder="0" allowfullscreen></iframe></div>
