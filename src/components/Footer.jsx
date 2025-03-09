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
              to="#"
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
                <path d="M12 10.174c1.766 -2.784 3.315 -4.174 4.648 -4.174c2 0 3.263 2.213 4 5.217c.704 2.869 .5 6.783 -2 6.783c-1.114 0 -2.648 -1.565 -4.148 -3.652a27.627 27.627 0 0 1 -2.5 -4.174z" />
                <path d="M12 10.174c-1.766 -2.784 -3.315 -4.174 -4.648 -4.174c-2 0 -3.263 2.213 -4 5.217c-.704 2.869 -.5 6.783 2 6.783c1.114 0 2.648 -1.565 4.148 -3.652c1 -1.391 1.833 -2.783 2.5 -4.174z" />
              </svg>
            </Link>
            <Link
              to="#"
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
              to="#"
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
