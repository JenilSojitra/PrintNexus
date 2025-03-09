import React, { Suspense } from "react";
const Title = React.lazy(() => import("../components/Title"));
const Teams = React.lazy(() => import("../components/Teams"));
import { assets } from "../assets/assets";

const About = () => {
  return (
    <>
      <div className="text-2xl text-center pt-8 border-t">
        <Suspense fallback={<div className="h-8" />}>
          <Title text1="ABOUT" text2="US" />
        </Suspense>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img_1}
          alt="About"
          className="w-full md:max-w-[550px] rounded-md"
          loading="lazy"
        />
        <div className="flex flex-col justify-center gap-4 md:w-2/4 text-gray-600">
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our journey began with a passion for innovation and a bold vision to
            transform the way people experience online shopping. What started as
            a simple idea has now evolved into a dynamic platform where
            customers can seamlessly discover, explore, and shop a diverse range
            of high-quality products—from the comfort of their homes.
          </p>
          <p>
            Driven by our mission to bring value, quality, and convenience,
            we’ve curated a versatile selection that caters to every lifestyle
            whether it’s fashion, beauty, electronics, or home essentials. Each
            product we offer is thoughtfully sourced from trusted brands and
            reliable suppliers, ensuring both variety and reliability in every
            purchase.
          </p>
          <p>
            With the expertise and leadership of Jenil Sojitra, and the
            collaborative synergy with PrintNexus, we continue to push
            boundaries in delivering an elevated and customer-first shopping
            experience. Together, we aim to bridge the gap between innovation
            and accessibility, ensuring that our platform stays ahead of
            evolving trends and consumer expectations.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to empower customers with choice, convenience, and
            confidence at every step of their shopping journey. We are committed
            to delivering a seamless and satisfying online shopping experience
            from intuitive browsing and smooth ordering to timely delivery and
            exceptional post-purchase support.
          </p>
          <p>
            Guided by the visionary leadership of Jenil Sojitra and strengthened
            by our collaboration with PrintNexus, we continuously strive to
            enhance our platform with innovative features, trusted products, and
            personalized service. Every decision we make is centered around our
            customers ensuring they feel valued, supported, and inspired.
          </p>
        </div>
      </div>

      <div className="text-2xl text-center pt-10">
        <Suspense fallback={<div className="h-8" />}>
          <Title text1="WHY" text2="CHOOSE US" />
        </Suspense>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <div className="flex flex-col justify-center gap-4 md:w-2/4 text-gray-600">
          <b className="text-gray-800">Quality Assurance</b>
          <p>
            We are committed to delivering exceptional quality in every product
            we offer. Our dedication to excellence begins with premium fabric
            selection, continues through precise craftsmanship, and concludes
            with rigorous quality checks ensuring every piece meets the highest
            standards of durability, comfort, and style. Under the guidance of
            Jenil Sojitra and in collaboration with PrintNexus, we uphold a
            meticulous approach to product development from sourcing superior
            raw materials to final inspection. Every step is thoughtfully
            executed to ensure that our customers receive nothing but the best.
          </p>
          <b className="text-gray-800">Convenience</b>
          <p>
            We prioritize your convenience by offering a seamless and
            hassle-free shopping experience from start to finish. With
            easy-to-navigate collections, secure payment options, and fast,
            reliable delivery, our platform is designed to integrate
            effortlessly into your lifestyle. Whether you're shopping from home
            or on the move, Jenil Sojitra’s vision and our collaboration with
            PrintNexus ensure that fashion, comfort, and accessibility are
            always just a click away.
          </p>
          <b className="text-gray-800">Exceptional Customer Service</b>
          <p>
            We believe in building meaningful and lasting relationships with our
            customers through exceptional customer service. With the leadership
            of Jenil Sojitra and the support of PrintNexus, our dedicated team
            is always ready to offer personalized assistance, resolve queries
            promptly, and ensure your shopping experience is smooth and
            satisfying. Your satisfaction is our top priority, and we're here to
            support you at every step—making every interaction with us truly
            outstanding.
          </p>
        </div>
        <img
          src={assets.about_img_2}
          alt="About"
          className="w-full md:max-w-[550px] rounded-md"
          loading="lazy"
        />
      </div>

      <Suspense fallback={<div className="h-32" />}>
        <Teams />
      </Suspense>
    </>
  );
};

export default About;
