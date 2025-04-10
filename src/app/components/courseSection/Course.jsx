import React from "react";
import Image from "next/image";
import image1 from "./../../../../public./Rectangle 9.png";
import image2 from "./../../../../public./Rectangle 10.png";
import image3 from "./../../../../public./Rectangle 13.png";
import image4 from "./../../../../public./Rectangle 12.png";

function Course() {
  return (
    <div className="flex justify-center items-center md:mt-6 mt-10 border border-white w-full">
      <section
        className="grid md:grid-cols-2 border border-white gap-6  w-full  p-3
        
        place-content-center"
      >
        <div className="md:flex gap-2 border border-white/10 p-2 rounded bg-black">
          <div className="flex justify-center items-center">
            <Image
              src={image1}
              height={200}
              alt="image"
              className="rounded border"
            />
          </div>

          <div className="">
            {/* icon */}
            <h3 className="text-white font-semibold">Machine Learning</h3>

            <p className="text-gray-300">
              In publishing and graphic design, Lorem ipsum is a placeholder.{" "}
            </p>

            <div>
              <button className="btn">Services --</button>
            </div>
          </div>
        </div>
        <div className="md:flex gap-2 border border-white/10 p-2 rounded bg-black">
          <div className="flex justify-center items-center">
            <Image
              src={image2}
              height={200}
              alt="image"
              className="rounded border"
            />
          </div>

          <div className="">
            {/* icon */}
            <h3 className="text-white font-semibold">Machine Learning</h3>

            <p className="text-gray-300">
              In publishing and graphic design, Lorem ipsum is a placeholder.{" "}
            </p>

            <div>
              <button className="btn">Services --</button>
            </div>
          </div>
        </div>
        <div className="md:flex gap-2 border border-white/10 p-2 rounded bg-black">
          <div className="flex justify-center items-center">
            <Image
              src={image3}
              height={200}
              alt="image"
              className="rounded border"
            />
          </div>

          <div className="">
            {/* icon */}
            <h3 className="text-white font-semibold">Machine Learning</h3>

            <p className="text-gray-300">
              In publishing and graphic design, Lorem ipsum is a placeholder.{" "}
            </p>

            <div>
              <button className="btn">Services --</button>
            </div>
          </div>
        </div>
        <div className="md:flex gap-2 border border-white/10 p-2 rounded bg-black">
          <div className="flex justify-center items-center">
            <Image
              src={image4}
              height={200}
              alt="image"
              className="rounded border"
            />
          </div>

          <div className="">
            {/* icon */}
            <h3 className="text-white font-semibold">Machine Learning</h3>

            <p className="text-gray-300">
              In publishing and graphic design, Lorem ipsum is a placeholder.{" "}
            </p>

            <div>
              <button className="btn">Services --</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Course;
