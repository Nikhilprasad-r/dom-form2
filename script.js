const main = document.createElement("div");
document.body.append(main);

const form = document.createElement("form");
form.id="myForm";

const labels = ["First Name:","Last Name:","Address:","Pincode:","Gender:","Choice of food:", "State:","Country:"];
const ids = ["firstName","lastName","address","pincode","choiceFood","gender","state","country"];
const types = ["text","text","text","number","text","text","text","text"];

for(i=0;i<labels.length;i++){
  const label = document.createElement("label");
  label.htmlFor=ids[i];
  label.textContent=labels[i];
  form.appendChild(label);

  form.appendChild(document.createElement("br"));

  const input = document.createElement("input");
  input.type=types[i];
  input.id=ids[i];
  input.name=ids[i];
  form.appendChild(input);

  form.appendChild(document.createElement("br"));
}

const submit = document.createElement("input");
submit.type="submit";
submit.value="submit";
form.appendChild(submit);
main.appendChild(form);

const table = document.createElement("table");
table.className="table";
table.id = "dataTable";

const thead = document.createElement("thead");
thead.className="thead-dark";

const trhead = document.createElement("tr");
labels.forEach((header)=>{
  const th=document.createElement("th");
  th.scope="col";
  th.textContent=header;
  thead.appendChild(th);
})

thead.appendChild(trhead);
const tbody = document.createElement("tbody");
table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);


form.addEventListener("submit", function(event){
  event.preventDefault();
     var formData = new FormData(this);
     var newRow = document.createElement("tr");
     var tableBody = document.querySelector("#dataTable tbody");
     formData.forEach((value,key)=>{
      var cell = document.createElement("td");
      cell.textContent = value;
      newRow.appendChild(cell);
     })
  tableBody.appendChild(newRow);
  document.getElementById("myForm").reset();
})
