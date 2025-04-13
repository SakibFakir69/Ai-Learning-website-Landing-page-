import React from "react";
import Image from "next/image";
import img from "../../../../public/robot.png";

function ProjectSection() {
  return (
    <div className="mt-5">
      <section className=" ">
        <div className="text-center text-white">
          <h3 className="text-center md:text-2xl text-xl ">Project</h3>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Our <span className="text-green-400">Project</span>
          </h2>
        </div>

        {/*  */}
        <section className="md:flex gap-6 md:mt-10 mt-6 p-10 justify-center items-center b">

        <div className="flex justify-center items-center">
          <Image src={img} height={150} alt="robot" />

         
          <div className="flex flex-col gap-2 ">
            <h2 className="text-white text-shadow-amber-300">Testimonial</h2>
            <p className="text-white">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly{" "}
            </p>
           <div>
           <button className="btn px-10 py-3 btn-primary">View</button>
           </div>
          </div>
        </div>

        <div className="flex justify-center items-center md:mt-0 mt-10">
          <Image src={img} height={150} alt="robot" />

          <div className="flex flex-col gap-2 ">
            <h2 className="text-white text-shadow-amber-300">Testimonial</h2>
            <p className="text-white">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly{" "}
            </p>
           <div>
           <button className="btn px-10 py-3 btn-primary">View</button>
           </div>
          </div>
        </div>
        </section>

      
      </section>
    </div>
  );
}

export default ProjectSection;
