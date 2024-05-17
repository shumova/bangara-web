import {a11y} from '../constants';

const initExamplesSlider = () => {
  const examplesSlider = document.querySelector('[data-examples]');

  if (!examplesSlider) {
    return;
  }

  const examplesSliderSettings = {
    delayValue: examplesSlider.dataset.delay || 4500,
    speedValue: examplesSlider.dataset.speed || 1800,
  };

  const examplesSliderSlider = examplesSlider.querySelector('[data-examples-slider]');
  const examplesSliderPagination = examplesSlider.querySelector('[data-examples-pagination]');

  const initExamplesSliderSlider = () => new window.Swiper(examplesSliderSlider, {
    slidesPerView: 1,
    speed: Number(examplesSliderSettings.speedValue),
    allowTouchMove: false,
    loop: true,
    autoplay: {
      delay: Number(examplesSliderSettings.delayValue),
      disableOnInteraction: false,
    },

    a11y,

    pagination: {
      el: examplesSliderPagination,
      clickable: true,
    },
  });

  initExamplesSliderSlider();
};

export {initExamplesSlider};
