---
layout: tutorial
title: 04 Array shapes and reshaping arrays
category: numpy
repo: "https://github.com/opensourceoptions/numpy-tutorials/blob/master/numpy004_ShapeReshape.py"
---
{% highlight python %}
{% endhighlight %}

We've gone through the basics to manually create arrays of different dimesions and shapes. There will be times that you will want to query array shapes, or automatically reshape arrays. This tutorial will show you how to use `numpy.shape` and `numpy.reshape` to query and alter array shapes for 1D, 2D, and 3D arrays.

# Basics of array shapes
In `numpy` the shape of an array is described the number of rows, columns, and layers it contains. We'll walk through array shapes in depths going from simple 1D arrays to more complicated 2D and 3D arrays. This is a very basic, but fundamental, introduction to array dimensions. Understanding how array dimensions are described will be very important for future tutorials on array indexing. 

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

The dimensions of a 2D array are described by the number of rows and columns in the array. It is important to note that depending on the program or software you are using rows and columns may be reported in a different order. `numpy` describes 2D arrays by first listing the number of rows then the number columns. 

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
The dimensions of a 3D array are described by the number of layers the array contains, and the number of rows and columns in each layer. All layers must have the same number of rows and columns. `numpy` reports the shape of 3D arrays in the order layers, rows, columns.

Let's consider the following 3D array.

{% highlight python %}
[[[1 2 3]
  [1 2 3]]
  
 [[1 2 3]
  [1 2 3]]]
{% endhighlight %}

This array has 2 layers, 2 rows, and 3 columns. The number of elements in the array is equal the the product of layers, rows and columns. This array has 12 elements.

Attempting to create the following array will result in an error because the second layer has different dimensions than the first.

{% highlight python %}
[[[7 3 0]
  [8 9 2]]
  
 [[1 4 8]
  [3 9 7]
  [8 3 5]]]
{% endhighlight %}

When creating a 3D array, the rules for 2D arrays also apply. For example, all rows must contain the same number of columns.

# Getting the shape of an array
The `numpy.shape` function allows us to query the shape of any array. This section will take you through using `numpy.shape` and understanding the results for 1D, 2D, and 3D arrays.

## 1D arrays
Let's get started by creating a basic 1D array.

First we'll import `numpy`.

{% highlight python %}
import numpy as np
{% endhighlight %}

Now we can create the array.

{% highlight python %}
a = np.array([1,2,3])
{% endhighlight %}

Then we can use `numpy.shape` to print the shape of `a`, the array we created.

{% highlight python %}
print np.shape(a)
{% endhighlight %}

We get the output we expect. `a` has a shape of 3. 

{% highlight python %}
(3,)
{% endhighlight %}

`numpy.shape` returns a tuple containg the array's dimensions. In python, tuples are lists whose values cannot be changed. They are enclosed in parentheses.

Since `shape` is a property of every array we can also call `shape` directly from an array object as follows.

{% highlight python %}
print a.shape
{% endhighlight %}

As you will see, this gives the same answer of 3.

{% highlight python %}
(3,)
{% endhighlight %}

## Multidimensional arrays
The shape of multidimensional arrays is retrieved in the same manner, but different values will be returned. Let's try this for 2D and 3D arrays.

First, we'll create a 2D array.

{% highlight python %}
a2d = np.array([[1,2,3],
               [1,2,3]])
{% endhighlight %}

Then print its shape.

{% highlight python %}
print a2d.shape
{% endhighlight %}

The result shows what we expect, 2 rows and 3 columns

{% highlight python %}
(2, 3)
{% endhighlight %}

Now for a 3d array. Let's create the array

{% highlight python %}
a3d = np.array([[[1,2,3,4],
                 [1,2,3,4],
                 [1,2,3,4]],
                [[1,2,3,4],
                 [1,2,3,4],
                 [1,2,3,4]]
                ])
{% endhighlight %}

Then print the shape.

{% highlight python %}
print a3d.shape
{% endhighlight %}

As expected `shape` reports the array contains 2 layers, 3 rows, and 4 columns.

{% highlight python %}
(2, 3, 4)
{% endhighlight %}

