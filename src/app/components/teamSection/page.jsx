import React from "react";
import Image from "next/image";
import img from "../../../../public/image 1.png";
import img2 from "../../../../public/130-1303823_black-woman-black-woman-hd-png-transparent-png 1.png";
import img3 from "../../../../public/download 1.png";

import { LuInstagram } from "react-icons/lu";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
function TeamSection() {
  return (
    <div>
      <section>
        <div className="text-center mt-4">
          <p className="text-white text-xl font-semibold">Team</p>
          <h2 className="md:text-4xl text-2xl text-white font-semibold">
      
            Our Certified <span className="text-green-500  mr-2">
              Scientists
            </span>
               With
     
          </h2>
         <h2 className="text-white md:text-4xl font-semibold text-2xl">  Smart Solutions</h2>
        </div>

        <div className="grid md:grid-cols-3  gap-10 place-items-center mt-8">

          <div className="">
            {/*  icon*/}

            <div>
              <Image
                src={img2}
                height={300}
                className="relative z-50"
                alt="man"
              />

              <div className="h-20 w-40 border border-white absolute -translate-y-60 rounded-full ml-10 bg-violet-600 blur-xl  "></div>
            </div>

            <div className="text-center mt-10 flex justify-center flex-col">
              <p className="text-white text-xl font-semibold md:text-2xl">
                Deep Learning
              </p>
              <p className="text-slate-200">In publishing </p>
              {/* icon */}
              
              <div className="flex gap-6 mt-2 justify-center">
              <LuInstagram className="text-xl text-red-500"/> <FaFacebookSquare className="text-xl text-green-500"/> <FaWhatsapp className="text-xl text-violet-600"/>
                
              </div>
            </div>
          </div>

          <div className="">
            {/*  icon*/}

            <div>
              <Image
                src={img}
                height={300}
                className="relative z-50"
                alt="man"
              />

              <div className="h-20 w-40 border border-white absolute -translate-y-60 rounded-full ml-10 bg-violet-600 blur-xl  "></div>
            </div>

            <div className="text-center mt-10 flex justify-center flex-col">
              <p className="text-white text-xl font-semibold md:text-2xl">
                Data Learning
              </p>
              <p className="text-slate-200">In publishing </p>
              {/* icon */}
              <div className="flex gap-6 mt-2 justify-center">
              <LuInstagram className="text-xl text-red-500"/> <FaFacebookSquare className="text-xl text-green-500"/> <FaWhatsapp className="text-xl text-violet-600"/>
                
              </div>
            </div>
          </div>

          <div className="text-center ">
            {/*  icon*/}

            <div>
              <Image
                src={img3}
                height={300}
                className="relative z-50"
                alt="man"
              />

              <div className="h-20 w-40 border border-white absolute -translate-y-60 rounded-full ml-10 bg-violet-600 blur-xl  ">

              </div>
            </div>

            <div className="text-center mt-10 flex justify-center flex-col">

              <p className="text-white text-xl font-semibold ">
                Machin Learning
              </p>
              <p className="text-slate-200">In publishing </p>
              {/* icon */}
              <div className="flex gap-6 mt-2 justify-center">
              <LuInstagram className="text-xl text-red-500"/> <FaFacebookSquare className="text-xl text-green-500"/> <FaWhatsapp className="text-xl text-violet-600"/>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TeamSection;
