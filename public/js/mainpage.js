$( document ).ready(function() {
    console.info( "page loaded..." );

    // CLOCK

    var clock = $('.mainpageclock').FlipClock({
        // Create a minute counter
        clockFace: 'TwentyFourHourClock'
    });

    // WEATHER

    $(document).ready(function() {  
        getWeather(); //Get the initial weather.
        setInterval(getWeather, 600000); //Update the weather every 10 minutes.
    });

    function getWeather() {
        $.simpleWeather({
            location: 'Bucharest, Romania',
            unit: 'c',
            success: function(weather) {
                html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
                html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
                html += '<li class="currently">'+weather.currently+'</li>';


                $("#weather").html(html);
            },
            error: function(error) {
                $("#weather").html('<p>'+error+'</p>');
            }
        });
    }

    // NEWS
//    google.load("feeds", "1");
//
//    function initialize() {
//        var feed = new google.feeds.Feed("http://fastpshb.appspot.com/feed/1/fastpshb");
//        feed.load(function(result) {
//            if (!result.error) {
//                var container = document.getElementById("feed");
//                for (var i = 0; i < result.feed.entries.length; i++) {
//                    var entry = result.feed.entries[i];
//                    var div = document.createElement("div");
//                    div.appendChild(document.createTextNode(entry.title));
//                    container.appendChild(div);
//                }
//            }
//        });
//    }
//    google.setOnLoadCallback(initialize);

});
