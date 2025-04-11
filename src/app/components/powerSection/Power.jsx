import React from "react";
import Image from "next/image";
import image1 from "./../../../../public/Rectangle 23.png";

function AboutUs() {
  return (
    <div>
      <section className="md:flex p-4 border border-red-500 ">

        <div className="p-4 flex-1 border border-white">
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
              <p className="text-xl text-white mt-5">Machine Learning</p>
              <span className="text-white opacity-80">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly .{" "}
              </span>
            </div>
            <div>
              <p className="text-xl text-white mt-5 ">Machine Learning</p>
              <span className="opacity-80 text-white">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly .{" "}
              </span>
            </div>
            <button>Click here</button>
          </div>
        </div>

        <div className="flex flex-1 justify-center items-center w-full md:mt-2 mt-10">
          {/* image */}
          <Image src={image1} height={300} alt="about use image "className="z-50 md:w-1/2" />

          <div className="h-44 w-72 border bg-violet-500 absolute blur-3xl opacity-90 filter z-10">

          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
