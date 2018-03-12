---
layout: post
title: 01 Install numpy
category: numpy
---

# Check installation
First, check to see if you already have `numpy` installed. From the terminal, you can use `pip` to do this.

{% highlight bash %}
pip show numpy
{% endhighlight %}

If `numpy` is installed you will get output similar to this.

{% highlight bash %}
Name: numpy
Version: 1.13.3
Summary: NumPy: array processing for numbers, strings, records, and objects.
Home-page: http://www.numpy.org
Author: NumPy Developers
Author-email: numpy-discussion@python.org
License: BSD
Location: /home/konrad/.local/lib/python2.7/site-packages
Requires: 
{% endhighlight %}

If `numpy` is not installed no output will be shown. 

# Install numpy
`numpy` can be installed simply using `pip`.

{% highlight bash %}
pip install numpy
{% endhighlight %}

## Check version
You can check the `numpy` version using `pip show` as demonstrated above.

{% highlight bash %}
pip show numpy
{% endhighlight %}

{% highlight bash %}
Name: numpy
Version: 1.13.3
Summary: NumPy: array processing for numbers, strings, records, and objects.
Home-page: http://www.numpy.org
Author: NumPy Developers
Author-email: numpy-discussion@python.org
License: BSD
Location: /home/konrad/.local/lib/python2.7/site-packages
Requires: 
{% endhighlight %}