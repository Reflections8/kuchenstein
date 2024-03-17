document.addEventListener('DOMContentLoaded', () => {
  const sliderPrevButton = document?.querySelector('.aboutSlider__title-arrows-prev')
  const prevButtonPath = sliderPrevButton?.querySelector('path')
  const sliderNextButton = document?.querySelector('.aboutSlider__title-arrows-next')
  const nextButtonPath = sliderNextButton?.querySelector('path')

  $('.aboutSlider__slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: sliderPrevButton,
    nextArrow: sliderNextButton,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  $('.aboutSlider__slider').on('setPosition', (event, slick) => {
    if (slick.currentSlide === 0) {
      prevButtonPath.setAttribute('fill', '#333333')
      prevButtonPath.style.pointerEvents = 'none'
    } else {
      prevButtonPath.setAttribute('fill', '#CFAF6C')
      prevButtonPath.style.pointerEvents = 'all'
    }

    if (slick.currentSlide >= slick.slideCount - slick.options.slidesToShow) {
      nextButtonPath.setAttribute('fill', '#333333')
      nextButtonPath.style.pointerEvents = 'none'
    } else {
      nextButtonPath.setAttribute('fill', '#CFAF6C')
      nextButtonPath.style.pointerEvents = 'all'
    }
  });

})
