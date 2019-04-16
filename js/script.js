$( function () {

    var ninja = $( '#ninja' );
    var bg = $( '#bg' );
    var coin = $( '#coin' );

    var x = 0;
    var y = 0;

    // var supportedFlag = $.keyframe.isSupported();

    $( document ).keydown( function ( e ) {
        var code = e.keyCode || e.which,
            // standard keys
            right = 39,
            left = 37,
            jump = 32,
            down = 83,
            distance = 200,
            time = 200,
            height = 100,
            speed = 500,
            posX,
            posY
        // multiple jump key array
        // jumpR = {39: false, 32: false};
        // jumpL = {37: false, 32: false};


        function AudioPlay() {
            console.log( "Play jump sound" );
            var audioElement = document.createElement( 'audio' );
            audioElement.setAttribute( 'src', 'http://www.soundjay.com/misc/sounds/bell-ringing-01.mp3' );

            audioElement.addEventListener( 'ended', function () {
                this.play();
            }, false );

            audioElement.addEventListener( "timeupdate", function () {
                $( "#currentTime" ).text( "Current second:" + audioElement.currentTime );
            } );
        }

        function PlayJump() {
            ninja.playKeyframe( {
                name: 'jump', // name of the keyframe you want to bind to the selected element
                duration: 500, // [optional, default: 0, in ms] how long you want it to last in     milliseconds
                timingFunction: 'linear', // [optional, default: ease] specifies the speed curve of the animation
                delay: 0, // [optional, default: 0, in ms]  how long you want to wait before the animation starts in milliseconds, default value is 0
                repeat: 1, // [optional, default:1]  how many times you want the animation to repeat, default value is 1
                direction: 'alternate', // [optional, default: 'normal']  which direction you want the frames to flow, default value is normal
                fillMode: 'forwards', // [optional, default: 'forward']  how to apply the styles outside the animation time, default value is forwards
                complete: function () {} // [optional]  Function fired after the animation is complete. If repeat is infinite, the function will be fired every time the animation is restarted.
            } );
            console.log( 'Ninja jumps ! \n X position :' + x );
        }

        // Déplacement vers la droite
        if ( code == right ) {
            x = x + 20;

            // mario
            // .css({transform: "scaleX(1)"})
            // .stop()
            // .animate({left: "+=" + distance}, time, 'linear');

            ninja
                .css( {
                    transform: "scaleX(1)"
                } )
                .stop()
                .css( {
                    transform: "translate(" + x + "px," + y + "px)"
                } )
                .animate( {
                    right: "+=" + distance
                }, time, 'linear' );

            console.log( 'déplacement vers la droite:' + x + 'px' );
        }

        // Déplacement vers la gauche
        if ( code == left ) {
            x = x - 20;

            ninja
                .css( {
                    transform: "scaleX(-1)"
                } )
                .stop()
                .css( {
                    transform: "translate(" + x + "px," + y + "px)"
                } )
                .animate( {
                    left: "=+" + distance
                }, {
                    duration: 0
                }, time, 'linear' );

            console.log( 'déplacement vers la gauche:' + x + 'px' );
        }

        // Sauter
        if ( code == jump ) {
            console.log( x );
            var jumpPosStart = {
                'transform': "translate(" + x + "px," + y + "%), bottom: 0"
            };
            var jumpPosY1 = {
                'transform': "translate(" + x + "px, 20%), bottom: 80px"
            };
            var jumpPosY2 = {
                'transform': "translate(" + x + "px, 50%), bottom: 100px"
            };
            var jumpPosY3 = {
                'transform': "translate(" + x + "px, 80%), bottom: 80px"
            };
            var jumpPosEnd = {
                'transform': "translate(" + x + "px, 100%), bottom: 0"
            };

            $.keyframe.define( [ {
                name: 'jump',
                '0%': jumpPosStart,
                '20%': jumpPosY1,
                '50%': jumpPosY2,
                '80%': jumpPosY3,
                '100%': jumpPosEnd
            } ] );

            PlayJump();
            AudioPlay();

            // .removeClass('jump')
            // .addClass('jump');

            // .stop()
            // .animate({bottom: "+=" + height}, speed, 'swing')
            // .animate({height: "-=" + height}, 200, 'swing');
        }

        // Sauter vers la droite
        // if (code in jumpR) {
        //     jumpR[code] = true;
        //     if (jumpR[38] && jumpR[32]) {
        //         ninja
        //         .css({transform: "scaleX(1)"})
        //         .stop()
        //         .animate({
        //             left: "+=" + distance,
        //             top: "-=" + height
        //         }, time, 'linear');
        //     }
        // }    

        // se Baisser
        if ( code == down ) {
            console.log( 'se baisser' );
        }

    } );

    $( document ).keyup( function ( e ) {
        console.log( 'Ninja stopped moving !' );

        ninja.stop();
    } );

    $( ".reset" ).click( function () {
        x = 0;
        y = 0;
        ninja.css( "transform", "translate(0px,0px)" );
        $( ".coin" ).removeClass( "coin_animation" );
        $( ".box" ).removeClass( "box_animation" );
        setTimeout( function () {
            $( ".title" ).addClass( "hide" );
        }, 100 );
    } );

} )