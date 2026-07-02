---
layout: project
type: project
image: images/runbarush/runbarush_menu.png
backgroundImage: images/runbarush/runbarush_gameplay.png
color: lightsalmon
title: RUNba Rush
permalink: projects/runbarush
# All dates must be YYYY-MM-DD format!
date: 2018-01-28
labels:
  - Game Design
  - Unity
  - C#
  - Global Game Jam
summary: Puzzle game made for Global Game Jam 2018
---

<div class="ui container" style="width: 50%">
  <div class="ui raised segment" style="background-color: rgba(0, 0, 0, 0.9)">
    <h1 class="ui center aligned header" style="font-size: 40px; color: whitesmoke">{{ page.title }}</h1>
    <img class="ui big centered bordered image" src="../images/runbarush/runbarush_menu.png">
    <div class="ui large labels" style="display: flex; justify-content: center; padding-top: 20px" >
      <div class="ui basic label">C#</div>
      <div class="ui basic label">Unity</div>
    </div>
    <p style="display: flex; padding-top: 10px; font-size: 30px; text-align: center">
      RUNba Rush is a puzzle game where the player assumes the role of a babysitter who must use dysfunctional Roo- err, RUNbas to clear the house of hazardous objects before the toddler eats them. It was created by a team of five people for Global Game Jam 2018.
    </p>
  </div>
</div>

<div class="ui container" style="width: 70%; padding-top: 25px">
  <div class="ui raised segment" style="background-color: rgba(0, 0, 0, 0.9)">
    <div style="padding-top: 10px"></div>
    <div class="ui two column grid">
      <div class="column" style="justify-content: center; display: flex; flex-direction: column">
        <img class="ui large centered bordered image" src="../images/runbarush/runbarush_instructions.png" style="margin-bottom: 50px;">
        <img class="ui large centered bordered image" src="../images/runbarush/runbarush_gameplay.png">
      </div>
      <div class="column" style="align-items: center; display: flex">
        <div style="display: flex; font-size: 20px; text-align: center; margin-right: 55px; margin-left: 55px;">
          I was designated as the sole programmer for this project which left me in charge of designing the game's overall mechanics. I spent a lot of time learning more about rotations in Unity and how to properly manipulate them. There were numerous complications involving quaternions and euler angles that required additional research on my part to better understand their usage. In addition to this, I also had to create our AI for the toddler to continuously target and chase the nearest hazard.
          <br/>
          <br/>
          This was a particularly enjoyable part of the project as I was able to learn how to use Unity's built-in navigation mesh system to set up an autonomous pathfinding AI. This project also gave me the opportunity to learn how to use Unity's scene manager to switch between the main menu and different levels. Aside from coding, I worked on the level design for the game as well. 
        </div>
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
       This was my first time participating at a coding challenge. I got to experience what it is like working under pressure to meet a deadline. Global Game Jam was a very unique experience. It really tested my creativity in trying to come up with a fresh idea based off of our given theme. We were given additional 'diversifiers' as extra criteria to make our games more interesting. That led us to making a secret level where the Global Game Jam hype video played in the background. Despite the lack of sleep, it was a tremendous amount of fun and very rewarding.
      </div>
      <div class="ui two column grid">
        <div class="column">
          <img class="ui large centered bordered image" src="../images/runbarush/runbarush_death.png" style="padding-bottom: 20px">
        </div>
        <div class="column">
          <img class="ui large centered bordered image" src="../images/runbarush/runbarush_secret.png" style="padding-bottom: 20px">
        </div>
      </div>
      <div style="display: flex; justify-content: center; padding-bottom: 10px; font-size: 20px; text-align: center; margin-right: 55px; margin-left: 55px;">
        <p>
          You can check out the game jam site for our game <a href="https://globalgamejam.org/2018/games/runba-rush">here!</a>
        </p>
      </div>
    </div>
    <div style="padding-bottom: 10px"></div>
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
