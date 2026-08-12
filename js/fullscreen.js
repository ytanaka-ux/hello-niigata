/**
 * ----------------------------------------
 * fullscreen.js
 * 全画面表示
 * ----------------------------------------
 */

const fullscreenButton = document.getElementById("fullscreenButton");

fullscreenButton.addEventListener("click", () => {

    if (!document.fullscreenElement) {

        document.documentElement.requestFullscreen();

    } else {

        document.exitFullscreen();

    }

});