import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import Teams from "../components/Teams";

const About = () => {
  return (
    <>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1="ABOUT" text2="US" />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img_1}
          alt="About"
          className="w-full md:max-w-[450px] rounded-md"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <b className="text-gray-800">Our Vision</b>
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>

      <div className="text-2xl text-center pt-10">
        <Title text1="WHY" text2="CHOOSE US" />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <b className="text-gray-800">Quality Assurance</b>
          <p>
            We are committed to providing our customers with the highest
            standards in fabric, craftsmanship, and design. Each piece is
            carefully crafted and rigorously tested to ensure durability,
            comfort, and style. From sourcing premium materials to final
            inspection, we take every step to guarantee that you receive only
            the best. Your satisfaction is our top priority, and we stand by the
            quality of every product we offer.
          </p>
          <b className="text-gray-800">Convenience</b>
          <p>
            We strive to make your shopping experience seamless and hassle-free,
            from browsing our collections to receiving your order at your
            doorstep. With easy navigation, secure payment options, and fast,
            reliable shipping, we’ve designed our platform to fit into your
            lifestyle. Whether you're shopping from home or on the go, we’re
            here to ensure that fashion is always within your reach.
          </p>
          <b className="text-gray-800">Exceptional Customer Service</b>
          <p>
            We believe in building lasting relationships with our customers by
            providing personalized support every step of the way. Our dedicated
            team is always ready to assist with inquiries, resolve issues
            promptly, and ensure your shopping experience is nothing short of
            excellent. Your satisfaction is our top priority, and we're here to
            help you every time you shop with us.
          </p>
        </div>
        <img
          src={assets.about_img_2}
          alt="About"
          className="w-full md:max-w-[450px] rounded-md"
        />
      </div>

      <Teams />
    </>
  );
};

export default About;
