import { CloudSnow } from "lucide-react";

export const getAllBooks = async () => {
  try {
    const res = await fetch("https://nextjs-homework005.vercel.app/api/book");
    const dataBooks = await res.json();
    return dataBooks;
  } catch (error) {
    console.log(error);
  }
};
export const getBookById = async (id) => {
  try {
    const resDetail = await fetch(
      `https://nextjs-homework005.vercel.app/api/book/${id}`
    );
    const bookDetail = await resDetail.json();
    // console.log("Book service : ", bookDetail);

    return bookDetail;
  } catch (error) {
    console.log(error);
  }
};
export const getBookByCategoryId = async (categoryId) => {
  try {
    const resBookId = await fetch(
      `https://nextjs-homework005.vercel.app/api/book?query=${categoryId}`
    );
    const dataBookId = await resBookId.json();
    return dataBookId;
  } catch (error) {
    console.log(error);
  }
};
export const getBookTitle = async (bookTitle) => {
  try {
    const resBookTitle = await fetch(
      "https://nextjs-homework005.vercel.app/api/book?search="
    );
    const dataBookTitle = await resBookTitle.json();
    return dataBookTitle;
  } catch (error) {
    console.log(error);
  }
};
export const getAllBookGategory = async () => {
  try {
    const res = await fetch(
      "https://nextjs-homework005.vercel.app/api/book_category"
    );
    const listBook = await res.json();
    return listBook;
  } catch (error) {
    console.log(error);
  }
};
export const getBookGategory = async () => {
  try {
    const res = await fetch(
      "https://nextjs-homework005.vercel.app/api/book_category/search?query="
    );
    const bookGategoryId = await res.json();
    return bookGategoryId;
  } catch (error) {
    console.log(error);
  }
};
