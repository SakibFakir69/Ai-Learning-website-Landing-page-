import React from "react";
import { AiFillGolden } from "react-icons/ai";
import { GiCrystalGrowth } from "react-icons/gi";

function PriceSection() {
  return (
    <div>
      <section className="w-full mt-10">
        <div className="text-center">
          <p>Pricing Plan</p>
          <h2>Our Pricing Plan</h2>
        </div>
      </section>

      <section className="p-2 md:flex gap-10 justify-center">

        <div className="text-white text-center border border-white flex flex-col justify-center items-center bg-black p-4 rounded outline-2 outline-blue-300 hover:outline hover:shadow-white">
          <AiFillGolden className="text-yellow-400 text-4xl font-semibold text-center" />

          <p>Gold</p>
          <p className="text-2xl font-semibold">2.99$</p>

          <div>
            <p className="">🕒 Delivery Time: 7-10 Business Days</p>
            <p>📞 Support: Priority 24/7 Support</p>
            <p className="text-sm md:text-base">💼 Revisions: Up to 5 Times</p>
          </div>
        </div>
        <div className="text-white text-center border border-white flex flex-col justify-center items-center bg-black p-4 rounded outline-amber-100 shadow-2xl hover:shadow-blue-300 hover:shadow-2xl md:mt-0 mt-6">
          <GiCrystalGrowth className="text-green-400 text-4xl font-semibold text-center" />

          <p>Gold</p>
          <p className="text-2xl font-semibold">2.99$</p>

          <div>
            <p className="">🕒 Delivery Time: 7-10 Business Days</p>
            <p>📞 Support: Priority 24/7 Support</p>
            <p className="text-sm md:text-base">💼 Revisions: Up to 5 Times</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PriceSection;
