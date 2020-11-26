$(document).ready(function () {

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let images = [
        '<span><img src="img/fuudi.jpg" class="img-fluid" alt=""/></span>',
        '<span><img src="img/hiiri.jpg" class="img-fluid" alt=""/></span>',
        '<span><img src="img/kolle.jpg" class="img-fluid" alt=""/></span>',
        '<span><img src="img/panda.jpg" class="img-fluid" alt=""/></span>',
        '<span><img src="img/pollo.jpg" class="img-fluid" alt=""/></span>',
        '<span><img src="img/villa.jpg" class="img-fluid" alt=""/></span>',
        '<span><img src="img/killi.jpg" class="img-fluid" alt=""/></span>',
        '<span><img src="img/pehme.jpg" class="img-fluid" alt=""/></span>',
        '<span><img src="img/vuokko.jpg" class="img-fluid" alt=""/></span>',
        '<span><img src="img/vainu.jpg" class="img-fluid" alt=""/></span>',
        '<span><img src="img/dracarys.jpg" class="img-fluid" alt=""/></span>',        
        '<span><img src="img/haikolmiohammas.jpg" class="img-fluid" alt=""/></span>'
    ];

    let words = [
        "FUUDI",
        "HIIRI",
        "KOLLE",
        "PANDA",
        "PÖLLÖ",
        "VILLA",
        "KILLI",
        "PEHME",
        "VUOKKO",
        "VAINU",
        "DRACARYS",
        "HAI KOLMIOHAMMAS"
    ];

    let random = getRndInteger(0, images.length - 1);
    $("#images").html(images[random]);
    let word = words[random];

    $("#word").html(word);
    $("#answer").focus();
    $("#answer").attr("placeholder", word);
    $("#images").html(images[random]);

    $("#new_img").click(function () {
        let random = getRndInteger(0, images.length - 1);
        $("#images").html(images[random]);
        word = words[random];

        $("#word").html(word);
        $("#answer").focus();
        $("#answer").attr("placeholder", word);
        $("#answer").val("");
        $("#right_wrong").html("");
    });

    $(".answer_button").click(function () {
        let ans = $("#answer").val();
        ans = ans.toUpperCase();

        if (ans == word) {
            $("#right_wrong").html("OIKEIN!");
            $("#right_wrong").removeClass("wrong");
            $("#right_wrong").addClass("right");
            $("#new_img").focus();
        } else {
            $("#right_wrong").html("YRITÄ UUDELLEEN!");
            $("#right_wrong").removeClass("right");
            $("#right_wrong").addClass("wrong");
            $("#answer").focus();
        }

    });
});