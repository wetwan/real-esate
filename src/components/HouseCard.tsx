

import { GiSpikedFence } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import { LiaBedSolid } from "react-icons/lia";
import { PiBathtubLight } from "react-icons/pi";
type house = {
  name: string;
  price: string;
  old_price?: string;
  image: string;
  time: number;
  location: string;
  type: string;
  bath: string;
  room: string;
  size: string;
  renter: string;
};
const HouseCard = ({
  name,
  price,
  image,
  old_price,
  time,
  location,
  type,
  bath,
  room,
  size,
  renter,
}: house) => {
  const weeks = Math.floor(time / 7);
  const remainingDays = time % 7;

  return (
    <div className=" shadow-lg max-sm:bg-gray-200 hover:bg-white transition-all ease-in-out duration-300  w-[250px] my-5 group hover:shadow-white/10 lg:hover:shadow-black/30 text-sm">
      <div className=" h-[250px] relative">
        <div className="h-[250px] w-[250px]">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>

        <div className="absolute bottom-0 top-0  left-0 w-full bg-black/10 group-hover:hidden z-10"></div>
        <div className="flex items-start  gap-3 px-2 absolute bottom-7 left-1">
          <span className=" w-fit bg-green-500  px-1 text-white py-0.5 shadow ">
            {price}{" "}
          </span>
          {old_price && (
            <span className="   line-through bg-green-700  px-1 w-fit text-white py-0.5 shadow ">
              {old_price}
            </span>
          )}
        </div>
      </div>
      <div className="px-4 py-3">
        <div className="flex items-center justify-between  text-gray-400 capitalize">
          <div className="flex items-center h-10 w-full gap-2 ">
            <img
              src={image}
              alt=""
              className="w-10 h-full object-contain rounded-full"
            />
            <p className="whitespace-nowrap">{renter}</p>
          </div>

          <p className="whitespace-nowrap">
            {weeks}weeks {remainingDays}days
          </p>
        </div>
        <div className="pt-5">
          <h3 className="font-font text-xl capitalize text-left font-sans ">
            {name}
          </h3>
          <div className="flex items-center gap-3 mt-3">
            <div className="flex items-center">
              <IoLocationSharp className="text-green-500" />
              <p className="text-gray-400 capitalize text-balance text-xs">
                {" "}
                {location}
              </p>
            </div>
            <span
              className={`${
                type === "sale" ? "bg-green-500" : "bg-red-500"
              } text-white  capitalize py-0.5 px-2 shadow rounded`}
            >
              {type}
            </span>
          </div>
          <div className="mt-4 flex items-center  gap-3 text-gray-400">
            <div className="flex gap-1.5 items-center justify-between">
              <LiaBedSolid />
              <p>{room} </p>
            </div>
            <div className="flex gap-1.5 items-center justify-between">
              <PiBathtubLight />
              <p>{bath} </p>
            </div>
            <div className="flex gap-1.5 items-center justify-between">
              <GiSpikedFence />
              <p>{size} sqft </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
