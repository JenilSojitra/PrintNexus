import React from "react";

const NewsLetterBox = () => {
  return (
    <div className="text-center my-20">
      <p className="text-2xl font-bold text-gray-800">
        Subscribe to our newsletter to get updates <br /> to our latest
        collections.
      </p>
      <p className="text-gray-400 mt-3">
        Get 25% off on your first order just by subscribing to our newsletter.
      </p>
      <form className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6">
        <div className="flex border border-gray-300 bg-gray-100 w-full rounded-lg">
          <div className="flex items-center justify-center p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="pointer-events-none fill-gray-500 absolute w-5 transition"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
              <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" />
            </svg>
          </div>
          <input
            type="text"
            className="w-full bg-gray-100 pl-2 rounded-lg text-base font-semibold outline-0"
            placeholder="Enter your email"
          />
        </div>
        <button
          type="button"
          className="bg-black text-white text-xs px-10 py-4 rounded-lg"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
