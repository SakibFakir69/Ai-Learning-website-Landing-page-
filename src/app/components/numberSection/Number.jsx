


import React from 'react'
import Image from 'next/image';
import image1 from "./../../../../public/Rectangle 15.png";

function Number() {
  return (
    <div className='w-full'>

      <section className='flex justify-center mt-6 w-full border border-white'>
        <Image src={image1} height={300} className='w-full'/>
      </section>




    </div>
  )
}

export default Number