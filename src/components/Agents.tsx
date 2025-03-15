import { useContext } from "react";
import { PropertyContext } from "../context/PropertyContext";
import AgentCard from "./AgentCard";

const Agents = () => {
  const { agent, isLoading } = useContext(PropertyContext);
  return (
    <div className="w-full sm:-bottom-2/6 sm:-mb-[3300px]  sm:h-screen min-h-dvh -mb-[6800px] -bottom-6/6 absolute text-center -z-50">
      <div className="relative  mt-4 h-full">
        <div className="flex items-center  h-full bg-white">
          <div className="sm:w-4/6 w-full bg-gray-900 sm:h-full h-[300vh]">
            <div className=" mt-16 text-white text-left w-3/6 mx-auto ">
              <span className="text-green-500 uppercase font-bold font-sans">
                meet our agent
              </span>
              <h3 className="text-4xl mt-5 font-bold uppercase"> our agent</h3>
            </div>
          </div>
          <div className="w-w/6  h-full"></div>
        </div>
        <div className="absolute w-full  py-3 sm:bg-green-400 sm:top-2/5 top-[7%] z-10">
          <div className="lg:w-4/6 sm:w-full mx-auto ">
            {isLoading ? (
              <p>loading .....</p>
            ) : (
              <div className="flex sm:flex-row flex-col mx-auto sm:gap-3 gap-7 items-center justify-evenly px-1 py-2">
                {agent.slice(0, 4).map((agent) => (
                  <AgentCard
                    name={agent.name}
                    key={agent._id}
                    image={agent.Image}
                    listing={agent.listing}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agents;
