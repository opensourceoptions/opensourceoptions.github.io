---
layout: post
title: 03 Creating arrays
category: numpy
repo: "https://github.com/opensourceoptions/numpy-tutorials/blob/master/numpy01.py"
---
{% highlight python %}
{% endhighlight %}
# Creating a simple array
After `numpy` is installed, we can begin to create arrays. First, we'll need to import `numpy` into our python project. Here I use the statement, `import numpy as np`, to limit my typing later. This code will allow me to use `np` in my script to represent instead of typing the full `numpy` everytime. Then, we can create a simpy array by calling `numpy.array()`. The values in the parentheses will become the values in our array.

{% highlight python %}
import numpy as np
a = np.array(1)
print a
{% endhighlight %}

This code block gives us the result below. The variable `a` is an array containing the single value `1`.

{% highlight python %}
1
{% endhighlight %}

Technically, this really isn't an array as it only contains one value, but it gives you an idea of how we can use `numpy`. Below I explain how to create arrays that will be more useful.

# Arrays with multiple values
## 1D arrays
A 1-dimensional array is a list of values. For example, we could have a variable that contains the values 1, 2, 3, 4 and 5. To add multiple values to an array you might think we would enter something like the following line of code.

{% highlight python %}
a = np.array(1,2)
{% endhighlight %}

But this will result in an error.

{% highlight python %}
TypeError: data type not understood
{% endhighlight %}

We need to specify the values that will be part of the array inside of square brackets`[]` and separated by commas `,`. This is done as follows.

{% highlight python %}
a1d = np.array([1,2,3,4,5])
print a1d
{% endhighlight %}

Your output should look like this, an array that contains the values 1 through 5.

{% highlight python %}
[1 2 3 4 5]
{% endhighlight %}

## 2D arrays
2-dimensional arrays are like collections of 1D arrays. For example, every row in a 2D array is a 1D array. Every column in a 2D array is also a 1D array. In the example below, each row contains the 1D array `[1 2 3]` each column also contains a 1D array (e.g. `[1 1 1]`).

{% highlight python %}
1 2 3
1 2 3
1 2 3
{% endhighlight %}

2D arrays are frequently used to represent grids and store geospatial data. You will see them frequently in many data science applications. We also create 2D arrays using `numpy.array()`, but instead of giving just one list of values in square brackets we give multiple lists, with each list representing a row in the 2D array. This is done as follows.

{% highlight python %}
a2d = np.array([
[1,2,3],
[1,2,3],
[1,2,3]
])
{% endhighlight %}

Notice that there is a set of square brackets surrounding all three 1D arrays and that each 1D array is separated by a comma. We can print the variable `a` to get the same 2D array shown above.

{% highlight python %}
print a2d
{% endhighlight %}
{% highlight python %}
[[1 2 3]
 [1 2 3]
 [1 2 3]]
{% endhighlight %}



## 3D arrays
Simply explained, 3-dimensional arrays are stacks of 2D arrays. 3D arrays are often used to represent gridded data at different times, or different gridded variables. These arrays are very commonly used with climate data and image data.

Creating a 3D array with `numpy` is very similar to creating a 2D array, with one extra step. 3D arrays are simply lists, or stacks, of 2D arrays. Each layer in a 3D array is a 2D array. A 3D array might look something like this.

{% highlight python %}
Layer 1
1 2 3
1 2 3
1 2 3

Layer 2
1 2 3
1 2 3
1 2 3

Layer 3
1 2 3
1 2 3
1 2 3
{% endhighlight %}

With `numpy` this array can be created using `numpy.array()` with the following code.

{% highlight python %}
a3d = np.array([
[
[1,2,3],
[1,2,3],
[1,2,3]
],
[
[1,2,3],
[1,2,3],
[1,2,3]
],
[
[1,2,3],
[1,2,3],
[1,2,3]
]
])
{% endhighlight %}

We can print the array to see the result.

{% highlight python %}
print a3d
{% endhighlight %}

{% highlight python %}
[[[1 2 3]
  [1 2 3]
  [1 2 3]]

 [[1 2 3]
  [1 2 3]
  [1 2 3]]

 [[1 2 3]
  [1 2 3]
  [1 2 3]]]
{% endhighlight %}

# Video tutorial
This video will visually walk you through the steps completed in this tutorial using the terminal/command line. The code in the video can also be executed using a python script. 

<div class="intrinsic-container intrinsic-container-16x9">
<iframe src="https://www.youtube.com/embed/SMK6wFav8FE" allowfullscreen></iframe>
</div>

# What's next?
Now you know how to use `numpy` to create 1D, 2D and 3D arrays. Next we will cover array shapes, reshaping arrays, and automatic array creation.