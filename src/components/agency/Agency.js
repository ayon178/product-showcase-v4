import React from 'react'
import Image from 'next/image'

// import images
import iconOne from '../../assets/agency/icon_1.png'
import iconTwo from '../../assets/agency/icon_2.png'
import iconThree from '../../assets/agency/icon_3.png'
import iconFour from '../../assets/agency/icon_4.png'
import iconFive from '../../assets/agency/icon_5.png'

import AgencyImageOne from '../../assets/agency/img_1.png'
import AgencyImageTwo from '../../assets/agency/img_2.png'
import AgencyImageThree from '../../assets/agency/img_3.png'
import AgencyImageFour from '../../assets/agency/img_4.png'
import AgencyImageFive from '../../assets/agency/img_5.png'
import AgencyImageSix from '../../assets/agency/img_6.png'

const iconData = [
  {
    icon: iconOne,
  },
  {
    icon: iconTwo,
  },
  {
    icon: iconThree,
  },
  {
    icon: iconFour,
  },
  {
    icon: iconFive,
  },
]

const imageData = [
  {
    image: AgencyImageOne,
  },
  {
    image: AgencyImageTwo,
  },
  {
    image: AgencyImageThree,
  },
  {
    image: AgencyImageFour,
  },
  {
    image: AgencyImageFive,
  },
  {
    image: AgencyImageSix,
  },
]

const Agency = () => {
  return (
    <div className="container-fluid mx-auto agency_bg p-10 py-28 flex justify-between my-8">
      <div>
        <h1 className="text-white text-2xl font-semibold">
          Mill maintenance products are from
        </h1>
        <h1 className="text-6xl font-bold text-white mt-5 mb-2">Rn agencies</h1>
        <h1 className="text-white text-2xl font-medium">
          Trasted factory equipment partner <br />
          for your production
        </h1>

        <div className="flex items-center gap-4 mt-10">
          {/* First 3 items map */}
          {iconData.slice(0, 2).map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <Image src={item.icon} alt="icon" />
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-4">
          {/* Last 3 items map */}
          {iconData.slice(2, 5).map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <Image src={item.icon} alt="icon" />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-white mb-8">
          Suitable for
          <br /> industrial sectors of
        </h1>

        <div className="grid grid-cols-3 gap-4">
          {imageData.map((image, i) => (
            <div
              key={i}
              className="bg-white rounded-lg px-7 py-2 text-primaryText w-40 flex items-center justify-center flex-col gap-1"
            >
              <Image src={image.image} alt="image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Agency
