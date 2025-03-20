import { FaFacebookF, FaGoogle, FaXTwitter } from "react-icons/fa6";

type Props = {
  name: string;
  listing: string;
  image: string;
};
const AgentCard = ({ name, image, listing }: Props) => {
  const socials = [FaFacebookF, FaXTwitter, FaGoogle];
  return (
    <div className="shadow  ">
      <div className="sm:h-52 h-80  group overflow-hidden">
        <img src={image} alt={name} className="w-full object-contain group-hover:scale-110 transition-all duration-500 ease-in" />
      </div>
      <div className="bg-green-500 text-white  text-left px-3 py-5">
        <div className="text-xs font-bold uppercase">
          <span> listing</span> <span>{listing} properties</span>
        </div>
        <h4 className="my-3 text-xl font-bold ">{name}</h4>
        <div className="flex justify-around items-center  py-2 gap-3  max-sm:w-2/5">
          {socials.map((Icon, i) => (
            <div className="text-2xl p-2 rounded-full bg-green-400 hover:bg-white hover:text-black" key={i}>
              <Icon />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
