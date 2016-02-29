/*global 
  GM_addStyle, $
*/
'use strict';

function createMenu(options){
  
  function newIcon(iconClass){
    return $('<span/>').addClass('ui-icon ' + iconClass);
  }
  
  var baseCss  = { 
    "background"  : "none",
    "color"       : "black",
    "top"         : "0px",
    "z-index"     : "1000",
    "position"    : "fixed"
  };
  
  var $base = $('<div/>').attr('id','tampermenubase').css(baseCss);
  
  
  function toggeExpand(){
    $base.toggleClass('expanded'); 
  }

  var $expander = $('<button/>')
  .attr('id', 'amazonFreeStyleExpander')
  .text(options.textName)
  .button({
    icons: { primary: "ui-arrowthickstop-1-e" },
    text: false
  })
  .click(function(){
    expand();
  });
  
}
