---
layout: post
title:  "Custom Color Ramps with QGIS 3.0"
date:   2018-03-16
category: qgis
---
# QGIS 3.0 makes color ramps easy
The most recent release of QGIS 3.0 has introduced a lot of great new features. One of these is the ability to easily create and save custom color ramps. This post will walk through how to create and apply a color ramp to raster data. Color ramps can also be easily applied to vector data. 

# Data
For this exercise I'll be using a DEM from the National Elevation Dataset (NED). NED DEMs are publicly available from the [NRCS Geospatial Data Gateway](https://datagateway.nrcs.usda.gov).

## Data prep
I've clipped this DEM to a watershed boundary. This is the Logan River watershed in northern Utah. I've done a fair amount of work in this watershed, so I use it frequently in my examples.

<div class="main-img">
    <img src="https://lh3.googleusercontent.com/7me3QEuP0xhWQsJmAWijjAlEedqNOmXBGjTk0NISui1mV3ZvGo1uHURYFjHjXZhU0-9ibLyqnnoSsvIYCJ-5vQ4lVh7jLXYxx-IPgV0fSF73nRYVQEfbxdBcnWMIPhuTQZq-iAjFzayvrZ4NdHxA88aAVPQmsCFjbu2_TqVM865Wj8vJd0HyNaXiIA9ZoD7ODabcHAmOEbL6zycnTuCG4QO5y1UmUsN38vhK3LYntozFEzHXu_O-hm2s5cLJGHKZM7noFCNIq2gbtCPPs6R8htqxl3SEZinZWDxG5QiODFkVNmjkzlQvfwsLZ0zvjKMlafLNSh7qo5oHKK0Smb1eeaDu9gObuuJ4HZs9oeIoiag36Tcv3CF3d9IgI1AEJeZaodCP9Qd-xAlgNskAH1UIICW5q0mfEIBjOsrrciJYmSmuNDKIbGgYuOdB54B4G6zE_7xxLRx-euIgVcWg546DjgEq32euaVcthf8lczFV_kMA_kWaBj8NQ6W-f2a5FqTTFiDzXh0y6iKIQ2WZsq5GcWrztJK7l7cdWtEXYcgQ5wxDSPyxGVNelKzKekNmh2SvseoaUEXRw2UwMfqIqwTkKoPAasg7JMKGtJpKTNmc=w768-h875-no">
    <p>Logan River Watershed DEM.</p>
</div>

When displaying DEMs, I like to include a hillshade underneath to give better context to the topography. So in preparation for this tutorial I've created a hillshade and have it layered underneath the DEM.

# Creating a color ramp in QGIS

## Add raster and set symbology renderer
The raster will most likely be symbolized on a the QGIS default black to white color ramp. Double click the raster (DEM) in the Layers (table of contents) panel. This opens the layer properties. Click the style tab on the left. Now change the render type from 'Singleband gray' to 'Singleband pseudocolor'. You will now have the option to select various color ramps that come with packaged with QGIS.

<div class="main-img">
    <img src="">
    <p>Logan River Watershed DEM.</p>
</div>

## Create new color ramp
Instead of using one of the QGIS ramps we want to create our own custom ramp. To this click the down arrow (triangle) directly to the right of the color ramp graphic. Select 'Create new color ramp'. 

<div class="main-img">
    <img src="https://lh3.googleusercontent.com/DscJLbIp7SnZ1JMtI6RFuYZ0bVt7Ka6IGYJwItC-voQBKIBC89RX6dqsMcQKRbtB0aN0mMyflUtQGgchqgrlQ9tn3PD3LV6WRRMYt5u9b3dPEAUxdB1oPgmFkodlDq6_0euA-hX8F4nZWJnUhYW8Fj7bbAWeVzeLz6CAbka11fyjwjmfGJxlP8aqCN5qW5MLh0JlAuKJOCmwU6YU2S4VdauuJ1auEULnoe-DtOX3Ezu80A90aKi5EYD9G2CU_Wtry0IA8TdScf8zkTh-pj166KiCFW2oUMsatNedmkTFGMOhHQCKpSpvc95EGUco5bZV6HtqwUWaY5f6ApAlm9KaBSbqzaPwgOTUoOp_hVTE8-hB9WxGPqHrO0afDdhiQbdvb2n4wSvyR0tY5bx1QgPkZ8_6UJk-9dKl1zUPgXo190b6-83_OF5REvOe3bvt9R5B5tSZIy5VQP5Lw9ez6WCL16m0NbSaWq29XoUcY78frMdb1damoPEmecXqMZzp847Hs7BoIHzptxCXZ88McMHtApx4ay33HuEle0aM45Db103qeopuK0IHCJWBQGA31pkny5zjU4-cxpIae0QJPO3TKr2uHFS6CwvGrGZkjC3h=w914-h357-no">
    <p>Style dialog for the raster. This is where you can change symbology and create a new color ramp.</p>
