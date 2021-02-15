/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/_contacts.js":
/*!**************************!*\
  !*** ./src/_contacts.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactsView)
/* harmony export */ });
class ContactsView {
  constructor() {
    this.contactsPage = document.createElement("section");
    this.contactsPage.id = "contacts-primary-container";
    this.contactsPage.classList.add(
      "container-fluid",
      "tab",
      "bg-primary",
      "text-center",
      "p-0"
    );
    this.contactsPage.innerHTML = `<div id="contacts-secondary-container" class="container text-center"><h1>CONTACT US</h1><div id="contacts-tertiary-container" class="container-fluid row">
    <div id="info-container" class="col-sm-4"><p><i class="fas fa-map-marker-alt"></i> Japan, 〒107-0052 Tokyo, Minato City, Akasaka, 9 Chome−6−1f 乃木坂プレース ３０</p><p><i class="fas fa-clock"></i> Mon-Sat:4pm-8pm</p><p><i class="fas fa-phone-alt"></i> +81 3-6434-0448</p><p><i class="fas fa-envelope"></i> Message us</p> 
    <form submit="return false"> <div><input class="form-control" type="text"><span>Full Name</span></div> <div><input class="form-control" type="text"><span>Email</span></div> <div><input class="form-control" type="textarea"><span>Type message..</span></div> <button class="btn btn-dark" type="submit">Submit</button> </form></div>
    <div id="location-container" class="col-sm-8"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12965.637861148734!2d139.7282717!3d35.6669185!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x97ed3179cafd8e62!2sToriko%20Honten!5e0!3m2!1sen!2sza!4v1613360405367!5m2!1sen!2sza" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div></div></div>`;
  }
  appendContacts(el) {
    el.appendChild(this.contactsPage);
  }
}


/***/ }),

/***/ "./src/_home.js":
/*!**********************!*\
  !*** ./src/_home.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomeView)
/* harmony export */ });
class HomeView {
  constructor() {
    this.homePage = document.createElement("header");
    this.homePage.id = "homepage-container";
    this.homePage.classList.add("container-fluid", "tab", "text-center", "p-0");
    this.homePage.innerHTML = `<div id="content-div" class="container-fluid text-center"><p class="display-2" >Pull up a chair. Take a taste. Come join us. Life is so endlessly delicious!</p>
    <p id="slogan">Come to Kiroko's and Grap something to eat!</p></div> <div id="content-div-two" class="text-center"> <div class="d-flex justify-content-center align-items-center"><p>Order Delivery</p> <button id="uber-btn" class="btn"></button><button id="wolt-btn" class="btn"></button> </div>
    </div></div><div id="content-div-three" class="d-flex-column align-items-center" > <i class="fab fa-github"></i> <p>Made by Sizwe Malobola</p></div> `;
  }
  appendHome(el) {
    el.appendChild(this.homePage);
  }
}


/***/ }),

/***/ "./src/_menu.js":
/*!**********************!*\
  !*** ./src/_menu.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuView)
/* harmony export */ });
class MenuView {
  constructor() {
    this.menuPage = document.createElement("section");
    this.menuPage.classList.add(
      "container-fluid",
      "bg-dark",
      "text-light",
      "text-center",
      "p-0"
    );
    this.menuPage.id = "menupage-container";
    this.menuPage.innerHTML = `<div id="menu-content-div"> <div id="ramen-bg-img" class="menu-showcase d-flex justify-content-center align-items-center"><h1>Ramen</h1></div> 
    <div class="menu-grid row"> <div class="col-sm-6"><h4>Sapporo Ramen</h4><p>Miso ramen with seafood</p></div><div class="col-sm-6"><h4>Hakata Ramen</h4><p>Tonkotsu, or pork bone ramen, with thin firm noodles</p></div><div class="col-sm-6"><h4>Kitakata Ramen</h4><p>Shoyu ramen with flat curly noodles</p></div><div class="col-sm-6"><h4>Onomichi Ramen</h4><p>Fish and shoyu ramen broth</p></div> </div>
    <div id="sushi-bg-img" class="menu-showcase d-flex justify-content-center align-items-center"><h1>Sushi</h1></div>
    <div class="menu-grid row"> <div class="col-sm-6"><h4>Nigiri</h4><p>A topping, usually fish, served on top of sushi rice</p></div><div class="col-sm-6"><h4>Sashimi</h4><p>Fish or shellfish served alone</p></div><div class="col-sm-6"><h4>Maki</h4><p>Rice and filling wrapped in seaweed</p></div><div class="col-sm-6"><h4>Temaki</h4><p>Sushi that has been handrolled into a cone shape</p></div> </div>
    <div id="dessert-bg-img" class="menu-showcase d-flex justify-content-center align-items-center"><h1>Traditional Japanese Desserts</h1></div>
    <div class="menu-grid row"> <div class="col-sm-6"><h4>Anmitsu</h4><p>Anmitsu is a Japanese parfait, created from agar-agar jelly</p></div><div class="col-sm-6"><h4>Daifuku</h4><p>Daifuku is a wagashi dessert made of mochi balls, normally stuffed with anko</p></div><div class="col-sm-6"><h4>Dango</h4><p>Dango is a wagashi that is made from mochiko, a rice flour similar to mochi</p></div><div class="col-sm-6"><h4>Dorayaki</h4><p>Doarayki is anko paste between two castella pancakes</p></div> </div>
    `;
  }
  appendMenu(el) {
    el.appendChild(this.menuPage);
  }
}


