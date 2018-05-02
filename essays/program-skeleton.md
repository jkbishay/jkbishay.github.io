---
layout: essay
type: essay
title: The skeleton of a program
# All dates must be YYYY-MM-DD format!
date: 2018-05-01
labels:
  - Software Engineering
---

*The Skeleton of a Program*

The most difficult part about creating something is the beginning. It is not so hard to visualize the desired end result, but knowing where to begin is often a grueling task. However, if there is a general pattern in how it is made, then this early stage of construction can be simplified by referencing this pattern as a template. 

## The Design Pattern of a Car

Take a car for example. A typical car has four wheels, a driver's seat, a steering wheel, and an engine amongst other items. Any person looking to create some sort of new innovative car design will likely start with this as a template. The uniqueness of the build will be in how these pieces of the car are designed indivdually. The creator may look to adjust the way in which the steering wheel interacts with the tires to make piloting the vehicle better for the user. Regardless of what changes are made here, the steering wheel is still turning the tires. It's not to say that simply slapping on each of the aforementioned parts will give you a complete or decent car, but these are critical components that are included in just about every car model. After these key pieces are added into the car, the developer is free to customize and improve them in any way he or she sees fit. 

This concept is applicable to a wide variety of disciplines and is quite useful in coding. Programmers constantly use design patterns to simplify the problems they work with. Design patterns in coding are excellent for helpiing coders think of a more concrete way to design their programs and algorithms by providing unique ways for different parts of the code to interact with others. 

## The Design Pattern of Video Games

Design patterns are surprisingly useful in video game development. The general pattern for game development centers around an object oriented implementation. A scene is the place where all of the graphical exchanges occur; everything being used in a particular level of the game is held in there. All items are added to a scene as a game object. Every game object can have certain components attached to it to give it unique properties. Attaching a script to a game object allows it to perform actions. And that is the basic design pattern of video game development–of course the terminology may differ depending on what program is being used. 

If someone wanted to start making a game that features a character who can walk around, he or she would begin by:
  - Creating an empty scene
  - Placing an object into a scene
  - Attach a script component to the object
  
This is the most basic set up needed to prototype. The developer can now type code into their script to give the object the desired behavior, edit the object to look the way they want it to, and continue this process for the other pieces they need to include in the game such as the environment, enemies, etc.

Without this design pattern the creation process would be rather arduous and difficult, expecially at the beginning. How would one go about generating an 'object?' There's the problem of having to create the graphical screen that displays the game. Additionally, how would the objects be mapped out in this screen? Is there a built in coordinate system, or must everything be graphically repositioned each frame? How does a specific object know what to do when it interacts with others? 

Fortunately, many video game development programs, or game engines, have implemented the aforementioned design pattern, and they answer these questions before they are even asked. 
