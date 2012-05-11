# Hacking with the google maps streetview API.

This is a collection of folders working with the google streetview API

It is intended to progress from a sample from a google streetview API demo site, to working with the elements that allow you to make your own custom streetview.

* EX1 - Is a direct save of a file from http://raphaelcruzeiro.com/blog/2011/05/08/creating-a-custom-street-view-panorama/

* EX2 - was my first attempt at taking a streetview window and putting in my own image.

* EX3 - took the "click here" demo a step further and then hooked in a series of my own images, correctly linked to a real streetview locaion and then linked to each other.

* EX4 - used the same assets from EX3 but also hooked the viewer to another viewer with a map window, and three associated points and pins on the map.  Try clicking on the pins on the map on the left.  The Streetview locaion window will update appropriately.

* EX5 - taking ex4 and trying to incorporate the zoom aspect.  I sliced up the Photoshop files into appropriately sized tiles and hoped for them to load accurately.  They seem to be a bit off....

* EX6 - sucessfully implementing the tiled view loading.  From the default window try zooming out and the appropriate tiles should load.

* EX7 - a start at extending ex6.

--------------

the code42 folders are working towards making a demo of how you could do this yourself with your own assets.

* code42.1 - Simple copy of ex3

* code42.2 - Copy of ex4 with an additional asset and some instructions

* code42.2.done - the "solution" of code42.2