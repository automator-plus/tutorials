# Introduction to Adobe Scripting with CEP and VS Code

## 1. Introduction

In this tutorial we'll go through installing <a href='https://code.visualstudio.com/'>VS Code</a>, the preferred Integrated Development Environment or <a href='https://en.wikipedia.org/wiki/Integrated_development_environment'>IDE</a> for programming Adobe ExtendScript. If you don't have any programming experience, concepts like an IDE and Adobe ExtendScript might be a bit foreigner, but fret not, that's why we're here, to build it up from the ground and enable you as a creative to gain the superpowers that programming the Adobe suit unlocks.

To start, an IDE is an acronym for Integrated Development Environment, an is bascially the "text editor" that you code in. I say "text editor" in air quotes as your "text editor" when coding isn't _just_ a "text editor", it is your interface into your code base and choosing a good IDE will help you on your way to greatness much quicker. There is an old saying about a bad workman always blames his tools, and there is truth in that. However, when it comes to IDE's some give you supra powers, other give you powers. 

Luckily, Adobe has made the best choice for us by creating and open sourcing a VS Code Extension to enable VS Code to connect directly into the Adobe applications. Previously, you had to use the Adobe created Extend Script Toolkit, read more <a href='https://www.adobe.com/devnet/scripting.html'>here</a>, to run your Adobe ExtendScript code - let's just say that the user experience of the Extend Script Toolkit isn't something you'll write home about. Personally we feel this has made it difficult in the past for non-programming folk to get started with the CEP API which has been around for years, luckily VS Code changes all that. 

For the non-programming folk, open source software is esentially free software, well sort off. The code is freely availble for you to use and abuse and you might think why would Adobe make software availble for free. Well, they've learned from the rest of the world that the only way to have a stable code base is to make your code open source that the open source community, you and I, can build, test and deploy usefull add-ons to their software without any cost to them. So open source isn't completely free, Adobe still employs many software engineers to write the CEP API, however, the benefit that Adobe gets by having the entire world test and requist features to their code base outweights the costs ten fold. 

## 2. The Adobe CEP API

Let's look at the various components that you'll need when developing extendscript 

<table style="width:100%">
  <tr>
    <th style="text-align:left">Component</th>
    <th style="text-align:left">Description</th>
  </tr>
  <tr>
    <td style="text-align:right"><img src='./assets/vsCodeLogo.png' width='70px'></td>
    <td>VS Code - our IDE. </td>
  </tr>
    <tr>
    <td style="text-align:right"><img src='./assets/exstendScriptAddOn.png' width='80px'></td>
    <td>The ExtendScript VS Code plug-in translates our written JavavScript or ExtendScipt code to commands that the host applications kan understand via the CS Interface. We'll come back to the CS Interface.</td>
  </tr>
    </tr>
    <tr>
    <td style="text-align:right"><img src='./assets/hostLogo.png' width='140px'></td>
    <td></td>
  </tr>
      <tr>
    <td style="text-align:right"><img src='./assets/scriptLogo.png' width='60px'></td>
    <td></td>
  </tr>
</table>

How all these components fit together looks something like this: 

<div style='text-align:center'>
    <img src='./assets/architecture.png' width='60%'>
</div>
