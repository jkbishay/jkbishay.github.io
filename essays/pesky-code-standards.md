---
layout: essay
type: essay
title: Pesky Code Standards
# All dates must be YYYY-MM-DD format!
date: 2018-01-18
labels:
  - Javascript
  - Software Engineering
---


One of the most common questions asked by students who are just beginning to learn how to code is "why does the formatting matter?" Just about all of these students discover the answer to that question themselves after coding for a year or so. Coding standards are truly a great thing. It is because of these standards that we strive to make our code legible, comprehensive, and universal. The code is nice and neat for others to easily read and understand how it works. So, we assume that all we need to do when it comes to formatting our code is make it neat and legible. So we type our code, we space it out properly, we use consistent indentations, and if it looks nice then we are done and everything is great. 

Then, we turn our your code and the professor deducts twenty points for bad formatting which leaves us perplexed. All we can do is ask why, and the professor simply cites that the specific language coding standards were not perfectly followed. Chances are many lesser experienced programmers are not aware that the proper way to write a function is to put a space between the function name and the parentheses like so: 
```
// the correct way to write a function
function myFunc () {
  return 0;
}

// the incorrect way to write a function
function yourFunc() {
  return -1;
}
```
This particular example is specific to Javascript, though this rule holds true in many programming languages. Now let's be honest, the second one does not look that bad. I could present a sample of more complicated code where the functions are written in the "incorrect" way, and it would look fine. Despite this, it would still go against the standards and be declared as wrong. One may think that it is crazy to expect people to remember so many formatting nuances such as this. Fortunately, there are many integrated development environments (IDE) that can check for formatting errors. One such IDE for Javascript is IntelliJ IDEA which can be set up to integrate ESLint to help with code style and formatting. 

Working with some sort of style checker is great, especially for those who are still learning. It helps to develop good coding habits, shows how and where to properly define variables, and it demonstrates ways to condense code. Even if the user does not remember the style rule, many IDEs have some sort of method that can automatically fix or format the code for the user. 
