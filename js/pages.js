/**
 * ----------------------------------------
 * pages.js
 * Swiper Virtual用ページデータ生成
 * ----------------------------------------
 */

const TOTAL_PAGES = CONFIG.totalPages;

// Virtual用のページデータ
const virtualSlides = [];

// ページを逆順に生成
// 32 → 31 → 30 → …… → 2 → 1
// ※現在の左読みの構成を維持
for (let i = TOTAL_PAGES; i >= 1; i--) {

    const number = String(i).padStart(4, "0");

    virtualSlides.push(`
        <div class="swiper-zoom-container">

            <img
                loading="lazy"
                decoding="async"
                src="${CONFIG.imageFolder}/${CONFIG.imagePrefix}${number}${CONFIG.imageExtension}"
                alt="ページ${i}"
            >

        </div>
    `);
}

console.log("Virtualページ数:", virtualSlides.length);