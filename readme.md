
## Project title
###### [Calories calculator](http://developer2020github.github.io/health_tracker/dist/ "link to project page")
Author: developer2020 (<dev276236@gmail.com> )
2016-2017

## Project overview
Personal project: 
a simple calories calculator single page application built with Backbone and Nutritionix API.
User can submit search queries to Nutrionix, then add food items to a list 
of selected items with calories calculation being updated automatically and save selected list into local storage.
There is settings tab that allows user to modify some options for current session.


## Built with (libraries/technologies/APIs used)
##### Application itself:
* Backbone
* jQuery
* Bootstrap
* Nutritionix API

##### Build process:

* Gulp
* Bower

### Running the application

You do not need to rebuild the application to check it out (built version is provided), just get it from GuitHub and open index.html, located in dist sub-folder with a browser. You can also just follow the [link](http://developer2020github.github.io/health_tracker/dist/ "link to project page")

#### Installing all the source and rebuilding the application.

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



