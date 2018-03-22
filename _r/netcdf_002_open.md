---
layout: tutorial
title: 02 Open NetCDF and view metadata
category: netcdf
repo: "https://github.com/opensourceoptions/r-netcdf-tutorials"
---
{% highlight r %}
{% endhighlight %}

# Install and load packages and software
Let's get right into the code. First, make sure you have the `ncdf4` package installed. This requires the netcdf4 and hdf5 software to be installed. netcdf4 and hdf5 are not r packages. There are various sources for installing these on your machine. I found this [guide](https://gist.github.com/perrette/cd815d03830b53e24c82) to work well for Ubuntu.

{% highlight r %}
#install netcdf4 if not alread installed
#you will need to install netcdf4 and hdf5 (not R packages)
install.packages("ncdf4")
{% endhighlight %}

Once all dependencies are installed we can load the `ncdf4` package.

{% highlight r %}
#load ndcf4 package
library(ncdf4)
{% endhighlight %}

# Open a netCDF file
With `ncdf4` loaded we are ready to read in a NetCDF file. The file I use is included in the [GitHub repository]({{ page.repo }}) for this tutorial. The `file.choose()` function allows you to interactively choose a file from your system.

{% highlight r %}
#open netcdf file
#file.choose() allows user to choose file from system
nc <- nc_open(file.choose())
{% endhighlight %}

# Print netCDF information
Now that the file has been opened we can `print` the `nc` variable to see its metadata. Thiss will tell us the data type, dimensions, data units, and other information about the dataset

{% highlight r %}
#print metadata for netcdf file
print(nc)
{% endhighlight %}

This is the output for the file included in the repository.

{% highlight r %}
 1 variables (excluding dimension variables):
    float data[longitude,latitude,day]   
        units: Unitless
        description: Self Calibrated Palmer Drought Severity Index (scPDSI), calibrated to 1895-2010
        _FillValue: -9999

 3 dimensions:
    longitude  Size:1405
        units: degrees_east
        description: Longitude of the center of the grid cell
    latitude  Size:621
        units: degrees_north
        description: Latitude of the center of the grid cell
    day  Size:1
        units: days since 1900-01-01 00:00:00
        calendar: gregorian
        description: days since 1900-01-01
        esri_pe_string: GEOGCS[\"GCS_WGS_1984\",DATUM[\"D_WGS_1984\",SPHEROID[\"WGS_1984\",6378137.0,298.257223563]],PRIMEM[\"Greenwich\",0.0],UNIT[\"Degree\",0.0174532925199433]]
        coordinates: lon lat

6 global attributes:
    title: Monthly gridded data at 4-km (2.5 arc-minute) resolution forSelf Calibrated Palmer Drought Severity Index (scPDSI), calibrated to 1895-2010 for the continental United States.
    author: John Abatzoglou - University of Idaho, jabatzoglou@uidaho.edu
    date: 16 March 2018
    note1: The projection information for this file is: GCS WGS 1984.
    note2: These data were created using netCDF version 4.
    note3: Citation: Westwide Drought Tracker, http://www.wrcc.dri.edu/monitor/WWDT
{% endhighlight %}

## Metadata description
The above output provides us with much important metadata about the netCDF file. First, it shows the file contains one variable named 'data'. The data type of 'data' is float, it is unitless, its values represent the Self Calibrated Palmer Drought Severity Index, and the no data value is -9999.

Dimensions, and dimension units are also reported, along wiht a coordinate system reference. Global attributes provide more information about the dataset including title, author, creation date, and notes.

# Video tutorial
The first part of this video goes through the steps presented in the code above. The second part of the video is covered on the next page of the website.It can be accessed by clicking the next button <img class="in-text" src="{{ 'assets/img/next_arrow.svg' | relative_url }}"> at the top or bottom of the page. **Note:** this video uses a different netcdf file than the one included with the repository for this tutorial.

<div class="intrinsic-container intrinsic-container-ws"><iframe src="https://www.youtube.com/embed/DvfTZSJLRfw" frameborder="0" allowfullscreen></iframe></div>

# What's next?
Now that we have read the metadata for this file, the next lesson will go through how to pull the data out of the netcdf file so it can be used for analysis in R. Click the 'next' button<img class="in-text" src="{{ 'assets/img/next_arrow.svg' | relative_url }}"> below to continue!