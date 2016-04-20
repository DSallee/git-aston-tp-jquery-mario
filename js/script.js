$(function(){
    var mario = $('#mario');
    var ninja = $('#ninja');
    var bg = $('#bg');
    var coin = $('#coin');

    $(document).keydown(function(e) {
        var code = e.keyCode || e.which,
            // standard keys
            right = 68,
            left = 81,
            jump = 32,
            down = 83,
            distance = 200,
            time = 500,
            height = 100,
            speed = 200,
            posX,
            posY,
            // multiple jump key array
            jumpR = {68: false, 32: false};
            jumpL = {81: false, 32: false};

        // Déplacement vers la droite
        if (code == right) {
            console.log('déplacement vers la droite');
            mario
            .css({transform: "scaleX(1)"})
            .stop()
            .animate({left: "+=" + distance}, time, 'linear');
            ninja
            .css({transform: "scaleX(1)"})
            .stop()
            .animate({left: "+=" + distance}, time, 'linear');
        }

        // Déplacement vers la gauche
        if (code == left) {
            console.log('déplacement vers la gauche');
            mario
            .css({transform: "scaleX(-1)"})
            .stop()
            .animate({left: "-=" + distance}, time, 'linear');
            ninja
            .css({transform: "scaleX(-1)"})
            .stop()
            .animate({left: "-=" + distance}, time, 'linear');
        }

        // Sauter
        if (code == jump) {
            console.log('sauter');
            AudioPlay();
            mario
            .stop()
            .animate({top: "-=" + height}, speed, 'swing')
            .animate({top: "+=" + height}, 200, 'swing');
            ninja
            .stop()
            .animate({top: "-=" + height}, speed, 'swing')
            .animate({top: "+=" + height}, 200, 'swing');
        }

        // Sauter vers la droite
        // if (code in jumpR) {
     //        jumpR[code] = true;
     //        if (jumpR[38] && jumpR[32]) {
     //            ninja
        //      .css({transform: "scaleX(1)"})
        //      .stop()
        //      .animate({
        //          left: "+=" + distance,
        //          top: "-=" + height
        //      }, time, 'linear');
     //        }
     //    }    

        // se Baisser
        if (code == down) {
            console.log('se baisser');
        }

    });

    $(document).keyup(function(e) {
        console.log('Mario stopped moving !');
        mario.stop();
        ninja.stop();
    });

})
