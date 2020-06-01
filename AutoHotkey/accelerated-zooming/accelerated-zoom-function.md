# Accelerated Zoom Function Inside of Premiere Pro

<p align="center">
  <img src='./assets/cover-image.jpg'>
  <cite>Photo by <a href='https://unsplash.com/@mark_crz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Mark Cruz</a> on <a href='https://unsplash.com/s/photos/premiere-pro?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>.</cite>
</p>

- [Accelerated Zoom Function Inside of Premiere Pro](#accelerated-zoom-function-inside-of-premiere-pro)
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
<a href='https://www.youtube.com/watch?v=hSAz2Z3Kt54'><img src='https://img.youtube.com/vi/hSAz2Z3Kt54/0.jpg' width='80%'></a>
</p>

Welcome to the Automator Plus Github repo, where we will show you how to automate your editing workflow. In this tutorial we'll explore a few AHK commands and how we can use them to improve our editing speed.

The commands we'll be covering today:
+ #NoEnv
+ #SingleInstance force
+ SendMode Input
+ SetWorkingDir %A_ScriptDir%
+ sendInput
+ sleep

We have a great tutorial on some core programming concepts that you can view <a href='https://github.com/automator-plus/tutorials/blob/master/CEP/adobe-extendscript-programming-basics/adobe-extendscript-programming-basics.md'>here</a>.

 ## The AHK commands we will be using:

 ### The AHK header commands

 Let's create a new AHK file in the same folder where we created out helloWorld.ahk script. We'll call it navigateCommands.ahk. If you are only joining us today, you can go ahead and create a folder on your desktop call automatorPlus and save the new AHK file inside.

Make sure you have VSC open and that you are busy editing the newly created AHK file.

First we have to start of with writing a few 'header' commands inside of our script. Think of these 'header' commands as commands that applies to the entire AHK script, and not to specific functions inside of your script. Meaning - every subsequent function that you write will automatically use the header commands, unless otherwise specified.

#### #NoEnv command

The first command we have to write is the #NoEnv command. This command avoids checking empty variables to see if they are environment variables. It is recommended for all new scripts. 
For example:
``` javascript
#NoEnv 
MsgBox %WinDir%
// The above would not retrieve the "WinDir" environment variable (though that could be solved by doing WinDir := A_WinDir near the top of the script).
```

For us as videographers, this basically means that we should write this at the top of every script, even if we don't understand exactly what it does.

#### #SingleInstance force command

The second command we have to write is the #SingleInstance force command. This one is a bit easier to understand if you've never programmed before. It basically determines whether a script is allowed to run again when it is already running. Think about it, - you don't want the same script open 60 times.

#### SendMode Input command

This command specifies that all your 'send' commands defaults to sendInput, rather than to sendEvent. If you don't understand the difference just yet, don't worry, we'll cover that in a future tutorial. For now, all you need to know is that the sendInput command is preferable (for now) over the sendEvent command.

#### SetWorkingDir %A_ScriptDir% command

We've touched on environment variables in [this](https://github.com/automator-plus/tutorials/blob/master/CEP/getting-started-with-the-adobe-premiere-pro-api/getting-started-with-the-adobe-premiere-pro-api.md) tutorial, but to briefly explain, this commands sets the active working directory to the folder where the current script is located. That means that when we start running commands like ImageSearch, etc. we won't have to input absolute paths each time. Instead the script will know to search the active working directory.

 ### The sendInput command

The sendInput command is probably one of the easiest commands to remember and execute. It 'sends' the 'input' that you supply it with.

Let's take an example. Let's say you have to type in your e-mail address into a form many times over. You could do it manually by typing it out each time, or alternatively, you could use the sendInput command.

````javascript
//We'll start by adding the shortcut we want to assign this command to, followed by the sendInput command, followed by the input you want it to send.
Numpad1:: sendInput, mysuperlongtestemailaddress@gmail.com
````

So with the above example, whenever we press Numpad1, the script will send our e-mail address as the input. Let's test it out. Run your newly created script, open notepad.exe and press Numpad1 on your keyboard.

### The sleep command

The sleep command can best be explained as telling the computer to 'wait' for the specified amount of time - the time being measured by milliseconds. So for example, if I told the script to:
````
sleep 5000
````

I'm basically telling it to wait for 5 seconds, before continuing with the script.

## The current methods for zooming in and out of your timeline

Before we continue, let's first review what the current methods are for zooming in and out of the timeline inside of Premiere Pro.

+ Using your alt+mouse wheel button - This allows you to zoom in and out of your timeline.
+ Using the "=" sign and the "-" sign on your keyboard - This allows you to zoom in and out of your timeline.
+ Using the backslash key on your keyboard - This allows you to zoom out to your full timeline view.

## Now let's put it all together! Our first functions:

Our end goal is to remap the predefined shortcut keys to new keys that we would like to use.

The shortcut keys we'll be reassigning today:
+ The '=' symbol will be reassigned to the NumpadAdd button.
+ The '-' symbol will be reassigned to the NumpadSub button.
+ The backslash symbol will be reassigned to the 'Numpad /' button.

First, let's add all our header code to our script.
````
#NoEnv
#SingleInstance Force
SendMode Input
SetWorkingDir, %A_ScriptDir%
````

Next up, we'll be adding our first function to our script. For the sake of what we are trying to achieve, just remember that a function is created in the following way:
````Java
//first the function name
zoomInOneStep

//followed by a set of braces
()

//and inside the braces we add a parameter. For now, the parameter added is not super important, but we can't leave it empty.
zoomIn

//On a new line we have to open a set of curly braces, and the function will execute all commands inside of these curly braces.
{

}

//When we add it all together it should look something like this:
zoomInOneStep(zoomIn)
{

}
````

So let's add the commands we want the function to execute.
````
zoomInOneStep(zoomIn)
{
  sendInput, =
  sleep 100
}
````
A quick recap - this function will now send the = symbol as input and then sleep for 100 milliseconds.

Let's go ahead and create the zoom out functions as well:
````
zoomOutOneStep(zoomOut)
{
  sendInput, -
  sleep 100
}
````

## Using the loop statement to zoom multiple times
If you want a more in depth explanation on what a loop statement is, check out our [programming basics tutorial](https://github.com/automator-plus/tutorials/blob/master/CEP/adobe-extendscript-programming-basics/adobe-extendscript-programming-basics.md). Basically a loop statement repeats the specified commands (specified in a new set of curly braces) for the amount of times you specify.

````Java
loop, 3
{
  commands here
}
````

### Zoom in three steps
Our second to last function of the day is the `zoomInThreeSteps` function.

````java
//Declare the function as usual:
zoomInThreeSteps(zoomIn)
{
  //Now we will add a loop statement
  loop,  3
  {
    //Now we call the `zoomInOneStep` function that we've created previously...
    zoomInOneStep("")
  }
}

//Without any comments:

zoomInThreeSteps(zoomIn)
{
  loop, 3
  {
    zoomInOneStep("")
  }
}
````

Now remember, when we created our first function, I said that the parameters are inserted into the braces after the function name. I also said that it's not super important right now as you don't need to call any parameters when using these functions. That's why we are passing an empty string as the parameter when calling the below function:
````
zoomInOneStep("")
````

Let's create the last function of the day:

````java
zoomOutThreeSteps(zoomOut)
{
  loop, 3
  {
    zoomOutOneStep("")
  }
}
````

## Assigning our functions to the various shortcut keys
Finally, let's assign our functions to the shortcuts we would like to use:

We've created 4 functions and the shortcuts I would like to assign is a combination of the NumpadAdd button and the NumpadSub button. In order to assign a keyboard shortcut we have to write the key we want to use, followed by two colons. For example: `NumpadAdd::`

To call the function, we just insert the function name, follow by a pair of braces containing the parameter. (Remember, for these functions the parameter will be an empty string `("")`)

````
NumpadAdd:: zoomInOneStep("")
NumpadSub:: zoomOutOneStep("")
````

I'd like to assign my `zoomInThreeSteps("")` and my `zoomOutThreeSteps("")` functions to the modifier keys Control+NumpadAdd and Control+NumpadSub.

In order to use these modifier keys, we have to use the symbols that autohotkey has assigned to them. In the case for the {control} modifier key, we have to use the symbol `^`.

````java
//So instead of typing Control+NumpadAdd:: instead you'll type:
^Numpad8::
````

So the last two will look like this:
````
^NumpadAdd:: zoomInThreeSteps("")
^NumpadSub:: zoomOutThreeSteps("")
````

## Conclusion

So in this tutorial, we looked at a few AHK commands and how to use those commands to create our own functions. We created four different functions to control the zooming on our timeline and assigned those functions to shortcuts that we can use.