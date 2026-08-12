/**
 * ----------------------------------------
 * thumbnail.js
 * サムネイル一覧
 * ----------------------------------------
 */

const menuButton = document.getElementById("menuButton");
const thumbnailPanel = document.getElementById("thumbnailPanel");
const thumbnailGrid = document.getElementById("thumbnailGrid");
const closeThumbnail = document.getElementById("closeThumbnail");

// サムネイル生成
for (let i = 1; i <= CONFIG.totalPages; i++) {

    const number = String(i).padStart(4, "0");

    const item = document.createElement("div");
    item.className = "thumbnail";

    item.innerHTML = `
    <img src="images-thumb/${CONFIG.imagePrefix}${number}.webp" alt="ページ${i}">
    <p>${i}</p>
`;

    // クリックでページ移動
    item.addEventListener("click", () => {

        swiper.slideTo(CONFIG.totalPages - i);

        thumbnailPanel.style.display = "none";

    });

    thumbnailGrid.appendChild(item);

}

// 開く
menuButton.addEventListener("click", () => {

    thumbnailPanel.style.display = "block";

    // 現在のページ番号
    const currentPage = CONFIG.totalPages - swiper.activeIndex;

    // 現在のサムネイル
    const currentThumbnail = thumbnailGrid.children[currentPage - 1];

    if (currentThumbnail) {

        currentThumbnail.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

    }

});

// 閉じる
closeThumbnail.addEventListener("click", () => {

    thumbnailPanel.style.display = "none";

});
/**
 * ----------------------------------------
 * 現在ページを緑表示
 * ----------------------------------------
 */

function updateThumbnailActive() {

    // 一旦すべての緑枠を解除
    document.querySelectorAll(".thumbnail").forEach(item => {
        item.classList.remove("active");
    });

    // 現在表示中のページ番号
    const currentPage = CONFIG.totalPages - swiper.activeIndex;

    // 該当サムネイルを取得
    const currentThumbnail = thumbnailGrid.children[currentPage - 1];

    if (currentThumbnail) {
        currentThumbnail.classList.add("active");
    }

}

// 初期表示
updateThumbnailActive();

// ページが変わるたび更新
swiper.on("slideChange", updateThumbnailActive);