document.addEventListener('DOMContentLoaded', () => {
  const sliderPrevButton = document.querySelector('.projectCard__sliderSection-arrows-prev')
  const prevButtonPath = sliderPrevButton.querySelector('path')
  const sliderNextButton = document.querySelector('.projectCard__sliderSection-arrows-next')
  const nextButtonPath = sliderNextButton.querySelector('path')

  $('.projectCard__sliderSection-slider').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: sliderPrevButton,
    nextArrow: sliderNextButton,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
    ]
  });

  $('.projectCard__sliderSection-slider').on('setPosition', (event, slick) => {
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

  /* Slider preview */
  const mainImg = document.querySelector('.projectCard__sliderSection-mainImg')
  const previewSlides = document.querySelectorAll('.projectCard__sliderSection-slider-slide')

  previewSlides.forEach(slide => {
    slide.addEventListener('click', e => {
      const clickedSrc = e.currentTarget.getAttribute('src')
      mainImg.setAttribute('src', clickedSrc)
    })
  })
})
