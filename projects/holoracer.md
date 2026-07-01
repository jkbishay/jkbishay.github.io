---
layout: project
type: project
image: images/holoracer/holoracer_track.png
backgroundImage: images/holoracer/holoracer_track.png
color: lightsalmon
title: HoloRacer
permalink: projects/holoracer
# All dates must be YYYY-MM-DD format!
date: 2019-01-27
labels:
  - Augmented Reality
  - Game Design
  - Unity
  - C#
summary: Augmented Reality car racing game
---

<div class="ui container" style="width: 50%">
  <div class="ui raised segment" style="background-color: rgba(0, 0, 0, 0.9)">
    <h1 class="ui center aligned header" style="font-size: 40px; color: whitesmoke">{{ page.title }}</h1>
    <img class="ui big centered bordered image" src="../images/holoracer/holoracer_title2.png">
    <div class="ui large labels" style="display: flex; justify-content: center; padding-top: 20px" >
      <div class="ui basic label">C#</div>
      <div class="ui basic label">Unity</div>
      <div class="ui basic label">Augmented Reality</div>
      <div class="ui basic label">3D Modeling</div>
      <div class="ui basic label">Blender</div>
    </div>
    <p style="display: flex; padding-top: 10px; font-size: 30px; text-align: center">
      HoloRacer is an augmented reality car racing game created in the Unity engine for Microsoft's HoloLens.
    </p>
  </div>
</div>

<div class="ui container" style="width: 70%; padding-top: 25px">
  <div class="ui raised segment" style="background-color: rgba(0, 0, 0, 0.9)">
    <div style="padding-top: 10px"></div>
    <div class="ui two column grid">
      <div class="column" style="align-items: center; display: flex">
        <img class="ui large centered bordered image" src="../images/holoracer/holoracer_track.png" style="margin-right: 55px; margin-left: 55px;">
      </div>
      <div class="column" style="align-items: center; display: flex">
        <div style="display: flex; font-size: 20px; text-align: center; margin-right: 55px; margin-left: 55px;">
          The player can build a race track in their real world space and race a car around it. The race track pieces and warp portals were modeled and colored by myself in Blender. Through this I learned quite a bit about the pipeline of art asset creation and importing them into a game engine. 
          <br/>
          <br/>
          To make it more of a complete game experience, I decided to add AI racer opponents. To do this, I created a waypoint system allowing users to place markers along the track by leveraging Unity's AI pathfinding system to guide them to the next waypoint marker.
        </div>
      </div>
    </div>
    <div style="padding-bottom: 10px"></div>
  </div>
</div>

<div class="ui container" style="width: 50%; padding-top: 25px">
  <div class="ui raised segment" style="background-color: rgba(0, 0, 0, 0.9)">
    <div style="padding-top: 10px"></div>
    <div class="column" style="margin-right: 55px; margin-left: 55px;">
      <div style="display: flex; justify-content: center; padding-bottom: 10px; font-size: 20px; text-align: center">
        My professor suggested that I should leverage the augmented reality technology to do something that is not possible in reality. That inspired me to utilize the HoloLens's spatial mapping capabilities to generate a physics mesh around the player's environment that the cars can drive on.
      </div>
      <img class="ui large centered bordered image" src="../images/holoracer/holoracer_floor.png" style="padding-bottom: 20px">
      <div style="display: flex; justify-content: center; padding-bottom: 10px; font-size: 20px; text-align: center">
        I decided to take this concept one step further and implemented a way for players to change the gravity direction such that you can do something like racing on the ceiling.
      </div>
      <img class="ui large centered bordered image" src="../images/holoracer/holoracer_ceilingPlayer.png">
    </div>
    <div style="padding-bottom: 10px"></div>
  </div>
</div>

<div class="ui container" style="width: 70%; padding-top: 25px">
  <div class="ui raised segment" style="background-color: rgba(0, 0, 0, 0.9)">
    <div style="padding-top: 10px"></div>
    <div class="ui two column grid">
      <div class="column" style="align-items: center; display: flex">
        <div style="display: flex; font-size: 20px; text-align: center; margin-right: 55px; margin-left: 55px;">
          Part of the motivation for this project was self directed research around possible methods for placing and manipulating virtual objects in augmented reality space. This was a challenging problem when working in the HoloLens because the HoloLens was limited to a single tap gesture for tap and tap and hold inputs.
          <br/>
          <br/>
          I decided to set up each track piece with a set of buttons to control if it was in move or rotate mode. Move mode simply allowed for the piece to be grabbed and repositioned freely, while rotate mode would reveal curved arrows along each axis to allow users to grab on an arrow and rotate the object along the desired axis without it moving position.
        </div>
      </div>
      <div class="column" style="align-items: center; display: flex">
        <img class="ui large centered bordered image" src="../images/holoracer/holoracer_track_rotate.png" style="margin-right: 55px; margin-left: 55px;">
      </div>
    </div>
    <div style="padding-bottom: 10px"></div>
  </div>
</div>

<div class="ui container" style="width: 80%; padding-top: 25px">
  <div class="ui raised segment" style="background-color: rgba(0, 0, 0, 0.9)">
    <div style="padding-top: 10px"></div>
    <div class="column">
      <div style="display: flex; justify-content: center; padding-bottom: 10px; font-size: 20px; text-align: center; margin-right: 55px; margin-left: 55px;">
        This was a solo project I worked on during my time as an undergraduate research assistant. It allowed me to explore some of the possibilities of game design with augmented reality technology. HotWheels was a large inspiration for this project as it was one of my favorite toys to play with when I was a kid. The goal was to bring to life the idea of racing cars around the player's environment in whatever crazy way they desired. 
        <br/>
        <br/>
        I presented this project at a social software showcase event called WetWare Wednesday in November of 2018. The project was received well amongst spectators at the event. It is capable of featuring up to 5 AI cars at once guided by a waypoint system that can be setup by the player. A demo of the project can be viewed here:
      </div>
      <div style="display: flex; justify-content: center">
        <iframe width="900" height="506" src="https://www.youtube.com/embed/TOoPjq2TaMk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
    <div style="padding-bottom: 20px"></div>
  </div>
</div>

<script type="text/javascript">
  $('.ui.raised.segment').visibility({
      once: true, // Only triggers the fade effect the first time it enters the screen
      continuous: false,
      onTopVisible: function() {
        // Trigger the Semantic UI fade animation when the top of the element is visible
        $(this).transition('fade in', '1500ms');
      }
    });
</script>
