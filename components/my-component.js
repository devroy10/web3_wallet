const template = document.createElement("template");
template.innerHTML = `
    <style>
        .my-component {
            background-color: #f1f1f1;
            padding: 20px;
        }
    </style>

    <div class="my-component">
        <h2>This is my component</h2>
        <p>This is some content inisde the component</p>
    </div>
`;

const links = {
  social: "https://x.com/RoyChinwuba",
};

class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    document.getElementById("my-component-template");
    const templateContent = template.content.cloneNode(true);
    this.shadowRoot.appendChild(templateContent);
  }
}
customElements.define("my-component", MyComponent);
