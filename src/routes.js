const {
  addBookHandler,
  getAllBooks,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
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
    handler: editBookByIdHandler,
  },
  {
    // API untuk menghapus data buku
    method: "DELETE",
    path: "/books/{bookId}",
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
