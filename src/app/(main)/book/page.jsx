import CardBookComponent from "@/app/_components/CardBookComponent";
import CardComponent01 from "@/app/_components/CardComponent01";
import { getAllBooks } from "@/service/bookService";
import React from "react";

const BookPage = async () => {
  const dataBooks = await getAllBooks();

  return (
    <main>
      <CardBookComponent dataBooks={dataBooks} />
    </main>
  );
};

export default BookPage;
