---
layout: page
title: Lambda Expressions
date: 2017-08-07
include_nav: false
permalink: /tutorials/java8/lambda-expressions/
---
Java 8 contains many new features, some of which are based on concepts in functional programming. One such feature is **lambda expressions**.

There are many situations in which we want to pass a function as an argument to another function. For example, we may want to have some code run at a later point (e.g. when a button is pressed or once finishes being retrieved from a database) but do something useful in the meantime. The function passed as an argument is known as a **callback**, since it is *called back* (run) at a later time.

Another example is filtering: we have an algorithm for filtering a collection and want to abstract away the predicate[^1] indicating whether to keep an element. Similarly for sorting --- we don't care about the criterion by which elements are compared.

## A Simple Approach

Let's take the filtering example. Say we have the following list of integers:
```java
List<Integer> list = Arrays.asList(1, 2, 3, 4, 5);
```

One could quite easily write a method to filter the list to, for example, keep only even numbers:
```java
static List<Integer> filter(List<Integer> list) {
  List<Integer> filteredList = new LinkedList<>();
  for (Integer x : list) {
    if (x % 2 == 0) {
      filteredList.add(x);
    }
  }
  return filteredList;
}
```

```java
List<Integer> filteredList = filter(list);
```

Obviously we could try to make it more general by passing in the `2` or `0` as parameters, but what if we didn't want to use the `%` operator altogether?

It would be preferable to pass the `x % 2 == 0` expression as an argument, to then be evaluated for each element in the same way as above.

## Defining a Functional Interface
In Java, we already have interfaces, which we can use to provide our own implementation of the predicate. To allow passing in our own predicate, we can create a `Predicate` interface containing the predicate and pass an instance of this to the `filter` method. Note we can improve this further by using generics.

```java
interface Predicate<T> {
  boolean test(T t);
}
```

```java
static List<T> filter(List<T> list, Predicate<T> predicate) {
  ...
  if (predicate.test(x)) {
    filteredList.add(x);
  }
  ...
}
```

The `Predicate` interface we defined is a **functional interface**, which is just an interface with *exactly one* method. (More specifically, it's an interface with exactly one *abstract* method, since, in Java 8, interfaces can have default and static methods, but those aren't counted. Also, any abstract methods overriding public methods of `Object` aren't counted.)

As an aside, though not required, we can add the `@FunctionalInterface` annotation to the interface we've defined to have the compiler check that it is a valid functional interface.

## Using a Named Class
We still need to define our predicate. Simply create a new class that implements our `Predicate` interface:
```java
class EvenNumbersPredicate implements Predicate<Integer> {
  @Override
  public boolean test(Integer x) {
    return x % 2 == 0;
  }
}
```

Now just call filter with this implementation.
```java
List<Integer> filteredList = filter(list, new EvenNumbersPredicate());
```

## Using an Anonymous Class
Rather than creating separate named classes for each predicate we want to use, we can use **anonymous classes**:
```java
List<Integer> filteredList = filter(list, new Predicate<Integer>() {
  @Override
  public boolean test(Integer x) {
    return x % 2 == 0;
  }
});
```

## Using a Lambda Expression
Even an anonymous class still requires a lot of boilerplate code for just a single method. Further, since there is only one method in the class, we can omit the method's name and just provide its functionality. Lambda expressions are a shorthand for creating instances of classes with a single method.

The anonymous class above can be rewritten as the following lambda expression:
```java
x -> {
  return x % 2 == 0;
}
```

It has 3 parts:
* **Parameters** --- `x`  
  Parameters are enclosed by brackets and separated by commas.  
  The types can be **inferred** (e.g. `(x, y)`) or **declared** (e.g. `(int x, String y)`).  
  Brackets are optional if there is one parameter with an inferred type.

* **Arrow** --- `->`

* **Body** --- `{ return x % 2 == 0; }`  
  There are two types of lambda expression: **statement lambdas** and **expression lambdas**. This means the body is a statement or expression respectively.  
  More specifically, in an expression lambda, the body can be an **expression** or a **void method call**

For completeness, here's line of code from earlier rewritten using a lambda expression.
```java
List<Integer> filteredList = filter(list, x -> x % 2 == 0);
```

## Footnotes
[^1]: A **predicate** is a function that takes a single argument and returns a boolean.

https://docs.oracle.com/javase/specs/jls/se8/html/jls-15.html#jls-LambdaParameters
