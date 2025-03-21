import About from "../components/About";
import Agents from "../components/Agents";
import Category from "../components/Category";
import Featured from "../components/Featured";
import Hero from "../components/Hero";
import Search from "../components/Search";
import Subscribtion from "../components/Subscribtion";

const Home = () => {
  return (
    <div className="-z-50">
      <Hero />
      <Search className=" lg:w-4/6 sm:w-5/6 flex flex-col items-center justify-center -z-50 px-2 mx-auto  sm:mb-20 pb-10 -mb-20 absolute lg:-bottom-36 -bottom-72 sm:-bottom-40 lg:p-6 left-1/2 -translate-x-1/2" />
      <Category />
      <Featured />
      <About className="w-full sm:-bottom-2/6 sm:-mb-[2100px] h-screen -mb-[3800px] -bottom-6/6 absolute text-center -z-50" />
      <Subscribtion />
      <Agents />
    </div>
  );
};

export default Home;
