---
layout: post
title:  "Why I don't use CoffeeScript"
date:   2014-12-27 22:29:45
categories: javascript
---

We all know that JavaScript used to be an almost-impossible-to-deal programming language. We also know all its history and stuff, nothing new here. Things have started getting better after the version 5 has been launched. Now using the version 6 (with [Google's Traceur][traceur], obviously), I can almost say it's enjoyable to program using JavaScript.

But it still keeps some of its *bad parts*. Mostly because it **cannot** be fixed without breaking backwards compatibility. Working websites and webapps cannot just stop working because of it. It's not acceptable.

A lot of efforts have been putted into getting ride of those bad parts. The first attempt was to get ride of JavaScript completely by using third-party platforms such as Flash and Silverlight. But it has a big caveat: you must expect or enforce your user to download, install and keep the platform updated. Unfortunately, you user will choose whether your product is valuable enough to accept all of these overhead of installing a plugin or whatever. The second attempt was to build tools to help us get ride of the bad parts.

Then a tool called `lint` was introduced, initially by Douglas Crockford as [JSLint][jslint] and later, with a less biased approach, [JSHint][jshint]. The main problem with this tool is that it only checks for syntax. If you're using ES5+, syntax quirks are probably not your main issue anymore. You might argue that not everybody is using ES5+ and you'll be right. But this number is only getting lower, once we have shims and [IE8 will no longer be supported][nomoreie8] since [Microsoft has dropped Windows XP support][nomorexp].

And finally, languages started to be built on top of JavaScript, to enhance its good parts and ride its bad parts. And [CoffeeScript][cs] was one of the first tries. And I don't think it has succeed even though it has become very popular.

CoffeeScript, problems and Scopes
---

Even if you aren't a Ruby developer or you've never played around with it, we must acknowledge that its syntax does shine. It's lovely. I simply love Ruby syntax and that's why I've started an experimental project to port it to JavaScript, called [Sapphire][sapphire] (Pokémon-related pun intended).

And CoffeeScript did it. It has taken some of Ruby and Python awesomeness and build up a fair beautiful syntax that rides some of the JavaScript's nonsense like `===`. But a new lang always comes with a semantics and it also applies to CoffeeScript, even though its semantics are somehow close to JavaScript's.

I think the most well-known problem of CoffeeScript is its scope rules. Check out the following JavaScript code:

{% highlight javascript linenos %}
var x = 1

function y(z){
	var x = 2
	return x + z
}

console.log(y(2))
console.log(x)

{% endhighlight %}

In the code above, we all know `x` inside of `y()` is a different var from `x` in the outer scope. It's called *variable shadowing* and pretty much common in programming languages in general. So, here, it'll be printed `4` and `1`, as everybody would expect.

But let's check same code, but written in CoffeeScript:

{% highlight coffeescript linenos %}
x = 1

y = (z) ->
	x = 2
	x + z

console.log y 2
console.log x

{% endhighlight %}

OMG, the second `console.log` says `x`'s value is 2. OMG!! Yes, all of the sudden, our beloved variable `x` is now a global variable everywhere and every time **any** function would use `x` it will be using the same `x`.

After all, you can still argue it's ok do avoid this scope problem and you can actually. But, are you using CoffeeScript to make your life easier, don't you?

CoffeeScript as promised
---

Let's think CoffeeScript as a language without any problems or bugs, that it does everything it should in a correct  manner.

Then, when writing a Real World™ application, what are the most common problems I face:

1. Type System
2. Async and Concurrency
3. DOM
4. Browser Compatibility
5. Native Objects

And I guess everybody's working within a browser face it too.

###1. Type System

You can't rely on the constructors `instanceof` and `typeof` in JavaScript. It doesn't have a consistent working manner. You have to build small *hacks* to help you go through all of its inconsistency. Also, its dynamic typing might be problematic. Once you don't know whether some wrong type went through your code and broke your application before you run it. Fortunately, [Flow][flow] has made our lives easier and [TypeScript][ts] also has worked on this. But CoffeeScript doesn't do anything in that sense. Not even add a way to make `instanceof` and `typeof` less inconsistent. Just leave them as they are.

###2. Async and Concurrency

I think Concurrency and Async computation are one of the most hard-to-deal questions in Computer Programming. Specially if you're working in a Imperative Language and, then, you basically don't have too much too rely on. Fortunately, JavaScript engines has an event loop that help us working with Async code, but it's definitely not enough. You can easily get yourself lost and generate race conditions. And CoffeeScript doesn't provide absolutely anything to improve it. That's a so serious issue that [TC39][tc39] have decided to include [Promises A/+][promises] yet to ES6, even though [it has its own caveats][promises-problems].

###3. DOM

Everybody hates the DOM. It's slow, hard to deal and its API for JavaScript is imperative. It's just a like awake nightmare and yet again, CoffeeScript does nothing to fix it and leaves it just like it is. And before [React][react], I thought we'd never have a good abstraction over the DOM and a good API to work with. It'd be like a dream if CoffeeScript would have it. Luckily, [Elm][elm] does it and also have implemented a Virtual DOM (borrowed from React) to make it faster to work with DOM mutations.

###4. Browser Compatibility

It's just laughable that it didn't provide ES5 shim by default. I don't think there's no good reason to not doing so. Making people handle with JavaScript versions and browser compatibility by hand is just insane when they are already going through a compilation process. Luckily, other languages such as [TypeScript][ts] believes it's an important feature and they are adding ES6 support to it.

###5. Native Objects

We all know that even in the ES5, JavaScript's native objects lacks important functions such as `find`, `where`, `flatten` and `zip`, just to enumerate some. The number of [packages that relies on Underscore.js at npm][_.dependants] is enough to prove my case. Funny part is that CoffeeScript and Underscore has the same author, but I cannot understand his reasons not to add all those functions by default into CoffeeScript.


###Bias and Style

There's more reasons I don't use CoffeeScript that the ones I've enumerated above. But these ones are more related to my background and preferences than CoffeeScript's own fault. It's basically a lack of support to Functional Programming Style.

JavaScript already has Lambdas, but I don't think it's enough. I miss Pattern Matching, Guards and List Comprehensions and so on. CoffeeScript doesn't provide any of them, which makes my option for it very unlikely.


Summarization and Conclusion
---

After all those reasons, you might be asking yourself which languages that compiles to JavaScript would be a good option to check out. So, here is a table of Langs Vs Features for you to base on:

|---
| Language | Beautiful Syntax | Static Typing | Concurrency Model | DOM Abstraction | Browser Compatibility | Native Objects | Functional Programming
| -
| CoffeeScript 	| ✓     									| ✖ | ✖ | ✖ | ✖ | ✖ | ✖
| LiveScript 		| ✓     									| ✖ | ✖ | ✖ | ✖ | ✖ | supports
| TypeScript 		| same as JavaScript  		| optional | ✖ | ✖ | ✓ | ✓ | ✖
| Dart 					| same as Java ☹      		| optional | ✖ | ✖ | NA | NA | ✖
| ClojureScript | same as Clojure ☺   		| ✖ | ✓ | ✖ | NA | NA | enforces
| Elm 					| inspired by Haskell ☺   | ✓ | ✓ | ✓ | NA | NA | enforces
| PureScript 		| same as Haskell ☺   		| ✓ | ✖, but Monads | ✖ | NA | NA | enforces



And obviously you can get some of these features by using some tools. And that's basically what I've been doing in some projects that JavaScript is required:

 - Static Type Checker => [Flow][flow]
 - Better Syntax => [Traceur][traceur] or [Macros][sweet]
 - Dom Abstraction => [React][react]
 - Concurrency => [Promises][bluebird]

It worths mentioning that nothing is a wonderland. Some of amazing langs listed above also comes with their own environment, such as [ClojureScript][cljs], [Elm][elm], [Dart][dart] and [PureScript][ps]. So, you'll need to install Clojure, Haskell or Dart compilers/tools in order to use them. There would be situations that it's just impractical, and you'll need to stick with JavaScript environments, such as Node.js.

So, choose your tools wisely.


[traceur]: https://github.com/google/traceur-compiler
[_.dependants]: https://www.npmjs.com/browse/depended/underscore
[jslint]: http://jslint.com/
[jshint]: http://jshint.com/
[sapphire]: https://github.com/jugoncalves/sapphire
[nomorexp]: http://windows.microsoft.com/en-us/windows/end-support-help
[nomoreie8]: http://www.techtimes.com/articles/12722/20140811/17-months-until-ie8-support-ends.htm
[flow]: http://flowtype.org/
[ts]: http://www.typescriptlang.org/
[cs]: http://coffeescript.org/
[elm]: http://elm-lang.org/
[react]: http://facebook.github.io/react/
[cljs]: http://clojure.org/clojurescript
[clj]: http://clojure.org/
[tc39]: http://www.ecma-international.org/memento/TC39.htm
[bluebird]: https://github.com/petkaantonov/bluebird/
[promises-problems]: http://robotlolita.me/2013/06/28/promises-considered-harmful.html
[promises]: https://promisesaplus.com/
[dart]: https://www.dartlang.org/
[ps]: http://www.purescript.org/
[sweet]: http://sweetjs.org/
