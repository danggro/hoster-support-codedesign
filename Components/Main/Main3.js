class Main_3 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      
    <div class="cardMain">
    <div class="cardTitle">
      <img src="Public/logo/logo-3.svg" alt="logo-3" />
      <h6>Security and privacy</h6>
    </div>
    <ul>
      <li class="questionItemCard">
        <img src="Public/Sheet.svg" alt="Sheet" /><a href="detail.html" target="_blank"
          >How hosting providers protect web ...</a
        >
      </li>
      <li class="questionItemCard">
        <img src="Public/Sheet.svg" alt="Sheet" /><a href="detail.html" target="_blank"
          >What is SSL and why is it important?</a
        >
      </li>
      <li class="questionItemCard">
        <img src="Public/Sheet.svg" alt="Sheet" /><a href="detail.html" target="_blank"
          >How to secure a website with a firewall</a
        >
      </li>
      <li class="questionItemCard">
        <img src="Public/Sheet.svg" alt="Sheet" /><a href="detail.html" target="_blank"
          >How to protect sensitive information ...</a
        >
      </li>
      <li class="questionItemCard">
        <img src="Public/Sheet.svg" alt="Sheet" /><a href="detail.html" target="_blank"
          >Tips for avoiding common securtiy ...</a
        >
      </li>
    </ul>
  </div>   
                `;
  }
}

customElements.define("main-3", Main_3);
