import deal1 from "./assets/Homepage/Deals/img1.jpg";
import deal2 from "./assets/Homepage/Deals/img2.jpg";
import deal3 from "./assets/Homepage/Deals/img3.jpg";
import deal4 from "./assets/Homepage/Deals/img4.jpg";
import deal5 from "./assets/Homepage/Deals/img5.jpg";

import sampleImg from "./assets/Homepage/Sample/sample.png";
import sampleIcon1 from "./assets/Homepage/Sample/icon1.png";
import sampleIcon2 from "./assets/Homepage/Sample/icon2.png";
import sampleIcon3 from "./assets/Homepage/Sample/icon3.png";
import sampleIcon4 from "./assets/Homepage/Sample/icon4.png";

import commentImg1 from "./assets/Homepage/Comments/img1.png";
import commentImg2 from "./assets/Homepage/Comments/img2.png";
import commentImg3 from "./assets/Homepage/Comments/img3.png";
import stars from "./assets/Homepage/Arrivals/stars.png";

import googleIcon from "./assets/Signup/google.png";

import mother from "./assets/Homepage/Banner/mothersDay.jpg";
import christmas from "./assets/Homepage/Banner/christmas.jpg";
import valentines from "./assets/Homepage/Banner/valentines.jpg";

export const bannerImages = [mother, valentines, christmas];

export const sampleIcons = [
  {
    icon: sampleIcon1,
    title: "High Quality",
    text: "crafted from top materials",
  },
  {
    icon: sampleIcon2,
    title: "Warrany Protection",
    text: "Over 2 months",
  },
  {
    icon: sampleIcon3,
    title: "Free Shipping",
    text: "Order over $150",
  },
  {
    icon: sampleIcon4,
    title: "24 / 7 Support",
    text: "Dedicated support",
  },
];

export const commentImgs = [
  {
    image: commentImg1,
    name: "Suzan B.",
    star: stars,
    job: "Project Manager",
    comment:
      "“Items That I ordered were the best investment I ever made. I can't say enough about your quality service.”",
  },
  {
    image: commentImg2,
    name: "James K.",
    star: stars,
    job: "Programmer",
    comment:
      "“You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!”",
  },
  {
    image: commentImg3,
    name: "Megen W.",
    star: stars,
    job: "UI Designer",
    comment:
      "“Just what I was looking for. Thank you for making it painless, pleasant and most of all hassle free! All products are great.”",
  },
];

export const dealImgs = [deal1, deal2, deal3, deal4, deal5];

export { sampleImg };
export { googleIcon };
