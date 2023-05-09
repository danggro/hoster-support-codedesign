class Main_4 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      
    <div class="cardMain">
  <div class="cardTitle">
    <img src="Public/logo/logo-4.svg" alt="logo-4" />
    <h6>Email hosting</h6>
  </div>
  <ul>
    <li class="questionItemCard">
      <img src="Public/Sheet.svg" alt="Sheet" /><a href="detail.html" target="_blank"
        >What is email hosting and why do ...</a
      >
    </li>
    <li class="questionItemCard">
      <img src="Public/Sheet.svg" alt="Sheet" /><a href="detail.html" target="_blank"
        >How to set up and configure email ...</a
      >
    </li>
    <li class="questionItemCard">
      <img src="Public/Sheet.svg" alt="Sheet" /><a href="detail.html" target="_blank"
        >Tips for managing and organizing email</a
      >
    </li>
    <li class="questionItemCard">
      <img src="Public/Sheet.svg" alt="Sheet" /><a href="detail.html" target="_blank"
        >How to troubleshoot common email ...</a
      >
    </li>
    <li class="questionItemCard">
      <img src="Public/Sheet.svg" alt="Sheet" /><a href="detail.html" target="_blank"
        >Pros and cons of different email ...</a
      >
    </li>
  </ul>
</div>
                `;
  }
}

customElements.define("main-4", Main_4);
