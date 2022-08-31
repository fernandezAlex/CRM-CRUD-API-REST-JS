const url = "http://localhost:4000/clientes";

// When we create new client we get and print all of them
export const newClient = async (client) => {
  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(client),
      headers: { "Content-Type": "application/json" },
    });
    console.log("Usuario registrado");
    window.location.href = "index.html";
  } catch (error) {
    console.log(
      "%cerror API.js line:9 ",
      "color: red; display: block; width: 100%;",
      error
    );
  }
};

// Get clients
export const getClients = async () => {
  try {
    const data = await fetch(url);
    const result = await data.json();
    return result;
  } catch (error) {
    console.log(
      "%cerror error line:27 ",
      "color: red; display: block; width: 100%;",
      error
    );
  }
};

// Delete client
export const deleteClient = async (clientID) => {
  try {
    await fetch(`${url}/${clientID}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log("%cAPI.js line:41 error", "color: #007acc;", error);
  }
};

// Get client by ID
export const getClientById = async (clientID) => {
  try {
    const result = await fetch(`${url}/${clientID}`);
    const client = await result.json();
    return client;
  } catch (error) {
    console.log(error);
  }
};

// Update a client
export const editClient = async (client) => {
  try {
    await fetch(`${url}/${client.id}`, {
      method: "PUT",
      body: JSON.stringify(client),
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
};
