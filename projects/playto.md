---
layout: project
type: project
image: images/playto/Playto_pencil.png
backgroundImage: images/playto/Playto_pencil.png
color: deepskyblue
title: Playto
permalink: projects/playto
# All dates must be YYYY-MM-DD format!
date: 2017-12-13
labels:
  - Game Design
  - Unity
  - C#
summary: A short 2D puzzle demo game
---

<div class="ui container" style="width: 50%">
  <div class="ui raised segment" style="background-color: rgba(0, 0, 0, 0.9)">
    <h1 class="ui center aligned header" style="font-size: 40px; color: whitesmoke">{{ page.title }}</h1>
    <img class="ui big centered bordered image" src="../images/playto/Playto_Menu.png">
    <div class="ui large labels" style="display: flex; justify-content: center; padding-top: 20px" >
      <div class="ui basic label">C#</div>
      <div class="ui basic label">Unity</div>
    </div>
    <p style="display: flex; padding-top: 10px; font-size: 30px; text-align: center">
      "Playto" is a 2D puzzle platformer where the player is a piece of playdough and they can morph into different shapes to navigate levels and solve puzzles. This project was made by Computer Science and Animation undergraduate students Justin Bishay, Neil Teves, Michael Mangrobang, Kayla Abalos, and Kaeli Giron.
    </p>
  </div>
</div>

<div class="ui container" style="width: 70%; padding-top: 25px">
  <div class="ui raised segment" style="background-color: rgba(0, 0, 0, 0.9)">
    <div style="padding-top: 10px"></div>
    <div class="ui two column grid">
      <div class="column" style="justify-content: center; display: flex; flex-direction: column">
        <img class="ui large centered bordered image" src="../images/playto/Playto_pencil.png" style="margin-bottom: 50px;">
        <img class="ui large centered bordered image" src="../images/playto/Playto_UnicornPic.png">
      </div>
      <div class="column" style="align-items: center; display: flex">
        <div style="display: flex; font-size: 20px; text-align: center; margin-right: 55px; margin-left: 55px;">
          For this project, I programmed and designed many of the puzzles that were featured in our game. I also helped to draw out and organize the layout of our levels. While designing the levels and puzzles, I took extra care to ensure that the puzzles were neither too difficult nor too easy.
        </div>
      </div>
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
          My programming responsibilities also included working on the game's cinematics with the camera movements and implementing the dialogue for our cutscenes. In addition to this, I implemented the audio for our game and created some of the sound effects. I also helped to fix any bugs with the levels and game mechanics throughout the project. 
        </div>
      </div>
      <div class="column" style="justify-content: center; display: flex; flex-direction: column">
        <img class="ui large centered bordered image" src="../images/playto/Playto_DialoguePic.png" style="margin-bottom: 50px;">
        <img class="ui large centered bordered image" src="../images/playto/Playto_spiders.png">
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
        <p>
          This project taught me a lot about how to design a game. I learned to focus on the gameplay experience rather than trying to come up with an amazing story, visuals, or outrageous mechanics. On the technical side, I was able to expand my knowledge of Unity and C#. I learned many different tips and tricks about implementing certain functions in Unity, and I learned how to manipulate the camera to achieve desired cinematic effects. 
          <br/>
          <br/>
          You can learn more about our game and find a playable demo at its <a href="https://dreamingbento.github.io/">website</a>.
        </p>
      </div>
      <div style="display: flex; justify-content: center">
        <iframe width="900" height="506" src="https://www.youtube.com/embed/3oDPTKcFKlY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
