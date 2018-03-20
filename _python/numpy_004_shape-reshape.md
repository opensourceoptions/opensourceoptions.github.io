---
layout: tutorial
title: 04 Arrays shapes and reshaping
category: numpy
repo: "https://github.com/opensourceoptions/numpy-tutorials/blob/master/numpy01.py"
---
{% highlight python %}
{% endhighlight %}

We've gone through the basics to manually create arrays of different dimesions and shapes. There will be times that you will want to query array shapes, or automatically reshape arrays. This tutorial will show you how to use `numpy.shape` and `numpy.reshape` to query and alter array shapes for 1D, 2D, and 3D arrays.

# Basics of array shapes
In `numpy` the shape of an array is described the number of rows, columns, and layers it contains. We'll walk through array shapes in depths going from simple 1D arrays to more complicated 2D and 3D arrays.

## 1D arrays
Lets start out with the following 1D array.

{% highlight python %}
[1 2 3]
{% endhighlight %}

1D arrays can be be described simply by the number of values they contain. The shape of the array above would be simply described as 3. This array can also be though of as having one row and 3 columns.

If we change the values in the array to something like this.

{% highlight python %}
[121 234 937]
{% endhighlight %}

The shape of the array does not change, it still has 3 columns, or 3 elements and the shape can be described as 3.

The following array has 5 columns/elements and the shape can be described as 5.

{% highlight python %}
[7 8 3 4 2]
{% endhighlight %}

## 2D arrays

Descritpion of 2D array's size requires reporting both the number of rows and columns in the array. It is important to note that depending on the program or software you are using rows and columns may be reported in a different order. `numpy` describes 2D arrays by first listing the number of rows then the number columns. 

Take the following array.

{% highlight python %}
[[1 2 3]
 [1 2 3]
 [1 2 3]]
{% endhighlight %}

The shape of this array would be described as 3 rows and 3 columns. The number of elements in this array is equal to the product of the number of rows and the number of columns. This array contains 9 elements.

Let's look at another 2D array. 

{% highlight python %}
[[7 8 9 10 11]
 [1 3 1 71 21]]
{% endhighlight %}

This array has 2 rows and 5 columns, and contains 10 elements. The rows of 2D array must all contain the same number of columns. 

Trying to create an array like this with `numpy` would result in an error because row 2 has more values than row 1.

{% highlight python %}
[[1 2 3]
 [4 5 6 7]]
{% endhighlight %}

## 3D arrays

# Getting an array's shape

# Reshaping an array