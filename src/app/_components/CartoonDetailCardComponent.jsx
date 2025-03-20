import React from "react";
import FlowbiteBreadCrumbComponent from "./FlowbiteBreadCrumbComponent";
import Link from "next/link";

const CartoonDetailCardComponent = ({ cartoon }) => {

  // const
  return (
    <main>
      <div className="container text-dark-blue mt-18 mx-auto">
        <FlowbiteBreadCrumbComponent
          pageTitle={"Old School Cartoon"}
          bookTitle={cartoon?.ct_title}
        />
        <div className="bg-white p-20 rounded-t-[50px] max-h-full mt-32 pb-14">
          <div className="flex justify-end relative">
            <img
              alt="cover"
              loading="lazy"
              width="300"
              height="350"
              decoding="async"
              data-nimg="1"
              className="rounded-3xl text-transparent -top-52 absolute drop-shadow-xl"
              src={cartoon?.image}
            />
          </div>
          <div className="mt-48 space-y-5">
            <div className="space-y-3">
              <h2 className="text-2xl font-medium">{cartoon?.ct_title}</h2>
              <h3 className="text-xl">
                by
                <span className="text-deep-teal capitalize font-medium">
                  {cartoon?.creator}
                </span>
              </h3>
            </div>
            <p className="text-justify">{cartoon?.ct_description}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartoonDetailCardComponent;
