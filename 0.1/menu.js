/*global 
  GM_addStyle, $
*/
'use strict';

function createMenu(options){
  

  var $expander = $('<button/>').attr('id', 'amazonFreeStyleExpander')
  .text("Jaysend's Amazon FreeStyle")
  .button({
    icons: { primary: "ui-icon-gear" },
    text: false
  })
  .click(function(){
    expand();
  });
  
}
