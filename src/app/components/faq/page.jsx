import React from "react";
import faq from "../../../../public/faq.png";
import Image from "next/image";

function Faq() {
  return (
    <div className="mt-10 flex  w-full">

     
     <section className="md:flex justify-center items-center w-full border border-white">

     <section className="flex flex-1 justify-center mt-6">
        <div>
          <span className="text-white">Faq</span>

          <h2 className="text-white md:text-4xl text-2xl font-semibold ">
            How Are Robots <span className="text-green-400">Enhansing</span>{" "}
            Health Care
          </h2>

          <div className="collapse collapse-arrow  text-white">

            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold">
              How do I create an account?
            </div>
            <div className="collapse-content text-sm">
              Click the "Sign Up" button in the top right corner and follow the
              registration process.
            </div>
          </div>
          <div className="collapse collapse-arrow text-white  ">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              I forgot my password. What should I do?
            </div>
            <div className="collapse-content text-sm">
              Click on "Forgot Password" on the login page and follow the
              instructions sent to your email.
            </div>
          </div>
          <div className="collapse collapse-arrow text-white ">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              How do I update my profile information?
            </div>
            <div className="collapse-content text-sm">
              Go to "My Account" settings and select "Edit Profile" to make
              changes.
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-1 justify-center md:mt-0 mt-6">
        {/* img */}
        <Image src={faq} height={300} alt="img" />
      </section>

     </section>


    </div>
  );
}

export default Faq;
