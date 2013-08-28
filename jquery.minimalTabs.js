/*===========================================
=            jQuery Minimal Tabs            =
===========================================*/

/**
*
* http://www.vinicius-stutz.com/
* Version: 0.1 of 27 Aug 2013
* Copyright 2013 - Vinícius Stutz
* Licensed under the MIT license
*
* WHY?
*   - Because we need to work with ease light tabs!
* 
* HOW TO USE?
*   - Inside:
*       $(document).ready(function(){});
*   - Only do:
*       $.minimalTabs();
*   - Put CSS file "jquery.minimalTabs.css" in your code;
*   - And put this tags in your HTML code:
*       <div id="Container">
*           <p id="Tabs">
*               <a href="#aba1" id="aba_1" class="abas">Aba um</a>
*               <a href="#aba2" id="aba_2" class="abas">Aba dois</a>
*               <a href="#aba3" id="aba_3" class="abas">Aba três</a>
*           </p>
*           <ul id="Content">
*                <li id="aba1">
*                    <div>Conteúdo da primeira aba.</div>
*                </li>
*                <li id="aba2">
*                    <div>Conteúdo da segunda aba.</div>
*                </li>
*                <li id="aba3">
*                    <div>Conteúdo da terceira aba.</div>
*                </li>
*            </ul>
*       </div>
*  - If you want to set a tab as active loading the page, do:
*      $('#aba_2').click();
*   - See "jquery.minimalTabs.css" to customize your tabs;
*
* Very easy to use! Too light to load (only 5 KB, this plugin and your style together)!
*
**/

// O código está comentado em português, mas é só porque eu sou brasileiro :-)
$.minimalTabs = function () {

    // Guarda IDs dos elementos
    var tabs = 'p#Tabs';
    var content = 'ul#Content';

    $(content + ' .tab-content').hide(); // Oculta todas as tabs
    $(content + ' .tab-content:first-child').show(); // Exibe a primeira aba

    // Quando uma aba for clicada
    $(tabs + ' a').click(function () {

        $(tabs + ' a').removeClass('open'); // Remove todas as classes de todas as tabs

        // Acrescenta uma classe CSS marcando visualmente a aba como selecionada
        $(this).addClass('open');

        $(content + ' .tab-content').hide(); // Oculta todas as tabs abertas
        $(content + ' ' + $(this).attr('href')).show(); // Exibe a aba que foi clicada

        return false;
    });
};

/*-----  End of jQuery Minimal Tabs  ------*/
