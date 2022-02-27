let scrollTop = 0;
let coverImg;
let cover;

window.onload = function() {
    coverImg = document.querySelector(".coverImg");
    cover = document.querySelector(".cover");
    cover.style.opacity = .3;
}

window.addEventListener("scroll", function(e) {
    scrollTop = document.documentElement.scrollTop;

    coverImg.style.backgroundPosition = "center " + -scrollTop / 20 + "px";
    coverImg.style.transform = "scale(" + (1+scrollTop/1000) + ")";
    cover.style.opacity = .3 + scrollTop/1000;
});