// ==UserScript==
// @name         Pepper reniferek
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  reniferowe kłusownictwo
// @author       urban07
// @match        https://www.pepper.pl/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const Reindeer = (function(jumpPages) {
        var jumpPageTimeout = null;

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

        $(document).ready(function() {
            var reindeer = document.querySelector('.mc-btn--primary');
            var in_dom = document.body.contains(reindeer);
            var observer = new MutationObserver(function(mutations) {
                const reindeerEl = document.querySelector('.mc-btn--primary');
                console.log(reindeerEl);
                if(document.body.contains(reindeerEl)) {
                    if (!in_dom) {
                        clearTimeout(jumpPageTimeout);
                        console.log('Jest reniferek! Klikam!');
                        reindeerEl.click();
                        console.log('Za 60 sekund przeładuję stronę');
                    }

                    setTimeout(() => {
                        location.reload();
                    }, 60000);
                    in_dom = true;
                }

            });
            observer.observe(document.body, {childList: true});

        });

    })(true);
})();
