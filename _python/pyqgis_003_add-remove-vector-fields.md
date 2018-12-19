---
layout: tutorial
title: 03 Adding and deleting vector layer fields
category: pyqgis
repo: https://github.com/opensourceoptions/pyqgis-tutorials/blob/master/03_add-remove-vector-fields.py
---

More information can be found in the [PyQGIS Developer Cookbook](https://docs.qgis.org/testing/en/docs/pyqgis_developer_cookbook/)

# Objectives
 - Add fields to a shapefile
 - Delete fields from a shapefile

# Open the QGIS Python Console
From the menu, select Plugins -> Python Console, or Ctrl + Alt + P (Windows)

You can type directly into the console, or select the pad and paper icon to
write code in the editor. I prefer to write code in the editor because
it allows me to save my work and run a compilation of commands.

# Load a vector layer
Since we'll be adding and deleting fields, you may want to create a copy of your shapefile so you don't lose any important data. We'll load a shapefile in the QGIS interface and assign it to the variable `layer` with the following code.

{% highlight python %}
fn = 'c:/path/to/shapefile.shp'
layer = iface.addVectorLayer(fn, '', 'ogr')
{% endhighlight %}

## Get layer capabilities
Now we'll get the layer capabilities. This will allow us to make sure we can add and delete fields of the layer. This is done by calling `capabilities()` on the layer's data provider.

{% highlight python %}
caps = layer.dataProvider().capabilities()
{% endhighlight %}

# Add fields
To add a field we'll first make sure the layer has the proper capabilities. If it does we'll add the field. The code below demonstrates confirming the layer capabilities and adding two fields ('New1' and 'New2') to the layer. Once the fields are added we update the layer with `updateFields()`.
{% highlight python %}

{% endhighlight %}

# Delete fields

## Loop through fields
{% highlight python %}

{% endhighlight %}
