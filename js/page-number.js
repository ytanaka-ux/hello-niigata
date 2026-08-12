const pageNumber = document.getElementById("pageNumber");

function updatePageNumber() {

    const current =
        CONFIG.totalPages - swiper.activeIndex;

    pageNumber.textContent =
        `${current} / ${CONFIG.totalPages}`;

}

updatePageNumber();

swiper.on("slideChange", updatePageNumber);