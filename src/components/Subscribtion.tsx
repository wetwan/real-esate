import Button from "./Button";

const Subscribtion = () => {
  return (
    <div className="w-full sm:-bottom-4/6 sm:-mb-[2100px] max-sm:h-[40vh]  h-[20vh] bg-green-500 -mb-[4500px]  -bottom-6/6 absolute text-center -z-50">
      <div className="lg:w-4/6 mx-auto py-10  h-full sm:w-5/6 w-full">
        <div className="flex sm:items-center  px-4 gap-5 justify-between max-sm:flex-col">
          <div className="text-left  sm:py-10">
            <h3 className="text-white text-4xl font-bold">
              Find Best Place For Leaving
            </h3>
            <p className="text-gray-300 text-xl mt-3">
              Find Best Place For Leaving
            </p>
          </div>
          <div className="">
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
