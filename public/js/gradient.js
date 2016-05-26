$(document).ready(function() {
    // Initializing WOW JS and Tooltip
    new WOW().init();
    new Clipboard('.btn-clipboard');
    new Clipboard('#first');
    new Clipboard('#second');
    
    // Getting HTML Elements by ID
    var d = document;
    var bigDifference = false;
    var code = '-webkit-linear-gradient(#6D78E0, #A486E0);';
    var next = d.getElementById('next');
    var gradientDiv = d.getElementById('gradient');
    var firstColor;
    var secondColor;

    // Messsage Box
    var message = d.getElementById("box");
    var messageType = d.getElementById("message-type");
    var mainMessage = d.getElementById("main-message");
    var messageParent = d.getElementById("message-parent");

    // SHOWS DIFFERENT GRADIENT ON DIV/BUTTON CLICK
    next.onclick = function() {
        firstColor = generateHex();
        secondColor = generateHex();
        code = '-webkit-linear-gradient(left, #' + firstColor + ', #' + secondColor + ')';
        $('.gradient').css('background', code);
        $('#first').css('background', '#' + firstColor);
        $('#second').css('background', '#' + secondColor);
        $('#first').html('#' + firstColor);
        $('#second').html('#' + secondColor);
        $('#first').attr('data-clipboard-text', '#' + firstColor);
        $('#second').attr('data-clipboard-text', '#' + secondColor);
        $('.btn-clipboard').css('background', code);
        $('#line_1').html('background: #' + firstColor + ';');
        $('#line_2').html('background: -webkit-linear-gradient(90deg, ' + '#' + firstColor + ', #' + secondColor + ');');
        $('#line_3').html('background: linear-gradient(90deg, ' + '#' + firstColor + ', #' + secondColor + ');');
        $(".comment").css('color', '#' + secondColor);
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

    function generateHex() {
        var arr = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        var code = '';
        for(var i = 0; i < 6; i++) {
            var random = arr[Math.floor(Math.random() * arr.length)];
            code += random;
        }
        return code;
    }

    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    function displayMessage() {
        changeStyle(".message-box", "display", "block");
        setTimeout(function() {
            changeStyle(".message-box", "display", "none");
        }, 4000);
    }

    function changeStyle(element, property, value) {
        $(element).css(property, value);
    }
});