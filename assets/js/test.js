// JavaScript source code
const div1 = document.getElementById("div1");
for (let i = 0; i < 3; i++) {
    const newDiv = document.createElement("div");
    newDiv.id = "div2";
    for (let j = 0; j < 3; j++) {
        const newBtn = document.createElement("button");
        newBtn.className = "btn-keynum";
        newBtn.innerHTML = i * 3 + j + 1;
        newDiv.appendChild(newBtn);
    }
    div1.appendChild(newDiv);
}

$(function () {
    var btn = $(".btn-keynum");
    var div1 = $("#div1");

    div1.css({
        "width": btn.outerWidth() * 3,
        "height": btn.outerHeight() * 3
    });
    /*
    div1.mouseover(function () {
        btn.css({
            "outline": "none",
            "border-style": "outset",
            "background-color": "seagreen"
        });
    });
    */
    btn.click(function () {
        btn.css({
            "border-style": "outset",
            "background-color": "seagreen"
        });
        $(this).css({
            "border-style":"inset",
            "background-color": "cadetblue"
        });
        $("#text").text($(this).text());

    });
    $("#btn-small").click(function () {
        btn.css({
            "width": "30px",
            "height": "30px",
            "font-size": "15px"
        });
        $("#div1").css({
            "width": btn.outerWidth() * 3,
            "height": btn.outerHeight() * 3,
            "padding": "10px"
        });
    });
    $("#btn-medium").click(function () {
        btn.css({
            "width": "",
            "height": "",
            "font-size": "",
        });
        $("#div1").css({
            "width": btn.outerWidth() * 3,
            "height": btn.outerHeight() * 3,
            "padding": ""
        });
    });
    $("#btn-large").click(function () {
        btn.css({
            "width": "90px",
            "height": "90px",
            "font-size": "45px"
        });
        $("#div1").css({
            "width": btn.outerWidth() * 3,
            "height": btn.outerHeight() * 3,
            "padding": "30px"
        });
    });
    $("#btn-fadeout").click(function () {
        btn.fadeOut();
    });
    $("#btn-fadein").click(function () {
        btn.fadeIn();
    });
});
