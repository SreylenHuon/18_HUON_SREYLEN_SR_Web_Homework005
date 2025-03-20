import { sideBarData } from "@/data/sidebardata";
import SidebarComponent from "../_components/SidebarComponent";
import SearchBarComponent from "../_components/SearchBarComponent";
import SelectionComponent from "../_components/SelectionComponent";
import Link from "next/link";
import CategoryBarComponent from "../_components/CategoryBarComponent";
import { getAllBookGategory, getAllBooks } from "@/service/bookService";
import { getAllCartoonList } from "@/service/cartoonService";

export default async function RootLayout({ children, pageTitle }) {
  const dataDashBoad = sideBarData;
  const listBook = await getAllBookGategory();
  const listCartoon = await getAllCartoonList();
  // console.log("booklist", listBook);
  // console.log("cartoonlist", listCartoon);
  return (
    <main className="flex bg-gray-200 p-2 gap-5">
      <SidebarComponent dataDashBoad={dataDashBoad} />
      <div className="flex flex-col w-full gap-10">
        <div>
          <SearchBarComponent />
        </div>
        <div className="flex flex-col bg-white h-[100vh] p-10 rounded-4xl mt-[10px]">
          <div>
            <CategoryBarComponent
              listBook={listBook}
              listCartoon={listCartoon}
            />
          </div>
          <div className="flex justify-center gap-[20px] mt-[100px]">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
