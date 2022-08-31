import { InputsValidation } from "./funciones.js";
import { showAlert } from "./funciones.js";
import { newClient } from "./API.js";

(function () {
  const form = document.querySelector("#formulario");
  form.addEventListener("submit", clientValidation);

  function clientValidation(e) {
    e.preventDefault();

    const name = document.querySelector("#nombre").value;
    const phone = document.querySelector("#telefono").value;
    const email = document.querySelector("#email").value;
    const company = document.querySelector("#empresa").value;

    const client = {
      name,
      email,
      phone,
      company,
    };

    if (InputsValidation(client)) {
      showAlert("Todos los campos son obligatorios");
      return;
    }

    newClient(client);
  }
})();
