/**
 * ----------------------------------------
 * guide.js
 * 表紙のスワイプガイドを制御する
 * ----------------------------------------
 */

// ガイドを取得
const guide = document.getElementById("swipeGuide");

// 最初は表示
guide.style.display = "flex";

// ページが切り替わったらガイド表示を切り替える
swiper.on("slideChange", () => {

    if (swiper.activeIndex === 0) {

        guide.style.display = "flex";

    } else {

        guide.style.display = "none";

    }

});