# Reshaping an array
Sometimes it is necessary to reshape arrays. For example, some spatial analyses can be optimized if they are applied to 1D arrays. However, spatial data are generally represented by 2D arrays, so these analyses require conversion from a 2D array to a 1D array and back again. Also, when creating arrays, it is often more intuitive to create a 1D array of desired values, then shape it to the desired dimensions. This section will take you through using `numpy.reshape()` to change array dimensions.

## `numpy.reshape()`
The reshape function has two required inputs. First, an array. Second, a shape. Remember `numpy` array shapes are in the form of tuples. For example, a shape tuple for an array with two rows and three columns would look like this: `(2, 3)`.

Let's go through an example where were create a 1D array with 4 elements and reshape it into a 2D array with two rows and two columns.

First, we create the 1D array.

{% highlight python %}
a = np.array([1,2,3,4])
{% endhighlight %}

Now we use `numpy.reshape()` to create a new array `b` by reshaping our initial array `a`. Notice we pass `numpy.reshape()` the array `a` and a tuple for the new shape `(2,2)`.

{% highlight python %}
b = np.reshape(a, (2,2))
{% endhighlight %}

Then we can print `b` to see if we get the expected result. Notice that the values remain the same, but they are now organized into two columns and two rows instead of four columns.

{% highlight python %}
print b
[[1 2]
 [3 4]]
{% endhighlight %}

We can also print the shape of `b` to make sure it matches the tuple we passed to `reshape()`.

{% highlight python %}
print b.shape
(2, 2)
{% endhighlight %}

`reshape()` is a member function of `numpy` arrays, so it can be applied directly to any array object. When `reshape()` is called in this manner it only requires one parameter, a shape tuple. Using the same example we can reshape `a` as follows.

{% highlight python %}
b = a.reshape((2,2))
{% endhighlight %}

This gives us the same `b` array.

{% highlight python %}
print b
[[1 2]
 [3 4]]
{% endhighlight %}

And it has the same shape.

{% highlight python %}
print b.shape
(2, 2)
{% endhighlight %}

## A more complicated example
That gives you a basic intro to using `reshape()`. Now let's get a little more complicated and create a larger array that we will reshape into a 3D array.

First, create a 1D array with 12 elements

{% highlight python %}
a = np.array([1,2,3,4,5,6,7,8,9,10,11,12])
{% endhighlight %}

Now let's reshape our 1D array to a 3D array. Remember the total number of elements must be the same. The product of the 3D array's dimensions (layers, rows, columns) must equal the number of elements in the 1D array (12).

{% highlight python %}
b = a.reshape((2,2,3))
{% endhighlight %}

That gives us a 3D array with 2 layers, 2 rows, and 3 columns.

{% highlight python %}
print b
[[[ 1  2  3]
  [ 4  5  6]]

 [[ 7  8  9]
  [10 11 12]]]
{% endhighlight %}

We could shape this 1D array into 3D arrays with different dimensions. The only requirement is the product of the dimensions is equal to the number of elements in the original array. Let's do some reshaping.

{% highlight python %}
b2 = a.reshape((3,2,2))
b3 = a.reshape((2,3,2))
b4 = a.reshape((1,3,4))
{% endhighlight %}

Print the results.

{% highlight python %}
print b2
[[[ 1  2]
  [ 3  4]]

 [[ 5  6]
  [ 7  8]]

 [[ 9 10]
  [11 12]]]

print b3
[[[ 1  2]
  [ 3  4]
  [ 5  6]]

 [[ 7  8]
  [ 9 10]
  [11 12]]]

print b4
[[[ 1  2  3  4]
  [ 5  6  7  8]
  [ 9 10 11 12]]]
{% endhighlight %}

Notice that because `b4` contains only one layer is really just a 2D array, but since we specified the number of layers it has an extra set of outer brackets (`[[[]]]` instead of the `[[]]` that would be used for a 2D array). We could make a 2D array equivalent to `b4` as follows.

{% highlight python %}
b4_2d = a.reshape((3,4))
print b4_wd
[[ 1  2  3  4]
 [ 5  6  7  8]
 [ 9 10 11 12]]
{% endhighlight %}

Notice we now have the same values, in the same order, without the extra square brackets.

# Video tutorial

<div class="intrinsic-container intrinsic-container-16x9">
<iframe src="" allowfullscreen></iframe>
</div>

# What's next?
We're moving along on the `numpy` basics, and have built up a strong base understanding of how to create and shape `numpy` arrays. Next, we will save ourselves some time by learing a few methods to automate array creation.