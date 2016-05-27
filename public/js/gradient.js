$(document).ready(function() {

    // INITIALIZES CLIPBOARD ON HTML ELEMENTS
    new Clipboard('.btn-clipboard');
    new Clipboard('#first');
    new Clipboard('#second');
    
    // GETS HTML VALUES FROM IDs
    var d = document;
    var code = '-webkit-linear-gradient(#16A085, #F4D03F);';
    var next = d.getElementById('next');
    var gradientDiv = d.getElementById('gradient');
    var audio = d.getElementById('audio');
    var t;

    // CREATS FIRSTCOLOR AND SECONDCOLOR VARIABLES
    var firstColor;
    var secondColor;

    // MESSAGE BOX DOM
    var message = d.getElementById("box");
    var mainMessage = d.getElementById("main-message");
    var messageParent = d.getElementById("message-parent");

    /* SHOWS DIFFERENT GRADIENT ON DIV/BUTTON CLICK */
    next.onclick = function() {
        // GENERATES RANDOM HEXCODE AND ASSIGNS CODE
        firstColor = generateHex();
        secondColor = generateHex();

        // GENERATES BACKGROUND CSS CODE
        code = '-webkit-linear-gradient(45deg, #' + firstColor + ', #' + secondColor + ')';
        
        // CHANGES BACKROUND GRADIENT AND BUTTON COLORS
        // changeStyle('.gradient', 'background', code);
        changeStyle('.gradient', 'background', code);
        changeStyle('#first', 'background', ('#' + firstColor));
        changeStyle('#second', 'background', ('#' + secondColor));
        changeStyle('.btn-clipboard', 'background', code);
        changeStyle('.comment', 'color', ('#' + secondColor));

        // SETS CLIPBOARD TEXT TO THE UPDATED COLOR
        $('#first').attr('data-clipboard-text', '#' + firstColor);
        $('#second').attr('data-clipboard-text', '#' + secondColor);

        // UPDATES HTML VALUES
        updateHTML('#first', '#' + firstColor);
        updateHTML('#second', '#' + secondColor);
        updateHTML('#line_1', 'background: #' + firstColor + ';');
        updateHTML('#line_2', 'background: -webkit-linear-gradient(45deg, ' + '#' + firstColor + ', #' + secondColor + ');');
        updateHTML('#line_3', 'background: linear-gradient(45deg, ' + '#' + firstColor + ', #' + secondColor + ');');
    };

    $('.btn-clipboard').click(function() {
        displayMessage();
    });

    $('#first').click(function() {
        displayMessage();
    });

    $('#second').click(function() {
        displayMessage();
    });

    /* GENERATES A RANDOM HEXCODE */
    function generateHex() {
        var arr = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        var code = '';
        for(var i = 0; i < 6; i++) {
            var random = arr[Math.floor(Math.random() * arr.length)];
            code += random;
        }
        return code;
    }

    /* CONVERTS HEXCODE TO RGB CODE */
    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    /* DISPLAYS MESSAGE BOX WHEN TEXT COPIED TO CLIPBOARD */
    function displayMessage() {
        changeStyle(".message-box", "display", "block");

        // HIDES THE MESSAGE-BOX IN 4 SECONDS
        setTimeout(function() {
            changeStyle(".message-box", "display", "none");
        }, 4000);
    }

    /* CHANGES CSS STYLING */
    function changeStyle(element, property, value) {
        $(element).css(property, value);
    }

    /* UPDATES HTML CONTENT */
    function updateHTML(element, value) {
        $(element).html(value);
    }

    /* PLAYS MUSIC WHEN EDM IS CLICKED */
    $('#edm').click(function() {
        t = setInterval(clickNext, 150);
    });

    /* HIDES THE INFO PANEL FOR AN AMAZING EDM EXPERIENCE */
    function clickNext() {
        changeStyle('.gradient-info', 'display', 'none');
        $('#next').trigger('click');
        changeStyle('.music', 'display', 'block');
        audio.play();
    }

    /* STOPS THE AUDIO WHEN STOP IS CLICKED */
    $('.music').click(function() {
        clearTimeout(t);
        audio.pause();
        audio.currentTime = 0;
        changeStyle('.gradient-info', 'display', 'block');
        changeStyle('.music', 'display', 'none');
    });
});