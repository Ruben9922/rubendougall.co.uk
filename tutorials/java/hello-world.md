---
layout: page
title: "Java Tutorial: Part 3 - \"Hello, World!\""
date: 2017-08-03
include_nav: false
permalink: /tutorials/java/hello-world/
---
In this section you'll write your first Java program. Usually one's first program is a "Hello, world!" program, which will simply output `Hello, world!` to the command line.

This tutorial will also show you how to run a Java program from the command line.

---

A program consists of a series of statements. A *statement* is an indivisible part of a program that tells the computer to do some sort of action, like outputting some text or multiplying two numbers together. In Java, **each statement is followed by a semicolon**.

The following code is a Java program that outputs `Hello, world!`.

```java
public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, world!");
  }
}
```

The key part is the `System.out.println("Hello, world!")` statement. This simply outputs the sequence of characters enclosed in the quotes. We'll explain this in further detail later.

The lines surrounding this are also required. Again we'll discuss them in a later section but for now just accept that all your code must be within the inner pair of braces, though you can change the class name (`HelloWorld`). More technically, this `main` part is the *entry point* - the point at which the program begins being executed.

# Running the Program
To run the program, save the above code into a new file called `HelloWorld.java`. Ensure the file has the `.java` extension (not `.txt`) and the file name matches the class name (`HelloWorld`).

Open a new terminal window, then navigate to the directory containing `HelloWorld.java` using the `dir` command on Windows or the `cd` command on Mac or Linux.

```bash
$ cd ~/Documents/
```

```powershell
C:\> dir "C:\Documents\"
```

Before running the program, it must be *compiled* using `javac`. (I'll make a separate page explaining this soon.)

```bash
$ javac HelloWorld.java
```

Now you can run the program using `java`. Note that you just put the class name and not the `.java` extension. Hopefully you'll see `Hello, world!` outputted to the terminal.

```bash
$ java HelloWorld
Hello, world!
```

If you see a syntax error, ensure the code was entered exactly as above. If you got an error about one of the commands not being recognised and are on Windows, it is likely due to the environment variable not being set up correctly. For more comprehensive help, check out [this page in the Java tutorials](https://docs.oracle.com/javase/tutorial/getStarted/problems/) for solutions to common problems.

You just wrote, compiled and ran your first Java program!
