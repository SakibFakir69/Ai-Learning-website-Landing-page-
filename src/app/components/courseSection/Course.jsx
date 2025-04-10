



import React from 'react'
import Image from 'next/image'
import image1 from './../../../../public./Rectangle 9.png'
import image2 from './../../../../public./Rectangle 10.png'
import image3 from './../../../../public./Rectangle 13.png'
import image4 from './../../../../public./Rectangle 12.png'

function Course() {
  return (
    <div>

        <section>

            <div>

                <Image src={image1} height={200} alt="image"
                className='rounded'/>

                <div>
                    {/* icon */}
                    <h3 className='text-white font-semibold'>Machine Learning</h3>

                    <p className='text-gray-300'>In publishing and graphic design, Lorem ipsum is a placeholder. </p>
                </div>


            </div>

            <div>
                <Image src={image2} height={200} alt='image2' className='rounded'/>

                <div>
                    <h3 className='text-white font-semibold'>Machine Learning</h3>
                    <p className='text-gray-300'>In publishing and graphic design, Lorem ipsum is a placeholder. </p>
                </div>


            </div>


            <div>
                <Image src={image3} height={200} alt='image3'/>

                <div>
                    <h3 className='text-white font-semibold'>Machine Learning</h3>
                    <p className='text-gray-300'>In publishing and graphic design, Lorem ipsum is a placeholder. </p>

                </div>


            </div>


            <div>
                <Image src={image4} height={200} alt='image4'/>
                <div>
                    <h3 className='text-white'>Machine Learning</h3>
                    <p className='text-gray-300'>In publishing and graphic design, Lorem ipsum is a placeholder. </p>
                </div>
            </div>
        </section>




    </div>
  )
}

export default Course