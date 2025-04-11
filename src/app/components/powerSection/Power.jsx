import React from "react";
import Image from "next/image";
import image1 from "./../../../../public/Rectangle 23.png";

function AboutUs() {
  return (
    <div>
      <section className="flex p-4 border border-red-500">

        <div className="p-4">
          {/* text */}
          <div>
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

        <div>
          {/* image */}
          <Image src={image1} height={300} alt="about use image " />
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
