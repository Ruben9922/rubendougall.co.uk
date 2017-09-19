---
layout: text
title: "Part 2: Setup"
date: 2017-08-01
include_nav: false
permalink: /tutorials/java/setup/
---
In this section you'll download and set up the software required to write and run Java programs. It'll only take a few minutes as there's really not much to set up.

After this you'll be able to write and run Java programs, which you'll do in subsequent tutorials.

<div class="ui divider"></div>

<h2 class="ui header">Text Editor</h2>
You'll need some sort of text editor to write your code in. Obviously you can use Notepad on Windows or TextEdit on Mac, but they're very basic. I recommend [Atom](https://atom.io/) but there are many others like [Notepad++](https://notepad-plus-plus.org/) for Windows.

Later on you'll probably want to use an IDE (*integrated development environment*). These contain many useful features and tools for development, but we'll get to that later. (I personally use [IntelliJ IDEA](https://www.jetbrains.com/idea/).)

<h2 class="ui header">Java Development Kit (JDK)</h2>
To *run* Java programs, you need the JRE (*Java Runtime Environment*). To *write* Java programs, you need the JDK (*Java Development Kit*), which contains the JRE and various development tools. Therefore you only need to install the JDK since the JDK includes the JRE.

<ul class="ui list">
  <li>
    Go to the <a href="http://www.oracle.com/technetwork/java/javase/downloads/index.html">Java SE Downloads page</a>:
    <img class="ui image" src="/assets/images/java-tutorial-part2-image1.png" alt="Screenshot of Java SE downloads page">
  </li>
  <li>
    Under *Java SE 8uXXX* (*8u144* at time of writing), click the Download button for the JDK.
  </li>
  <li>
    Now you should be on the JDK downloads page:
    <img class="ui image" src="/assets/images/java-tutorial-part2-image2.png" alt="Screenshot of JDK downloads page">
  </li>
  <li>
    After accepting the licence agreement, download and install it for your platform.
  </li>
</ul>

<h2 class="ui header">Setting up Environment Variables (Windows Only)</h2>
In order
