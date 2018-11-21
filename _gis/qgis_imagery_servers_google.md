---
layout: tutorial
title: Import Google Imagery to QGIS version 3.x
category: QGIS Imagery Servers
---

# Requirements
- QGIS version 3.0 or greater

# Loading Google Imagery
1. Open QGIS
2. Open the 'Browswer' window or sidebar. You can also open the 'Data Source Manager' window and select 'Browser'
3. Right click on 'XYZ tiles'
4. Select 'New Connection'
5. Enter a connection name (e.g. Google Satellite)
6. Enter the URL for the imagery service. For Google Satellite imagery the URL is:

{% highlight bash %}
https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}
{% endhighlight %}

7. Select 'OK'
8. Add the layer to the map canvas

# Video tutorial
This video will walk you through the steps above.

<div class="intrinsic-container intrinsic-container-ws"><iframe src="https://www.youtube.com/embed/7A3VJgGsSow" frameborder="0" allowfullscreen></iframe></div>