/***/ }),

/***/ "./src/_navbar.js":
/*!************************!*\
  !*** ./src/_navbar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavbarView)
/* harmony export */ });
class NavbarView {
  constructor() {
    this.navbar = document.createElement("nav");
    this.navbar.classList.add(
      "navbar",
      "navbar-expand-lg",
      "navbar-light",
      "fixed-top"
    );
    this.navbar.innerHTML = `        <div class="container">
        <a class="navbar-brand display-1" href="#"
          ><img
            id="logo"
            src="https://upload.wikimedia.org/wikipedia/fr/9/9c/Logo_Toriko.png"
            alt="Logo_Toriko Restaurant"
            class="d-inline-block align-center"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          
          class="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a href="#" class="nav-link active" id="home-tab">HOME</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" id="menu-tab">MENU</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" id="contacts-tab">CONTACTS</a>
            </li>
          </ul>
        </div>
      </div>`;
  }
  appendNav(el) {
    el.appendChild(this.navbar);
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_navbar */ "./src/_navbar.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_home */ "./src/_home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_menu */ "./src/_menu.js");
/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_contacts */ "./src/_contacts.js");





var contentDiv = document.querySelector("#content");
var navbar = new _navbar__WEBPACK_IMPORTED_MODULE_0__.default();
var homepage = new _home__WEBPACK_IMPORTED_MODULE_1__.default();
var menupage = new _menu__WEBPACK_IMPORTED_MODULE_2__.default();
var contactspage = new _contacts__WEBPACK_IMPORTED_MODULE_3__.default();
//! Init
navbar.appendNav(contentDiv);
homepage.appendHome(contentDiv);
// TODO: make tabs work, when a tab is clicked. first load home tab is active
var navbarTabs = document.querySelector(".navbar-nav");
// * onclick, check if target is classList == nav-link,if nav-link remove active class from active link, add active class to target

navbarTabs.addEventListener("click", function (e) {
  if (e.target.classList.contains("nav-link")) {
    let navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((element) => {
      if (element.classList.contains("active")) {
        element.classList.remove("active");
      }
    });
    e.target.classList.add("active");
    renderModule(e.target.id);
  }
});

// TODO: on click, switch rendered module
// function checks id and renders tab accordingly
function renderModule(id) {
  document.querySelector("#content").lastChild.remove();
  switch (id) {
    case "home-tab":
      homepage.appendHome(contentDiv);
      break;
    case "menu-tab":
      menupage.appendMenu(contentDiv);
      break;
    case "contacts-tab":
      contactspage.appendContacts(contentDiv);
      break;
  }
}
// TODO: make home page images change after 4seconds

// window.onload = function () {
//   var image = document.querySelector("#content-div");
//   var imgsArray = [
//     "https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/02/Toriko-Eating-Cropped.jpg",
//   ];
//   var index = 0;
//   var interval = 4000;
//   function slide() {
//     image.style.background = `linear-gradient(rgba(0, 0, 0, 0.533), rgba(0, 0, 0, 0.533)),url(${imgsArray[index]}) center cover`;
//     index++;
//     if (index >= imgsArray.length) {
//       index = 0;
//     }
//   }
//   setInterval(slide, interval);
// };


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.js.map