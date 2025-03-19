// import { assests } from "../assets";
import About from "../components/About";

import { assests } from "../assets";
import Pagebanner from "../components/Pagebanner";

const Abouts = () => {
  return (
    <div>
      <Pagebanner title="About us" image={assests.image3} text="about" />
      <About className= "w-full  h-screen top-[70vh] absolute text-center -z-50" />
    </div>
  );
};

export default Abouts;
