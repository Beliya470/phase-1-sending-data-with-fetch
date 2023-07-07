function submitData(name, email) {
  const formData = {
    name: name,
    email: email
  };

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(formData)
  };

  console.log("Before fetch");

  return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      console.log("After fetch");
      if (!response.ok) {
        throw new Error("Request failed: " + response.status);
      }
      return response.json();
    })
    .then(function (object) {
      console.log("Response object:", object);
      const id = object.id;
      const idElement = document.createElement("p");
      idElement.textContent = id;
      document.body.appendChild(idElement);
    })
    .catch(function (error) {
      console.log("Error:", error);
      const errorMessage = document.createElement("p");
      errorMessage.textContent = error.message;
      document.body.appendChild(errorMessage);
    });
}

console.log("Before calling submitData");
submitData("John Doe", "john@example.com")
  .then(function () {
    console.log("After calling submitData");
  });
