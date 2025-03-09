import logo from "./logo/logo_svg.svg";
import search_icon from "./search_icon.png";
import menu_icon from "./menu_icon.png";
import about_img_1 from "./about_img_1.jpg";
import about_img_2 from "./about_img_2.png";
import header_image from "./header_image.jpg";
import dropdown_icon from "./dropdown_icon.png";

export const assets = {
  logo,
  search_icon,
  menu_icon,
  about_img_1,
  about_img_2,
  header_image,
  dropdown_icon,
};

import P_1_1 from "./Products/P_1_1.jpg";
import P_1_2 from "./Products/P_1_2.jpg";
import P_2_1 from "./Products/P_2_1.jpg";
import P_2_2 from "./Products/P_2_2.webp";
import P_3_1 from "./Products/P_3_1.jpg";
import P_3_2 from "./Products/P_3_2.jpg";
import P_4_1 from "./Products/P_4_1.webp";
import P_5_1 from "./Products/P_5_1.webp";
import P_5_2 from "./Products/P_5_2.avif";
import P_6_1 from "./Products/P_6_1.jpg";
import P_6_2 from "./Products/P_6_2.webp";
import P_6_3 from "./Products/P_6_3.avif";
import P_7_1 from "./Products/P_7_1.avif";
import P_7_2 from "./Products/P_7_2.webp";
import P_8_1 from "./Products/P_8_1.jpg";
import P_8_2 from "./Products/P_8_2.jpg";
import P_8_3 from "./Products/P_8_3.webp";
import P_8_4 from "./Products/P_8_4.jpg";
import P_9_1 from "./Products/P_9_1.avif";
import P_9_2 from "./Products/P_9_2.jpg";
import P_9_3 from "./Products/P_9_3.jpg";
import P_9_4 from "./Products/P_9_4.webp";
import P_10_1 from "./Products/P_10_1.webp";
import P_10_2 from "./Products/P_10_2.webp";
import P_10_3 from "./Products/P_10_3.webp";
import P_11_1 from "./Products/P_11_1.jpg";
import P_12_1 from "./Products/P_12_1.png";
import P_13_1 from "./Products/P_13_1.jpg";
import P_14_1 from "./Products/P_14_1.webp";
import P_15_1 from "./Products/P_15_1.jfif";
import P_15_2 from "./Products/P_15_2.avif";

