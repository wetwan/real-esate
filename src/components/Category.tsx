/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

import { GiFactory, GiFamilyHouse, GiIsland } from "react-icons/gi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const Category = () => {
  const [category, setCategory] = useState("");
  return (
    <div className="w-full sm:-bottom-2/6 -mb-[500px] -bottom-6/6 absolute text-center -z-50">
      <div className="">
        <span className="uppercase  text-green-500 font-semibold font-sans  sm:text-xl">
          Oakberry Categories
        </span>
        <h1 className="text-3xl sm:text-[50px] sm:w-4/6 px-2 w-5/6 mx-auto text-center mt-5 font-bold">
          {" "}
          Explore Our Categories & Places
        </h1>
      </div>
      <div
        className="sm:flex w-full my-14 items-center justify-between gap-2 sm:w-5/6 mx-auto lg:w-4/6 shadow-md
      "
      >
        <div
          className={` ${
            category === "Land"
              ? "bg-green-500 text-white"
              : " bg-gray-200 text-black"
          }  py-6 mb-1 flex justify-center items-center flex-col w-full sm:w-1/4  gap-4 `}
          onClick={() => setCategory("Land")}
        >
          <GiIsland className="text-5xl " />
          <span> Land</span>
        </div>
        <div
          className={` ${
            category === "Residential"
              ? "bg-green-500 text-white"
              : " bg-gray-200 text-black"
          }  py-6 mb-1 flex justify-center items-center flex-col w-full sm:w-1/4  gap-4 `}
          onClick={() => setCategory("Residential")}
        >
          <GiFamilyHouse className="text-5xl " />
          <span>Residential</span>
        </div>
        <div
          className={` ${
            category === "Commercial"
              ? "bg-green-500 text-white"
              : " bg-gray-200 text-black"
          }  py-6 mb-1 flex justify-center items-center flex-col w-full sm:w-1/4  gap-4 `}
          onClick={() => setCategory("Commercial")}
        >
          <HiOutlineBuildingOffice2 className="text-5xl " />
          <span> Commercial</span>
        </div>
        <div
          className={` ${
            category === "Industrial"
              ? "bg-green-500 text-white"
              : " bg-gray-200 text-black"
          }  py-6 mb-1 flex justify-center items-center flex-col w-full sm:w-1/4  gap-4 `}
          onClick={() => setCategory("Industrial")}
        >
          <GiFactory className="text-5xl " />
          <span> Industrial</span>
        </div>
      </div>
      <div className="sm:grid grid-cols-3 pt-10 gap-5 sm:w-4/5 mx-auto lg:w-4/6 ">
        <div className=" py-3">
          <span className=" capitalize font-bold text-black"> new york</span>
          <p className="py-1 w-fit rounded-md shadow-sm text-green-500 mx-auto px-2 mt-2 bg-gray-50 text-center">  200 Properties</p>
        </div>
        <div className=" py-3">
          <span className=" capitalize font-bold text-black"> florida</span>
          <p className="py-1 w-fit rounded-md shadow-sm text-green-500 mx-auto px-2 mt-2 bg-gray-50 text-center">  200 Properties</p>
        </div>
        <div className=" py-3">
          <span className=" capitalize font-bold text-black"> califonia</span>
          <p className="py-1 w-fit rounded-md shadow-sm text-green-500 mx-auto px-2 mt-2 bg-gray-50 text-center">  100 Properties</p>
        </div>
        <div className=" py-3">
          <span className=" capitalize font-bold text-black"> london</span>
          <p className="py-1 w-fit rounded-md shadow-sm text-green-500 mx-auto px-2 mt-2 bg-gray-50 text-center">  400 Properties</p>
        </div>
        <div className=" py-3">
          <span className=" capitalize font-bold text-black"> lagos</span>
          <p className="py-1 w-fit rounded-md shadow-sm text-green-500 mx-auto px-2 mt-2 bg-gray-50 text-center">  400 Properties</p>
        </div>
        <div className=" py-3">
          <span className=" capitalize font-bold text-black"> chicago</span>
          <p className="py-1 w-fit rounded-md shadow-sm text-green-500 mx-auto px-2 mt-2 bg-gray-50 text-center">  400 Properties</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
