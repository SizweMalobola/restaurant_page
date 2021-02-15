export default class NavbarView {
  constructor() {
    this.navbar = document.createElement("nav");
    this.navbar.classList.add(
      "navbar",
      "navbar-expand-lg",
      "navbar-light",
      "fixed-top"
    );
    this.navbar.innerHTML = `<div class="container">
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