export const products = [
  {
    _id: "1",
    name: "Men's Cotton T-Shirt",
    description:
      "Comfortable cotton T-shirt for men. This e-commerce website serves as a virtual marketplace designed to facilitate the buying and selling of products and services online, offering customers a seamless and convenient shopping experience. With leadership by Jenil Sojitra and powered by the innovation of PrintNexus, this platform enables businesses and individuals to showcase their products, connect with customers, and conduct secure transactions without the need for a physical storefront.",
    price: 499.99,
    image: [P_1_1, P_1_2],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "XL", "XXL", "XXXL"],
    bestseller: true,
    rating: 4.8,
  },
  {
    _id: "2",
    name: "Men's Denim Jeans",
    description:
      "Slim-fit stylish jeans for men. This e-commerce website serves as a virtual marketplace designed to facilitate the buying and selling of products and services online, offering customers a seamless and convenient shopping experience. With leadership by Jenil Sojitra and powered by the innovation of PrintNexus, this platform enables businesses and individuals to showcase their products, connect with customers, and conduct secure transactions without the need for a physical storefront.",
    price: 999.5,
    image: [P_2_1, P_2_2],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "XL", "XXL", "XXXL"],
    bestseller: false,
    rating: 4.5,
  },
  {
    _id: "3",
    name: "Men's Winter Jacket",
    description:
      "Warm and cozy jacket for winter. This e-commerce website serves as a virtual marketplace designed to facilitate the buying and selling of products and services online, offering customers a seamless and convenient shopping experience. With leadership by Jenil Sojitra and powered by the innovation of PrintNexus, this platform enables businesses and individuals to showcase their products, connect with customers, and conduct secure transactions without the need for a physical storefront.",
    price: 1499.0,
    image: [P_3_1, P_3_2],
    category: "Men",
    subCategory: "Winterwear",
    sizes: ["S", "M", "XL", "XXL", "XXXL"],
    bestseller: false,
    rating: 4.3,
  },
  {
    _id: "4",
    name: "Men's Polo T-Shirt",
    description:
      "Classic polo t-shirt with modern fit. This e-commerce website serves as a virtual marketplace designed to facilitate the buying and selling of products and services online, offering customers a seamless and convenient shopping experience. With leadership by Jenil Sojitra and powered by the innovation of PrintNexus, this platform enables businesses and individuals to showcase their products, connect with customers, and conduct secure transactions without the need for a physical storefront.",
    price: 699.0,
    image: [P_4_1],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "XL", "XXL", "XXXL"],
    bestseller: true,
    rating: 4.7,
  },
  {
    _id: "5",
    name: "Men's Cargo Pants",
    description:
      "Utility cargo pants for everyday wear. This e-commerce website serves as a virtual marketplace designed to facilitate the buying and selling of products and services online, offering customers a seamless and convenient shopping experience. With leadership by Jenil Sojitra and powered by the innovation of PrintNexus, this platform enables businesses and individuals to showcase their products, connect with customers, and conduct secure transactions without the need for a physical storefront.",
    price: 899.99,
    image: [P_5_1, P_5_2],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "XL", "XXL", "XXXL"],
    bestseller: false,
    rating: 4.4,
  },
  {
    _id: "6",
    name: "Women's Floral Kurti",
    description:
      "Elegant floral printed kurti for women. This e-commerce website serves as a virtual marketplace designed to facilitate the buying and selling of products and services online, offering customers a seamless and convenient shopping experience. With leadership by Jenil Sojitra and powered by the innovation of PrintNexus, this platform enables businesses and individuals to showcase their products, connect with customers, and conduct secure transactions without the need for a physical storefront.",
    price: 799.0,
    image: [P_6_1, P_6_2, P_6_3],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "XL", "XXL", "XXXL"],
    bestseller: true,
    rating: 4.9,
  },
  {
    _id: "7",
    name: "Women's Leggings",
    description:
      "Comfortable stretchable leggings. This e-commerce website serves as a virtual marketplace designed to facilitate the buying and selling of products and services online, offering customers a seamless and convenient shopping experience. With leadership by Jenil Sojitra and powered by the innovation of PrintNexus, this platform enables businesses and individuals to showcase their products, connect with customers, and conduct secure transactions without the need for a physical storefront.",
    price: 449.0,
    image: [P_7_1, P_7_2],
    category: "Women",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "XL", "XXL", "XXXL"],
    bestseller: false,
    rating: 4.2,
  },
  {
    _id: "8",
    name: "Women's Woolen Cardigan",
    description:
      "Soft woolen cardigan for chilly days. This e-commerce website serves as a virtual marketplace designed to facilitate the buying and selling of products and services online, offering customers a seamless and convenient shopping experience. With leadership by Jenil Sojitra and powered by the innovation of PrintNexus, this platform enables businesses and individuals to showcase their products, connect with customers, and conduct secure transactions without the need for a physical storefront.",
    price: 1299.0,
    image: [P_8_1, P_8_2, P_8_3, P_8_4],
    category: "Women",
    subCategory: "Winterwear",
    sizes: ["S", "M", "XL", "XXL", "XXXL"],
    bestseller: true,
    rating: 4.8,
  },
  {
    _id: "9",
    name: "Women's Tunic Top",
    description:
      "Trendy tunic for casual occasions. This e-commerce website serves as a virtual marketplace designed to facilitate the buying and selling of products and services online, offering customers a seamless and convenient shopping experience. With leadership by Jenil Sojitra and powered by the innovation of PrintNexus, this platform enables businesses and individuals to showcase their products, connect with customers, and conduct secure transactions without the need for a physical storefront.",
    price: 699.0,
    image: [P_9_1, P_9_2, P_9_3, P_9_4],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "XL", "XXL", "XXXL"],
    bestseller: false,
    rating: 4.3,
  },
  {
    _id: "10",
    name: "Women's Palazzo Pants",
    description:
      "Flowy palazzo pants with a relaxed fit. This e-commerce website serves as a virtual marketplace designed to facilitate the buying and selling of products and services online, offering customers a seamless and convenient shopping experience. With leadership by Jenil Sojitra and powered by the innovation of PrintNexus, this platform enables businesses and individuals to showcase their products, connect with customers, and conduct secure transactions without the need for a physical storefront.",
    price: 899.0,
    image: [P_10_1, P_10_2, P_10_3],
    category: "Women",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "XL", "XXL", "XXXL"],
    bestseller: false,
    rating: 4.5,
  },
  {
    _id: "11",
    name: "Kids T-Shirt",
    description:
      "Colorful cotton T-shirt for kids. This e-commerce website serves as a virtual marketplace designed to facilitate the buying and selling of products and services online, offering customers a seamless and convenient shopping experience. With leadership by Jenil Sojitra and powered by the innovation of PrintNexus, this platform enables businesses and individuals to showcase their products, connect with customers, and conduct secure transactions without the need for a physical storefront.",
    price: 399.0,
    image: [P_11_1],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "XL", "XXL", "XXXL"],
    bestseller: true,
    rating: 4.7,
  },
  {
    _id: "12",
    name: "Kids Jeans",
    description:
      "Comfortable denim jeans for kids. This e-commerce website serves as a virtual marketplace designed to facilitate the buying and selling of products and services online, offering customers a seamless and convenient shopping experience. With leadership by Jenil Sojitra and powered by the innovation of PrintNexus, this platform enables businesses and individuals to showcase their products, connect with customers, and conduct secure transactions without the need for a physical storefront.",
    price: 599.0,
    image: [P_12_1],
    category: "Kids",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "XL", "XXL", "XXXL"],
    bestseller: false,
    rating: 4.4,
  },
  {
    _id: "13",
    name: "Kids Hooded Jacket",
    description:
      "Stylish and warm hooded jacket for kids. This e-commerce website serves as a virtual marketplace designed to facilitate the buying and selling of products and services online, offering customers a seamless and convenient shopping experience. With leadership by Jenil Sojitra and powered by the innovation of PrintNexus, this platform enables businesses and individuals to showcase their products, connect with customers, and conduct secure transactions without the need for a physical storefront.",
    price: 1099.0,
    image: [P_13_1],
    category: "Kids",
    subCategory: "Winterwear",
    sizes: ["S", "M", "XL", "XXL", "XXXL"],
    bestseller: true,
    rating: 4.6,
  },
  {
    _id: "14",
    name: "Kids Sweatshirt",
    description:
      "Soft and cozy sweatshirt for children. This e-commerce website serves as a virtual marketplace designed to facilitate the buying and selling of products and services online, offering customers a seamless and convenient shopping experience. With leadership by Jenil Sojitra and powered by the innovation of PrintNexus, this platform enables businesses and individuals to showcase their products, connect with customers, and conduct secure transactions without the need for a physical storefront.",
    price: 649.0,
    image: [P_14_1],
    category: "Kids",
    subCategory: "Winterwear",
    sizes: ["S", "M", "XL", "XXL", "XXXL"],
    bestseller: false,
    rating: 4.3,
  },
  {
    _id: "15",
    name: "Kids Shorts",
    description:
      "Comfortable cotton shorts for kids. This e-commerce website serves as a virtual marketplace designed to facilitate the buying and selling of products and services online, offering customers a seamless and convenient shopping experience. With leadership by Jenil Sojitra and powered by the innovation of PrintNexus, this platform enables businesses and individuals to showcase their products, connect with customers, and conduct secure transactions without the need for a physical storefront.",
    price: 349.0,
    image: [P_15_1, P_15_2],
    category: "Kids",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "XL", "XXL", "XXXL"],
    bestseller: false,
    rating: 4.2,
  },
];

