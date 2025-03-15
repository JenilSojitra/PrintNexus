import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-2 sm:grid sm:grid-cols-5 gap-14 my-10 mt-40 text-sm">
        <div className="col-span-2 flex sm:grid flex-col justify-center align-middle items-center gap-5">
          <img src={assets.logo} alt="Logo" className="w-40" />
          <p className="w-full md:w-2/3 text-gray-600">
            PrintNexus is a dedicated printed product selling e-commerce
            platform designed to empower creators, brands, and businesses to
            showcase and sell high-quality printed merchandise online. From
            custom apparel and accessories to personalized gifts and promotional
            items, PrintNexus offers a seamless, scalable, and user-friendly
            platform to manage products, orders, and customer engagement—all in
            one place.
          </p>
          <div className="flex items-center gap-5">
            <Link
              to="https://www.instagram.com/jenil.sojitra.25/"
              target="_blank"
              className="flex justify-center border p-2 rounded-full bg-gray-800 text-gray-100 hover:bg-gray-100 hover:text-gray-800 w-[35px] h-[35px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M16.5 7.5l0 .01" />
              </svg>
            </Link>
            <Link
              to="https://x.com/JENILSOJITRA25"
              target="_blank"
              className="flex justify-center border p-2 rounded-full bg-gray-800 text-gray-100 hover:bg-gray-100 hover:text-gray-800 w-[35px] h-[35px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </Link>
            <Link
              to="https://www.linkedin.com/in/jenilsojitra/"
              target="_blank"
              className="flex justify-center border p-2 rounded-full bg-gray-800 text-gray-100 hover:bg-gray-100 hover:text-gray-800 w-[35px] h-[35px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
          </div>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600 cursor-pointer">
            <li>About</li>
            <li>FAQ</li>
            <li>Collaboration</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">SHOP</p>
          <ul className="flex flex-col gap-1 text-gray-600 cursor-pointer">
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Sale</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">LEGAL</p>
          <ul className="flex flex-col gap-1 text-gray-600 cursor-pointer">
            <li>Shipping Policy</li>
            <li>Return & Exchanges</li>
            <li>Terms Of Use</li>
            <li>Support</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <div className="block sm:flex sm:justify-between sm:align-middle items-center">
          <p className="py-5 text-sm text-center">
            Copyright {new Date().getFullYear()}@ TouroseWibrante - All Right
            Reserved.
          </p>
          <p className="py-5 text-sm text-center">
            Design And Develop By Jenil Sojitra.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
