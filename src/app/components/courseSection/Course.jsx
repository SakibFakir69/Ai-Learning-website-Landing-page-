



import React from 'react'
import Image from 'next/image'
import image1 from './../../../../public./Rectangle 9.png'

function Course() {
  return (
    <div>

        <section>

            <div>

                <Image src={image1} height={200} alt="image"/>

                <div>
                    {/* icon */}
                    <h3 className='text-white font-semibold'>Machine Learning</h3>
                    
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder. </p>
                </div>


            </div>

            <div></div>
            <div></div>
            <div></div>
        </section>




    </div>
  )
}

export default Course