import team_1 from "./Team/team_1.jpg";
import team_2 from "./Team/team_2.jpg";
import team_3 from "./Team/team_3.jpg";
import team_4 from "./Team/team_4.jpg";
import team_5 from "./Team/team_5.jpg";
import team_6 from "./Team/team_6.jpg";
import team_7 from "./Team/team_7.jpg";
import team_8 from "./Team/team_8.jpg";

export const persons = [
  {
    id: 1,
    name: "Rinaldo Trees",
    image: [team_1],
    jobTitle: "Administrative Assistant II",
  },
  {
    id: 2,
    name: "Eleanore Aucock",
    image: [team_2],
    jobTitle: "Chief Design Engineer",
  },
  {
    id: 3,
    name: "Audie Reeves",
    image: [team_3],
    jobTitle: "Senior Sales Associate",
  },
  { id: 4, name: "Claudie Foote", image: [team_4], jobTitle: "Developer IV" },
  { id: 5, name: "Odey Leming", image: [team_5], jobTitle: "Paralegal" },
  {
    id: 6,
    name: "Denise Follan",
    image: [team_6],
    jobTitle: "Web Developer IV",
  },
  {
    id: 7,
    name: "Augusta Goligly",
    image: [team_7],
    jobTitle: "Structural Analysis Engineer",
  },
  {
    id: 8,
    name: "Eldin Byrnes",
    image: [team_8],
    jobTitle: "Senior Cost Accountant",
  },
];
