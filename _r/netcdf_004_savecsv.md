---
layout: tutorial
title: 04 Save NetCDF as a CSV
category: netcdf
repo: "https://github.com/opensourceoptions/r-netcdf-tutorials"
---

Sometimes certain analysis may require data in a tabular format (as opposed to the gridded format of NetCDF). This tutorial will take you through how to convert a NetCDF (or other raster/gridded data) to an R data frame, which can then used for analysis or saved as a CSV file.

# Read the NetCDF file
First, we need to read in the file, as we've done before. In this case we'll read the file using the `raster` library, so we'll need to load that library to begin. As an example, you can use the NetCDF file included in the GitHub repository that is linked above. We'll read this file in as a raster brick.

{% highlight r %}
#load raster package
library(raster)

#read netcdf as a raster brick
nc.brick <- brick(file.choose())
{% endhighlight %}

Now let's check the dimesions of the new raster brick object `nc.brick`

{% highlight r %}
#show dimensions of the raster brick
dim(nc.brick)

[1]  621 1405    1
{% endhighlight %}

The important thing to note in the dimesions is the number of layers, or bands. This is indicated by the number '1' for our dataset. Generally, each band contains values for an individual variable. For datasets with more than 1 band it is important to properly identify the variable that is being accessed.

# Convert to a data frame

Now we can simply access data from the first band and save it as a data frame, as shown in the code below. the `xy` argument specifies that we want to print data for each x,y pair. The resulting data frame will contain the coordinates for cells in our grid with the corresponding values

{% highlight r %}
#read the first layer in the brick as a data frame
nc.df <- as.data.frame(nc.brick[[1]], xy=T)
{% endhighlight %}

To check our work, we'll print the head of new data frame.

{% highlight r %}
#examine the data frame
head(nc.df)

          x        y X42838
1 -125.0208 49.89583     NA
2 -124.9792 49.89583     NA
3 -124.9375 49.89583     NA
4 -124.8958 49.89583     NA
5 -124.8542 49.89583     NA
6 -124.8125 49.89583     NA
{% endhighlight %}

The column 'X42838' contains the data values. The head of this file only has 'NA' values, which makes sense if you look at the gridded data (if you have questions, this is covered in more depth in the previous tutorials). 

If we print some rows closer to the center of the dataset we will get some values.

{% highlight r %}
nc.df[200000:200005,]
               x        y    X42838
200000 -104.6458 43.97917 -1.840281
200001 -104.6042 43.97917 -1.950019
200002 -104.5625 43.97917 -2.030074
200003 -104.5208 43.97917 -2.100689
200004 -104.4792 43.97917 -2.066833
200005 -104.4375 43.97917 -1.985978
{% endhighlight %}

# Write the data frame to a CSV file

Now that we have the values form the NetCDF file in a data frame, it is simple to save these values to a CSV file. We can simply use `write.csv()`. Note: when using `file.choose()` to create a files, as we are doing below, the file that is selected must already exist. In other words, `file.choose()` only allows to select an existing file. If you want to create a new file, enter the path to the file in the place of `file.choose()`

{% highlight r %}
#write the data frame as a csv
write.csv(nc.df, file.choose())
{% endhighlight %}

Now you have a CSV file containing values from the NetCDF. Before saving the file you may wish to change the column name of the values to something meaningful, instead fo the default (in our case 'X42838')