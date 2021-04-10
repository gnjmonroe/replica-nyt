"use strict";
// grab HTML elements for site-index accordion toggling
var headerSiteIndex0 = document.getElementById("header-siteIndex0");
var bodySiteIndex0 = document.getElementById("body-siteIndex0");
var headerSiteIndex1 = document.getElementById("header-siteIndex1");
var bodySiteIndex1 = document.getElementById("body-siteIndex1");
var headerSiteIndex2 = document.getElementById("header-siteIndex2");
var bodySiteIndex2 = document.getElementById("body-siteIndex2");
var headerSiteIndex3 = document.getElementById("header-siteIndex3");
var bodySiteIndex3 = document.getElementById("body-siteIndex3");
var headerSiteIndex4 = document.getElementById("header-siteIndex4");
var bodySiteIndex4 = document.getElementById("body-siteIndex4");
headerSiteIndex0.onclick = testLog;
headerSiteIndex1.onclick = testLog;
headerSiteIndex2.onclick = testLog;
headerSiteIndex3.onclick = testLog;
headerSiteIndex4.onclick = testLog;
function testLog() {
    // close all other headers
    switch (this.id.charAt(this.id.length - 1)) {
        case '0':
            headerSiteIndex1.classList.remove("active");
            headerSiteIndex2.classList.remove("active");
            headerSiteIndex3.classList.remove("active");
            headerSiteIndex4.classList.remove("active");
            bodySiteIndex1.classList.remove("active");
            bodySiteIndex2.classList.remove("active");
            bodySiteIndex3.classList.remove("active");
            bodySiteIndex4.classList.remove("active");
            break;
        case '1':
            headerSiteIndex0.classList.remove("active");
            headerSiteIndex2.classList.remove("active");
            headerSiteIndex3.classList.remove("active");
            headerSiteIndex4.classList.remove("active");
            bodySiteIndex0.classList.remove("active");
            bodySiteIndex2.classList.remove("active");
            bodySiteIndex3.classList.remove("active");
            bodySiteIndex4.classList.remove("active");
            break;
        case '2':
            headerSiteIndex0.classList.remove("active");
            headerSiteIndex1.classList.remove("active");
            headerSiteIndex3.classList.remove("active");
            headerSiteIndex4.classList.remove("active");
            bodySiteIndex0.classList.remove("active");
            bodySiteIndex1.classList.remove("active");
            bodySiteIndex3.classList.remove("active");
            bodySiteIndex4.classList.remove("active");
            break;
        case '3':
            headerSiteIndex0.classList.remove("active");
            headerSiteIndex1.classList.remove("active");
            headerSiteIndex2.classList.remove("active");
            headerSiteIndex4.classList.remove("active");
            bodySiteIndex0.classList.remove("active");
            bodySiteIndex1.classList.remove("active");
            bodySiteIndex2.classList.remove("active");
            bodySiteIndex4.classList.remove("active");
            break;
        case '4':
            headerSiteIndex0.classList.remove("active");
            headerSiteIndex1.classList.remove("active");
            headerSiteIndex2.classList.remove("active");
            headerSiteIndex3.classList.remove("active");
            bodySiteIndex1.classList.remove("active");
            bodySiteIndex2.classList.remove("active");
            bodySiteIndex3.classList.remove("active");
            bodySiteIndex0.classList.remove("active");
            break;
    }
    // toggle this item's active class
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("active");
}
var slideIndexTGR = -1;
function theGreatReadSlideshow() {
    var i;
    var slidesTGR = document.getElementsByClassName("fader-inner");
    for (i = 1; i < slidesTGR[0].childNodes.length; i += 2) {
        slidesTGR[0].childNodes[i].classList.remove("active");
    }
    slideIndexTGR += 2;
    if (slideIndexTGR >= slidesTGR[0].childNodes.length) {
        slideIndexTGR = 1;
    }
    slidesTGR[0].childNodes[(slideIndexTGR - 2 == -1) ? 7 : slideIndexTGR - 2].classList.add("active");
    setTimeout(theGreatReadSlideshow, 7000);
}
theGreatReadSlideshow();
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
//# sourceMappingURL=script.js.map