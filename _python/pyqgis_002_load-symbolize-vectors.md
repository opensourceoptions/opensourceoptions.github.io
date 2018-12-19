---
layout: tutorial
title: 02 Loading and symbolizing vector layers
category: pyqgis
repo: https://github.com/opensourceoptions/pyqgis-tutorials/blob/master/02_load-symbolize-vectors.py
---

More information can be found in the [PyQGIS Developer Cookbook](https://docs.qgis.org/testing/en/docs/pyqgis_developer_cookbook/)

# Objectives
- Load and symbolize a vector layer with pyqgis
- Apply basic and graduated symbology

# Open the QGIS Python Console
From the menu, select Plugins -> Python Console, or Ctrl + Alt + P (Windows)

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

## Load vector layer into QGIS interface
Now we'll simultaneously assign the vector layer to the `layer` variable and
load it into the QGIS interface. We need to provide a layer and data provider.
In this case I leave the layer name empty (the layer name will be the file name),
and set the data provide to `'ogr'`.

{% highlight python %}
layer = iface.addVectorLayer(fn, '', 'ogr')
{% endhighlight %}

This adds the layer into the QGIS interface with default symbology. We'll
change the symbology next.

<div class="main-img">
    <img src="https://lh3.googleusercontent.com/h5qsagCOTzpkP7Lq3otHQWxwRpwsjOnwwQ7I9nmiN8NLG4_IQFuixGuDf5HylOKozVJubiNFUCWWcxojH7h2ZcFexh2uwc7Tj4ex7DLmsOoVdefQfOAwdzNmh58QKPEuzQdtqxq5rrf4BRizTM8X3Dy7VtvQVGffXTRr7GZLlFwyK9U0U_3W34qLxNYogPncDa3DS1fmLfV9I1fIOjQxsEvUqlcliltInDUTAHnecf5KDVzdj7VsOE-E-wtMclyQ1Znvoh1xOpKv6hNFmIfXXZ9ZoK3FSk3-8xqaLiNmiTL7W9tcseEderAGmikCKvE9Qq7QhDahgKKgXERGu_oXVGDScxhXO8hGR2YVDZgR5YIqRPOzIOK5u5ZFK8qJQPhCVfKWyvY5kuKfZuoZtxNSq0AbSTRudgV1zcR_C_zfAeYd8Uz5_oHYQwU-hwcTvc-GfBXYK1L7OUv7FAlaDs2XZJXbB-NGwJJvRGQqSAiGYY6FiMOjYW4Nw9HvF4R2Gs0kSlOo5Mul1f9RlEbQzANo1ExiP3s6OPEDiKmRjPtLcUAcl-NwhbgLPrB1PAa96hfd9WqyWgg5kst5kfQM1vkt3seoPSeWkgFs-ghGLaMHaJ63skO-XVZDLkcMCaG6FxpDwFq6buYILsS-vcxNdgW-YoAaPBTlAPrBkLdqClSGHv8OWg_8Y8_I1Pfc2EnBqJ1DpdfD0NajoBSjeh4ENA=w978-h523-no">
    <p>Layer with default symbology.</p>
</div>

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

<div class="main-img">
    <img src="https://lh3.googleusercontent.com/E1V7m2LeBtCuuLhhoT9sFH1rGmb1CIzCfkWEMmfwVwLaXoYIP8xj7cKpj3rHwDLX1kjp05hdpxhhJIB9APyLSlMp5ZGIhu4CYtkgh2DnR_0ftr54KCyAUgpkK2NdV0BG0T8ke8GNw1rieVz74jEwvmPwlerkAPQbMVR-W0T7xF4HqT12_JLfR0qL9fsZVbmbzA77vYBXg_mndIk6j4AKyZwKWm9eqI8GkMymy4fVhY5YGB34u7D6aOfFw8B1DIhhaxi-w4ZOJ_JkPeheLOC-3quxqXGPa2aC_4-9sLJrZClT_b-tUt0bGegAPK744C7QhJZaLz7QsbnAA6Y47nzJTp16UnFxo1b74AyDFwmBF7LChYJo-APOF7xoxvT-rZr9n8rnvIMYifiFBbNV516-IAPTsCrgnpEdE9pqwZqw1-QCFTA0EQAXLMjy1-cjRxqdcfGfYQ1T-yykMKKQicFHo4M6JQrnOftSWxWhkpeR0lDymHZNnBIqxfnjuHwcVmykKoCu_sYdEnCU7P29rRMfEPthyYf2rVqLS37PCGypEtJUOf9snBW-fFX7IAJ_zPL2poirZ87Nm2WqP22xLLSqU3ojnYAuRD0VAh-2bdi2pfZhTK6Ht_VYEnIIEbr0xOIT7LGZZKfd9zQ3COGBzL907ZvPftVbFNIxU54321w46wtIgSH6S3RFkpm6FHTB8bqhDwi0S1PUUfYzG46umw=w982-h536-no">
    <p>Layer with updated symbology.</p>
</div>

### Symbology properties
You may find it useful to view basic symbology properties. This can be done by
accessing the symbol properties in the layer renderer as follows.

{% highlight python %}
print(layer.renderer().symbol().symbolLayers()[0].properties())

#output
{'capstyle': 'square', 'customdash': '5;2', 'customdash_map_unit_scale': '3x:0,0,0,0,0,0', 'customdash_unit': 'MM', 'draw_inside_polygon': '0', 'joinstyle': 'bevel', 'line_color': '152,125,183,255', 'line_style': 'solid', 'line_width': '0.26', 'line_width_unit': 'MM', 'offset': '0', 'offset_map_unit_scale': '3x:0,0,0,0,0,0', 'offset_unit': 'MM', 'use_custom_dash': '0', 'width_map_unit_scale': '3x:0,0,0,0,0,0'}
{% endhighlight %}

## Graduated symbology
Now let's apply graduated symbology to the layer. This will symbolize different
lines with different colors based on the values of a field in the shapefile.

### Open shapefile
To apply graduated symbology we need to open the shapefile in slightly
different way than described above. This method will not immediately add the
layer to the QGIS interface. We'll use `QgsVectorLayer` to open the shapefile,
and give it arguments of filename, layer name, and data provider, as above.

{% highlight python %}
# open shapefile
layer = QgsVectorLayer(fn, 'name', 'ogr')
{% endhighlight %}

### Print fields in layer
You may find it useful to print the names of the fields in your shapefile. This
can be done by looping through the layer fields as follows.

{% highlight python %}
for field in layer.fields():
    print(field.name(), field.type())

# output
Id 4
iGeo_ElMax 6
iGeo_ElMin 6
iGeo_Len 6
iGeo_Slope 6
iGeo_DA 6
iVeg_100EX 6
iVeg_30EX 6
iVeg_100PT 6
iVeg_30PT 6
iHyd_QLow 6
iHyd_Q2 6
iHyd_SPLow 6
iHyd_SP2 6
oVC_PT 6
oVC_EX 6
oCC_PT 6
oCC_EX 6
totdams 2
totcomp 2
{% endhighlight %}

I'm going to symbolize based on the 'totdams' field, which gives an estimate
of the number of beaver dams that could potentially be built on a stream reach.
Values in this field range from 0 to 11. I want to differentiate stream
reaches that could support more than 5 dams.

### Create graduated symbology
In this section we're going to use color definitions from `PyQt`, so add
`from qgis.PyQt import QtGui` to the list of imports. You can follow the repo
link at the top of this page to see how I've done this in my script.

#### Set symbol variables
Let's define the field we want to use, and a list that will set the value
ranges for the different symbology definitions. We'll also set the symbol
opacity

{% highlight python %}
targetField = 'totdams'
rangeList = []
opacity = 1
{% endhighlight %}

#### Create first symbol
Now we'll create the symbol for reaches that could support 0-5 dams. We'll
symbolize this with a yellow color. We'll define the value range for the
symbol, a label, and a color. Then add the symbol, its range, and label to
the `rangeList`.

{% highlight python %}
# define value ranges
minVal = 0.0
maxVal = 5.0

# range label
lab = 'Group 1'

# color (yellow)
rangeColor = QtGui.QColor('#ffee00')

# create symbol and set properties
symbol1 = QgsSymbol.defaultSymbol(layer.geometryType())
symbol1.setColor(rangeColor)
symbol1.setOpacity(opacity)

#create range and append to rangeList
range1 = QgsRendererRange(minVal, maxVal, symbol1, lab)
rangeList.append(range1)
{% endhighlight %}

#### Create second symbol
Let's create the symbol for the second group, stream reaches that could support
5-11 dams. We'll symbolize these reaches with a cyan color.

{% highlight python %}
# define value ranges
minVal = 5.1
maxVal = 12.0

# range label
lab = 'Group 2'

# color (yellow)
rangeColor = QtGui.QColor('#00eeff')

# create symbol and set properties
symbol2 = QgsSymbol.defaultSymbol(layer.geometryType())
symbol2.setColor(rangeColor)
symbol2.setOpacity(opacity)

#create range and append to rangeList
range2 = QgsRendererRange(minVal, maxVal, symbol2, lab)
rangeList.append(range2)
{% endhighlight %}

#### Display the layer in QGIS
Finally, we'll set the layer renderer and display it in QGIS.

{% highlight python %}
# create the renderer
groupRenderer = QgsGraduatedSymbolRenderer('', rangeList)
groupRenderer.setMode(QgsGraduatedSymbolRenderer.EqualInterval)
groupRenderer.setClassAttribute(targetField)

# apply renderer to layer
layer.setRenderer(groupRenderer)

# add to QGIS interface
QgsProject.instance().addMapLayer(layer)
{% endhighlight %}

And our layer is symbolized!

<div class="main-img">
    <img src="https://lh3.googleusercontent.com/W2z4bddXaj4butnS4L583U3Vx0f01HX-wEMnPgsjndhGdutkAtKD-RuqBwq09SZp2KwstIm2awPxZ-LbfTMB86LA_iAUQqcXRsubkBUpJw8CTS8pNLiztA2OC7exoTvNj8MTasakrJWmNpVq7y5HkzEWf6BNokR6k1h5o74bdmf2M8wmurQIyEcZwSmH10k7MOZdYrDAfiLOID-8gJ41MXG4KfOQsbZGh_rYvdTmHsUUIbOX391S-zqW_j7_5aVouX3W7qCnoHg180b78qDoCc4IgU7OuJLNxjzjBCWB_mRthi4H5RzS30f_1emBZxBbJLGAF8af2mykmPKrEhnNURtt_sUHKzqVhb3CHTG7V6aWo98-VbzMu_CoAnltBZYycro36uz2tGQph6zauqO-4Fpc49T8pRKHVeBah2Pqanosbxs00jqUovvn6H2G8YK0zGjZGGI8V0mS_R1UeJm8F3R2JCa_Meu2cldDng1lEQ-sUKeisoARO6f8tlGp5lMU2ipCPWRaA30IPJ78GO6xHu8U4le6KcJcQKQTR_jwaWCI22kLq9dGatWsYuGAxxLOw4b26jDrAWgJe5wj8hQhQWSjthuC9pKqgpnz2ezZcYYgT1VJ_RMKydj20QfgnOVXIYFjMYpJk31qNoiwYdRMH4AjulVYNvByRiJwFxOjWMCKdCgzInYqyDDhzTtkygYxi2iWtC_F4VOV6HBpCQ=w982-h522-no">
    <p>Layer with graduated symbology.</p>
</div>

# Video tutorial
See this tutorial described in a video.

<div class="intrinsic-container intrinsic-container-ws"><iframe src="https://www.youtube.com/embed/Wv7GjBrAeE4" frameborder="0" allowfullscreen></iframe></div>
