---
layout: post
title:  "Learning a proglang for fun: a one year-long challenge"
date:   2015-01-16 22:29:45
categories: proglang
---

I've always been a kind of industry-driven person. Even though I've never been sold to Java, I always tried to keep my learning process close to a industry applicability. Make time to learn something new that I could not have some sort of direct return seemed not to be a good fit in my life.

But some things has changed. Last year, I have made some time and taken both [Louv1.1x][louv1.1x] and [Louv1.2x][louv1.2x] courses at EdX on Paradigms of Computer Programming. Prof. van Roy and his TAs have done an amazing job during the courses and it was a great experience.

In order to follow the course, the students had to learn a programming language designed by van Roy called [Oz][mozart-system]. It's a interesting language and its purpose is to get people started into multiple paradigms. Just like Scratch, Oz is an educational language. I have to be true and say that it has pulled me down a bit: I wasn't intended to learn yet another language. But I gave it a try.

I found the process of learning Oz extremely joyful. It helped me a lot to understand Haskell and to improve my everyday code in JavaScript. And because of this good experience I decided to give myself a challenge:

> Learn a Programming Language just for Fun.

Rules
----

But to be fair, the challenge has to have some specific rules.

1. The language has to be outside of industry. Absolutely no one (or just a very few) company is running something written in this lang in production. So that, Haskell, Erlang, Elixir, OCaml are automatically out.
2. The language should have at least one eccentric feature.
3. It cannot be an esoteric language.
4. It should have at least one compiler or interpreter that's not in beta anymore (No one wants to waste time fighting compiler compilations, quirkness and incompatibilities).
5. I have to make time to complete the challenge in a timespan of 1 year (So, in January of 2016, I should've done a post about this experience).

That been said, I got to choose my programming language for the challenge.

Candidates
---

I've made a list of the candidates for 2015. Yes, I still haven't chosen. First of all, I have some inherently interests in some features I always want to learn about:

- Automata-driven:
	The idea of programming a system which is a big Finite-State Machine looks like fun. Mostly because I think it'd be an interesting way to represent Graphical User Interfaces, but I have never played around with something like this.
- Concatenative Programming:
	  Point-free style is something I am somehow interested in. I usually avoid it when programming in Haskell because of readability. But it would be really fun to take it to a next level.
- Prototype-based Object-Oriented Programming:
	Yes. I know. It's kind of cheating. My main programming language is JavaScript and it already embraces Prototype-based OOP. But I want to give it an academic try and learn a language which implements it an this fashion.
- Logic Programming:
	I miss Prolog. No, really.
- Theorem Prover:
	Isn't First-class Types magical per se?

So, here it is the candidates:

1. Esterel (Automata-driven)
	I could have CEC working, but I'm still not sure. It lacks documentation and good part of tutorials are in French. (Should I use it as an excuse to make more time for French lessons?)
2. [Factor][factor] (Concatenative Programming)
	Still don't have the 4 rule working, but it has a T-Rex as a mascot. Isn't it amazing?
3. [NewtonScript][ns] (Prototype-based Object-Oriented Programming)
	4 rule missing, but I've read a ton of papers which cites NewtonScript when Prototype-based OOP subject comes up. And it has a funny name.
2. [miniKanren][minik] (Logic Programming)
	It looks like a small language and I could found more compilers for it than actual content. At least, there's an chapter about it in [Seven More Languages in Seven Weeks][7in7].
3. [Idris][idris] (Theorem Prover)
    It has Monad comprehensions. What else should I say?

You might have noticed that some of my reasons to choose a feature or a language aren't... let's say... *logical*. But I don't think it has to be. I'm doing this for fun and the process shouldn't be constrained by Real World™'s guidelines. Do you have any suggestions for me of features or languages to consider?

That's it. I think I'm going to make a post when I've made my mind. ☺

[louv1.1x]: https://www.edx.org/course/paradigms-computer-programming-louvainx-louv1-1x
[louv1.2x]: https://www.edx.org/course/paradigms-computer-programming-louvainx-louv1-2x
[mozart-system]: http://mozart.github.io/
[7in7]: https://pragprog.com/book/7lang/seven-more-languages-in-seven-weeks
[factor]: http://factorcode.org/
[ns]: http://newtonscript.org/
[minik]: http://minikanren.org/
[idris]: http://www.idris-lang.org/

