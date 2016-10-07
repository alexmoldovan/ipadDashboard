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


    //particles
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 30,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#42f4d9"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 10,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
//
//    var count_particles, stats, update;
//    stats = new Stats;
//    stats.setMode(0);
//    stats.domElement.style.position = 'absolute';
//    stats.domElement.style.left = '0px';
//    stats.domElement.style.top = '0px';
//    document.body.appendChild(stats.domElement);
//    count_particles = document.querySelector('.js-count-particles');
//    update = function() {
//        stats.begin();
//        stats.end();
//        if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//            count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//        }
//        requestAnimationFrame(update);
//    };
//    requestAnimationFrame(update);;

});
