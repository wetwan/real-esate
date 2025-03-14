import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { assests } from "../assets";
import Button from "./Button";
import { BiChevronRight } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="w-full h-dvh mx-auto absolute top-0 -z-50">
      <Fade arrows={false} duration={4000} canSwipe={true}>
        <div
          className=" bg-center bg-no-repeat bg-cover w-full h-dvh py-40"
          style={{ backgroundImage: `url(${assests.image})` }}
        >
          <div className="lg:w-3/6 mx-auto p-5 text-white ">
            <h1 className="w-5/6 mx-auto md:text-5xl text-3xl lg:leading-15 leading-10 font-semibold text-center">
              {" "}
              Let Your Home Be Unique & Stylist
            </h1>
            <p
              className="text-center mt-10
             font-semibold lg:leading-7 px-5 w-5/6"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              doloribus quidem minus tempore delectus doloremque, quo in cumque
              ipsam deleniti!
            </p>
            <Button
              arrow={BiChevronRight}
              text="learn more"
              className="block px-14 py-5 bg-green-500 rounded-md uppercase font-bold mx-auto my-10"
            />
          </div>
        </div>
        <div
          className=" bg-center bg-no-repeat bg-cover w-full h-dvh py-40"
          style={{ backgroundImage: `url(${assests.image2})` }}
        >
          <div className="lg:w-3/6 mx-auto p-5 text-white ">
            <h1 className="w-5/6 mx-auto md:text-5xl text-3xl lg:leading-15 leading-10 font-semibold text-center">
              Modern House Make Better Life
            </h1>
            <p
              className="text-center mt-10
             font-semibold lg:leading-7 px-5 w-5/6"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              doloribus quidem minus tempore delectus doloremque, quo in cumque
              ipsam deleniti!
            </p>
            <Button
              arrow={BiChevronRight}
              text="learn more"
              className="block px-14 py-5 bg-green-500 rounded-md uppercase font-bold mx-auto my-10"
            />
          </div>
        </div>
        <div
          className=" bg-center bg-no-repeat bg-cover w-full h-dvh py-40"
          style={{ backgroundImage: `url(${assests.image3})` }}
        >
          <div className="lg:w-3/6 mx-auto p-5 text-white ">
            <h1 className="w-5/6 mx-auto  md:text-5xl text-3xl lg:leading-15 leading-10 font-semibold text-center">
              Your Property Is Our Priority
            </h1>
            <p
              className="text-center mt-10
             font-semibold lg:leading-7 px-5 w-5/6"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              doloribus quidem minus tempore delectus doloremque, quo in cumque
              ipsam deleniti!
            </p>
            <Button
              arrow={BiChevronRight}
              text="learn more"
              className="block px-14 py-5 bg-green-500 rounded-md uppercase font-bold mx-auto my-10"
            />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Hero;
