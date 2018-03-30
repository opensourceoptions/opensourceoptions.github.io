---
layout: tutorial
title: 05 Methods for creating arrays
category: numpy
repo: "https://github.com/opensourceoptions/numpy-tutorials/blob/master/numpy005_MethodsToCreateArrays.py"
---

It is tedious, and not practical, to manually type in values for array creation. In this tutorial we will go through methods for automating array creation and importing tabular data into `numpy` arrays. 

# Creating empty arrays
With `numpy` you don't actually create an 'empty' array. But you can create an array without intializing specific values. This can be useful if you want to fill in specific values later. We can use the `numpy.empty()` function to create such an array. `numpy.empty()` takes one required parameter, the array shape, and two optional parameters. The output data type (`dtype`) and an option to store multidimensional arrays in a C or Fortran format (`order`). We're not going to deal with `order` at all in these examples. `numpy.empty()` will return an array of the given `shape` and `dtype` with random values.

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
Filling arrays with a value is task you will perform repeatedly. In the sections below we'll go over how to fill arrays, and initialize arrays with zeros, ones, and a range of numbers.

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

Now let's try the same with the array `b` we created above. Remember that the data type of `b` is integer and the data type of `a` is float. So here we're trying to fill an integer array with a float value. Let's see what happens.

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
`numpy.zeros()` will create an array filled with zeros. It takes the same arguments as `numpy.empty()`, but returns an array of zeros instead of an array of random values.

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
As you might guess, `numpy.ones()` does the same thing as `numpy.zeros()`, except it fills the array with a value of one instead of zero. 

The code below creates a 3x4 array of ones with an integer data type.

{% highlight python %}
#create an array of ones
o = np.ones((3,4), dtype=np.int)
{% endhighlight %}

{% highlight python %}
print o

[[1 1 1 1]
 [1 1 1 1]
 [1 1 1 1]]
{% endhighlight %}

## `numpy.arange()`
`numpy.arange()` is a very useful function to fill an array with a sequence of numbers. This function requires 1-4 arguments. A brief explanation of the arguments will be given here, with the details illustrated in code examples below. The first argument is required and specifies a starting value, or a number of values. The second specifies a stopping value. The thrid specifies a step value. The fourth is the same `dtype` argument we've used before, which specifies the data type of the array.

If only the `start` argument is specified, an array ranging from zero to `start` will be returned. Let's give this a try with a start value of 2.

{% highlight python %}
#create an array with 2 sequential elements
a = np.arange(2)
{% endhighlight %}

This will result in an array with two elements. Those elements will be 0 and 1.

{% highlight python %}
print a

[0 1]
{% endhighlight %}

We can specify both a `start` and `stop` value to include any consecutive sequence of numbers in an array.

{% highlight python %}
#create an array with the values 5-10
a = np.arange(5,11)
{% endhighlight %}

Let's check our work to make sure we get the expected result.

{% highlight python %}
print a

[ 5  6  7  8  9 10]
{% endhighlight %}

If we want all even numbers from 10 - 30, we can add the step variable of 2, as follows.

{% highlight python %}
#create an array with even values from 10-30
a = np.arange(10,31,2)
{% endhighlight %}

Again, let's check our work.

{% highlight python %}
print a

[10 12 14 16 18 20 22 24 26 28 30]
{% endhighlight %}

Notice that `numpy.arange()` only creates 1D arrays. That could be somewhat inconvenient if we're looking for a multidimensional array. Luckily, we can add `numpy.reshape()` on the end to change the shape of the resulting array. Let's try this by creating a 3x3 array that ranges from 0 to 8.

{% highlight python %}
#create a 3x3 array ranging from 0 to 8
a = np.arange(9).reshape((3,3))
{% endhighlight %}

Again, we'll check our work.

{% highlight python %}
print a

[[0 1 2]
 [3 4 5]
 [6 7 8]]
{% endhighlight %}

Now let's try for a 3x3x3 array ranging from 0 to 26.

{% highlight python %}
#create a 3x3x3 array ranging from 0 to 26
a = np.arange(27).reshape((3,3,3))
{% endhighlight %}

And check our work.

{% highlight python %}
print a

[[[ 0  1  2]
  [ 3  4  5]
  [ 6  7  8]]

 [[ 9 10 11]
  [12 13 14]
  [15 16 17]]

 [[18 19 20]
  [21 22 23]
  [24 25 26]]]
{% endhighlight %}

# Import tabular data to an array
Sometimes you may have data that have already been compiled and you want to load them into an array. This section will cover how to create an array from tabular data. I have included the file `importdata.csv` in the GitHub repository for this tutorial as an example file you can use. `importdata.csv` contains the data to fill a 4x10 array. 

The data in the file look like this:

{% highlight text %}
2.3, 4.5, 6.8, 8.3, 44.5, 43.1, 3.2, 21.8, 98.8, 6.5
33.3, 5.3, 44.3, 65.8, 4.3, 2.1, 2.3, 77.8, 3.0, 8.7
4.9, 9.3, 9.3, 88.3, 2.1, 65.2, 8.3, 5.6, 5.0, 7.9
43.2, 67.2, 57.2, 39.3, 19.3, 2.3, 5.4, 9.8, 45.8, 44.4
{% endhighlight %}

We'll use `numpy.genfromtext()` to import data fromt the csv file. `genfromtext()` has a number of parameters. I will only go over a few of them in this tutorial. You can find a description of all parameters in the [numpy documentation](https://docs.scipy.org/doc/numpy/reference/generated/numpy.genfromtxt.html). The three parameters we'll use are `fname`, which specifies the path of the file to load data from, `dtype`, which we know specifies the data type, and `delimiter`,s which specifies the character separating the values in the file. The file name we'll use is importdata.csv it contains floating point values, delimied by a comma (,). Now that we know the information let's read in the data.

{% highlight python %}
#create array from inputdata.csv
a = np.genfromtxt("importdata.csv", dtype=np.float32, delimiter=",")
{% endhighlight %}

Sure enough, the array matches the csv file.

{% highlight python %}
print a

[[ 2.3  4.5  6.8  8.3 44.5 43.1  3.2 21.8 98.8  6.5]
 [33.3  5.3 44.3 65.8  4.3  2.1  2.3 77.8  3.   8.7]
 [ 4.9  9.3  9.3 88.3  2.1 65.2  8.3  5.6  5.   7.9]
 [43.2 67.2 57.2 39.3 19.3  2.3  5.4  9.8 45.8 44.4]]
{% endhighlight %}

# Video tutorial

<div class="intrinsic-container intrinsic-container-ws"><iframe src="https://www.youtube.com/embed/BpV7h6r-GNY" frameborder="0" allowfullscreen></iframe></div>

# More to learn
This is just an introduction to creating arrays with `numpy`. Many other options for array creation exist. We may cover some of these in future tutorials. If you didn't find what you were looking for here, the `numpy` documentation also provides many more [array creation routines](https://docs.scipy.org/doc/numpy-1.14.0/reference/routines.array-creation.html).

In the coming lessons we'll cover how to access and change values in arrays.

{% highlight python %}
{% endhighlight %}