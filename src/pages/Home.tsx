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
      <About />
      <Subscribtion />
      <Agents />
    </div>
  );
};

export default Home;
