export default class HomeView {
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
