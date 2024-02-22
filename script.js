// Create form element
const form = document.createElement("form");
form.id = "myForm";

// Create form elements
const formElements = [
  {
    label: "First Name:",
    type: "text",
    id: "firstName",
    name: "firstName",
    required: true,
  },
  {
    label: "Last Name:",
    type: "text",
    id: "lastName",
    name: "lastName",
    required: true,
  },
  {
    label: "Address:",
    type: "text",
    id: "address",
    name: "address",
    required: true,
  },
  {
    label: "Pincode:",
    type: "text",
    id: "pincode",
    name: "pincode",
    required: true,
  },
  {
    label: "Gender:",
    type: "select",
    id: "gender",
    name: "gender",
    required: true,
    options: ["Select Gender", "Male", "Female", "Other"],
  },
  {
    label: "Choice of Food:",
    type: "text",
    id: "food",
    name: "food",
    required: true,
  },
  { label: "State:", type: "text", id: "state", name: "state", required: true },
  {
    label: "Country:",
    type: "text",
    id: "country",
    name: "country",
    required: true,
  },
];

// Add form elements to the form
formElements.forEach((element) => {
  const label = document.createElement("label");
  label.textContent = element.label;
  label.setAttribute("for", element.id);

  const input = document.createElement(
    element.type === "select" ? "select" : "input"
  );
  input.type = element.type;
  input.id = element.id;
  input.name = element.name;
  if (element.required) {
    input.required = true;
  }
  if (element.type === "select") {
    element.options.forEach((optionText) => {
      const option = document.createElement("option");
      option.value = optionText.toLowerCase();
      option.textContent = optionText;
      input.appendChild(option);
    });
  }

  form.appendChild(label);
  form.appendChild(input);
});

// Add submit button
const submitButton = document.createElement("input");
submitButton.type = "submit";
submitButton.value = "Submit";
form.appendChild(submitButton);

// Append form to the document body
document.body.appendChild(form);

// Create table element
const table = document.createElement("table");
table.id = "dataTable";

// Create table header
const tableHeader = document.createElement("thead");
const tableHeaderRow = document.createElement("tr");
[
  "First Name",
  "Last Name",
  "Address",
  "Pincode",
  "Gender",
  "Choice of Food",
  "State",
  "Country",
].forEach((headerText) => {
  const th = document.createElement("th");
  th.textContent = headerText;
  tableHeaderRow.appendChild(th);
});
tableHeader.appendChild(tableHeaderRow);
table.appendChild(tableHeader);

// Create table body
const tableBody = document.createElement("tbody");
table.appendChild(tableBody);

// Append table to the document body
document.body.appendChild(table);
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var formData = new FormData(this);
  var newRow = document.createElement("tr");
  var tableBody = document.querySelector("#dataTable tbody");

  formData.forEach(function (value, key) {
    var cell = document.createElement("td");
    cell.textContent = value;
    newRow.appendChild(cell);
  });

  tableBody.appendChild(newRow);
  document.getElementById("myForm").reset();
});
