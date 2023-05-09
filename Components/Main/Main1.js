class Main_1 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      
      <div class="cardMain">
        <div class="cardTitle">
          <img src="Public/logo/logo-1.svg" alt="logo-1" />
          <h6>Introducing to hosting</h6>
        </div>
        <ul>
          <li class="questionItemCard">
            <img src="Public/Sheet.svg" alt="Sheet" /><a
              href="detail.html"
              target="_blank"
              >What is web hosting?</a
            >
          </li>
          <li class="questionItemCard">
            <img src="Public/Sheet.svg" alt="Sheet" /><a
              href="detail.html"
              target="_blank"
              >Type of web hosting</a
            >
          </li>
          <li class="questionItemCard">
            <img src="Public/Sheet.svg" alt="Sheet" /><a
              href="detail.html"
              target="_blank"
              >How to choose a hosting provider</a
            >
          </li>
          <li class="questionItemCard">
            <img src="Public/Sheet.svg" alt="Sheet" /><a
              href="detail.html"
              target="_blank"
              >Common hosting features to look for</a
            >
          </li>
          <li class="questionItemCard">
            <img src="Public/Sheet.svg" alt="Sheet" /><a
              href="detail.html"
              target="_blank"
              >Pros and cons of different hosing types</a
            >
          </li>
        </ul>
      </div>     
                `;
  }
}

customElements.define("main-1", Main_1);
