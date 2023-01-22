//menu
const burger = document.querySelector('.menu-icon')
const menu = document.querySelector('.menu')
const body = document.body

if(burger && menu) {
    burger.addEventListener( 'click',()=>{
        burger.classList.toggle('_active')
        menu.classList.toggle('_active')
        body.classList.toggle('_lock')
    } )
}

//dropdown

const filter = document.querySelector('.filter')

if(filter){
    const items = filter.querySelectorAll('.block-filter')

    items.forEach(item => {
        item.addEventListener('click',event=>{
            item.querySelector('.block-filter__dropdown').classList.toggle('_active')
            item.querySelector('.block-filter__icon').classList.toggle('_active')

            if(event.target.classList.contains('block-filter__item')){
                item.querySelector('.block-filter__value').textContent = event.target.textContent
            }
        })
    });
}

//swiper

const popularSlider = new Swiper('.popular-slider', {
    spaceBetween:20,
    slidesPerView:1,
    loop:true,
    navigation: {
      nextEl: '.popular-slider-next',
      prevEl: '.popular-slider-prev',
    },
    autoplay:{
        delay:2000,
    },
    breakpoints: {
        // when window width is >= 320px
        992:{
            slidesPerView:3,
        },
        790:{
            slidesPerView:2,
        }
      }
  });

  //swiper2
const reviewsSlider = new Swiper('.reviews__slider', {
    spaceBetween:20,
    slidesPerView:1,
    autoHeight:true,
    navigation: {
      nextEl: '.slider-reviews-next',
      prevEl: '.slider-reviews-prev',
    },
    autoplay:{
        delay:5000,
    },
});

//gallery

const galleryItems = document.querySelectorAll(".gallery__item")

if (galleryItems.length>0){
    galleryItems.forEach( item => {
        new Swiper( item,{
            slidesPerView:1,
            autoplay:{
                delay:4000,
            },
            effect:'fade',
        } )
    } )
}