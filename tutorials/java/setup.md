---
layout: text
title: "Part 2: Setup"
date: 2017-08-01
include_nav: false
permalink: /tutorials/java/setup/
---
In this section you'll download and set up the software required to write and run Java programs. This will only take a few minutes.

After this you'll be able to write and run Java programs, which you'll do in subsequent tutorials.

<h2 class="ui header">Text Editor</h2>
You'll need some sort of text editor to write your code in. Obviously you can use Notepad on Windows or TextEdit on Mac, but they're very basic and not really suited to coding. I recommend <a href="https://atom.io/">Atom</a> or <a href="https://code.visualstudio.com/">VS Code</a> but other popular ones include <a href="https://www.sublimetext.com/">Sublime Text</a> and <a href="https://notepad-plus-plus.org/">Notepad++</a>.

Later on you'll probably want to use an <a href="https://en.wikipedia.org/wiki/Integrated_development_environment">IDE</a>. These contain many useful features and tools for development, but we'll get to that later.

<h2 class="ui header">Java Development Kit (JDK)</h2>
To *run* Java programs, you need the JRE (*Java Runtime Environment*). You may already have had to install this when running Java programs previously. To *write* Java programs, you need the JDK (*Java Development Kit*), which contains the JRE and various development tools. You only need to install the JDK since the JDK includes the JRE.

Go to the <a href="http://www.oracle.com/technetwork/java/javase/downloads/index.html">Java SE Downloads page</a>:
<img class="ui image" src="/assets/images/java-tutorial-part2-image1.png" alt="Screenshot of Java SE downloads page">
Under *Java SE 8uXXX* (*8u144* at time of writing), click the Download button for the JDK.
Now you should be on the JDK downloads page:
<img class="ui image" src="/assets/images/java-tutorial-part2-image2.png" alt="Screenshot of JDK downloads page">
After accepting the licence agreement, download and install it for your platform.

<h2 class="ui header">
  Setting up Environment Variables
  <div class="sub header">Windows Only</div>
</h2>
If you're on Windows, you'll need to set up an environment variable for the Java commands to work.

In Explorer, go to `C:\Program Files\Java\` (or wherever you installed Java). There should be a folder whose name is of the form `jdk1.X.X_XXX`. Make a note of this path (on my PC it's `C:\Program Files\Java\jdk1.8.0_121`).

Now in Control Panel, go to <i>System and Security</i> &gt; <i>System</i>. Then click <i>Advanced system settings</i> on the left pane. In the <i>Advanced</i> tab, click the <i>Environment Variables...</i> button at the bottom. Another window should appear. Under your user variables, create a new variable with `JAVA_HOME` as the name and the path you found a moment ago as the value.

To make sure it's working correctly, try running `java` and `javac` in the command prompt. If you get a help message detailing the command usage, it's working! If you get an error relating to the command not being recognised, the environment variable may not be set up correctly.
