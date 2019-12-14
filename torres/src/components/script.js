
// Script Js Acivation
export const testimonial = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '10px',
    responsive: [{
            breakpoint: 450,
            settings: {
                dots: false,
                slidesToShow: 3,
                centerPadding: '0px',
            }
        },
        {
            breakpoint: 420,
            settings: {
                autoplay: true,
                dots: false,
                slidesToShow: 1,
                centerMode: false,
            }
        }
    ]
}


export const testimonial2 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
    fade: true,
}
