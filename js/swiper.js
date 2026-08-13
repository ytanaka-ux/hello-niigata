/**
 * ----------------------------------------
 * swiper.js
 * Swiper初期設定
 * ----------------------------------------
 */

const swiper = new Swiper(".mySwiper", {

    // 左読み
    direction: "horizontal",

    // 最後まで行ったらループしない
    loop: false,

    // 常に1ページ目（表紙）から開始
    // Virtual Slidesが逆順になっているため、
    // 32ページ構成の場合は31番目が実際の1ページ目
    initialSlide: TOTAL_PAGES - 1,

    // 1ページずつ表示
    slidesPerView: 1,

    // ページ間の余白
    spaceBetween: 0,

    /*
     * ----------------------------------------
     * Virtual
     * ----------------------------------------
     * 必要なページだけDOMに配置
     */
    virtual: {

        // pages.jsで作成したページデータ
        slides: virtualSlides,

        // 前後1ページをDOMに保持
        addSlidesBefore: 1,
        addSlidesAfter: 1

    },

    /*
     * ----------------------------------------
     * Zoom
     * ----------------------------------------
     */
    zoom: {

        enabled: true,

        maxRatio: CONFIG.maxZoom,

        minRatio: 1

    },

    /*
     * ----------------------------------------
     * Pagination
     * ----------------------------------------
     */
    pagination: {

        el: ".swiper-pagination",

        clickable: true

    },

    /*
     * ----------------------------------------
     * Navigation
     * ----------------------------------------
     */
    navigation: {

        nextEl: ".swiper-button-next",

        prevEl: ".swiper-button-prev"

    },

    /*
     * ----------------------------------------
     * ページめくり
     * ----------------------------------------
     */
    speed: 550,

    resistanceRatio: 0.85,

    /*
     * ----------------------------------------
     * 画像読み込み
     * ----------------------------------------
     */
    preloadImages: false,

    // 前後1ページだけ先読み
    lazyPreloadPrevNext: 1

});


// ----------------------------------------
// ページが変わったとき
// ----------------------------------------

swiper.on("slideChange", () => {

    /*
     * VirtualではSwiper内部の番号と
     * 実際のパンフレットページが逆になるため、
     * 実際のページ番号に変換
     *
     * 32ページの場合
     * activeIndex 31 → 1ページ目
     * activeIndex 30 → 2ページ目
     * activeIndex 29 → 3ページ目
     * ...
     * activeIndex 0  → 32ページ目
     */
    const currentPage =
        TOTAL_PAGES - swiper.activeIndex;

    console.log("現在ページ:", currentPage);

});
