const routes = [
  {
    // API untuk menyimpan buku
    method: "POST",
    path: "/books",
    handler: () => {},
  },
  {
    // API untuk menampilkan buku
    method: "GET",
    path: "/books",
    handler: () => {},
  },
  {
    // API untuk menampilkan detail buku
    method: "GET",
    path: "/books/{bookId}",
    handler: () => {},
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
    handler: () => {}
  }
];

module.exports = routes;