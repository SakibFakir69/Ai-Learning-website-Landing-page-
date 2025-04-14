import React from "react";
import Image from "next/image";

import hand from '../../../../public/hand.png'


function ContactPage() {
  return (
    <div className="mt-10 flex justify-center items-center">

      <section className="md:flex ">

        <div className="flex justify-center items-center">
            <div className="h-32 w-40 border border-white absolute translate-x-32 bg-blue-600 blur-3xl">

            </div>
          <Image src={hand} height={200} alt="hand" className="z-50" />
        </div>
        <div className="text-white border-green-300/30 border bg-black p-4 rounded">
          <p>Contact</p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Be Well Stay Calm And{" "}
            <span className="text-green-500 ">Keep In Touch</span>
          </h2>
          <div className="mt-4">
            <div className="grid grid-cols-2 gap-4 ">
              <input
                type="text"
                placeholder="Enter your name"
                className="border p-2 rounded px-8 py-3"
              />
              <input
                type="text"
                placeholder="Enter your name"
                className="border p-2 rounded px-8 py-3"
              />
              <input
                type="text"
                placeholder="Enter your name"
                className="border p-2 rounded px-8 py-3"
              />
              <input
                type="text"
                placeholder="Enter your name"
                className="border p-2 rounded px-8 py-3"
              />
            </div>
            <div className="mt-4">
                <input type="text" className="w-full md:py-8 lg:py-10 p-4 border rounded" placeholder="Enter your text"/>

            </div>
            <button className="px-10 py-3 border mt-5 rounded-tl-4xl rounded-br-4xl">Submit</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
