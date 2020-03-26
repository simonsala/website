$(document).foundation();

$(document).ready(function () {
    var $atlantic_header = $("#atlantic-header");

    
    if (window.innerWidth <= 640) {

        $atlantic_header.css({ "background-image": "url('caravan_qxkixo_c_scale,w_681.jpg')", "background-size": "cover", "background-position": "center", "background-repeat": "no-repeat" })

    } 

 
    if (window.innerWidth > 1222) {
        $atlantic_header.css({ "background-image": "url('caravan_qxkixo_c_scale,w_1400.jpg')", "background-size": "cover", "background-position": "center", "background-repeat": "no-repeat" })
    }

    if (window.innerWidth > 1440) {
        $atlantic_header.css({ "background-image": "url('caravan_qxkixo_c_scale,w_1400.jpg')", "background-size": "cover", "background-position": "center", "background-repeat": "no-repeat" })
    }


    if (window.innerWidth >= 1800) {
        $atlantic_header.css({ "background-image": "url('caravan_qxkixo_c_scale,w_1400.jpg')", "background-size": "cover", "background-position": "center", "background-repeat": "no-repeat" })
    }



});


$(window).resize(function () {
    var $atlantic_menu = $("#atlantic-dropdowm-menu");
    var $atlantic_header = $("#atlantic-header");


    if (window.innerWidth <= 640) {

        $atlantic_header.css({ "background-image": "url('caravan_qxkixo_c_scale,w_555.jpg')", "background-size": "cover", "background-position": "center", "background-repeat": "no-repeat" })

        $atlantic_menu.addClass('vertical');

    } else {
        $atlantic_menu.removeClass('vertical');

    }

 
    if (window.innerWidth > 1222) {
        $atlantic_header.css({ "background-image": "url('caravan_qxkixo_c_scale,w_1400.jpg')", "background-size": "cover", "background-position": "center", "background-repeat": "no-repeat" })
    }

    if (window.innerWidth > 1440) {
        $atlantic_header.css({ "background-image": "url('caravan_qxkixo_c_scale,w_1400.jpg')", "background-size": "cover", "background-position": "center", "background-repeat": "no-repeat" })
    }


    if (window.innerWidth >= 1800) {
        $atlantic_header.css({ "background-image": "url('caravan_qxkixo_c_scale,w_1400.jpg')", "background-size": "cover", "background-position": "center", "background-repeat": "no-repeat" })
    }



});


