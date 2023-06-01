// for swiper library 
const mql = window.matchMedia("(max-width: 992px)")

const changeSlideView = (slide) => {
    var swiper = new Swiper(".swiper", {
    slidesPerView: slide,
    spaceBetween: 30,
    autoplay: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
  });
};
const handleOrientationChange = (e) => {
    if (mql.matches) {
      changeSlideView(1)
    } else {
      changeSlideView(3)
    }
  }
  
  handleOrientationChange();
  
  mql.onchange = (e) => {
    handleOrientationChange(e);
  }

  // validation 
  // Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})();


document.getElementById("year").innerHTML = new Date().getFullYear();
