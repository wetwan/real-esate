
import { assests } from "../assets";
import { agentType, houseTypes } from "../types";

export const houseDatas: houseTypes[] = [
  {
    _id: "1",
    Image: assests.image,
    name: "white house",
    type: "rent",
    bathroom: "4",
    bed: "6",
    poasted: 123,
    location: "new york",
    size: "1234",
    price: "300,000",
    old_price: " 400,000",
    renter: "john doe",
  },
  {
    _id: "2",
    Image: assests.image2,
    name: "blue house",
    type: "sale",
    bathroom: "2",
    bed: "3",
    poasted: 13,
    location: "london",
    size: "123",
    price: "30,000",
    renter: "john doe",
  },
  {
    _id: "3",
    Image: assests.image3,
    name: "cryon house",
    type: "sale",
    bathroom: "22",
    bed: "33",
    poasted: 3,
    location: "london",
    size: "12233",
    price: "3,000,000",
    renter: "jane doe",
  },
  {
    _id: "4",
    Image: assests.image1,
    name: "orange house",
    type: "rent",
    bathroom: "122",
    bed: "72",
    poasted: 3756,
    location: "london",
    size: "12233",
    price: "10,000,000",
    renter: "jane doe",
    old_price: "13,000,000",
  },
  {
    _id: "5",
    Image: assests.image5,
    name: "green house",
    type: "sale",
    bathroom: "22",
    bed: "33",
    poasted: 3756,
    location: "london",
    size: "12233",
    price: "10,000,000",
    renter: "jane doe",
    old_price: "13,000,000",
  },
  {
    _id: "6",
    Image: assests.image6,
    name: "green house",
    type: "sale",
    bathroom: "22",
    bed: "33",
    poasted: 3756,
    location: "london",
    size: "12233",
    price: "10,000,000",
    renter: "jane doe",
    old_price: "13,000,000",
  },
];
export const navItem = [
  {
    link: "/",
    label: "home",
  },
  {
    link: "/about",
    label: "about",
  },
  {
    link: "/properties",
    label: "properties",
  },
  {
    link: "/agents",
    label: "agents",
  },
  {
    link: "/contact",
    label: "contact",
  },
];

export const fadeImages = [
  {
    url: assests.image,
    caption: "First Slide",
  },

  {
    url: assests.image3,
    caption: "second Slide",
  },

  {
    url: assests.image6,
    caption: "First Slide",
  },
];
export const agentData: agentType[] = [
  {
    _id: "1",
    Image: assests.agent1,
    name: "Ethan Alexander",
    listing: "10",
  },
  {
    _id: "2",
    Image: assests.agent2,
    name: "Emily Victoria",
    listing: "13",
  },
  {
    _id: "3",
    Image: assests.agent3,
    name: "Ava Isabelle ",
    listing: "102",
  },
  {
    _id: "4",
    Image: assests.agent4,
    name: "Liam Benjamin",
    listing: "12",
  },
  {
    _id: "5",
    Image: assests.agent5,
    name: "Lucas Julian",
    listing: "20",
  },
  {
    _id: "6",
    Image: assests.agent6,
    name: " Gabriel Harrison",
    listing: "05",
  },
  {
    _id: "7",
    Image: assests.agent7,
    name: " Sanders Mason",
    listing: "15",
  },
];


