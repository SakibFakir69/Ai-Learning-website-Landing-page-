import React from "react";
import Image from "next/image";
import hand from "../../../../public/image 7.png";

function ServicesPage() {
  return (
    <div className="md:h-[450px]  flex justify-center items-center">
      <section className="md:flex  gap-4 md:flex-row-reverse">
        <div className=" flex flex-1/2 flex-col px-5  ">
          {/* text */}
          <p className="text-white font-semibold mb-6 text-xl md:mt-4 mt-20">Services</p>
          <h2 className="mb-4">
            <p className="md:text-4xl text-2xl font-semibold text-white">
              Promising Care:
            </p>
            <p className="text-green-500 font-bold md:text-4xl text-2xl">
              Right At Home
            </p>
          </h2>
          <span className="text-white opacity-80">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document.{" "}
          </span>
        </div>

        <div className=" flex flex-1/2 justify-center ">
          {/* image */}
          <div
            className=" h-48 w-48 shadow-amber-800   mt-14
            ml-34 rotate-45  shadow-2xl absolute backdrop-blur-lg filter blur-3xl bg-gradient-to-b from-blue-500 to-violet-500
          
          "
          ></div>

          <Image src={hand} height={300} alt="Hand" className="z-50 md:h-[270px] h-[300px]"  />

        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
