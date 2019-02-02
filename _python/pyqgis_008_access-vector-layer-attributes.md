---
layout: tutorial
title: 08 Access vector layer attributes
category: pyqgis
repo: https://github.com/opensourceoptions/pyqgis-tutorials/blob/master/08_access-vector-layer-attributes.py
---

More information can be found in the [PyQGIS Developer Cookbook](https://docs.qgis.org/testing/en/docs/pyqgis_developer_cookbook/)

# Objectives
- Retrieve data from the vector attribute table

# Open the QGIS Python Console
From the menu, select Plugins -> Python Console, or Ctrl + Alt + P (Windows)

You can type directly into the console, or select the pad and paper icon to
write code in the editor. I prefer to write code in the editor because
it allows me to save my work and run a compilation of commands.

# Load a vector layer
First, we'll define the path to a vector layer. In this case a shapefile.
Then we'll load it as a `QgsVectorLayer`

{% highlight python %}
fn = "path/to/vector/layer.shp"
layer = QgsVectorLayer(fn, '', 'ogr')
{% endhighlight %}

# Get feature attributes
No that the layer is loaded we will be able to access data for each feature.

First, let's get a count of the number of features in the layer.

{% highlight python %}

{% endhighlight %}

Now we can loop through all of the features and access data by referencing
the field name. Below I'm accessing the data for 'field1' and 'field2'.

{% highlight python %}
for i in range(0, fc):
    feat = layer.getFeature(i)
    print(feat['field1'], feat['field2'])
{% endhighlight %}

We can also access the data values with the field index, starting with 0.

{% highlight python %}
for i in range(0, fc):
    feat = layer.getFeature(i)
    print(feat[0], feat[1])
{% endhighlight %}

# Video tutorial
See this tutorial described in a video.

<div class="intrinsic-container intrinsic-container-ws"><iframe src="https://www.youtube.com/embed/tJwdTZOGn5U" frameborder="0" allowfullscreen></iframe></div>
