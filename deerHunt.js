Reindeer = function(refreshTime, jumpPages) {
    refreshTime = refreshTime || 5000;
    var searchInterval = null;
    var jumpPageTimeout = null;

    var lookForReindeer = function() {
        console.log('lookedForDeer');
        var found = false;
        var reinders = $("[src*='mascotcard']");
        if (reinders.length) {
            found = true;
            clearInterval(searchInterval);
            clearTimeout(jumpPageTimeout);
            console.log('should notify');
            if (Notification.permission !== 'denied') {
                Notification.requestPermission(function (permission) {
                    if (permission === "granted") {
                        var notification = new Notification("JEST RENIFER HHHURWA!!!");
                    }
                });
            }
        }
    }
    


    if (jumpPages) {
        var links = $('a').filter(function(link) {
            return $(this).attr('href') && $(this).attr('href').indexOf('pepper.pl') > -1
        });
        var timeout =  (Math.floor(Math.random() * 120) + 15);
        jumpPageTimeout = setTimeout(function() {
            var item = links[Math.floor(Math.random()*links.length)];
            item.click();
        }, timeout * 1000 );
    }

    searchInterval = setInterval(lookForReindeer, 5000);

}(2000, true);