import React from 'react'
import Image from 'next/image'
import ctaImage from '../../assets/cta/cta_bg.png'

const Cta2 = () => {
  return (
    <div className="top_left_radius container mx-auto cta_bg flex items-end flex-col justify-center px-10 py-36 my-10">
      <h1 className="text-4xl font-bold text-primaryText text-right">
        You are free to contact us to <br />
        learn more about our product
      </h1>
      <p className="text-xl font-semibold mt-6 mb-3 text-slate-800">
        Call Us To Make a Booking
      </p>
      <p className="bg-white font-semibold px-3 py-2 left_top_right_bottom_radius">
        ✆ 01000000000
      </p>
    </div>
  )
}

export default Cta2
