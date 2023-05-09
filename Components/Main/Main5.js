class Main_5 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      
    <div class="cardMain">
  <div class="cardTitle">
    <img src="Public/logo/logo-5.svg" alt="logo-5" />
    <h6>E-commerce hosting</h6>
  </div>
  <ul>
    <li class="questionItemCard">
      <img src="Public/Sheet.svg" alt="Sheet" /><a href="detail.html" target="_blank"
        >What is e-commerce hosting and why ...</a
      >
    </li>
    <li class="questionItemCard">
      <img src="Public/Sheet.svg" alt="Sheet" /><a href="detail.html" target="_blank"
        >How to choose an e-commerce hosting</a
      >
    </li>
    <li class="questionItemCard">
      <img src="Public/Sheet.svg" alt="Sheet" /><a href="detail.html" target="_blank"
        >Tips for setting up and managing</a
      >
    </li>
    <li class="questionItemCard">
      <img src="Public/Sheet.svg" alt="Sheet" /><a href="detail.html" target="_blank"
        >How to secure an e-commerce website</a
      >
    </li>
    <li class="questionItemCard">
      <img src="Public/Sheet.svg" alt="Sheet" /><a href="detail.html" target="_blank"
        >Common e-commerce hosting features</a
      >
    </li>
  </ul>
</div>
                `;
  }
}

customElements.define("main-5", Main_5);
