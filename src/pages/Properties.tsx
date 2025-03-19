
import Pagebanner from "../components/Pagebanner";
import { assests } from "../assets";
import Search from "../components/Search";
import HouseCard from "../components/HouseCard";
import { useContext } from "react";
import { PropertyContext } from "../context/PropertyContext";

const Properties = () => {
  const {house,isLoading} = useContext(PropertyContext)
  return (
    <div className="flex items-center justify-center">
      <Pagebanner
        title="our properties"
        image={assests.image9}
        text="properties"
      />
      <Search className=" lg:w-4/6 sm:w-5/6 flex flex-col items-center justify-center -z-50 px-2 mx-auto  sm:mb-20 pb-10 -mb-20 absolute top-[47vh] lg:p-6 left-1/2 -translate-x-1/2" />
      <div className=" lg:w-4/6 sm:w-5/6 flex  items-center justify-center absolute top-[120vh] sm:top-[75vh]">
      <div className="">
        {isLoading ? (
          <p>loading .....</p>
        ) : (
          <div className=" mx-auto sm:gap-6 items-center justify-evenly grid  2xl:grid-cols-4 sm:grid-cols-3 ">
            {house.map((house) => (
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
    </div>
  );
};

export default Properties;
