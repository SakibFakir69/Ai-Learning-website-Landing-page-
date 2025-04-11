import React from "react";
import Image from "next/image";
import image1 from "./../../../../public/Rectangle 31.png";
function RobotSection() {
  return (
    <div>
      <section className=" border  bg-black md:h-[350px] h-[490px]">

        <div className="flex items-center mt-10 p-2 justify-center gap-4 md:flex-row flex-col">

          <div className="flex flex-1 justify-center boder border-white items-center h-full p-2">
            <Image src={image1} alt="robot" className="roundedmd:h-[280px] h-[250px]" />
          </div>

          <div className="flex flex-1 flex-col">{/* text */}

            <h4 className="text-white md:text-5xl text-2xl">Artificial Intelligence Is The New Big Thing In <span className="font-semibold text-green-500">Technology</span></h4>

           
           <div>
           <button className="btn px-10 py-2 md:text-xl text-white mt-4 rounded-tl-2xl rounded-br-2xl bg-violet-700 border-none hover:bg-black duration-150 delay-100 shadow-2xl hover:shadow-indigo-700" >Click</button>
           </div>


          </div>


        </div>
      </section>
    </div>
  );
}

export default RobotSection;
