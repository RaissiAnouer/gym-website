import React from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative z-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Navbar />

        <div className="flex flex-col items-center">
          <h1 className="text-xl text-white font-semibold mt-10 mb-10">
            GET IN <span className="text-[#8FFF00]">TOUCH</span>
          </h1>
          <form>
            <div className="text-white ">
              <div>
                <input
                  className="py-2 px-8 bg-[#1A1A1A] w-full rounded mt-5"
                  type="text "
                  placeholder="Your Name"
                />
              </div>
              <div>
                <input
                  className="py-2 px-8 bg-[#1A1A1A] w-full rounded mt-5"
                  type="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <textarea
                  className="mt-5 bg-[#1A1A1A] rounded mt-5 w-full h-auto md:w-[500px] sm:h-[300px] px-8 py-2 pb-15"
                  type="textarea"
                  placeholder="Your Message"
                />
              </div>
              <div className="flex justify-center my-7">
                <button className="bg-[#8FFF00] text-black px-7 rounded py-2 hover:scale-110 transition-all ease-in-out cursor-pointer mx-auto">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
