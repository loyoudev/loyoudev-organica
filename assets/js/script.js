'use stict';

// modal
const notificationModal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]')

modalCloseBtn.addEventListener('click', function () {
  notificationModal.classList.add('closed');
})



// navbar taggle
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElems = [navOpenBtn, navCloseBtn];

for(let i = 0; i < navElems.length; i++) {
    navElems[i].addEventListener("click", function () {
        navbar.classList.toggle("active");
    });
}



// search toggle
const searchContainer = document.querySelector("[data-search-wrapper]");
const searchBtn = document.querySelector("[data-search-btn]");

searchBtn.addEventListener("click", function () {
  searchContainer.classList.toggle("active");
});



// ASIDE WHISHLIST Y CART TOGGLE
const panelBtns = document.querySelectorAll("[data-panel-btn]");
const sidePanels = document.querySelectorAll("[data-side-panel]");

for(let i = 0; i < panelBtns.length; i++) {
  panelBtns[i].addEventListener("click", function () {
    let clickElementDataValue = this.dataset.panelBtn;

    for(let i = 0; i < sidePanels.length; i++) {
      if (clickElementDataValue === sidePanels[i].dataset.sidePanel) {
        sidePanels[i].classList.toggle("active");        
      } else {
        sidePanels[i].classList.remove("active")
      }
    }
  });
}




// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}


// back to top

const backTopBtn = document.querySelector("[data-back-top-btn]")

window.addEventListener("scroll", function () {
  window.scrollY >= 100 ? backTopBtn.classList.add("active")
    : backTopBtn.classList.remove("active");
});
