import React from "react";
import foot from "../../../../public/footer.png";
import Image from "next/image";
function Footerpage() {
  return (
    <div className="w-full mt-10">

      <section className="md:flex">
        <div className="bg-black flex flex-1 text-white justify-center items-center flex-col gap-4">
          <p>News Letter</p>
          <h2 className="text-2xl md:text-4xl">
            Subscribe To Our{" "}
            <span className="text-green-500 font-semibold">Newsletter</span>
          </h2>

          <div className="flex justify-center items-center">
            <input
              type="text"
              placeholder="Enter your Email"
              className="px-8 py-2 border rounded"
            />
            <button className="btn py-2">Submit</button>
          </div>
        </div>

        <div className="flex flex-1 justify-center items-center bg-stone-900">
          <Image src={foot} height={250} alt="foot" />
        </div>
      </section>

      <footer className="footer sm:footer-horizontal footer-center  p-4 text-white bg-black h-[150px]">
        <aside className="text-white">
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footerpage;
