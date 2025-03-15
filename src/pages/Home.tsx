import Category from "../components/Category";
import Featured from "../components/Featured";
import Hero from "../components/Hero";
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="-z-50">
      <Hero />
      <Search />
      <Category />
      <Featured/>
    </div>
  );
};

export default Home;
