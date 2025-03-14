import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { CiLocationArrow1 } from "react-icons/ci";

const Search = () => {
  const [properties, setProperties] = useState("buy");

  return (
    <div className=" lg:w-4/6 -z-50  px-2 mx-auto sm:mb-20 -mb-20 absolute lg:-bottom-36 -bottom-72 lg:p-6 left-1/2 -translate-x-1/2">
      <div className="lg:w-2/6   mx-auto flex items-center justify-between md:gap-4 gap-2  mb-0 text-white">
        <button
          className={` ${
            properties === "buy"
              ? "bg-green-500 text-white"
              : "text-gray-400 bg-white"
          }  lg:px-8 px-3  text-nowrap md:py-4 py-3 uppercase transition-colors duration-200`}
          onClick={() => setProperties("buy")}
        >
          buy properties
        </button>
        <button
          className={` ${
            properties === "sell"
              ? "bg-green-500 text-white"
              : "text-gray-400 bg-white"
          }  lg:px-8 px-3  text-nowrap md:py-4 py-3 uppercase transition-colors duration-200`}
          onClick={() => setProperties("sell")}
        >
          sell properties
        </button>
      </div>
      <form className="  md:grid grid-cols-5 items-center justify-between ">
        <div className="bg-white w-full h-full text-black flex flex-col py-3 max-lg:py-2 ">
          <label
            className="font-bold text-black  uppercase px-1"
            htmlFor="name"
          >
            Enter keyword
          </label>
          <div className="px-1 mt-2 text-black flex  w-5/6 items-center justify-between">
            <BiSearch className=" text-gray-300" />
            <input
              type="text"
              id="name"
              className="w-5/6 capitalize border-none  outline-none placeholder-shown:text-gray-400 "
              placeholder="Enter keyword"
            />
          </div>
        </div>
        <div className="bg-white w-full h-full text-black flex flex-col  py-3 max-lg:py-2 lg:border-l">
          <label
            className="font-bold text-black  uppercase px-1"
            htmlFor="type"
          >
            property type
          </label>
          <select
            name="type"
            id=""
            className="px-1 outline-none mt-2  flex  w-5/6 items-center justify-between capitalize text-gray-300"
          >
            <option value="residential">residential</option>
            <option value="commercial">commercial</option>
            <option value="land">land</option>
            <option value="industrial">industrial</option>
          </select>
        </div>
        <div className="bg-white text-black flex flex-col w-full h-full  py-3 max-lg:py-3 lg:border-l">
          <label
            className="font-bold text-black  uppercase px-1"
            htmlFor="location"
          >
            location
          </label>
          <div className="px-1 mt-2 text-black flex  w-5/6 items-center justify-between">
            <CiLocationArrow1 className=" text-gray-300" />
            <input
              type="text"
              id="location"
              className="w-5/6 capitalize border-none  outline-none placeholder-shown:text-gray-400 "
              placeholder="location"
            />
          </div>
        </div>
        <div className="bg-white text-black flex flex-col w-full h-full  py-3 max-lg:py-3 lg:border-l">
          <label
            className="font-bold text-black  uppercase px-1"
            htmlFor="limit"
          >
            property limit
          </label>
          <select
            name="limit"
            id=""
            className="px-1 capitalize mt-2 outline-none  flex  w-5/6 items-center justify-between text-gray-300"
          >
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
            <option value="500">500</option>
            <option value="1000">1000</option>
            <option value="1200">1200</option>
            <option value="1500">1500</option>
            <option value="1900">1900</option>
            <option value="2000">2000</option>
            <option value="2100">2100</option>
            <option value="2500">2500</option>
            <option value="3000">3000</option>
            <option value="5000">5000</option>
            <option value="10000">10000</option>
            <option value="15000">15000</option>
          </select>
        </div>
        <div className="bg-green-500   text-white flex items-center justify-center w-full h-full text-center  max-md:py-5  font-bold uppercase ">
          search
        </div>
      </form>
    </div>
  );
};

export default Search;
