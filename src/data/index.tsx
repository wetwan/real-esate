import { assests } from "../assets";
import { houseTypes } from "../types";

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
