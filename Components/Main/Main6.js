class Main_6 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      
    <div class="cardMain">
  <div class="cardTitle">
    <img src="Public/logo/logo-6.svg" alt="logo-6" />
    <h6>Advanced hosting conepts</h6>
  </div>
  <ul>
    <li class="questionItemCard">
      <img src="Public/Sheet.svg" alt="Sheet" /><a href="detail.html" target="_blank"
        >What is a server and how does it work?</a
      >
    </li>
    <li class="questionItemCard">
      <img src="Public/Sheet.svg" alt="Sheet" /><a href="detail.html" target="_blank"
        >What is a DNS and how does it work?</a
      >
    </li>
    <li class="questionItemCard">
      <img src="Public/Sheet.svg" alt="Sheet" /><a href="detail.html" target="_blank"
        >What is a CDN and how does it work?</a
      >
    </li>
    <li class="questionItemCard">
      <img src="Public/Sheet.svg" alt="Sheet" /><a href="detail.html" target="_blank"
        >What is a load balancer?</a
      >
    </li>
    <li class="questionItemCard">
      <img src="Public/Sheet.svg" alt="Sheet" /><a href="detail.html" target="_blank"
        >What is a reverse proxy?</a
      >
    </li>
  </ul>
</div>
                `;
  }
}

customElements.define("main-6", Main_6);
