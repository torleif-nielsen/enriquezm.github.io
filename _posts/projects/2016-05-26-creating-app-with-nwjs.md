---
layout: post
title: Desktop app with NW.js.
date: 2016-05-26 22:00:00
# update: 2016-05-13 11:34:00
blurb: A basic computer specification information tool built with NW.js.
categories:
- projects
- Development
tech:
- NW.js
- JavaScript
published: true
project-status: Finished
project-github: https://github.com/enriquezm/nwjs-playground
---

# Summary

Using NW.js you are able to build JavaScript powered desktop apps. Why is this cool? Well if you already know JavaScript, it's an awesome way to experiment! I'm no JavaScript expert, but it is definitely one of my favorite languages to program in.

Using a couple tutorials, I want to see what it's all about. Let's make a basic app that'll show our machine's specs after a click of a button. I could get complex with this but the purpose of this project is to experiment and mess around with something I've never used before.

<hr />

## 1. Getting NW.js

First of all we have to retrieve and download [NW.js](http://nwjs.io/) from [GitHub](https://github.com/nwjs/nw.js#downloads). From the GitHub page you can scroll down and download the build that you need.

![]({{ site.baseurl }}/production/images/post-images/2016-05-26-creating-app-with-nwjs/img00.png)

## 2. Unzipping the NW.js folder

After downloading the zipped folder I went ahead and unzipped it, created a folder just for this project, and synced it with a [GitHub repo](https://github.com/enriquezm/nwjs-playground). Why did I do this? To keep things documented and backed up. Plus, as a developer I believe you should keep all your projects on GitHub. From here you might want to create a .gitignore file to ignore those annoying files (ex. DS_Store).

One thing to note is that you want to move the entire folder somewhere on your machine, not the individual files inside. Also, remember where you put that folder. The folder comes with a testing and deploying bundle, so we'll make use of those later on.

## 3. Creating a new NW.js project

Now let's start making our app by creating a new file called ```index.html```. This will contain our main UI for the application.

We'll keep it basic and add our ```div``` that'll contain our machine's specs and a ```button``` to fire our function.

![]({{ site.baseurl }}/production/images/post-images/2016-05-26-creating-app-with-nwjs/img01.png)

## 4. Creating and configuring the manifest file

We're then going to create our manifest file. Create a file within our root directory (same directory index.html is in), and name it ```package.json```. At the bare minimum the manifest will need a ```name``` and ```version``` number. This is required by NPM and if you want to read more about it, you can [here](https://docs.npmjs.com/files/package.json).

You will also want to include the ```main``` and ```title``` properties to our manifest file. ```main``` will tell the NWjs engine which file to run and ```title``` will, well, give our app a title to go by.

Your manifest file should look like this:

![]({{ site.baseurl }}/production/images/post-images/2016-05-26-creating-app-with-nwjs/img02.png)

## 5. Launching our app

First thing is first, we have to go back to the file that we downloaded from GitHub and point it to the root of our project! This will involve the terminal. So, if you're not to comfortable with the terminal, go ahead and head to this [tutorial](http://cli.learncodethehardway.org/book/) and start learning! I used it when I was first learning and it helped out tremendously.

If you are comfortable, let's continue!

We have to use terminal to get to where our io.js and NW.js code lives. Once you have directed yourself to the downloaded file, enter this to run your app:

    $ nwjs.app/Contents/MacOS/nwjs /path/to/your/project/root

Basically what we're doing is using terminal to run our app. We need to first direct ourselves to NWjs and tell it what app to run.

Your app "should" run and look something like this:

![]({{ site.baseurl }}/production/images/post-images/2016-05-26-creating-app-with-nwjs/img03.png)

## 6. Enhance our manifest file

Now if you got this far then awesome!

If you wanted more control over your apps specs we can add a little detail to our package.json. We're only going to mess with the dimensions of the window so you can get a sense of what you can do, but if you want to look at all properties that can be modified, check them out [here](http://docs.nwjs.io/en/latest/References/Manifest%20Format/).

Here we're just changing the dimensions of the window:

![]({{ site.baseurl }}/production/images/post-images/2016-05-26-creating-app-with-nwjs/img04.png)

In the example above, we simply just change the ```width``` to **480**, and the ```height``` to **320**.

## 7. Adding scripts

Now let's give our app some functionality and add some scripts.

Open up ```index.html``` and match it to the following snippet:

![]({{ site.baseurl }}/production/images/post-images/2016-05-26-creating-app-with-nwjs/img05.png)

If you haven't noticed, we added a reference to a script (```scripts/window.js```) that hasn't been yet added to our project's directory so let's do that.

Create a folder in our **root** directory and call it ```scripts```. Inside of this folder we are going to create a file called ```window.js```. We'll use this file to affect the app window with events and listeners. This will include resizing or positioning of the app window.

![]({{ site.baseurl }}/production/images/post-images/2016-05-26-creating-app-with-nwjs/img06.png)

## 8. Requiring our modules and globals

Now let's get to the good stuff and start adding some functionality to our app. We're going to be working within our ```window.js```.

If you have worked with Node, you'll be familiar with the ```require()``` function. We'll be using it to retrieve our GUI module. Add the following snippet to ```window.js```:

![]({{ site.baseurl }}/production/images/post-images/2016-05-26-creating-app-with-nwjs/img07.png)

## 9. Position the window

When using apps on the Mac, your app usually opens up where you last closed it. So let's mimic this with some code. We'll give our window a starting position of ```x=50``` and ```y=50```. Add the following snippet of code:

![]({{ site.baseurl }}/production/images/post-images/2016-05-26-creating-app-with-nwjs/img08.png)

This will allow the window to open where it was last closed. This is possible by using ```localStorage``` property of the ```win``` object that we reference to within the **NWjs** module.

## 10. Closing off screen

Now what happens when our user closes the app off the main screen. When they open up the app again they will not see it since their coordinates are negative.

We can take care of this by resetting the coordinates to whatever you like. In this case I set ```x=50``` and ```y=50``` but you can change them to whatever you like. Of course, don't reset the coordinates to a negative number or else it beats the purpose of this whole code snippet. You can add the following snippet just after ```if(savedPosition !== null){```:

![]({{ site.baseurl }}/production/images/post-images/2016-05-26-creating-app-with-nwjs/img09.png)

## 12. Saving our resizing dimensions

Now let's move onto saving the dimensions of our window before the app closes. This will allow us to open up the app again, and have the same dimensions saved. This is also done with the ```win``` object we created but it will use a different **event listener** called ```resize```.

![]({{ site.baseurl }}/production/images/post-images/2016-05-26-creating-app-with-nwjs/img10.png)

## 13. Retrieving OS information

Alright so now that we have resizing and positioning of our app's window all settled, let's go onto the next step. We need to first create a new file within our ```scripts``` folder and name it ```os.js``` like so:

![]({{ site.baseurl }}/production/images/post-images/2016-05-26-creating-app-with-nwjs/img11.png)

This file will contain our main apps functionality. That is to **retrieve info on the end user's machine**.

## 14. Including the os module

Within ```os.js``` we need to retrieve Node's os module called 'os'. We can do this at the top of the file like so:

![]({{ site.baseurl }}/production/images/post-images/2016-05-26-creating-app-with-nwjs/img12.png)

## 15. Creating some content

With this module we'll be able to get useful information from our machine. We can do this as the following snippet shows:

![]({{ site.baseurl }}/production/images/post-images/2016-05-26-creating-app-with-nwjs/img13.png)

Now, we're basically getting info from our OS and concatenating it to a string called ```content```. Is this the best way to do it? Probably not, but remember, we're just experimenting with NWjs, not trying to create the next big app.

If you want the full list of functions that the ```os``` module provides you can check it out [here](https://nodejs.org/api/os.html).

## 16. Writing and reading our content

Now next step is to first write all the information of our machine into a file and then read that file with our app. This can all be handled by the ```fs``` module that node provides. We'll retrieve it exaclty as we did with the ```os``` module like so:

![]({{ site.baseurl }}/production/images/post-images/2016-05-26-creating-app-with-nwjs/img14.png)

Now we'll prepare a function that'll be triggered when the user clicks on the **"View My Specs"** button on the user interface. We can do this with the following snippet of code:

![]({{ site.baseurl }}/production/images/post-images/2016-05-26-creating-app-with-nwjs/img15.png)

Here we first **write** a file and call it ```sysInfo.txt```. ```sysInfo.tx``` will contain the entire ```content``` string that we concatenated. If there is an error, we will be alerted that there was one. We then read the file we just created with ```fs.readFile()```. If there are any errors while reading, we are alerted with an error message. If there are no errors we read the file and write it to our ```div``` with a id of ```spec-details```.

Then we just need to add an id to our ```div``` element that will be showing our spec information like so:

![]({{ site.baseurl }}/production/images/post-images/2016-05-26-creating-app-with-nwjs/img16.png)

## 17. Packaging our app

Now let's package our app so we can deploy it to other users.

It's very simple. First copy all the NW.js files we first downloaded from GitHub:

![]({{ site.baseurl }}/production/images/post-images/2016-05-26-creating-app-with-nwjs/img17.png)

And then we paste it to our project's directory:

![]({{ site.baseurl }}/production/images/post-images/2016-05-26-creating-app-with-nwjs/img18.png)

Then rename it to whatever your app's name is:

![]({{ site.baseurl }}/production/images/post-images/2016-05-26-creating-app-with-nwjs/img19.png)

And then we finish up by zipping it all together!

![]({{ site.baseurl }}/production/images/post-images/2016-05-26-creating-app-with-nwjs/img20.png)

You can now send this zipped folder to your end user to try out. Just keep in mind that their OS will have to match the ```nwjs``` binary that we downloaded from GitHub. There are ways to distribute a product for all platforms at once but that's out side of this project.

<hr />

# Conclusion

So what did I learn through this whole experience? That NWjs was pretty easy to use. Of course, I messed with Nodejs before so some things seemed pretty simple. But even if someone new to Nodejs tried working with NWjs, I shouldn't be too difficult to pick up.

I know that the app seems pretty basic and simple and even 'ugly' looking but the point of this project was just to experiment and see what NWjs was. To be honest I wasn't sure what it was until I started messing with it. I'm glad I did though because it was easy to pick up and fun.

If you want all my source code I put it up on [Github](https://github.com/enriquezm/nwjs-playground).
