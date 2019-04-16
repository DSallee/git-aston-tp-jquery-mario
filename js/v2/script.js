$(function () {

    let x = 0;
    let y = 0;

    let moveRate = 20;

    var ninja = $('#ninja');
    var bg = $('#bg');
    var coin = $('#coin');


    // var supportedFlag = $.keyframe.isSupported();

    $(document).keydown(function (e) {
        var code = e.keyCode || e.which,
            // standard keys
            right = 39,
            left = 37,
            jump = 32,
            down = 83,
            distance = 200,
            time = 200,
            height = 100,
            speed = 500;

        var jumpNoiseAudio = document.createElement('audio'),
            jumpVoiceAudio = document.createElement('audio'),
            jumpNoise = jumpNoiseAudio.setAttribute('src', 'sons/saut.wav'),
            jumpVoice = jumpVoiceAudio.setAttribute('src', 'sons/Yahou.wav');

        var jumpAudio = jumpNoise;

        function AudioPlay() {
            console.log("Play jump sound");
            document.getElementById('son-saut').play();

            /* jumpAudio.addEventListener('ended', function () {
                this.play();
            }, false);

            jumpAudio.addEventListener("timeupdate", function () {
                $("#currentTime").text("Current second:" + jumpAudio.currentTime);
            }); */
        }

        // Déplacement vers la droite
        if (code == right) {
            x = x + moveRate;

            ninja
                .css({
                    transform: "scaleX(1)"
                })
                .stop()
                .css({
                    transform: "translate(" + x + "px," + y + "px)"
                })
                .animate({
                    right: "+=" + distance
                }, time, 'linear');

            console.log('déplacement vers la droite:' + x + 'px');
        }

        // Déplacement vers la gauche
        if (code == left) {
            x = x - moveRate;

            ninja
                .css({
                    tranform: "rotate(0, -2, 0)"
                })
                .stop()
                .css({
                    transform: "translate(" + x + "px," + y + "px)"
                })
                .animate({
                    left: "=+" + distance
                }, {
                    duration: 0
                }, time, 'linear');

            console.log('déplacement vers la gauche:' + x + 'px');
        }

        // Sauter
        if (code == jump) {
            console.log(x);
            console.log(y);
            var jumpPosStart = {
                    'transform': "translate(" + x + "px," + y + "px), bottom: 0"
                },
                jumpPosY1 = {
                    'transform': "translate(" + x + "px, 20px), bottom: 80px"
                },
                jumpPosY2 = {
                    'transform': "translate(" + x + "px, 50px), bottom: 100px"
                },
                jumpPosY3 = {
                    'transform': "translate(" + x + "px, 80px), bottom: 80px"
                },
                jumpPosYMid = {
                    'transform': "translate(" + x + "px, 100px), bottom: 0"
                },
                jumpPosY4 = {
                    'transform': "translate(" + x + "px, 80px), bottom: 0"
                },
                jumpPosY5 = {
                    'transform': "translate(" + x + "px, 50px), bottom: 0"
                },
                jumpPosY6 = {
                    'transform': "translate(" + x + "px, 20px), bottom: 0"
                },
                jumpPosYEnd = {
                    'transform': "translate(" + x + "px, 0px), bottom: 0"
                };

            $.keyframe.define([{
                name: 'jump',
                '0%': jumpPosStart,
                '20%': jumpPosY1,
                '50%': jumpPosY2,
                '80%': jumpPosY3,
                '100%': jumpPosYMid,
                '80%': jumpPosY4,
                '50%': jumpPosY5,
                '20%': jumpPosY6,
                '0%': jumpPosYEnd,
            }]);

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
        if (code == down) {
            console.log('se baisser');
        }

    });

    $(document).keyup(function (e) {
        console.log('Ninja stopped moving !');

        ninja.stop();
    });

    $(".reset").click(function () {
        x = 0;
        y = 0;
        ninja.css("transform", "translate(0px,0px)");
        $(".coin").removeClass("coin_animation");
        $(".box").removeClass("box_animation");
        setTimeout(function () {
            $(".title").addClass("hide");
        }, 100);
    });

})