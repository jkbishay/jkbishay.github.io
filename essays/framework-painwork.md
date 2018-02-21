---
layout: essay
type: essay
title: UI Frameworks, or UI Painworks?
# All dates must be YYYY-MM-DD format!
date: 2018-02-22
labels:
  - HTML
  - Semantic UI
  - Web Development
  - Software Engineering
---

Developing a website from scratch can be quite the laborious task. Envisioning the ideal look for a website may not be too difficult for some, but realizing this look is not easy. There are seemingly an infinite amount of customizations that can be done with HTML and CSS. The perfect style that a developer is looking for can be achieved with enough trial and error. However, more complex implementations require more rigorous and chaotic code. 

This is where UI frameworks, such as Semantic UI, are incredibly helpful in web development. These interfaces can be used to swiftly apply some of the more complicated stylizations to web pages with their provided classes. One of the best examples of the profficency of Sematic UI is the creation of navigation bars.

To do this soley with HTML and CSS you would first have to include something similar to this code in your body:

```
<div id="navbar">
  <ul>
    <li><a href="">Home</a></li>
    <li><a href="">Page 1</a></li>
    <li><a href="">Page 2</a></li>
    <li><a href="">Etc.</a></li>
  </ul>
</div>
```

Then, to properly format these items, you need to include CSS stylizations such as these:

```
#navbar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

#navbar li {
  display: inline;
}
```

In the end, this code just creates a single row of hyperlinks. It is possible to further customize this to create a more refined menu bar, but the additional customizations would start to pile up the code and make it a little tough to read. Additionally, if someone wanted to create multiple menus with slight adjustments or reuse some of these customizations, he or she may have to create multiple classes in the CSS stylesheet for each individual customization that is desired. This may be sufficient for a solo developer doing a one-time project. However, this is not ideal for a group of developers who manage a professional website daily. A single minor change could catastrophically break the website, and the problem may be untraceable if any code was deleted or lost. 

This is where Sematic UI can be a developer's saving grace. The implementation of a much more refined menu bar with Semantic UI would instead be:

```
<div class="ui menu">
  <div class="ui container">  <!--this is good for formatting the items neatly but not necessary for creating a menu-->
    <a class="fitted item">Home</a>
    <a class="fitted item">Page 1</a>
    <a class="fitted item">Page 2</a>
    <a class="fitted item">Etc.</a>
  </div>
</div>
```
There is no additional CSS code needed to generate this menu. All of the sylizations are handled within Semantic's library by calling classes such as ```fitted```, ```item```, ```ui menu```, and ```ui container```. 

As great as Semantic UI may seem at this point, it is not possible to do everything with it. Developers want to have the precise customization that they desire. Semantic is a great way to efficiently create and format websites but minute details still require extra work. Semantic UI's library of classes is designed to be general so that anyone can use it for basic formatiing purposes. Semantic does not automatically know the exact position of the elements that is desired by the developer. There are ways to combine multiple classes to get the formatting to be a closer approximation of what is wanted.

In the above code the line ```<div class="ui container">``` is not required to create the menu bar, but the items in the menu will end up hugging the edge of the web page without it. This code wraps the menu items in a container that is scaled according to the user's web page and formats the items much more neatly. Another limitation of Semantic UI is with specific customizations. For instance: CSS is still needed to change the color of the menu, though it is easy to do so. Another customization is the margins between these items.
