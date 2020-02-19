const colors = {
  p: "#388e3c",
  div: "#1565c0",
  span: "#e53935",
  section: "#f67809",
  ul: "#5e35b1",
  ol: "#fbc02d",
  header: "#d81b60",
  nav: "#64dd17",
  main: "#00acc1",
  footer: "#304ffe",
  form: "#9f6581",
  body: "#25b6da",
  padrao: "#616161",
  get(tag) {
    /*retorna a cor associada a tag 
        caso não exista retorna a cor padrão*/
    return this[tag] ? this[tag] : this.padrao;
  }
};

document.querySelectorAll(".tag").forEach(elemento => {
  const tagName = elemento.tagName.toLowerCase();
  elemento.style.borderColor = colors.get(tagName);

  if (!elemento.classList.contains("nolabel")) {
    // se o elemento não estiver marcado com 'nolabel', vai adicionar  label
    //dentro do elemento label, antes do primeiro filho que estaja dentro da tag
    const label = document.createElement("label");
    label.style.backgroundColor = colors.get(tagName);
    label.innerHTML = tagName;
    elemento.insertBefore(label, elemento.childNodes[0]);
  }
});
