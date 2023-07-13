---
layout: post
title: Discord Enable Right Click Menu
date:   2023-07-12 01:49
description: Removing Discord's rightclick menu for the default browser one
toc: true
tags: [discord,userscript]
---

<br>

I use Discord in my browser. For some reason, they don't let you right click on links so that you can copy them. Why do they do this?? Probably to make you not use the browser, but I refuse to install their terrible desktop app.

The solution: Javascript

As bad as Javascript is, it's actually not bad and super usefull.

So anyway, I've written a userscript which I load using [Violentmonkey](https://github.com/violentmonkey/violentmonkey) which disables their right click menu. 

I've also made it a [bookmarklet](https://en.wikipedia.org/wiki/Bookmarklet) so that it can be used without any userscript program.


<br>

# The userscript

Just slap this gui into your userscript manager, it should be enabled by default, and should be toggleable using a button.

```js
// ==UserScript==
// @name          Allow Right Click Discord
// @description   Force Enable Right Click
// @include       *://discord.com*
// @compatible    Chrome + Violentmonkey
// @grant         GM_registerMenuCommand
// @license       GPLv3
// ==/UserScript==

(function() {
    'use strict';

    var isAbsoluteModeEnabled = false;
    var eventsToStop = [
        'contextmenu',
        // 'mouseup',
    ];


    function stopPropagation(e) {
        e.stopPropagation()
    }


    function absoluteMode()
    {
        if(isAbsoluteModeEnabled) {
            eventsToStop.forEach(
              function(event) {
                  console.log("Enabling " + event);
                  document.removeEventListener(event, stopPropagation, true);
              }
            );
        } else {
            eventsToStop.forEach(
              function(event) {
                  console.log("Disabling " + event);
                  document.addEventListener(event, stopPropagation, true);
              }
            );
        }


        isAbsoluteModeEnabled = !isAbsoluteModeEnabled;
    }

    absoluteMode();


    function enableCommandMenu() {
          var commandMenu = true;
          try {
              if (typeof(GM_registerMenuCommand) == undefined) {
                  return;
              } else {
                  if (commandMenu == true ) {
                      GM_registerMenuCommand('Toggle Right Click Mode', function() {

                          var text;

                          if (isAbsoluteModeEnabled) {
                              text = "Turn OFF Absolute Right Click Mode?";
                          } else {
                              text = "Turn ON Absolute Right Click Mode?";
                          }

                          return confirm(text) == true ? absoluteMode() : null;
                      });

                  }
              }
          }
          catch(err) {
              console.log(err);
          }
      }
    enableCommandMenu();

})();
```

<br>

# The bookmarklet

I have no idea why nobody uses these, they're awesome.

I put a whitelist at the top if you wanna add more sites, but I doubt they will work. If you run it on a site that is not in the blacklist you will get a warning popup instead of the usual toggle popup.

```js
javascript:(
    function()
    {
        const WHITELIST = [
            "discord.com",
        ];

        const showAlertWarning = true;
        const url = window.location.hostname;
        const MATCH = RegExp(WHITELIST.join("|")).exec(url);

        if(!MATCH) {
            const ALERT = url + " is not in the Whitelist!";
            console.log(ALERT);
            if(showAlertWarning) {
                window.alert(ALERT);
            }
            return;
        }

        if (document.isAbsoluteModeEnabled === undefined) {
            document.isAbsoluteModeEnabled = false;
            document.stopPropagation = function stopPropagation(e) {
                e.stopPropagation()
            }
        }

        var eventsToStop = [
            'contextmenu',
            // 'mouseup',
        ];

        function absoluteMode()
        {
            if(document.isAbsoluteModeEnabled) {
                eventsToStop.forEach(
                function(event) {
                    console.log("Enabling " + event);
                    document.removeEventListener(event, document.stopPropagation, true);
                }
                );
            } else {
                eventsToStop.forEach(
                function(event) {
                    console.log("Disabling " + event);
                    document.addEventListener(event, document.stopPropagation, true);
                }
                );
            }

            document.isAbsoluteModeEnabled = !document.isAbsoluteModeEnabled;
        }

        var text;

        if (document.isAbsoluteModeEnabled) {
            text = "Turn OFF Absolute Right Click Mode?";
        } else {
            text = "Turn ON Absolute Right Click Mode?";
        }

        if (confirm(text)) { absoluteMode(); }
    }()
);
```