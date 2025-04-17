import React from "react";
import Image from "next/image";
import image1 from "./../../../../public/Rectangle 15.png";

function Number() {
  return (
    <div className="w-full all-color ">
      <section className="flex justify-center mt-6 w-full border p-4 md:gap-28 gap-5 md:flex-row flex-col items-center md:h-52 ">

        <div className="h-28 md:w-48 w-full   flex text-center flex-col justify-center border-2 border-red-500 border-b-cyan-700 rounded-tl-4xl rounded-br-4xl">

          <h3 className="md:text-2xl text-xl font-semibold text-green-500">
            250+
          </h3>
          <p className="text-stone-100">Services</p>
        </div>
        {/* 2 */}

        <div className="h-28 md:w-48 w-full  flex text-center flex-col justify-center 
        
      border-2 border-blue-600 rounded-tl-4xl border-b-red-600 rounded-br-4xl">
          <h3 className="md:text-2xl text-xl font-semibold text-green-500">
            250+
          </h3>
          <p className="text-stone-100">Services</p>
        </div>
        {/* 3 */}

        <div className="h-28 md:w-48 w-full  border-2 flex text-center flex-col justify-center border-emerald-500 rounded-tl-4xl rounded-br-4xl border-t-emerald-900">

          <h3 className="md:text-2xl text-xl font-semibold text-green-500">
            250+
          </h3>
          <p className="text-stone-100">Services</p>
        </div>
        {/* 4 */}

        <div className="h-28 md:w-48 w-full  border-2 flex text-center flex-col justify-center border-white rounded-tl-4xl rounded-br-4xl border-t-amber-300">
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
