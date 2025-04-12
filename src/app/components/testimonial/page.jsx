


import React from 'react'

import Image from 'next/image'

import img from '../../../../public/Ellipse 22.png'
import img2 from  '../../../../public/Ellipse 10.png'

function TestimonialPage() {
  return (
    <div className='mt-10'>

        <section className='w-full'>
            <div className='text-center flex  flex-col space-y-5'>
                <p className='text-xl font-semibold text-white'>Tesimonial</p>
                <h2 className='text-2xl md:text-6xl text text-white font-semibold'>Succour The <span className='text-green-500'>Customer Better</span></h2>
                <p className='text-stone-300'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly . </p>
            </div>

        </section>


        <section className='md:flex  gap-10 mt-6 p-10'>

            <div className='bg-black  p-5 rounded-tl-4xl rounded-br-4xl
            shadow-2xl hover:shadow-violet-600 hover:backdrop-blur-4xl hover:backdrop-blur-lg hover:drop-shadow-amber-200 shadow-blue-400 '>
                <div className='text-white'>
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document. 
                </div>
                <div className='flex justify-between mt-4'>
                    <Image src={img} height={60} alt='elips'/>
                    
                    <h2 className='text-green-500 text-6xl font-semibold'>;;</h2>


                </div>

            </div>

            <div className='bg-black shadow-blue-400 p-5 rounded-tl-4xl rounded-br-4xl md:mt-0 mt-10  shadow-2xl hover:shadow-violet-600 hover:backdrop-blur-4xl hover:backdrop-blur-lg hover:drop-shadow-amber-200  '>
                <div className='text-white'>
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document. 
                </div>
                <div className='flex justify-between mt-4'>
                    <Image src={img2} height={60} alt='elips'/>
                    
                    <h2 className='text-green-500 text-6xl font-semibold'>;;</h2>


                </div>

            </div>


        </section>



    </div>
  )
}

export default TestimonialPage