const h5Elements = document.getElementsByTagName("h5");
for (let h5 of h5Elements) {
  h5.addEventListener("click", () => {
    navigator.clipboard
      .writeText(h5.innerText)
      .then(() => {
        alert("TEXTO COPIADO COM SUCESSO!");
      })
      .catch((err) => {
        console.error("ERRO AO COPIAR TEXTO!: ", err);
      });
  });
}
