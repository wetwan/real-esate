
import About from "../components/About";

import { assests } from "../assets";
import Pagebanner from "../components/Pagebanner";
import { FaCirclePause, FaRegCirclePlay } from "react-icons/fa6";
import { useRef, useState } from "react";
import { images } from "../data";

const Abouts = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [play, SetPlay] = useState<boolean>(true);
  const [image, SetImage] = useState<boolean>(false);
  const [img, SetImg] = useState<string>("");

  const played = () => {
    videoRef.current?.play();
    SetPlay(!play);
  };
  const paused = () => {
    videoRef.current?.pause();
    SetPlay(!play);
  };

  return (
    <div className="flex items-center justify-center pb-10">
      <Pagebanner title="About us" image={assests.image3} text="about" />
      <About className="w-full  h-screen top-[70vh] absolute text-center -z-50" />
      <div className=" top-[210vh] h-[45vh] absolute lg:w-4/6 sm:w-5/6 mx-auto sm:top-[170vh]">
        <video
          src={assests.vid}
          className="w-full h-full object-cover"
          ref={videoRef}
        />
        <div className="absolute flex items-center justify-center  bg-transparent  w-full h-full z-20 top-0 right-0 left-0  ">
          {play ? (
            <FaCirclePause
              className="text-7xl text-green-400/40 "
              onClick={played}
            />
          ) : (
            <FaRegCirclePlay
              className="text-7xl text-green-400/40 "
              onClick={paused}
            />
          )}
        </div>
      </div>
      <div className="top-[260vh] h-[50vh] flex items-center justify-center absolute w-full  sm:top-[220vh]">
        <div className=" lg:w-4/6 sm:w-5/6 mx-auto overflow-x-scroll h-5/6 flex items-center justify-center gap-4">
          {images.map((imgs, i) => (
            <img
              src={imgs}
              key={i}
              alt=""
              className="w-[200px] object-auto object-center h-full"
              onClick={() => {
                SetImg(imgs);
                SetImage(true);
              }}
            />
          ))}
        </div>
      </div>
      {image && (
        <div className="fixed overflow-hidden z-40 flex items-center justify-center shadow-2xl top-0 bottom-[20vh] right-0 left-0 bg-transparen bg-white p-10 h-full  w-full ">
          <img src={img} alt="" className=" w-[500px]  h-[500px]  " />
          <div
            className="absolute text-white top-[18%] sm:top-[25%] sm:right-[20%] text-2xl rounded-full p-1 w-10 text-center h-10 right-[7%]  bg-red-600 lg:top-[17%] lg:right-[29%] cursor-pointer"
            onClick={() => SetImage(false)}
          >
            {" "}
            x
          </div>
        </div>
      )}
    </div>
  );
};

export default Abouts;
