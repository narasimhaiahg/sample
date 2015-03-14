
var ComponentsjQueryUISliders = function () {

    return {
        //main function to initiate the module
        init: function () {
            // basic
            $(".slider-basic").slider(); // basic sliders

             // vertical range sliders
            $("#slider-range").slider({
                isRTL: Metronic.isRTL(),
                range: true,
                values: [17, 67],
                slide: function (event, ui) {
                    $("#slider-range-amount").text("$" + ui.values[0] + " - $" + ui.values[1]);
                }
            });
            
            // snap inc
            $("#slider-snap-inc").slider({
                isRTL: Metronic.isRTL(),
                value: 100,
                min: 0,
                max: 1000,
                step: 100,
                slide: function (event, ui) {
                    $("#slider-snap-inc-amount").text("$" + ui.value);
                }
            });

            $("#slider-snap-inc-amount").text("$" + $("#slider-snap-inc").slider("value"));

            // range slider
            $("#slider-range").slider({
                isRTL: Metronic.isRTL(),
                range: true,
                min: 0,
                max: 500,
                values: [75, 300],
                slide: function (event, ui) {
                    $("#slider-range-amount").text("$" + ui.values[0] + " - $" + ui.values[1]);
                }
            });

            $("#slider-range-amount").text("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));

            //range max

            $("#slider-range-max").slider({
                isRTL: Metronic.isRTL(),
                range: "max",
                min: 0,
                max: 100,
                value: 0,
                slide: function (event, ui) {
                    $("#slider-range-max-amount").text(ui.value);
                }
            });

            $("#slider-range-max-amount").text($("#slider-range-max").slider("value"));

            // range min
            $("#slider-range-min").slider({
                isRTL: Metronic.isRTL(),
                range: "min",
                value: 37,
                min: 0,
                max: 700,
                slide: function (event, ui) {
                    $("#slider-range-min-amount").text("$" + ui.value);
                }
            });

            $("#slider-range-min-amount").text("$" + $("#slider-range-min").slider("value"));

            // vertical slider
            $("#slider-vertical").slider({
                isRTL: Metronic.isRTL(),
                orientation: "vertical",
                range: "min",
                min: 0,
                max: 100,
                value: 60,
                slide: function (event, ui) {
                    $("#slider-vertical-amount").text(ui.value);
                }
            });
            $("#slider-vertical-amount").text($("#slider-vertical").slider("value"));

            // vertical range sliders
            $("#slider-range-vertical").slider({
                isRTL: Metronic.isRTL(),
                orientation: "vertical",
                range: true,
                values: [17, 67],
                slide: function (event, ui) {
                    $("#slider-range-vertical-amount").text("$" + ui.values[0] + " - $" + ui.values[1]);
                }
            });

            $("#slider-range-vertical-amount").text("$" + $("#slider-range-vertical").slider("values", 0) + " - $" + $("#slider-range-vertical").slider("values", 1));

        }

    };

}();
var ComponentsjQueryUIASliders = function () {

    return {
        //main function to initiate the module
        init: function () {
            // basic
            $(".sliders-basic").slider(); // basic sliders

             // vertical range sliders
            $("#sliders-range").slider({
                isRTL: Metronic.isRTL(),
                range: true,
                values: [17, 67],
                slide: function (event, ui) {
                    $("#slider-range-amount").text("$" + ui.values[0] + " - $" + ui.values[1]);
                }
            });
            
            // snap inc
            $("#sliders-snap-inc").slider({
                isRTL: Metronic.isRTL(),
                value: 100,
                min: 0,
                max: 1000,
                step: 100,
                slide: function (event, ui) {
                    $("#slider-snap-inc-amount").text("$" + ui.value);
                }
            });

            $("#sliders-snap-inc-amount").text("$" + $("#slider-snap-inc").slider("value"));

            // range slider
            $("#sliders-range").slider({
                isRTL: Metronic.isRTL(),
                range: true,
                min: 0,
                max: 500,
                values: [75, 300],
                slide: function (event, ui) {
                    $("#sliders-range-amount").text("$" + ui.values[0] + " - $" + ui.values[1]);
                }
            });

            $("#sliders-range-amount").text("$" + $("#sliders-range").slider("values", 0) + " - $" + $("#sliders-range").slider("values", 1));

            //range max

            $("#sliders-range-max").slider({
                isRTL: Metronic.isRTL(),
                range: "max",
                min: 0,
                max: 100,
                value: 0,
                slide: function (event, ui) {
                    $("#sliders-range-max-amount").text(ui.value);
                }
            });

            $("#sliders-range-max-amount").text($("#sliders-range-max").slider("value"));

            // range min
            $("#slider-range-min").slider({
                isRTL: Metronic.isRTL(),
                range: "min",
                value: 37,
                min: 0,
                max: 700,
                slide: function (event, ui) {
                    $("#sliders-range-min-amount").text("$" + ui.value);
                }
            });

            $("#sliders-range-min-amount").text("$" + $("#sliders-range-min").slider("value"));

            // vertical slider
            $("#sliders-vertical").slider({
                isRTL: Metronic.isRTL(),
                orientation: "vertical",
                range: "min",
                min: 0,
                max: 100,
                value: 60,
                slide: function (event, ui) {
                    $("#sliders-vertical-amount").text(ui.value);
                }
            });
            $("#sliders-vertical-amount").text($("#sliders-vertical").slider("value"));

            // vertical range sliders
            $("#sliders-range-vertical").slider({
                isRTL: Metronic.isRTL(),
                orientation: "vertical",
                range: true,
                values: [17, 67],
                slide: function (event, ui) {
                    $("#sliders-range-vertical-amount").text("$" + ui.values[0] + " - $" + ui.values[1]);
                }
            });

            $("#sliders-range-vertical-amount").text("$" + $("#sliders-range-vertical").slider("values", 0) + " - $" + $("#sliders-range-vertical").slider("values", 1));

        }

    };

}();

var ComponentsjQueryUIAESliders = function () {

    return {
        //main function to initiate the module
        init: function () {
            // basic
            $(".sliderss-basic").slider(); // basic sliders

             // vertical range sliders
            $("#sliderss-range").slider({
                isRTL: Metronic.isRTL(),
                range: true,
                values: [17, 67],
                slide: function (event, ui) {
                    $("#slider-range-amount").text("$" + ui.values[0] + " - $" + ui.values[1]);
                }
            });
            
            // snap inc
            $("#sliderss-snap-inc").slider({
                isRTL: Metronic.isRTL(),
                value: 100,
                min: 0,
                max: 1000,
                step: 100,
                slide: function (event, ui) {
                    $("#slider-snap-inc-amount").text("$" + ui.value);
                }
            });

            $("#sliderss-snap-inc-amount").text("$" + $("#slider-snap-inc").slider("value"));

            // range slider
            $("#sliderss-range").slider({
                isRTL: Metronic.isRTL(),
                range: true,
                min: 0,
                max: 500,
                values: [75, 300],
                slide: function (event, ui) {
                    $("#sliderss-range-amount").text("$" + ui.values[0] + " - $" + ui.values[1]);
                }
            });

            $("#sliderss-range-amount").text("$" + $("#sliderss-range").slider("values", 0) + " - $" + $("#sliderss-range").slider("values", 1));

            //range max

            $("#sliderss-range-max").slider({
                isRTL: Metronic.isRTL(),
                range: "max",
                min: 0,
                max: 100,
                value: 0,
                slide: function (event, ui) {
                    $("#sliderss-range-max-amount").text(ui.value);
                }
            });

            $("#sliderss-range-max-amount").text($("#sliderss-range-max").slider("value"));

            // range min
            $("#sliderss-range-min").slider({
                isRTL: Metronic.isRTL(),
                range: "min",
                value: 37,
                min: 0,
                max: 700,
                slide: function (event, ui) {
                    $("#sliderss-range-min-amount").text("$" + ui.value);
                }
            });

            $("#sliderss-range-min-amount").text("$" + $("#sliderss-range-min").slider("value"));

            // vertical slider
            $("#sliderss-vertical").slider({
                isRTL: Metronic.isRTL(),
                orientation: "vertical",
                range: "min",
                min: 0,
                max: 100,
                value: 60,
                slide: function (event, ui) {
                    $("#sliders1-vertical-amount").text(ui.value);
                }
            });
            $("#sliderss-vertical-amount").text($("#sliderss-vertical").slider("value"));

            // vertical range sliders
            $("#sliderss-range-vertical").slider({
                isRTL: Metronic.isRTL(),
                orientation: "vertical",
                range: true,
                values: [17, 67],
                slide: function (event, ui) {
                    $("#sliderss-range-vertical-amount").text("$" + ui.values[0] + " - $" + ui.values[1]);
                }
            });

            $("#sliderss-range-vertical-amount").text("$" + $("#sliderss-range-vertical").slider("values", 0) + " - $" + $("#sliderss-range-vertical").slider("values", 1));

        }

    };

}();
var ComponentsjQueryUIAESSliders = function () {

    return {
        //main function to initiate the module
        init: function () {
            // basic
            $(".sliderssu-basic").slider(); // basic sliders

             // vertical range sliders
            $("#sliderssu-range").slider({
                isRTL: Metronic.isRTL(),
                range: true,
                values: [17, 67],
                slide: function (event, ui) {
                    $("#slider-range-amount").text("$" + ui.values[0] + " - $" + ui.values[1]);
                }
            });
            
            // snap inc
            $("#sliderssu-snap-inc").slider({
                isRTL: Metronic.isRTL(),
                value: 100,
                min: 0,
                max: 1000,
                step: 100,
                slide: function (event, ui) {
                    $("#slider-snap-inc-amount").text("$" + ui.value);
                }
            });

            $("#sliderssu-snap-inc-amount").text("$" + $("#slider-snap-inc").slider("value"));

            // range slider
            $("#sliderssu-range").slider({
                isRTL: Metronic.isRTL(),
                range: true,
                min: 0,
                max: 500,
                values: [75, 300],
                slide: function (event, ui) {
                    $("#sliderssu-range-amount").text("$" + ui.values[0] + " - $" + ui.values[1]);
                }
            });

            $("#sliderssu-range-amount").text("$" + $("#sliderssu-range").slider("values", 0) + " - $" + $("#sliderssu-range").slider("values", 1));

            //range max

            $("#sliderssu-range-max").slider({
                isRTL: Metronic.isRTL(),
                range: "max",
                min: 0,
                max: 100,
                value: 0,
                slide: function (event, ui) {
                    $("#sliderssu-range-max-amount").text(ui.value);
                }
            });

            $("#sliderssu-range-max-amount").text($("#sliderssu-range-max").slider("value"));

            // range min
            $("#sliderssu-range-min").slider({
                isRTL: Metronic.isRTL(),
                range: "min",
                value: 37,
                min: 0,
                max: 700,
                slide: function (event, ui) {
                    $("#sliderss1-range-min-amount").text("$" + ui.value);
                }
            });

            $("#sliderssu-range-min-amount").text("$" + $("#sliderssu-range-min").slider("value"));

            // vertical slider
            $("#sliderssu-vertical").slider({
                isRTL: Metronic.isRTL(),
                orientation: "vertical",
                range: "min",
                min: 0,
                max: 100,
                value: 60,
                slide: function (event, ui) {
                    $("#sliderssu-vertical-amount").text(ui.value);
                }
            });
            $("#sliderssu-vertical-amount").text($("#sliderssu-vertical").slider("value"));

            // vertical range sliders
            $("#sliderssu-range-vertical").slider({
                isRTL: Metronic.isRTL(),
                orientation: "vertical",
                range: true,
                values: [17, 67],
                slide: function (event, ui) {
                    $("#sliderssu-range-vertical-amount").text("$" + ui.values[0] + " - $" + ui.values[1]);
                }
            });

            $("#sliderssu-range-vertical-amount").text("$" + $("#sliderssu-range-vertical").slider("values", 0) + " - $" + $("#sliderssu-range-vertical").slider("values", 1));

        }

    };

}();