</div>

Then choose 'Gradient' as the color ramp type.

<div class="main-img">
    <img src="https://lh3.googleusercontent.com/RbcjCRq7RsbEfUm4fQgfN0Onzr1ZgaRhmU7jkIbFTSZN0ew92SuJvV6Ki0vgO5_mpHsnwu83JAS8UuWANVOq3eXeXjFvtyXIfFAziWA6i3rUFY82X5a0nALjpjXJ9eZ1UpOLJd25ccO9lFxVtQkuB0Ggs9cii7BstJrIlk9Czqx5rG8PMLawWFsjwnJxy7A1pVbgjhrlrxocy96wqhEsKcT7LdwVCcqon57-hpAE2pAl0WCVRVMSQvSq-58qSlLx2R6rAaCZdnVzm73aMPvFDAA8lRRpqcKTgqhWjf_N6g5LsTWQ6eVN550spS6KUsUrFd4Wle0ZfuaaLPs5WWQT0EbQ445W8Cq_iPXNHiEpNGslDuPWagi2DvWD496KTdz7At5RO-9CWBgvNKxRKYizcIWxuxos0AoaEQGXoRO2zE4_feHNsAu3TJdwukszuewkEVAokaf943Fwj3WcMzugvT8PWd_3XULxN-g-c-EzNfK0QD79OfaM9axvyyP0USWupg8hUMu6FbWnrt9JLMM3i7w6SNd6KW2gpnsh2cOjS-DkLSmI4Wv39hqwF5zqAWUn5tuWerqr_y4ICJ-xDG8TElvxbRAkkA7MhhBVGL42=w210-h130-no">
    <p>Select the gradient color ramp type.</p>
</div>

This will open the 'Select Color Ramp' dialog. This is where we can set the properties to create a custom ramp. I like to display elevation with a green, brown, white ramp. It doesn't come packaged with QGIS, so let's create it here. You'll need to add some gradient stops to get the appropriate colors at the appropriate locations. Gradient stops are added by double clicking in the colored area of the color ramp. To change the position of the gradient stop you will first need to click and drag. You can the proceed to drag the stop to the correct location, or set the position precisely in the 'Relative position' box.

<div class="main-img">
    <img src="https://lh3.googleusercontent.com/3tyaEyai2aVmdo5M7B4fMS2oN_doeoSi1yu4ubGzke-qVk4DCrtx6aRPCAmGWFd-6wygZJ8Ec-i0a6gPBfF-WekgdsCNZU-IvhpgydwawogT8MTk4kuq3Q7NUZSfrfKxCJJHmMKYZvqfECF4vR2SyiRY1WSX0224iqmvuN9EZd2MNu0TrX6S8eqDN_tdKHiCLEq54a-mY5KFzSKh8op-3l-LNyIvHqvx8K_1psfOXWg3RvEyNCZozn7YMYXf75ITx8XKxPm6AqIHwHXLreGJE220EEqVLzntA_pbxqGDr7jHDhBcs49f2rNhITDGu7rgfyjLZmms8P1GcDWtlNX_3G5-yR_rH43lu1KuhNp78qBzCFnxAbm11nxzMRlj-fsVj5BbrjG0EB8d5RrwPg6fDAqWrj5rqpk8s6-bYOmc8E8eVgzHIINw_xzO3zZwTAfntwakbLuK8BqVD6IPVcCLNx-TwLWEGEXmTeJKvKqIv_ZlE-J6Sfrk8MeY4RvlFiThCeq3fZWAf0bt5H8DHQv8sc6pFFxCLaLheMCcKtLqC8IC4jREe5Yy1z8yyg2EjYlePGzfem0JfhBTSrTeKscxkDqCJZoAgeYQelsa_NCa=w914-h701-no">
    <p>The dialog where a color ramp is created.</p>
</div>

## Gradient stops
Add the following gradient stops to recreate the green, brown, white elevational color ramp.

Position: 00.0% RGB: 0, 120, 0
Position: 28.0% RGB: 89, 86, 0
Position: 47.0% RGB: 119, 75, 0
Position: 60.0% RGB: 146, 110, 49
Position: 74.0% RGB: 173, 146, 101
Position: 100% RBG: 255, 255, 255

