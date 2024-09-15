const {
  addBookHandler,
  getAllBooks,
  getBookByIdHandler,
} = require("./handler");

const routes = [
  {
    // API untuk menyimpan buku
    method: "POST",
    path: "/books",
    handler: addBookHandler,
  },
  {
    // API untuk menampilkan buku
    method: "GET",
    path: "/books",
    handler: getAllBooks,
  },
  {
    // API untuk menampilkan detail buku
    method: "GET",
    path: "/books/{bookId}",
    handler: getBookByIdHandler,
  },
  {
    // API untuk mengubah data buku
    method: "PUT",
    path: "/books/{bookId}",
    handler: () => {},
  },
  {
    // API untuk menghapus data buku
    method: "DELETE",
    path: "/books/{bookId}",
    handler: () => {},
  },
];

module.exports = routes;
