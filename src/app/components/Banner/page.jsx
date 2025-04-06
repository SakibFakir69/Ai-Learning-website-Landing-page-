import React from "react";

import Image from "next/image";
import img from "./../../../../public/Rectangle 30.png";
import robot from "./../../../../public/image 5.png";

function BannerPage() {
  return (
    <div className="min-h-screen border border-white">


      <section className="grid md:grid-cols-2 h-[460px]">

        <div className="flex-1 border flex justify-center items-center flex-col  border-white">
          {/* text */}

          <div className="text-left px-10">
            <h2 className="font-bold text-white md:text-4xl text-2xl">
              Let’s Horizon
            </h2>
            <h2>
              <span className="text-green-400 font-bold md:text-4xl text-2xl">
                Robotics
              </span>{" "}
              <span className="md:text-4xl text-white text-2xl font-bold">
                Handle It,
              </span>
            </h2>

            <p className="text-white opacity-80">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>

        <div className=" border border-white flex justify-center ">
          <div className="border h-52 w-52 shadow-amber-800 border-white  mt-30 rotate-45  shadow-2xl absolute backdrop-blur-lg filter blur-3xl bg-gradient-to-b from-blue-500 to-violet-500">

          </div>

         
          <div className="z-50">
            <Image src={robot} height={400} className="mt-16 z-50" />
          </div>


        </div>
      </section>
    </div>
  );
}

export default BannerPage;
