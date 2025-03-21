import Button from "./Button";

const Subscribtion = () => {
  return (
    <div className="w-full sm:-bottom-4/6 sm:-mb-[2000px] max-sm:h-[40vh]  h-[20vh] bg-green-500 -mb-[4500px]  -bottom-6/6 absolute text-center -z-50 flex  items-center justify-center">
      <div className="lg:w-4/6 mx-auto  h-full  sm:w-5/6 w-full flex ">
        <div className="flex w-full gap-5 max-sm:px-5  max-sm:flex-col justify-end sm:items-center">
          <div className="text-left  sm:w-1/2">
            <h3 className="text-white text-4xl font-bold">
              Find Best Place For Leaving
            </h3>
            <p className="text-gray-300 text-xl mt-3">
              Find Best Place For Leaving
            </p>
          </div>
          <div className="sm:w-1/2 flex items-center sm:justify-end max-sm:mb-4">
            <Button
              text="get in touch"
              className=" bg-black py-5 px-8 font-semibold uppercase text-white text-center "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribtion;
