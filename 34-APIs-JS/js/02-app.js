document.addEventListener('DOMContentLoaded', () => {
  const obs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      console.log('ya esta visible')
    }
  }, {});

  obs.observe(document.querySelector('.premium'))
});
