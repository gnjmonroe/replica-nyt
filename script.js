const headerAccordion0 = document.getElementById('header-accordion-0');
const bodyAccordion0 = document.getElementById('body-accordion-0');
const headerAccordion1 = document.getElementById('header-accordion-1');
const bodyAccordion1 = document.getElementById('body-accordion-1');
const headerAccordion2 = document.getElementById('header-accordion-2');
const bodyAccordion2 = document.getElementById('body-accordion-2');
const headerAccordion3 = document.getElementById('header-accordion-3');
const bodyAccordion3 = document.getElementById('body-accordion-3');
const headerAccordion4 = document.getElementById('header-accordion-4');
const bodyAccordion4 = document.getElementById('body-accordion-4');

headerAccordion0.onclick = testLog;
headerAccordion1.onclick = testLog;
headerAccordion2.onclick = testLog;
headerAccordion3.onclick = testLog;
headerAccordion4.onclick = testLog;

function testLog() {
  // close all other headers
  switch (this.id.charAt(this.id.length - 1)) {
      case '0':
          headerAccordion1.classList.remove("active");
          headerAccordion2.classList.remove("active");
          headerAccordion3.classList.remove("active");
          headerAccordion4.classList.remove("active");
          bodyAccordion1.classList.remove("active");
          bodyAccordion2.classList.remove("active");
          bodyAccordion3.classList.remove("active");
          bodyAccordion4.classList.remove("active");
          break;
      case '1':
          headerAccordion0.classList.remove("active");
          headerAccordion2.classList.remove("active");
          headerAccordion3.classList.remove("active");
          headerAccordion4.classList.remove("active");
          bodyAccordion0.classList.remove("active");
          bodyAccordion2.classList.remove("active");
          bodyAccordion3.classList.remove("active");
          bodyAccordion4.classList.remove("active");
          break;
      case '2':
          headerAccordion0.classList.remove("active");
          headerAccordion1.classList.remove("active");
          headerAccordion3.classList.remove("active");
          headerAccordion4.classList.remove("active");
          bodyAccordion0.classList.remove("active");
          bodyAccordion1.classList.remove("active");
          bodyAccordion3.classList.remove("active");
          bodyAccordion4.classList.remove("active");
          break;
      case '3':
          headerAccordion0.classList.remove("active");
          headerAccordion1.classList.remove("active");
          headerAccordion2.classList.remove("active");
          headerAccordion4.classList.remove("active");
          bodyAccordion0.classList.remove("active");
          bodyAccordion1.classList.remove("active");
          bodyAccordion2.classList.remove("active");
          bodyAccordion4.classList.remove("active");
          break;
      case '4':
          headerAccordion0.classList.remove("active");
          headerAccordion1.classList.remove("active");
          headerAccordion2.classList.remove("active");
          headerAccordion3.classList.remove("active");
          bodyAccordion1.classList.remove("active");
          bodyAccordion2.classList.remove("active");
          bodyAccordion3.classList.remove("active");
          bodyAccordion0.classList.remove("active");
          break;
  }
  // toggle this item's active class
  this.childNodes[3].classList.toggle("active");
  // this.nextElementSibling.classList.toggle("active");
}
var stockIndex = 0;
function stockSlideshow() {
  var i;
  var slideStocks = document.getElementsByClassName('stock-tab');
  for (i = 0; i < slideStocks.length; i++) {
    slideStocks[i].classList.add('hide-stock');
  }
  stockIndex++;
  if (stockIndex >= slideStocks.length) {
    stockIndex = 0;
  }
  slideStocks[stockIndex].classList.remove('hide-stock');
  setTimeout(stockSlideshow, 3000);
}
stockSlideshow();

function openModal() {
  var modal = document.getElementsByClassName("mobile-portal");
  modal[0].style.display = 'block';
}
function closeModal() {
  var modal = document.getElementsByClassName("mobile-portal");
  modal[0].style.display = 'none';
}
function openAccountModal() {
  var modal = document.getElementsByClassName("mobile-account-portal");
  modal[0].style.display = 'block';
}
function closeAccountModal() {
  var modal = document.getElementsByClassName("mobile-account-portal");
  modal[0].style.display = 'none';
}