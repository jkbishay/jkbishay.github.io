---
layout: project
type: project_unfinished #hide this from appearing until it is ready
image: images/destiny/destiny_title_with_traveler.jpg
backgroundImage: images/destiny/destiny_monument_of_triumph.jpg
color: blue
title: Destiny 2
permalink: projects/destiny
# All dates must be YYYY-MM-DD format!
date: 2026-06-25
labels:
  - C++
  - C#
  - Perforce
  - Networking
summary: AAA First Person Shooter MMORPG made by Bungie
---

<div class="ui container" style="width: 50%">
  <div class="ui raised segment" style="background-color: rgba(0, 0, 0, 0.9)">
    <h1 class="ui center aligned header" style="font-size: 40px; color: whitesmoke">{{ page.title }}</h1>
    <img class="ui medium centered bordered image" src="../images/destiny/destiny_title_with_traveler.jpg">
    <div class="ui large labels" style="display: flex; justify-content: center; padding-top: 20px" >
      <div class="ui basic label">C++</div>
      <div class="ui basic label">C#</div>
      <div class="ui basic label">Python</div>
      <div class="ui basic label">Perforce</div>
      <div class="ui basic label">Networking</div>
    </div>
    <p style="display: flex; padding-top: 10px; font-size: 30px; text-align: center">
      Destiny 2 is a AAA First Person Shooter MMORPG created by Bungie. The game released in 2017 and is available on PlayStation, Xbox, and PC.
    </p>
  </div>
</div>

<div class="ui container" style="width: 80%; padding-top: 25px">
  <div class="ui raised segment" style="background-color: rgba(0, 0, 0, 0.9)">
    <div style="padding-top: 10px"></div>
    <div class="column">
      <img class="ui large centered bordered image" src="../images/destiny/destiny_monument_of_triumph.jpg" style="padding-bottom: 20px">
      <div style="display: flex; justify-content: center; padding-bottom: 10px; font-size: 20px; text-align: center; margin-right: 55px; margin-left: 55px;">
        I joined Bungie as an intern in May of 2021 and became a full time Gameplay Engineer in January of 2022. During my time at Bungie, I had the privilege of working on the Destiny 2 project. While I am not at liberty to publicize every contribution I made to Destiny 2, there are a few features I worked on that you can see in game for yourself which I am allowed to discuss.
      </div>
      <div class="ui link cards" style="background-color: #ffffff">
        <div class="card">
          <div class="image" style="height: 150px; width: 100%;">
            <img src="../images/destiny/destiny_text_chat_tower.png" style="height: 150px; width: 100%;">
          </div>
          <div class="content" style="display: flex; align-items: center; justify-content: center;">
            <span class="center aligned header" style="color: black; font-size: 24px;">Text Chat</span>
          </div>
        </div>
        <div class="card">
          <div class="image" style="height: 150px; width: 100%;">
            <img src="../images/destiny/destiny_tooltip_tharsis.png" style="height: 150px; width: 100%;">
          </div>
          <div class="content" style="display: flex; align-items: center; justify-content: center;">
            <span class="center aligned header" style="color: black; font-size: 24px;">Activity Tooltips</span>
          </div>
        </div>
        <div class="card">
          <div class="image" style="height: 150px; width: 100%;">
            <img src="../images/destiny/destiny_invasion_marketing.jpg" style="height: 150px; width: 100%;">
          </div>
          <div class="content" style="display: flex; align-items: center; justify-content: center;">
            <span class="center aligned header" style="color: black; font-size: 24px;">Lawless Frontier Invasions</span>
          </div>
        </div>
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
