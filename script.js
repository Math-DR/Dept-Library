const JSON_URL = "https://opensheet.elk.sh/19kqMNS8ZkDTItBtPLiJmVMZn2FtXFMU6MWh68zYoydM/Sheet1";

let books = [];

fetch(JSON_URL)
  .then(res => res.json())
  .then(data => {
    books = data;
    displayBooks(books);
  })
  .catch(err => console.error("JSON load error:", err));

function displayBooks(list) {
  const table = document.getElementById("bookTable");
  table.innerHTML = "";

  list.forEach(book => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${book["Book Title"] || ""}</td>
      <td>${book["Author"] || ""}</td>
      <td>${book["Topic"] || ""}</td>
      <td>
        <a href="https://drive.google.com/file/d/${book["File Link"]}/view" target="_blank">   Open </a>
      </td>
    `;
    table.appendChild(row);
  });
}

document.getElementById("search").addEventListener("input", e => {
  const value = e.target.value.toLowerCase();

  const filtered = books.filter(book =>
    (book["Book Title"] || "").toLowerCase().includes(value) ||
    (book["Author"] || "").toLowerCase().includes(value) ||
    (book["Topic"] || "").toLowerCase().includes(value)
  );

  displayBooks(filtered);
});
