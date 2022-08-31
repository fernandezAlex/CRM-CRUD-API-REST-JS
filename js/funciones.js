export function showAlert(message) {
  const alert = document.querySelector(".bg-red-100");

  if (!alert) {
    const alertMessage = document.createElement("p");
    alertMessage.classList.add(
      "bg-red-100",
      "border-red-700",
      "px-4",
      "py-3",
      "rounded",
      "max-w-lg",
      "mx-auto",
      "mt-6",
      "text-center"
    );
    alertMessage.innerHTML = `
    <strong class="font-bold">Error: </strong>
    <span class="block sm:inline">${message}</span>
    `;
    const form = document.querySelector("#formulario");
    form.appendChild(alertMessage);

    setTimeout(() => {
      alertMessage.remove();
    }, 3000);
  }
}

export function InputsValidation(object) {
  // Every method, review a condition, inputs are empty in all the values of the object
  return !Object.values(object).every((input) => input !== "");
}
