class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="container">
      <nav class="navbar">
        <a href="#" class="LogoNav">
          <img src="Public/Logo.svg" alt="Logo" />
          <h4>Hoster</h4>
        </a>
        <ul class="NavLink">
          <li><a href="#" class="LinkNav">Home</a></li>
          <li><a href="#" class="LinkNav">Product</a></li>
          <li><a href="#" class="LinkNav active">Pricing</a></li>
          <li><a href="#" class="LinkNav">Contact Us</a></li>
        </ul>
        <button type="button" class="btn-nav">My Account</button>
      </nav>
      <div class="supportCenter">
        <h2>Support Center</h2>
        <p>
          Browse through our frequently asked questions, tutorials, and other
          self-help resources to find the answers you need.
        </p>
        <form>
          <input type="text" id="search" placeholder="Search" />
          <label for="search">
            <img src="Public/Search.svg" alt="Search" />
          </label>
          <button type="submit">Search</button>
        </form>
        <div class="popular">
          <p>popular:</p>
          <a href="#">What is hosting?</a>
          <a href="#">Why my website is slow?</a>
        </div>
      </div>
    </header>
               
            `;
  }
}

customElements.define("header-head", Header);
