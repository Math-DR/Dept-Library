// 🔗 Replace with your actual JSON URL
const JSON_URL = "https://opensheet.elk.sh/19kqMNS8ZkDTItBtPLiJmVMZn2FtXFMU6MWh68zYoydM/Sheet1";

let books = [];

// Fetch data from Google Sheet JSON
fetch(JSON_URL)
  .then(response => response.json())
  .then(data => {
    books = data;
    renderTable(books);
  })
  .catch(error => {
    console.error("Error loading JSON:", error);
  });

// Render table
function renderTable(list) {
  const tableBody = document.getElementById("bookTable");
  tableBody.innerHTML = "";

  list.forEach(book => {
    const title = book["Book Title"] || "";
    const author = book["Author"] || "";
    const topic = book["Topic"] || "";
    const link = (book["File Link"] || "").trim();

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${title}</td>
      <td>${author}</td>
      <td>${topic}</td>
      <td>
        <a href="${link}" target="_blank" rel="noopener noreferrer">
          Open
        </a>
      </td>
    `;

    tableBody.appendChild(row);
  });
}


// 🔍 Search functionality
document.getElementById("search").addEventListener("input", event => {
  const query = event.target.value.toLowerCase();

  const filteredBooks = books.filter(book =>
    (book["Book Title"] || "").toLowerCase().includes(query) ||
    (book["Author"] || "").toLowerCase().includes(query) ||
    (book["Topic"] || "").toLowerCase().includes(query) ||
    (book["Contributor Name"] || "").toLowerCase().includes(query)
  );

  renderTable(filteredBooks);
});