<div class="main-img">
    <img src="">
    <p>If you created the color ramp with the gradient stops above it should look like this.</p>
</div>

## Save the new color ramp
Hopefully you've been able to successfully reproduce the color ramp, or create one of your own. You can now save it for use again in the future. Save the color ramp by once again clicking the down arrow (triangle) to the right of the color ramp display in the style properties window. This time select 'Save color ramp'. Now you can type in a name and tags for color ramp. This will make it easy to find in the future.

<div class="main-img">
    <img src="https://lh3.googleusercontent.com/DG6EZMIAqiVjEGtHarMl2d5D8TmJa7RqWjp4abWJg9E3ieV0qzJNSAkIV6Y9ocYJNNn7R9j9MJHucLEjDg_bczrkWdi_uh2RY3VnbEeG-g66tagiHDAjZ4Le6jFEfdO0IpmWjYBo44EiSjVJFUMhXg2CHAh4k_rVcr6ktxYY7VS7E8TLIKWWOZF1tTSE3sFs6hz2UsNLVddMxVxI-OPEzLtofOa7VHZNjy-KueX_FOkAlkKoTSFX-yXefz24VEgN859l0TGaNKTPBU5hxveLq03zxyLrkCPYhjaXk2oy0p6WdnMskIAcOYdL-RStRqs6utsNFkxVbnmFYMUR_e4-IMrndwZgOZa_m8iIOpYnpB1uv_ZwTOZegBTMPqFXzj8NNS7d6-4ApnThzaA4_e5VZ1sHaIpZwzYmnDJJQ6Axsq_-vGukC_xSQ4e7ByzdYGSgFQoRbyXDmrQoH2J3irv7ulBaiKMDjD1PLXfgwPIC3Xm4M1BFLBb9EDYyHBnRbdBcGbzDhzll54LCNZNl7ylsF8NP60OZbNV7rZ_zI1Yn1NoXmkdN763lfAWrCqZxdOsOL1wJr3Zx24RO2SCU0hhhckYBf5ypCS3u1HIj_em-=w875-h670-no">
    <p>If you created the color ramp with the gradient stops above it should look like this.</p>
</div>

# Displaying the DEM
I'm not going to apply my new elevation color ramp to my Logan River watershed DEM. Remember, I have a hillshade layered underneath this DEM. To get a better elevational effect, I'll make the DEM slightly transparent so the hillshade shows through. This is accomplished by opening the layer properties (double-click, or right click on the layer) and selecting the 'Transparency' option. Then adjust the 'Global opacity' slider. I've found an opacity of about 60% works well for DEM display.

<div class="main-img">
    <img src="https://lh3.googleusercontent.com/9qfPJtY09LqGNHJsH5Y5uWP1ez24XiB7_Nn0ifwCalLnmXbcxuPU8olwOiGolY5WZbcOosUwujxk6_J46MZroMLi6fLlEKBxMtC0H4ZmG3iEDg_H4Ub6GYvKFUuslwl2SlPAwJ3ZxTkZuAZGbvq23ATn08UQ99peJGrHmxuqK5OHdSLD0cSCGToFZ_YFlF-NGg44z6zaMJjelpqEHwVvGtKtE30SwkRd3huIB9W0y1Eef3GltyZrTsALbHO_UtEym4c5fQIlVG2dYpkbT1IA6XqYe-cpNxTSmvbotaygnrUgcZ3sjO7euPaiOQog4FhoZ8LZcjKBUfmpDsHs7NMSRgEYLrwuozygNrkvByln5yglVrvVb6yk6WKmi28y5GbllXif_RCIMti3f6qShTiZcAFUxSD25wJhWQ23jQWBfBukdIB-K5oH8naOEH65pG_LYu4DI4Nu6YwPLDBc0BjaVuhCYVcr3E8uSRD23IfmMo454USE2Mk1XCU_xyYq0mIyh9Y2Sc4G511jiP1OTfk9ZUArCELYhUJw2iazyjzOsxrTxIIr4SiTCq5qCuxv9n6Ou0Y4xfXaIMB5rcEHlpT27P5aSRtTAaeMk_P97Nm8=w771-h883-no">
    <p>Logan River watershed DEM symbolized with the new color ramp at 60% opacity with a hillshade underneath.</p>
</div>

# Video
This video tutorial walks you through the steps explained above.
