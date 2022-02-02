function sliderMain() {
    var swiper = new Swiper('.banks .swiper', {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: ' .banks .swiper-button-next',
            prevEl: ' .banks .swiper-button-prev',
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1460: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1600: {
                slidesPerView: 4,
                spaceBetween: 20
            },
        }
    })
}

function sliderMainTwo() {
    var swiper = new Swiper('.help .swiper', {
        slidesPerView: 3,
        spaceBetween: 32,
        navigation: {
            nextEl: ' .help .swiper-button-next',
            prevEl: ' .help .swiper-button-prev',
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20
            },
        }
    })
}


$(document).ready(function() {
    sliderMain()
    sliderMainTwo()

    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active");
        $(".header__right").toggleClass("header__right--active");
        $(".header__left-item").toggleClass("header__left-item--active");
        $("body").toggleClass("fixed-body");
    });
});

const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');

squareRange.addEventListener('input', function() {
    squareInput.value = squareRange.value;
})
squareInput.addEventListener('input', function() {
    squareRange.value = squareInput.value;
})

const squareInput2 = document.querySelector('#square-input2');
const squareRange2 = document.querySelector('#square-range2');

squareRange2.addEventListener('input', function() {
    squareInput2.value = squareRange2.value;
})
squareInput2.addEventListener('input', function() {
    squareRange2.value = squareInput2.value;
})

function range() {
    let
        val = $('#square-range').val();
    val = val / 1000000
    $('#square-range').css({ background: '-webkit-linear-gradient(left, #CCA66E 0%, #CCA66E ' + val + '%, #F2EFED ' + val + '%, #F2EFED 100%)' });
}

function range2() {
    let
        val = $('#square-range2').val();
    val = val * 5
    $('#square-range2').css({ background: '-webkit-linear-gradient(left, #CCA66E 0%, #CCA66E ' + val + '%, #F2EFED ' + val + '%, #F2EFED 100%)' });
}