# 📚 Department E-Books Catalogue

A web-based catalogue for the department's e-books, hosted using **GitHub Pages**. It allows students to browse books, search by title, author, topic, or contributor, and open the corresponding files.

## ✨ Features

- **Browse Books:** View book titles, authors, and topics in a table.
- **Search:** Filter books by title, author, topic, or contributor name.
- **Open Books:** Access book files through their provided links.
- **Contribute Books:** Submit book details using the Google Form.
- **Google Sheets Integration:** Fetches book information dynamically using OpenSheet.

## 🛠️ Technologies Used

- HTML
- CSS
- JavaScript
- Google Sheets
- OpenSheet API
- GitHub Pages

## 📁 Project Structure

```text
department-ebooks/
├── index.html    # Webpage structure
├── style.css     # Webpage styling
├── script.js     # Fetching data and search functionality
└── README.md     # Project documentation
```

## 🌐 Website

The website is hosted on GitHub Pages.

**Live Website:** [Department E-Books Catalogue](https://math-dr.github.io/Dept-Library/)

Replace the example URL with your actual GitHub Pages URL.

## 🚀 How It Works

1. Book details are stored in a Google Sheet.
2. OpenSheet provides the sheet data in JSON format.
3. `script.js` fetches the JSON data and displays the books.
4. The search box filters the displayed books instantly.
5. Students can open book links or submit new entries through the contribution form.

## ⚙️ Configuration

### Google Sheets

In `script.js`, update `JSON_URL` if the source spreadsheet changes:

```javascript
const JSON_URL = "YOUR_OPENSHEET_JSON_URL";
```

The spreadsheet should contain these column names:

- `Book Title`
- `Author`
- `Topic`
- `File Link`
- `Contributor Name`

### Contribution Form

To change the contribution form, update its URL in `index.html`.

## 🔄 Updating the Website

1. Edit the required HTML, CSS, or JavaScript files.
2. Commit and push the changes to the GitHub repository.
3. GitHub Pages will publish the updated website automatically when the configured deployment branch or source is updated.

## 📝 Notes

- An internet connection is required to fetch book data and open online files.
- The Google Sheet must be accessible to OpenSheet.
- This is a static website; it does not use a separate backend server or database.
- The `noindex, nofollow` meta tag requests that search engines avoid indexing the page. It does not make the website private.

## 🤝 Contributions

Students can contribute books through the contribution form. Please ensure that submitted details and file links are accurate and accessible.

## 📄 License

Add a license if you intend to make the project available for reuse by others.
