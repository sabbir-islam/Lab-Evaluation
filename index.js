document.getElementById("addBtn").addEventListener("click", (e) => {
  e.preventDefault();
  const nameField = document.getElementById("nameF");
  const name = nameField.value;

  const idField = document.getElementById("idF");
  const id = idField.value;

  const markField = document.getElementById("markF");
  const mark = markField.value;

  const tableBody = document.getElementById("tbody");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${name}</td>
    <td>${id}</td>
    <td>${mark}</td>
  `;
  tableBody.appendChild(tr);
  nameField.value = "";
  idField.value = "";
  markField.value = "";
  
});
