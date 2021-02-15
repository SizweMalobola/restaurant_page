export default class ContactsView {
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
