/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from "react";
import { PropertyContext } from "../context/PropertyContext";
import HouseCard from "./HouseCard";

const Featured = () => {
  const { house, isLoading } = useContext(PropertyContext);
  return (
    <div className="w-full sm:-bottom-2/6 -mb-[1200px] -bottom-6/6 absolute text-center -z-50">
      <div className="">
        <span className="uppercase  text-green-500 font-semibold font-sans  sm:text-xl">
          Our Properties
        </span>
        <h1 className="text-3xl sm:text-[50px] sm:w-4/6 px-2 w-5/6 mx-auto text-center mt-5 font-bold">
          {" "}
          Featured Properties
        </h1>
      </div>
      <div className="">
        {isLoading ? (
          <p>loading .....</p>
        ) : (
          <div className="flex sm:w-5/6 lg:w-4/6 mx-auto gap-6 items-center justify-evenly ">
            {house.slice(0, 4).map((house) => (
              <HouseCard
                name={house.name}
                key={house._id}
                price={house.price}
                old_price={house.old_price}
                image={house.Image}
                time={house.poasted}
                location={house.location}
                type={house.type}
                bath={house.bathroom}
                room={house.bed}
                size={house.size}
                renter={house.renter}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Featured;
