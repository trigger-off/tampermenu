/*global GM_addStyle, $ */
'use strict';

function createMenu(options){

    function newIcon(iconClass){
        return $('<span/>').addClass('ui-icon ' + iconClass);
    }

    // SET UP THE FLOATING DIV
    var baseCSS  = { 
        "background"  : "none",
        "top"         : "0px",
        "z-index"     : "1000",
        "position"    : "fixed"
    };

    // BASE ITEMS
    var $base = $('<div/>').attr('id','tamperBase').css(baseCSS);
    var $menu = $('<ul/>').attr('id','tamperMenu');
    var $expander = $('<button/>').attr('id', 'tamperExpander');
    var $close = $('<li/>').attr('id', 'tamperClose');

    // EXPANDER LOGIC
    var globalCSS = "";
    globalCSS += "#tamperBase.expanded #tamperMenu{ display:block}";
    globalCSS += "#tamperBase.expanded #tamperExpander{ display:none}";
    globalCSS += "#tamperBase:not(.expanded) #tamperMenu{ display:none}";
    globalCSS += "#tamperBase:not(.expanded) #tamperExpander{ display:block}";

    GM_addStyle(globalCSS);

    $expander.text(options.textName)
    .button({
        icons: { primary: "ui-icon-arrow-4-diag" },
        text: false
    })
    .click(function(){
        $base.toggleClass('expanded'); 
    });

    
    var items = [];
    //CUSTOM ITEMS
    $.each(options.items, function (i, itemConfig) {
        var $item = $('<li/>').attr('id', 'tamperMenuItem' + i);
        $item.text(itemConfig.menuText);
        $item.prepend(addIcon(itemConfig.iconClass));
        $item.click(itemConfig.onClick);
        $menu.append($item);
        items.push($item);
    });
    
    //INITIALIZE
    $close.text('close')
    .prepend(newIcon('ui-icon-arrowthick-1-nw'))
    .click(function(){
        $base.toggleClass('expanded'); 
    })
    
    $menu.append($close);

    $base.append($expander)
    .append($menu.menu());

    $('body').append($base);

}
