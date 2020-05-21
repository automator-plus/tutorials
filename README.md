<h1> Automator Plus Tutorials</h1>

<p align="center">
  <img src='./assets/cover-image.jpg'>
  <cite>Photo by <a href='https://unsplash.com/@ffstop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Fotis Fotopoulos</a> on <a href='https://unsplash.com/'>Unsplash</a>.</cite>
</p>

<h2>Table of Content</h2>

- [Introduction](#introduction)
- [AutoHotkey](#autohotkey)
  - [Tutorials](#tutorials)
- [Adobe Common Extensibility Platform (CEP)](#adobe-common-extensibility-platform-cep)
  - [Tutorials](#tutorials-1)
  - [Quickies](#quickies)

# Introduction

Welcome to the Automator Plus GitHub tutorial repository!

Here you'll find all code resources associated with the tutorial videos released on <a href='https://www.youtube.com/channel/UCZ37VRaNmWZ3ba0xQ2bsbOw'>our YouTube channel</a>. 


Our mission with this project is to bridge the gap for creatives to start programming by providing real-life examples of how a little bit of code can help you speed up and improve your photo or video editing workflow.

Currently, we have tutorials for creating Adobe Premiere Pro automations on Windows using <a href='https://www.autohotkey.com/'>AutoHotkey</a> as well as using the <a href='https://github.com/Adobe-CEP/CEP-Resources'>Adobe Common Extensibility Platform (CEP)</a> API on either Windows or Mac to interact with and create extensions for Premiere Pro. The methods we discuss regarding the CEP API are not only applicable to Premiere Pro but will work for any Adobe Creative Cloud application that supports the CEP API.

# AutoHotkey
AutoHotkey is easy to use, free, open-source scripting language for Microsoft Windows. With it, you can create shortcuts to virtually anything and you can create powerful macros to automate tedious tasks. Here are a few examples:

+ Mapping your internet browser to a specific shortcut.
+ Using shortcuts to fill in frequently used phrases.
+ Combining various shortcuts together inside your favourite program. For example, inside of Premiere Pro, you can combine the 'select clip at playhead' shortcut with the 'ripple delete shortcut'. 

You can download the AutoHotkey program <a href='https://www.autohotkey.com/'>here</a>.

For the purpose of this channel, we'll be showing you how to use AutoHotkey to automate tedious tasks inside of Premiere Pro.

As the saying goes, there are many ways to skin a cat, and AutoHotkey is but one of the tools available to automate your workflow and it has its own set of pros and cons. The biggest advantage of using AutoHotkey is that it is *easy* to use. When we say easy, we mean *really* *easy*. You don't need any programming knowledge to start learning how to use AutoHotkey. 

One of the drawbacks to using AutoHotkey is that it is OS-specific, meaning you can only use it on Windows. Another drawback is that a lot of the advanced automations that we'll be writing will also be 'computer' specific - meaning that it will be a tedious task to replicate on another computer. The biggest drawback of all though is that you have limited access to information inside of your host program. For example, you can't easily access the timecode, the in and point of clips, the number of clips on a given timeline, etc, etc. That is where the power of CEP comes into play:

## Tutorials

Check out our YouTube channel <a href='https://www.youtube.com/channel/UCZ37VRaNmWZ3ba0xQ2bsbOw'>here</a> with videos for the following tutorials:

+ <a href='https://github.com/automator-plus/tutorials/blob/master/AutoHotkey/1%20Getting%20Started%20With%20AutoHotkey/getting-started-with-autohotkey.md'>Start Automating Premiere Pro with AutoHotkey</a>

# Adobe Common Extensibility Platform (CEP) 

Although AutoHotkey is a lot more intuitive and easier to get started with if you don't have a programming background, a method of being dependent on the OS has its drawbacks. 

As with everything in life, whatever tools works for you and solves your problem, go ahead and use that tool. In other words, if it is easier for you to use AutoHotkey to automate a task, then go for it. However, there might be some actions you aren't able to do with AutoHotkey, or perhaps you want to build a plug-in that can work across multiple computers and operating systems. That is where CEP comes in.

 The <a href='https://github.com/Adobe-CEP/CEP-Resources'>Adobe Common Extensibility Platform (CEP)</a> allows us a way to program commands and actions directly into any Adobe Creative Cloud applications using an HTML5/JavaScript interface model. What this means is that with a flavour of JavaScript code you can interact with your Adobe applications and start automating tasks with your new superpowers. 

## Tutorials

Check out our YouTube channel <a href='https://www.youtube.com/channel/UCZ37VRaNmWZ3ba0xQ2bsbOw'>here</a> with videos for the following tutorials:

+ <a href="./CEP/getting-started-with-the-adobe-premiere-pro-api/getting-started-with-the-adobe-premiere-pro-api.md">Getting Started with the Adobe Premiere Pro API</a>
+ <a href="./CEP/adobe-extendscript-programming-basics/adobe-extendscript-programming-basics.md">Adobe ExtendScript Programming Basics</a>
+ <a href="./CEP/debugging-the-adobe-premiere-pro-api/debugging-the-adobe-premiere-pro-api.md">Debugging the Adobe Premiere Pro API</a>

## Quickies

We've also got tutorials on <a href='https://www.youtube.com/channel/UCZ37VRaNmWZ3ba0xQ2bsbOw'>our YouTube channel</a> for the following quickies:

+ <a href='https://github.com/automator-plus/tutorials/blob/master/CEP/quickies/insertClip.jsx'>How to Insert a Clip in Premiere Pro</a>