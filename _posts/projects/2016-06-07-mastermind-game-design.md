---
layout: post
title: Mastermind Board Game for Web
date: 2016-06-07 13:42:00
# update: 2016-05-13 11:34:00
blurb: A digitalized board game consisting of code breaking.
categories:
- projects
- Design
tech:
- Sketch
published: true
project-status: In progress
project-github: https://github.com/garza-eric/mastermind
# project-url:
---
### Summary

A friend of mine is starting to get into web development. I wanted to give him a brief idea of what a real world project might feel like if he were to actually work for a company. We both love the game [Mastermind](https://en.wikipedia.org/wiki/Mastermind_%28board_game%29) and I figured, why not design and build this game and treat it as a mock project.

I handled the designing, both UX and UI, and Front End development, while [Eric](https://github.com/garza-eric), handled the back-end design and development. Here's what I process was:

#### 1. Pre-Project Setup

In order for the both of us to be organized we went ahead and used [Slack](https://slack.com/) for our centralized communications and notifications and [Trello](https://trello.com/) to handle and organize our individual tasks.

Within Slack we created a channel strictly for our project. Within this channel we integrated **Trello** and **Github**. All activity from the two would notify us through the channel.

Within Trello we used the [Kanban](https://en.wikipedia.org/wiki/Kanban_%28development%29) system to handle our tasks. It looked something like the following:

![]({{ site.baseurl }}/production/images/post-images/2016-06-07-mastermind-game-design/img00.png)

With this system we can see what needs to be done, what is being done, and what has been finished. One thing to also note is that each task was assigned a priority to help things become more clear at a glance. Along with who was actually working on the task.

 **Red = High Priority, Yellow = Medium Priority, Green = Low Priority**.

#### 2. Creating the Blueprint

Since I was handling the user experience and user interface. I figured I had to know the ins and outs of this game. I've played it many times, but still, I needed to see it from all angles. I figured I would create a ```blueprint``` to better capture all possible routes within the game.

This was done by **reading** about the game, **playing** the actual board game, **playing** any online games already present, and getting a feel for it.

If you want to understand the game, you have to become the game. (Sounds like something you would hear from a martial art movie.)

Below is a basic ```blueprint``` for a player going against the computer:

![]({{ site.baseurl }}/production/images/post-images/2016-06-07-mastermind-game-design/img01.png)

After further analyzation, I was able to create phase 2 blueprints.

![]({{ site.baseurl }}/production/images/post-images/2016-06-07-mastermind-game-design/img02.png)

As you can see, the design got a little more complex. This was because the logical side of the game was becoming more clear. Now keep in mind, this is just a starting point to designing the game and is used as a reference. Think of this ```blueprint``` as a foundation of how the game will be. More things will be added and some might even be removed as the team meets together to talk it over.

Creating this ```blueprint``` will help the developer when it comes to writing the actual code and will save large amounts of time.

#### 3. Wireframing

After building the ```blueprints``` it was time to move onto building ```wireframes```. I wanted to go with a minimal approach:

![]({{ site.baseurl }}/production/images/post-images/2016-06-07-mastermind-game-design/img03.png)

The wireframe is still at its early stage. We still plan to test on at least 5 users with [Robert Hoekman Jr](http://www.rhjr.net/)'s "Iterative Usability Testing" method as described in his book [Experience Required](https://www.amazon.com/Experience-Required-become-leader-regardless/dp/0134398270?ie=UTF8&keywords=Robert%20Hoekman&qid=1444068957&ref_=sr_1_5&s=books&sr=1-5). With this method we can save time, time that will be vital for development.
