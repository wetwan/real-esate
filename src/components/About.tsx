import { assests } from "../assets";

const About = () => {
  return (
    <div className="w-full sm:-bottom-2/6 sm:-mb-[2200px] h-screen -mb-[3800px] -bottom-6/6 absolute text-center -z-50">
      <div className="w-5/6 gap-4  my-12 lg:w-4/6 mx-auto h-[90%] flex items-start justify-between">
        <div
          className="w-2/6 max-sm:hidden  h-full mx-1 bg-contain  bg-center bg-no-repeat"
          style={{
            background: `url(${assests.image8})`,
            backgroundSize: "auto 100% ",
          }}
        ></div>
        <div className=" sm:w-4/6 w-full h-full mx-1 px-1">
          <div className="text-left mt-10">
            <span className="text-green-500 uppercase font-sans font-bold ">
              about us
            </span>
            <h2 className="text-2xl my-3 font-bold ">
              Oakberry A Real Estate Company
            </h2>
            <p className="text-sm text-gray-400 leading-7 w-11/12">
              {" "}
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
          </div>
          <div
            className="grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-20 gap-10
           text-sm text-left py-10 "
          >
            <div className="">
              <p className="text-xl font-bold"> 50</p>
              <span className="text-green-500 uppercase font-bold text-xs whitespace-nowrap">
                Years of Experienced{" "}
              </span>
            </div>
            <div className="">
              <p className="text-xl font-bold"> 210K+</p>
              <span className="text-green-500 uppercase font-bold text-xs whitespace-nowrap">
                Total Properties
              </span>
            </div>
            <div className="">
              <p className="text-xl font-bold"> 450</p>
              <span className="text-green-500 uppercase font-bold text-xs whitespace-nowrap">
                Qualified Realtors
              </span>
            </div>
            <div className="">
              <p className="text-xl font-bold"> 100</p>
              <span className="text-green-500 uppercase font-bold text-xs whitespace-nowrap">
                Total Branches
              </span>
            </div>
          </div>
          <div className="sm:h-[41%] lg:h-[50%] w-full">
            <img
              src={assests.image10}
              alt="About"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
