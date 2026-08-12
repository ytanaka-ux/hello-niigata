const wrapper = document.querySelector(".swiper-wrapper");

for(let i=1;i<=32;i++){

    const number = String(i).padStart(4,"0");

    wrapper.innerHTML += `
<div class="swiper-slide">

    <div class="swiper-zoom-container">

        <img src="images/helloniigata_page-${number}.jpg">

    </div>

</div>
`;

}

const swiper = new Swiper(".mySwiper",{

    loop:false,

    zoom:{
        maxRatio:4,
        minRatio:1
    },

    pagination:{
        el:".swiper-pagination",
        clickable:true
    },

    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    }
});
const guide = document.getElementById("swipeGuide");

swiper.on("slideChange", () => {

    if(swiper.activeIndex === 0){

        guide.style.display = "flex";

    }else{

        guide.style.display = "none";

    }

});
const pageNumber = document.getElementById("pageNumber");

pageNumber.textContent = `${swiper.activeIndex + 1} / 32`;

swiper.on("slideChange", () => {

    pageNumber.textContent = `${swiper.activeIndex + 1} / 32`;

});
