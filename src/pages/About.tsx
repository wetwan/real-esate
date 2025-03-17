import { assests } from "../assets";

const About = () => {
  return (
    <div
      className="h-screen py-16 bg-green-200"
      style={{ backgroundImage: `url(${assests.image})` }}
    ></div>
  );
};

export default About;
