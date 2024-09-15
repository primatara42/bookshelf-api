const { nanoid } = require("nanoid");
const books = require("./books");

const addBookHandler = (request, h) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;
  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;
  const finished = false;

  if (!name) {
    const response = h.response({
      status: "fail",
      message: "Gagal menambahkan buku. Mohon isi nama buku",
    });
    response.code(400);
    return response;
  } else if (readPage > pageCount) {
    const response = h.response({
      status: "fail",
      message:
        "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount",
    });
    response.code(400);
    return response;
  } else {
    const newBook = {
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      id,
      createdAt,
      updatedAt,
      finished,
    };
    books.push(newBook);

    const isSuccess = books.filter((book) => book.id === id).length > 0;

    if (isSuccess) {
      const response = h.response({
        status: "success",
        message: "Buku berhasil ditambahkan",
        data: {
          bookId: id,
        },
      });
      response.code(201);
      return response;
    }
  }
};

const getAllBooks = (request, h) => {
  const response = h.response({
    status: "success",
    data: {
      books,
    },
  });
  return response;
};

const getBookByIdHandler = (request, h) => {
  const { id } = request.params;
  const book = books.filter((book) => book.id === id)[0];
  const response = h.response({
    status: "success",
    data: {
      book
    },
  });
  return response;
};

module.exports = { addBookHandler, getAllBooks, getBookByIdHandler };
