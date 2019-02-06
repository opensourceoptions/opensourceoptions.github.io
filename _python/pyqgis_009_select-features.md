---
layout: tutorial
title: 09 Select features from a vector layer
category: pyqgis
repo: https://github.com/opensourceoptions/pyqgis-tutorials/blob/master/06_load-layers.py
---
More information can be found in the [PyQGIS Developer Cookbook](https://docs.qgis.org/testing/en/docs/pyqgis_developer_cookbook/)

# Objectives
- Select features from a vector layer

# Open the QGIS Python Console
From the menu, select Plugins -> Python Console, or Ctrl + Alt + P (Windows)

You can type directly into the console, or select the pad and paper icon to
write code in the editor. I prefer to write code in the editor because
it allows me to save my work and run a compilation of commands.

# Load a vector layer

## Define the path to a vector
In the code editor, or console, create a variable containing the path to your
vector file.

{% highlight python %}
fn = 'c:/path/to/vector/file.shp'
{% endhighlight %}

## Load vector into QGIS interface
Now we'll simultaneously assign the vector layer to the `layer` variable and
load it into the QGIS interface.

{% highlight python %}
layer = iface.addVectorLayer(fn, '', 'ogr')
{% endhighlight %}

This adds the layer into the QGIS interface. In the legend, the vecotr is
labeled with the file name.

# Select features
There are multiple ways to select features from a shapefile (or other vector file).
In this tutorial, we will cover selecting all features, selection by ID and
selection by attribute values.

## Select all features
It is very simple to select all features in a layer. We simply use the code
`layer.selectAll()`.

## Select by ID
Selecting by ID selects a feature based on the feature id, of FID. The FID is a
unique identifier for each feature in a layer. Generally, the FID corresponds to
the order in which features were created. For example, the first feature created
for a layer would have a FID of 1.

To select features, we simply pass a list of FIDs to `layer.select()`.

The code below selects the features in `layer` that correspond to an FID in
`selectid`. When you run this code in the QGIS python console you will see that
these features become highlighted (see video below for demonstration).

{% highlight python %}
selectid = [1, 3, 6, 8, 11]
layer.select(selectid)
{% endhighlight %}

## Select by attribute values
Another common way to select features is by referencing attribute values for
specific features. For example, we may want to select all features that have
a value of '1' for stream order.

Features can be selected based on attribute values with `layer.selectByExpression()`.
We must pass a SQL expression defining the attributes we want to select.

The code below selects features in `layer` where the field 'GRID_CODE' is equal
to '4'. The 'GRID_CODE' field represents stream order for this particular
layer. See the video below for a visual demonstration.

{% highlight python %}
layer.selectByExpression('"GRID_CODE"=4')
{% endhighlight %}

# Iterate over a selection
Once we have selected features, we may want to perform operations for only
the selected features. This can be accomplished by iterating through only the
layers that are selected.

We can return the selected features with `layer.selectedFeatures()`, then iterate
through those features. The code below shows how to iterate over a selection
and print out an attribute.

{% highlight python %}
selection = layer.selectedFeatures()
# iterate over selected features
for feat in selection:
    # print an attribute
    print(feat['GRID_CODE'])
{% endhighlight %}

# Video tutorial
See this tutorial described in a video.

<div class="intrinsic-container intrinsic-container-ws"><iframe src="https://www.youtube.com/embed/WRxvLYculf0" frameborder="0" allowfullscreen></iframe></div>
