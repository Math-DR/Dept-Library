const JSON_URL = "https://opensheet.elk.sh/19kqMNS8ZkDTItBtPLiJmVMZn2FtXFMU6MWh68zYoydM/Sheet1";

let books = [];

fetch(JSON_URL)
  .then(res => res.json())
  .then(data => {
    books = data;
    displayBooks(books);
  })
  .catch(err => {
    console.error("Error loading data:", err);
  });

function displayBooks(list) {
  const table = document.getElementById("bookTable");
  table.innerHTML = "";

  list.forEach(book => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${book.title || ""}</td>
      <td>${book.author || ""}</td>
      <td>${book.subject || ""}</td>
      <td><a href="${book.link}" target="_blank">Open</a></td>
    `;
    table.appendChild(row);
  });
}

document.getElementById("search").addEventListener("input", e => {
  const value = e.target.value.toLowerCase();

  const filtered = books.filter(b =>
    (b.title || "").toLowerCase().includes(value) ||
    (b.author || "").toLowerCase().includes(value) ||
    (b.subject || "").toLowerCase().includes(value)
  );

  displayBooks(filtered);
});

