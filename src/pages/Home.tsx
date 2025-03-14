import Category from "../components/Category";
import Hero from "../components/Hero";
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="-z-50">
      <Hero />
      <Search />
      <Category />
    </div>
  );
};

export default Home;
