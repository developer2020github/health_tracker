
##Project title
######Health tracker
Author: developer2020 (<dev276236@gmail.com> )
2016

##Project overview

##Built with (libraries/technologies/APIs used)
#####Application itself:


#####Build process:

* Gulp
* Bower


###Functionality


######Error handling


####Installing all the source and rebuilding the application.

Application utilizes Bower for package management and Gulp for builds.
There are two main sub-folders:
src - sources with all libraries
dist - built application.

To ensure all the required components are installed:
0. Ensure you have node. js and npm installed.
Refer to https://docs.npmjs.com/getting-started/installing-node for installation instructions.
1. Get all the code from GitHub.
2. Ensure you have Bower installed. Please refer  to http://bower.io/ for Bower installation instructions.
3. Please navigate to src sub-folder. Run command "bower install"
This should create bower_components sub-folder and download all dependencies.
4. Navigate one level up (into the main directory). Run command
"npm install". This will download and install all the gulp packages required for builds.


To re-build the application:
1) start command line in main directory.
2) execute command
"gulp build"
This will clean up files in dist directory and rebuild the application.

