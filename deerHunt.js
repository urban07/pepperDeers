// ==UserScript==
// @name         Pepper reniferek
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.pepper.pl/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const Reindeer = (function(refreshTime, jumpPages) {
        refreshTime = refreshTime || 5000;
        var searchInterval = null;
        var jumpPageTimeout = null;

        var lookForReindeer = function() {
            console.log('Szukam reniferka');
            let found = false;
            const reinder = document.querySelector('.mc-btn--primary');
            if (reinder) {
                found = true;
                clearInterval(searchInterval);
                clearTimeout(jumpPageTimeout);
                console.log('Jest reniferek! Klikam!');
                reinder.click();
                console.log('Za 60 sekund przeładuję stronę');
                setTimeout(() => {
                    location.reload();
                }, 60000);
            }
        };

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

        searchInterval = setInterval(lookForReindeer, 5000);
    })(2000, true);
})();
