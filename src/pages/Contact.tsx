import Pagebanner from "../components/Pagebanner";
import { assests } from "../assets";
import Button from "../components/Button";

const Contact = () => {
  const socials = ["facebook", "instagram", "twitter", "linkedIn"];
  return (
    <div className="flex items-center justify-center">
      <Pagebanner title="contact us" image={assests.image10} text="contact" />
      <div className="shadow-2xl h-screen absolute top-[70vh] sm:w-5/6 lg:w-4/6 mx-auto items-center justify-center flex py-10 ">
        <div className=" w-full lg:w-1/2  h-full p-2">
          <h2 className="font-bold text-2xl capitalize py-2"> contact us</h2>
          <p className="text-gray-400 py-2 ">
            We're open for any suggestion or just to have a chat
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="">
              <span className="font-bold uppercase text-lg text-gray-700 ">
                Address:
              </span>
              <p className="text-gray-400 text-sm">
                198 West 21th Street, Suite 721 New York NY 10016
              </p>
            </div>
            <div className="">
              <span className="font-bold uppercase text-lg text-gray-700 ">
                email:
              </span>
              <p className="text-gray-400 text-sm">info@oakberry.com</p>
            </div>
            <div className="">
              <span className="font-bold uppercase text-lg text-gray-700 ">
                phone:
              </span>
              <p className="text-gray-400 text-sm">0987654321</p>
            </div>
          </div>
          <form action=" " className="mt-5 p-3 flex flex-col">
            <input
              className="border-b py-4 border-gray-500 placeholder-shown placeholder:capitalize outline-none focus:border-green-500 placeholder:text-gray-600"
              type="text"
              placeholder="name"
            />
            <input
              className="border-b py-4 border-gray-500 placeholder-shown placeholder:capitalize outline-none focus:border-green-500 placeholder:text-gray-600"
              type="email"
              placeholder="email"
            />
            <textarea
              className="border-b py-4 border-gray-500 placeholder-shown placeholder:capitalize outline-none focus:border-green-500 placeholder:text-gray-600 max-h-36 h-3max-h-36"
              placeholder="your message"
            ></textarea>
            <div className="mt-5 px-1">
              <Button
                className="px-12 border bg-green-500 text-white py-6 uppercase font-semibold text-lg hover:bg-white hover:text-green-500 transform-fill ease-in duration-500 cursor-pointer"
                text="send a message"
              />
            </div>
          </form>

          <div className="flex gap-3 px-4 uppercase mt-4 ">
            {socials.map((item, i) => (
              <div
                className="hover:text-gray-500 cursor-pointer"
                onClick={() => scrollTo(0, 0)}
                key={i}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full hidden lg:block p-2"></div>
      </div>
    </div>
  );
};

export default Contact;
