class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="container">
      <div class="supportFooter">
        <div>
          <h2>Still have questions? We&apos;re have to help!</h2>
          <p>
            Chat with our support team by clicking the chat button in the right.
            We're here to assist you!
          </p>
        </div>
        <button>
          <img src="Public/Msg.svg" alt="Msg" />
          Chat Support
        </button>
      </div>
      <div class="mainFooter">
        <div class="descFooter">
          <a href="#" class="LogoFooter">
            <img src="Public/Logo.svg" alt="Logo" />
            <h4>Hoster</h4>
          </a>
          <p>
            At Hoster, we believe that reliable, high-quality hosting should be
            accessible to everyone. That's why we offer a range of hosting plans
            to suit the needs of businesses and individuals alike. Our team of
            experts is always on hand to provide fast, friendly support, and we
            use the latest technology to ensure that your website is always up
            and running smoothly.
          </p>
        </div>
        <div class="footerBar">
          <div class="itemFooter">
            <h6>products</h6>
            <ul>
              <li><a href="#">Shared Hosting</a></li>
              <li><a href="#">Virtual Private Server</a></li>
              <li><a href="#">Domain</a></li>
              <li><a href="#">Email Hosting</a></li>
            </ul>
          </div>
          <div class="itemFooter">
            <h6>company</h6>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Help</a></li>
            </ul>
          </div>
          <div class="itemFooter">
            <h6>get in touch</h6>
            <ul>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Dribble</a></li>
            </ul>
          </div>
        </div>
      </div>
      <p class="copyright">COPYRIGHT &copy;; 2022 — DESIGN NAUVAL</p>
    </footer>
                 
              `;
  }
}

customElements.define("footer-foot", Footer);
