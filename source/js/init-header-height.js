const header = document.querySelector('.header');

const setHeaderHeightVar = () => {
  if (!header.classList.contains('is-opened')) {
    document.body.style.setProperty('--header-height', header.clientHeight + 'px');
  }
};

const initHeaderHeight = () => {
  if (header) {
    window.addEventListener('resize', setHeaderHeightVar);

    setHeaderHeightVar();
  }
};

export {initHeaderHeight};
