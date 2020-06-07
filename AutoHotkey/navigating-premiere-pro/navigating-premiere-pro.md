# Navigating the Premiere Pro Timeline with AutoHotkey

<p align="center">
  <img src='./assets/cover-image.jpg'>
  <cite>Photo by <a href='https://unsplash.com/@kalvisuals'>Kal Visuals</a> on <a href='https://unsplash.com/s/photos/video-editor?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>.</cite>
</p>

- [Navigating the Premiere Pro Timeline with AutoHotkey](#navigating-the-premiere-pro-timeline-with-autohotkey)
  - [Introduction](#introduction)
  - [The AHK commands we will be using:](#the-ahk-commands-we-will-be-using)
    - [The AHK header commands](#the-ahk-header-commands)
      - [#NoEnv command](#noenv-command)
      - [#SingleInstance force command](#singleinstance-force-command)
      - [SendMode Input command](#sendmode-input-command)
      - [SetWorkingDir %A_ScriptDir% command](#setworkingdir-a_scriptdir-command)
    - [The sendInput command](#the-sendinput-command)
    - [The sleep command](#the-sleep-command)
  - [The current methods for zooming in and out of your timeline](#the-current-methods-for-zooming-in-and-out-of-your-timeline)
  - [Now let's put it all together! Our first functions:](#now-lets-put-it-all-together-our-first-functions)
  - [Using the loop statement to zoom multiple times](#using-the-loop-statement-to-zoom-multiple-times)
    - [Zoom in three steps](#zoom-in-three-steps)
  - [Assigning our functions to the various shortcut keys](#assigning-our-functions-to-the-various-shortcut-keys)
  - [Conclusion](#conclusion)



## Introduction
<p align="center">
<a href='https://www.youtube.com/watch?v=Ni_x_mXqyXI'><img src='https://img.youtube.com/vi/Ni_x_mXqyXI.jpg' width='80%'></a>
</p>

Welcome to the Automator Plus Github repo, where we will show you how to automate your editing workflow. In this video we'll be creating various functions to help navigate the Premiere Pro timeline.

Link to sample code:
