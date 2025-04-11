import React from "react";
import Image from "next/image";
import image1 from "./../../../../public/Rectangle 23.png";
import { GoCodespaces } from "react-icons/go";
import { AiTwotoneCode } from "react-icons/ai";
import { GrCodepen } from "react-icons/gr";
function AboutUs() {
  return (
    <div>
      <section className="md:flex p-10  ">

        <div className="p-6 flex-1 ">
          {/* text */}
          <div className="">

            <p className="text-white">About us</p>
            <h3 className="text-white md:text-3xl text-xl font-semibold">
              Empowering <span className="text-green-500">People </span>By
            </h3>
            <h3 className="text-white md:text-3xl text-xl font-semibold">
              Keeping Them Well
            </h3>
            <p className="text-stone-100 mt-4 opacity-90">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document.{" "}
            </p>
          </div>

          {/* 2nd div */}

          <div>
            <div>
              <p className="text-xl text-white mt-5"> <GoCodespaces className="text-red-500 font-semibold text-xl"/>Machine Learning</p>
              <span className="text-white opacity-80">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly .{" "}
              </span>
            </div>
            <div>
              <p className="text-xl text-white mt-5  ">
                <GrCodepen  className="text-xl text-green-500" /> 
                
                Deep Learning</p>
              <span className="opacity-80 text-white">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly .{" "}
              </span>
            </div>
            <button className="btn rounded-tl-2xl rounded-br-2xl px-8 py-3 mt-2 bg-violet-600 text-white border-none hover:bg-black transition duration-500 delay-200 hover:shadow-2xl hover:shadow-amber-50">Click here</button>
          </div>
        </div>

        <div className="flex flex-1 justify-center items-center w-full md:mt-2 mt-10">
          {/* image */}
          <Image src={image1} height={300} alt="about use image "className="z-50 md:w-1/2" />

          <div className="h-44 w-72  bg-violet-500 absolute blur-3xl opacity-90 filter z-10">

          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
