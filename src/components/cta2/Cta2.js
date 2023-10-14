import React from 'react'
import Image from 'next/image'
import ctaImage from '../../assets/cta/cta_bg.png'
import {BiSolidPhoneCall} from 'react-icons/bi'

const Cta2 = () => {
  return (
    <div className="top_left_radius container-fluid mx-auto cta_bg flex items-end flex-col justify-center px-10 py-36 mt-10">
      <h1 className="text-4xl font-bold text-primaryText text-right">
        You are free to contact us to <br />
        learn more about our product
      </h1>
      <p className="text-xl font-semibold mt-6 mb-3 text-slate-800">
        Call Us To Make a Booking
      </p>
      <div className="flex items-center justify-center px-3 py-2 left_top_right_bottom_radius bg-white mt-4">
        <BiSolidPhoneCall className="text-2xl text-primaryText" />
        <p className="text-xl font-semibold text-primaryText ml-2">
          01000000000
        </p>
      </div>
    </div>
  )
}

export default Cta2
