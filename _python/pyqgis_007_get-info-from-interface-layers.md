---
layout: tutorial
title: 06 Load layers without adding to QGIS interface
category: pyqgis
repo: https://github.com/opensourceoptions/pyqgis-tutorials/blob/master/06_load-layers.py
---

More information can be found in the [PyQGIS Developer Cookbook](https://docs.qgis.org/testing/en/docs/pyqgis_developer_cookbook/)

# Objectives
- Get information from layers that have already been added to the QGIS interface

# Open the QGIS Python Console
From the menu, select Plugins -> Python Console, or Ctrl + Alt + P (Windows)

You can type directly into the console, or select the pad and paper icon to
write code in the editor. I prefer to write code in the editor because
it allows me to save my work and run a compilation of commands.

# Get layers by name
The simplest way to get layer information from layers in the QGIS interface is to
use the layer name. We can use the `mapLayersByName()` function to retrieve an
object containing all the layers with a given layer name. The code below
retrieves all layers with the name 'dem'.

{% highlight python %}
layers = QgsProject.instance().mapLayersByName('dem')
{% endhighlight %}

If more than one layer had the name 'dem' the `layers` object will contain
the information for multiple layers. We can determine the number of layers by
finding the length of `layers`.

{% highlight python %}
print(len(layers))
{% endhighlight %}

Output:
{% highlight python %}
1
{% endhighlight %}

In this case there is just one layer.

## Getting layer information
Information from the layer can now be retrieved with `layers[0]` to get the
first layer. For example we could get the layer name with the code below.

{% highlight python %}
print(layers[0].name())
{% endhighlight %}

Output:
{% highlight python %}
dem
{% endhighlight %}

This is a raster layer, so we could also get information like width, height, and
band count. For example.

{% highlight python %}
print(layers[0].width(), layers[0].height(), layers[0].bandCount())
{% endhighlight %}

Output:
{% highlight python %}
45 45 1
{% endhighlight %}

If there were multiple layers with the name 'dem', we could loop through each
layer in the layers object, printing information for each one as follows.

{% highlight python %}
for layer in layers:
    print(layer.bandCount(), layer.height(), layer.width())
{% endhighlight %}

An important attribute of the layer is its file name. We can access the file
name as follows.

{% highlight python %}
print(layers[0].dataProvider().dataSourceUri())
{% endhighlight %}

Output:
{% highlight python %}
path/to/file/name
{% endhighlight %}

# Video tutorial
See this tutorial described in a video.

<div class="intrinsic-container intrinsic-container-ws"><iframe src="https://www.youtube.com/embed/wl-AyQUm_uk" frameborder="0" allowfullscreen></iframe></div>
