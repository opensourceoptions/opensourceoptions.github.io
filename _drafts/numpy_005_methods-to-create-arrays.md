---
layout: tutorial
title: 05 Methods for creating arrays
category: numpy
repo: "https://github.com/opensourceoptions/numpy-tutorials/blob/master/numpy005_MethodsToCreateArrays.py"
---

It is tedious, and not practical, to manually type in values for array creation. In this tutorial we will go through methods for automating array creation and importing tabular data into `numpy` arrays. 

# Creating empty arrays
With `numpy` you don't actually create an 'empty' array. But you can create and array without intializing specific values. This can be useful if you want to fill in specific values later. We can use `numpy.empty()` function to create such an array. `numpy.empty()` takes one required parameter, the array shape, and two optional parameters. The output data type (`dtype`) and an option to store multidimensional in a C or Fortran format (`order`). We're not going to deal with `order` at all in these examples. `numpy.empty()` will return an array of the given `shape` and `dtype` with random values.

Let's try a couple of examples. 

First, we'll create a 2x2 array of floats.

{% highlight python %}
a = np.empty((2,2), dtype=np.float32)
{% endhighlight %}

The result is a 2x2 array with random float values at each position.

{% highlight python %}
print a

[[-8.799504e-38  4.580144e-41]
 [ 6.733703e-38  0.000000e+00]]
{% endhighlight %}

Now let's try a 5x3 array of ints.

{% highlight python %}
b = np.empty((5,3), dtype=np.int)
{% endhighlight %}

The result is a 5x3 array with a random integer at each position.

{% highlight python %}
print b

[[140383186029544        27373376        23859568]
 [       23859568        23859568        23859568]
 [       23859568        23859568 140382964520496]
 [             49        27373456        28563248]
 [140383186029448 140383186029448             128]]
{% endhighlight %}

That's simple enough, but you may want to create an array that doesn't just contain random values. We'll cover some other options for this next.

# Filling arrays
Filling arrays with a value is task you will perform repeatedly. In the sections below we'll go over how to fill arrays, and initialize arrays with zeros ones, and a range of numbers.

## `numpy.fill()`
`numpy.fill()` is used to fill an array with a certain value. It takes one argument. The value to fill. This will replace every element in an array with the fill value specified. Let's give this a test with the array `a` we created above.

{% highlight python %}
#fill a with the value 99.99
a.fill(99.99)
{% endhighlight %}

{% highlight python %}
print a

[[99.99 99.99]
 [99.99 99.99]]
{% endhighlight %}

Now let's try the same with the array `b` we created above. Rember that the data type of `b` is integer and the data type of `a` is float. So here we're trying to fill an integer array with a float value. Let's see what happens.

{% highlight python %}
#fill b with the value 99.99
b.fill(99.99)
{% endhighlight %}

No error was thrown. Let's see what the output is.

{% highlight python %}
print b

[[99 99 99]
 [99 99 99]
 [99 99 99]
 [99 99 99]
 [99 99 99]]
{% endhighlight %}

Notice how 99.99 was truncated to the integer 99, but the array was still filled. It is not advisable to fill with a different data type than the array, but important to note that `numpy` will still do it.

## `numpy.zeros()`
`numpy.zeros()` will create an array filled with zeros. It takes the same arguments as `numpy.empty()`, but returns and array of zeros instead of an array of random values.

The code below creates 3x4 array of zeros with a float data type.

{% highlight python %}
#create an array of zeros
z = np.zeros((3,4), dtype=np.float32)
{% endhighlight %}

{% highlight python %}
print z

[[0. 0. 0. 0.]
 [0. 0. 0. 0.]
 [0. 0. 0. 0.]]
{% endhighlight %}

## `numpy.ones()`

## `numpy.arange()`

# Import tabular data to an array


{% highlight python %}
{% endhighlight %}