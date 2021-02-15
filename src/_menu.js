export default class MenuView {
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
