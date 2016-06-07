---
layout: post
title: Creating My Article Sidebar Part 1
date: 2016-06-01 09:07:00
# update: 2016-05-13 11:34:00
blurb: I wanted to enhance my article viewing experience, so I decided to design a sidebar.
categories:
- projects
- Design
tech:
- Sketch3
published: true
project-status: Finished
---

# Summary

I wanted to enhance my article roaming experience by having a sidebar. This sidebar would allow a user to roam headings within the article via the sidebar. This not only allows users to roam the article more easily, but also helps the user see what the article contains.

This article is part 1 of the whole article sidebar project, and specifically talks about the designing part of it only.

<hr />

## 1. Research

So first thing was first. I needed to see how others were already doing it. First website I went to was [dribbble](https://dribbble.com/). I love this site because it always has top notch design work. The main objective was to get inspired here. The following 3 shots caught my attention:

#### Design A

![]({{ site.baseurl }}/production/images/post-images/2016-06-01-designing-article-sidebar/img00.png)

Original work by [Mani](https://dribbble.com/shots/1497653-Users-And-Receivable-Payments)

#### Reason for choosing:

Gives the user a little more information as to what heading is selected. Usually, when a list item is selected it tends to just be bold. I thought this was better because the whole tab is selected. Although, this also might be a bad design since it might take up a lot more space than we need it to.

#### Design B
![]({{ site.baseurl }}/production/images/post-images/2016-06-01-designing-article-sidebar/img01.png)

Original work by [Daniela Alves](https://dribbble.com/shots/344377-Jobs-Timeline-WIP-v2)

#### Reason for choosing:

I thought that maybe using a timeline type of list would be different, but different isn't always better. In this screenshot we can see that the longer the duration, the bigger the gap in the timeline. I was thinking we could use this same principle but instead apply it to paragraphs. The longer a paragraph is for a given heading, the bigger the gap on the side list. This would then give the user an idea of how much, in that section of the article, there is to read. But what if, the paragraph is gigantic? Not likely to happen but you should always look at worst case.

#### Design C

![]({{ site.baseurl }}/production/images/post-images/2016-06-01-designing-article-sidebar/img02.png)

Original work by [musHo](https://dribbble.com/shots/2583708-Ten-X-List)

#### Reason for choosing:

I liked the simplicity of this design. Also, I've always liked to use circles as a "eye hook" that helps the user detect a certain section within a document. With this type of design we could help the user detect how many headings there are within the article without having to consciously count them.

## 2. Second Round Research

After giving some time for the designs to soak in I knew what I wanted. Nothing to flashy but still got the job done. I did a second round of research based on the designed I looked at. Now, instead of searching for keywords that were too general, such as ```list``` or ```sidebar```, I searched for things that were more specific such as ```minimalistic sidebar```.

After some browsing, I found a design that I liked and wanted to stick with.

![]({{ site.baseurl }}/production/images/post-images/2016-06-01-designing-article-sidebar/img03.png)

It may seem like a downgrade from the path I was going, but it gets the job done. It's a simple ```<ul> ``` with some styled list items. Personally, the affordance was high and that's what I was looking for, something that was intuitive for the user.

## 3. Lo-fi Wireframe

I usually do my lo-fi wireframes on paper but decided to try out a whiteboard this time. The one thing, off the bat, that I enjoyed about it was the fact that designing was really quick and easy.

I'm currently working with a 12 column grid (Bootstrap 3). The actual content takes up ```8 columns``` and has an ```offset of 2 columns```. I wanted to add the sidebar to the right of the content. This means I had ```2 columns``` to fit the sidebar. I figured we could keep it very basic and have the sidebar ```fixed``` on the right side.

![]({{ site.baseurl }}/production/images/post-images/2016-06-01-designing-article-sidebar/img04.JPG)

## 4. Hi-fi Wireframe

Here we added the sidebar on the right of the content. Like I mentioned above the sidebar is going to be basic. Any heading that you hover over will be displayed in bold.

You can see in the following design that ```Subheading#1``` is currently being hovered over and so the text is displayed in bold.

![]({{ site.baseurl }}/production/images/post-images/2016-06-01-designing-article-sidebar/img05.png)

## Conclusion

Like all things in design, things might change from here. Maybe I'll come across some other cool design that I feel is better for my site but as for now, I'm going with this design.

#### What I learned:

1. Sketching is important.
2. Don't go head first into digital designing until sketch feels ready.
3. Whiteboards are awesome!

#### What I would do differently:

1. Test wireframes on users before settling (users see what designers/developers don't).
2. Look through more designs (in this project I looked at about 10).

Also, one minor fix to the sidebar would be for it to be right aligned with the **"At a glance:"** box. Just a small detail that I missed.
