


import React from 'react'
import Image from 'next/image'
import hand from '../../../../public/image 7.png'

function ServicesPage() {

  return (
    <div>
        <section className=''>
            <div>
                {/* image */}
                <Image src={hand} height={400} alt='Hand'/>
              

            </div>
            <div>
                {/* text */}
                <p className='text-white font-semibold'>Services</p>
                <h2>
                    <p className='md:text-4xl text-2xl font-semibold text-white'>Promising Care:</p>
                    <p className='text-green-500 font-bold md:text-4xl text-2xl'>Right At Home</p>
                </h2>
                <span className='text-white opacity-80'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document. </span>
            </div>
        </section>
        


    </div>
  )
}

export default ServicesPage