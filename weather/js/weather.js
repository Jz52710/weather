window.onload = function () {
    //点击下来
    let header = document.querySelector(".headerz")
    let yc = document.querySelector(".yc")
    let qx = document.querySelector(".ycqx")
    header.ontouchstart  = function () {
        yc.style.top = "0"
    }
    qx.ontouchstart  = function () {
        yc.style.top = "-100%"
    }
}