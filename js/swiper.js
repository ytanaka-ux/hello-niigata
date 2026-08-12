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

    // 最後に見たページから再開
    initialSlide: Number(localStorage.getItem("lastPage")) || 0,

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
     */
    const currentPage =
        TOTAL_PAGES - swiper.activeIndex;

    console.log("現在ページ:", currentPage);

    /*
     * 次回アクセス時に
     * 最後に見ていた位置から再開
     */
    localStorage.setItem(
        "lastPage",
        swiper.activeIndex
    );

});