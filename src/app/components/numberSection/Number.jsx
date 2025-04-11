import React from "react";
import Image from "next/image";
import image1 from "./../../../../public/Rectangle 15.png";

function Number() {
  return (
    <div className="w-full all-color ">
      <section className="flex justify-center mt-6 w-full border p-4 md:gap-28 gap-5 md:flex-row flex-col items-center">

        <div className="h-28 md:w-48 w-full  border flex text-center flex-col justify-center">
          <h3 className="md:text-2xl text-xl font-semibold text-green-500">
            250+
          </h3>
          <p className="text-stone-100">Services</p>
        </div>
        {/* 2 */}

        <div className="h-28 md:w-48 w-full  border flex text-center flex-col justify-center">
          <h3 className="md:text-2xl text-xl font-semibold text-green-500">
            250+
          </h3>
          <p className="text-stone-100">Services</p>
        </div>
        {/* 3 */}

        <div className="h-28 md:w-48 w-full  border flex text-center flex-col justify-center">
          <h3 className="md:text-2xl text-xl font-semibold text-green-500">
            250+
          </h3>
          <p className="text-stone-100">Services</p>
        </div>
        {/* 4 */}

        <div className="h-28 md:w-48 w-full  border flex text-center flex-col justify-center">
          <h3 className="md:text-2xl text-xl font-semibold text-green-500">
            250+
          </h3>
          <p className="text-stone-100">Services</p>
        </div>
      </section>
    </div>
  );
}

export default Number;
