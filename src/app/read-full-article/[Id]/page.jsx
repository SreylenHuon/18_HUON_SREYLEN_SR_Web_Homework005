import CartoonDetailCardComponent from "@/app/_components/CartoonDetailCardComponent";
import DetailBookCardComponent from "@/app/_components/DetailBookCardComponent";
import { getBookById } from "@/service/bookService";
import { getCartoonDetail } from "@/service/cartoonService";
import React from "react";

const bookDetailPage = async ({ params, searchParams }) => {
  const { type } = await searchParams;
  const contentid = params.Id;
  if (type === "book") {
    const { payload: book } = await getBookById(contentid);

    return (
      <main className="">
        <DetailBookCardComponent book={book} />
      </main>
    );
  } else if (type === "cartoon") {
    const { payload: cartoon } = await getCartoonDetail(contentid);
    return <CartoonDetailCardComponent cartoon={cartoon} />;
  }
};

export default bookDetailPage;
