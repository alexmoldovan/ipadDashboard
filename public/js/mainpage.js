$( document ).ready(function() {
    console.info( "page loaded..." );

    // CLOCK

    var clock = $('.mainpageclock').FlipClock({
        // Create a minute counter
        clockFace: 'TwentyFourHourClock'
    });

    // WEATHER

    loadWeather(); //Get the initial weather.
    setInterval(loadWeather, 600000); //Update the weather every 10 minutes.

    function loadWeather() {
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
                //                $("#weather").html('<p>'+error+'</p>');
                $("#weather").html('<p>'+"NO WEATHER INFO CURRENTLY AVAILABLE " + '<button type="button" id="refreshWeather">Click Me!</button>'+'</p>');
            }
        });
    }

    //    $( "#refreshWeather" ).click(function() {
    //        getWeather();
    //    });
    // NEWS



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
                "color": "#000000",
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


    // NEWS

    loadNews();
    setInterval(loadNews(), 600000); //Update the news every 10 minutes.

    function loadNews() {
        $.ajax({
            url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=8&q=http%3A%2F%2Fnews.google.com%2Fnews%3Foutput%3Drss',
            dataType: 'jsonp',
            success: function (data) {

                //                console.log(data.responseData.feed.entries);

                $(data.responseData.feed.entries).each(function (index, entry) {
                    var content = document.createElement("content");
                    content.innerHTML = entry.content;                                   
                    var images = $(content).find('img').map(function(){
                        return $(this).attr('src')
                    }).get();

                    //                    console.log(images);

                    var item_html = '<li>' + (images.length == 0 ? '' :'<img src="'+ images[0]) + '"/>' + '<a data-toggle="tooltip" data-placement="top" title="" data-original-title="Tooltip on top" target="_blank" href="' + entry.link + '">' + entry.title + '</a>' + '</li>';

                    //                    console.log(item_html);

                    $('#rssdata ul.rss-items').append(item_html);
                });
                $('#rssdata div.loading').fadeOut();
                $('#rssdata ul.rss-items').slideDown();
            },
            error: function () {}

        });
    };

    // MIRROR
    $( "#mirror" ).click(function() {
        $('#mirror-modal').modal('toggle');
    });

    // video
    // Grab elements, create settings, etc.
//    var video = document.getElementById('video');
//
//    // Get access to the camera!
//    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//        // Not adding `{ audio: true }` since we only want video now
//        navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
//            video.src = window.URL.createObjectURL(stream);
//            video.play();
//        });
//    }
//
//
//    // Elements for taking the snapshot
//    var canvas = document.getElementById('canvas');
//    var context = canvas.getContext('2d');
//    var video = document.getElementById('video');



});
