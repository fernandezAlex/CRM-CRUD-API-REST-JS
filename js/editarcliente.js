import { showAlert, InputsValidation } from "./funciones.js";
import { getClientById, editClient } from "./API.js";

(function () {
  const nameInput = document.querySelector("#nombre");
  const emailInput = document.querySelector("#email");
  const phoneInput = document.querySelector("#telefono");
  const companyInput = document.querySelector("#empresa");
  const idInput = document.querySelector("#id");

  document.addEventListener("DOMContentLoaded", async () => {
    // Get the id param of the URL for the peticion
    const paramsURL = new URLSearchParams(window.location.search);
    const clientID = parseInt(paramsURL.get("id"));

    const client = await getClientById(clientID);
    printDataClient(client);

    // Submit of the edit form
    const form = document.querySelector("#formulario");
    form?.addEventListener("submit", validateClient);
  });

  function printDataClient(client) {
    const { name, email, phone, company, id } = client;

    nameInput.value = name;
    emailInput.value = email;
    phoneInput.value = phone;
    companyInput.value = company;
    idInput.value = id;
  }

  function validateClient(e) {
    e.preventDefault();

    const client = {
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      company: companyInput.value,
      id: parseInt(idInput.value),
    };

    if (InputsValidation(client)) {
      showAlert("Todos los campos son obligatorios");
      return;
    }

    // Re write the object client
    editClient(client);
  }
})();
