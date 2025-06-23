document.getElementById("addBtn").addEventListener("click", (e) => {
  e.preventDefault();
  const nameField = document.getElementById("nameF");
  const name = nameField.value;

  const idField = document.getElementById("idF");
  const id = idField.value;

  const markField = document.getElementById("markF");
  const mark = markField.value;

  console.log(name, id, mark);
});
