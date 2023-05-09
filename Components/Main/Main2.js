class Main_2 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="cardMain">
    <div class="cardTitle">
      <img src="Public/logo/logo-2.svg" alt="logo-2" />
      <h6>Setting up a website</h6>
    </div>
    <ul>
      <li class="questionItemCard">
        <img src="Public/Sheet.svg" alt="Sheet" /><a
          href="detail.html"
          target="_blank"
          >How to register a domain name</a
        >
      </li>
      <li class="questionItemCard">
        <img src="Public/Sheet.svg" alt="Sheet" /><a
          href="detail.html"
          target="_blank"
          >Hwo to set up a hosting account</a
        >
      </li>
      <li class="questionItemCard">
        <img src="Public/Sheet.svg" alt="Sheet" /><a
          href="detail.html"
          target="_blank"
          >How to install and configure a CMS</a
        >
      </li>
      <li class="questionItemCard">
        <img src="Public/Sheet.svg" alt="Sheet" /><a
          href="detail.html"
          target="_blank"
          >How to upload and manage website ...</a
        >
      </li>
      <li class="questionItemCard">
        <img src="Public/Sheet.svg" alt="Sheet" /><a
          href="detail.html"
          target="_blank"
          >Tips for optimizing website performa ...</a
        >
      </li>
    </ul>
  </div>   
                `;
  }
}

customElements.define("main-2", Main_2);
