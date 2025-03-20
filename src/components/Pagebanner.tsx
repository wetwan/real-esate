import { Link } from "react-router";

import { BiChevronRight } from "react-icons/bi";
type Props = {
  image: string;
  
  text: string;
  title: string;
};

const Pagebanner = ({image ,text,title}:Props) => {
  return (
    <div
      className="w-full h-[60vh] bg-cover flex items-center justify-center  bg-no-repeat mx-auto absolute top-0 -z-50  pt-[10vh]"
      style={{
        backgroundImage: `url(${image})`,
        // backgroundSize: `10% 100%`,
        backgroundPosition: 'center'
      }}
    >
      <div className=" py-2 lg:w-4/6 mx-auto sm:w-5/6 text-center">
        <div className="flex items-center justify-center text-white uppercase font-semibold  font-sans text-xl">
          <Link to={`/`} onClick={()=> scrollTo(0,0)}> home</Link>
          <BiChevronRight className="text-4xl " />
          <span> {text}</span>
        </div>
        <div className="mt-10">
          <h1 className="text-white font-extrabold text-5xl capitalize">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Pagebanner;
