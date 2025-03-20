import CartoonCardComponent from "@/app/_components/CartoonCardComponent";
import { getAllCartoon } from "@/service/cartoonService";

const CartoonPage = async ({ searchParams }) => {
  // console.log(await searchParams);
  // const

  const dataCartoon = await getAllCartoon();
  return (
    <main>
      <CartoonCardComponent dataCartoon={dataCartoon} />
    </main>
  );
};

export default CartoonPage;
