
var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay:{
        delay: 5000
    },
    loop: true
});


/*
window.swiper = new Swiper({
    el: '.slider__contenedor',
    slideClass: 'slider__slide',
    createElements: true,
    autoplay:{
        delay: 5000 /*Para que la imagen se mueva en este caso como pasen 5s*/
/* },
 loop: true, /* Para que sea un slide infinito */
/* spaceBetween: 20 Para que haya separacion entre los slide pasa el valor entero a pixeles*/
/*pagination: true, /* Para agregar las viñetas de paginacion */
/*navigation: true
})*/