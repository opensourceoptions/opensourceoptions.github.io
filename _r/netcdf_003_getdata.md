---
layout: tutorial
title: 03 Get data from a NetCDF
category: netcdf
repo: "https://github.com/opensourceoptions/r-netcdf-tutorials"
---

# List the data attributes
Accessing the `var` property of our netCDF varialbe will list the data attributes for the netCDF file.

{% highlight r %}
#show the data attributes for the file
attributes(nc$var)
{% endhighlight %}

The output shows us this dataset has one data attribute with the name 'data'. Which is contained within the `names` property of `var`.

{% highlight r %}
$names
[1] "data"
{% endhighlight %}

Calling the `names` property directly after the `attributes()` call gives the same result.

{% highlight r %}
#show the names of the data attributes
attributes(nc$var)$names

[1] "data"
{% endhighlight %}

We can get the name of specific data attribute by specifying its index.

{% highlight r %}
attributes(nc$var)$names[1]

[1] "data"
{% endhighlight %}

This gives the same result as the other methods, but would be necessary if the dataset contained multiple variables.

# Get data for a variable
Now that we know what the data variables are, we can get the data they contain. Let's get the data from the 'data' varialbe. To do that we use `ncvar_get()`. Two arguments are passed to `ncvar_get()`. The netCDF object we created by opening a file (if you're following along from the previous tutorial we named this `nc`), and the name of variable for which we want to retrieve data. We will read the data into the `dat` variable.

{% highlight r %}
#get a variable's data
dat <- ncvar_get(nc, attributes(nc$var)$names[1])
{% endhighlight %}

Let's use `dim()` to check the dimensions of the resulting variable to confirm they match those of `nc`.

{% highlight r %}
#check the datasets dimensions
dim(dat)

1405  621
{% endhighlight %}

`dat` contains 1405 rows, 621 columns, and 1 layer, so we can confirm the dimesions match.

Now we'll print `dat` to get an idea of what the values look like. 

{% highlight r %}
#print the data
dat
{% endhighlight %}

This shows columns 1-52 of row 1. We can see only `NA` values at these locations.

{% highlight r %}
        [,1] [,2] [,3] [,4] [,5] [,6] [,7] [,8] [,9] [,10] [,11] [,12] [,13] [,14] [,15] [,16] [,17] [,18]
   [1,]   NA   NA   NA   NA   NA   NA   NA   NA   NA    NA    NA    NA    NA    NA    NA    NA    NA    NA
        [,19] [,20] [,21] [,22] [,23] [,24] [,25] [,26] [,27] [,28] [,29] [,30] [,31] [,32] [,33] [,34] [,35]
   [1,]    NA    NA    NA    NA    NA    NA    NA    NA    NA    NA    NA    NA    NA    NA    NA    NA    NA
        [,36] [,37] [,38] [,39] [,40] [,41] [,42] [,43] [,44] [,45] [,46] [,47] [,48] [,49] [,50] [,51] [,52]
   [1,]    NA    NA    NA    NA    NA    NA    NA    NA    NA    NA    NA    NA    NA    NA    NA    NA    NA
{% endhighlight %}

Let's query some values from near the middle of the dataset to make sure we actually have data.

{% highlight r %}
#5 rows and 5 columns near the middle of the dataset
dat[700:704, 300:304]
{% endhighlight %}

{% highlight r %}
           [,1]       [,2]     [,3]     [,4]     [,5]
[1,]  1.7280588  1.6921988 1.705105 1.637524 2.240968
[2,]  1.8039949  1.7875671 1.675009 1.488969 1.935480
[3,]  1.6913427  1.8011504 1.660492 1.468264 1.449621
[4,] -0.2640814  1.5142922 1.625485 1.475173 1.556418
[5,] -0.5828292 -0.3537577 1.537424 1.547127 1.613625
{% endhighlight %}

The values for this dataset range between -10 and 10, so it looks like we've retrieved the data correctly. 

# Video tutorial
The second part of this video covers the steps presented above.

<div class="intrinsic-container intrinsic-container-ws"><iframe src="https://www.youtube.com/embed/DvfTZSJLRfw" frameborder="0" allowfullscreen></iframe></div>