# tampermenu
Quick create tamper monkey floating menus.

##Example usage
```javascript
// ==UserScript==
// @name         Test tampermenu
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Easy custom floating menus
// @author       mbrightside
// @include      http://facebook.com/*
// @include      https://facebook.com/*
// @include      http://*.facebook.com/*
// @include      https://*.facebook.com/*  
// @require      https://code.jquery.com/jquery-2.1.4.min.js
// @require      https://code.jquery.com/ui/1.11.4/jquery-ui.min.js
// @require      https://raw.githubusercontent.com/JaysenDraney/tampermenu/master/menu.js
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==
/* jshint -W097 */
'use strict';

var external$uiCss = "ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/dark-hive/jquery-ui.css";
$("head").append(
    '<link href="//'
    +  external$uiCss
    + '" rel="stylesheet" type="text/css">'
);

createMenu({textName: "hiya"});

```
