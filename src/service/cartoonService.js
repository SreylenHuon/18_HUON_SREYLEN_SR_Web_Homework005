export const getAllCartoon = async () => {
  try {
    const res = await fetch(
      "https://nextjs-homework005.vercel.app/api/cartoon"
    );
    const dataCartoon = await res.json();
    return dataCartoon;
  } catch (error) {
    console.log(error);
  }
};
export const getCartoonDetail = async (cartoonId) => {
  try {
    const resCartoon = await fetch(
      `https://nextjs-homework005.vercel.app/api/cartoon/${cartoonId}`
    );
    const cartoonDetail = await resCartoon.json();
    return cartoonDetail;
  } catch (error) {
    console.log(error);
  }
};
export const getCartoongenreId = async () => {
  try {
    const resGenreId = await fetch(
      "https://nextjs-homework005.vercel.app/api/cartoon?genre="
    );
    const dataGenreId = await resGenreId.json();
    return dataGenreId;
  } catch (error) {
    console.log(error);
  }
};
export const getCartoonTile = async () => {
  try {
    const resCartTitle = await fetch(
      "https://nextjs-homework005.vercel.app/api/cartoon?search="
    );
    const dataCartTitle = await resCartTitle.json();
    return dataCartTitle;
  } catch (error) {
    console.log(error);
  }
};
export const getAllCartoonList = async () => {
  try {
    const res = await fetch(
      "https://nextjs-homework005.vercel.app/api/cartoon_genre"
    );
    const listCartoon = await res.json();
    return listCartoon;
  } catch (error) {
    console.log(error);
  }
};
export const getCartoonId = async () => {
  try {
    const res = await fetch(
      "https://nextjs-homework005.vercel.app/api/cartoon/"
    );
    const cartoonId = await res.json();
    return cartoonId;
  } catch (error) {
    console.log(error);
  }
};
