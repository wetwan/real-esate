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
      <Search />
      <Category />
      <Featured />
      <About className="w-full sm:-bottom-2/6 sm:-mb-[2000px] h-screen -mb-[3800px] -bottom-6/6 absolute text-center -z-50" />
      <Subscribtion />
      <Agents />
    </div>
  );
};

export default Home;
