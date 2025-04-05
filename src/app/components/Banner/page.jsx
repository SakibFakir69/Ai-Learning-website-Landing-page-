


import React from 'react'

import Image from 'next/image'
import img from './../../../../public/Rectangle 30.png'
import robot from './../../../../public/image 5.png'

function BannerPage() {
  return (
    <div>
        <section className='md:flex'>
            <div className='flex-1 border flex justify-center items-center flex-col '>
                {/* text */}

              <div className='text-left px-10'>
              <h2 className='font-bold text-white md:text-4xl text-2xl'>Let’s Horizon</h2>
                <h2><span className='text-green-400 font-bold md:text-4xl text-2xl'>Robotics</span> <span className='md:text-4xl text-white text-2xl font-bold'>Handle It,</span></h2>


                <p className='text-white opacity-80'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.</p>
                <button className='btn btn-primary'>Learn More</button>
              </div>


            </div>
            <div className='flex-1 border relative flex justify-center items-center'>
                {/* image */}
                <div className=''>
                    <Image src={img} height={400} width={700}/>
                   
                </div>
                <div className='absolute  border border-white'>
                    <Image src={robot} height={300} className='md:h-[500px] w-[100%]'/>

                </div>


            </div>
        </section>



    </div>
  )
}

export default BannerPage