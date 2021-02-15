import NavbarView from "./_navbar";
import HomeView from "./_home";
import MenuView from "./_menu";
import ContactsView from "./_contacts";

var contentDiv = document.querySelector("#content");
var navbar = new NavbarView();
var homepage = new HomeView();
var menupage = new MenuView();
var contactspage = new ContactsView();
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
