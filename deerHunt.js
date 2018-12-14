// ==UserScript==
// @name         Pepper reniferek
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  reniferowe kłusownictwo
// @author       urban07
// @match        https://www.pepper.pl/*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.min.js
// ==/UserScript==

(function() {
    'use strict';

    const Reindeer = (function(jumpPages) {
        var jumpPageTimeout = null;

        $( document ).ready(function() {
            $(document).on('DOMNodeInserted', function(reindeer) {
                if ( $(reindeer.target).hasClass('mc-btn--primary') ) {
                    clearTimeout(jumpPageTimeout);
                    console.log('Jest reniferek! Klikam!');
                    $(reindeer.target).click();
                    console.log('Za 60 sekund przeładuję stronę');
                    setTimeout(() => {
                        location.reload();
                    }, 60000);
                }
            });
        });


        if (jumpPages) {
            const cards = document.querySelectorAll(
                'div.gridLayout-item.threadCardLayout--card'
            );
            const timeout = Math.floor(Math.random() * 120) + 15;
            console.log(
                `Za ${timeout} sekund kliknę w jakąś ofertę lub wrócę na stronę główną`
            );
            jumpPageTimeout = setTimeout(function() {
                if (location.href !== 'https://www.pepper.pl/') {
                    console.log('Wracam na stronę gówną');
                    location.href = 'https://www.pepper.pl/';
                } else {
                    const item = cards[
                        Math.floor(Math.random() * (cards.length - 1))
                    ].querySelector('a');
                    item.click();
                }
            }, timeout * 1000);
        }

    })(true);
})();
