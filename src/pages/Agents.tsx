import Pagebanner from "../components/Pagebanner";
import { assests } from "../assets";
import AgentCard from "../components/AgentCard";
import { useContext } from "react";
import { PropertyContext } from "../context/PropertyContext";

const Agents = () => {
  const {isLoading, agent}= useContext(PropertyContext)
  return (
    <div>
      <Pagebanner title="our agents" image={assests.image7} text="agents" />
      <div className="absolute w-full  sm:top-[75vh] top-[70vh] z-10">
          <div className="lg:w-4/6 sm:w-full mx-auto ">
            {isLoading ? (
              <p>loading .....</p>
            ) : (
              <div className=" grid sm:grid-cols-4 gap-4 items-center justify-center  px-1 py-2">
                {agent.map((agent) => (
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
  );
};

export default Agents;
