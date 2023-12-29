document.addEventListener("DOMContentLoaded", function () {

    var swiper = new Swiper("#main_swiper .swiper", {
        spaceBetween: 30,
        rewind: true,
        effect: "fade",
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: "#main_swiper .swiper .swiper-button-next",
            prevEl: "#main_swiper .swiper .swiper-button-prev",
        },
        pagination: {
            el: "#main_swiper .swiper .swiper-pagination",
            clickable: true,
        },

        on: {
            slideChangeTransitionStart: function () {
                // 슬라이드 전환 시작 시에 발생하는 이벤트
                // 모든 슬라이드의 active 클래스 제거
                document.querySelectorAll('.swiper-slide').forEach(function (slide) {
                    slide.querySelector('.text-overlay').classList.remove('act');
                });
            },
            slideChangeTransitionEnd: function () {
                // 슬라이드 전환 종료 시에 발생하는 이벤트
                // 활성 슬라이드에 해당하는 텍스트에 active 클래스 추가
                document.querySelector('.swiper-slide-active .text-overlay').classList.add('act');
            },
        },

    });


});