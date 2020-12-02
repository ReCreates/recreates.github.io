// JavaScript source code
const div1 = document.getElementById("div-keypad");
for (let i = 0; i < 3; i++) {
    const newDiv = document.createElement("div");
    newDiv.id = "div2";
    for (let j = 0; j < 3; j++) {
        const newBtn = document.createElement("button");
        newBtn.className = "btn-key";
        newBtn.innerHTML = i * 3 + j + 1;
        newDiv.appendChild(newBtn);
    }
    div1.appendChild(newDiv);
}

$(function () {
    var btn = $(".btn-key");
    var keypad = $("#div-keypad");
    var text = $("#text").text();

    keypad.css({
        "width": btn.outerWidth() * 3,
        "height": btn.outerHeight() * 3
    });

    keypad.mouseleave(function () {
        btn.css({
            "outline": "none",
            "border-style": "outset",
            "background-color": "seagreen"
        });
    });
    
    btn.click(function () {
        btn.css({
            "border-style": "outset",
            "background-color": "seagreen"
        });
        $(this).css({
            "border-style":"inset",
            "background-color": "cadetblue"
        });
        $("#text").text(text+$(this).text());

    });
    $("#btn-small").click(function () {
        btn.css({
            "width": "30px",
            "height": "30px",
            "font-size": "15px"
        });
        keypad.css({
            "width": btn.outerWidth() * 3,
            "height": btn.outerHeight() * 3,
            "padding": "10px"
        });
        $("p, button").css({
            "font-size": "15px"
        });
    });
    $("#btn-medium").click(function () {
        btn.css({
            "width": "",
            "height": "",
            "font-size": "",
        });
        keypad.css({
            "width": btn.outerWidth() * 3,
            "height": btn.outerHeight() * 3,
            "padding": ""
        });
        $("p, button").css({
            "font-size": "30px"
        })
    });
    $("#btn-large").click(function () {
        btn.css({
            "width": "90px",
            "height": "90px",
            "font-size": "45px"
        });
        keypad.css({
            "width": btn.outerWidth() * 3,
            "height": btn.outerHeight() * 3,
            "padding": "30px"
        });
        $("p, button").css({
            "font-size": "45px"
        })
    });
    $("#btn-fadeout").click(function () {
        btn.fadeOut();
    });
    $("#btn-fadein").click(function () {
        btn.fadeIn();
    });
});
