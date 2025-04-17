import React from "react";
import Image from "next/image";

function Course() {
  return (
    <div className="flex justify-center items-center md:mt-6 mt-10  w-full">
      <section
        className="grid md:grid-cols-2 gap-6  w-full  p-3
        
        place-content-center"
      >
        <div className="md:flex gap-2 border border-white/10 p-2 rounded bg-black">
          <div className="flex justify-center items-center">
            <Image
              src={'/Rectangle 9.png'}
              width={200}
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
              <button className="btn">Services</button>
            </div>
          </div>
        </div>
        <div className="md:flex gap-2 border border-white/10 p-2 rounded bg-black">
          <div className="flex justify-center items-center">
            <Image
              src={'/Rectangle 10.png'}
              height={200}
              width={200}
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
              src={'/Rectangle 13.png'}
              height={200}
              width={200}
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
              src={'/Rectangle 12.png'}
              height={200}
              width={200}
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
