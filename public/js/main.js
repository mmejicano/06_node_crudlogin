(function () {
  const listado = document.querySelector("#listado");
  const url = "/api/users";

  document.addEventListener("DOMContentLoaded", mostrarListado);

  async function mostrarListado() {
    try {
      const res = await fetch(url);
      const {usuarios} = await res.json();

      usuarios.forEach((usuario) => {
        const {nombre, correo, rol} = usuario;
        const row = document.createElement('tr')
        row.innerHTML += `<td> ${nombre} </td> <td> ${correo} </td> <td> ${rol} </td>`

        listado.appendChild(row)
      });
    } catch (error) {
      console.log(error);
    }
  }
})();
