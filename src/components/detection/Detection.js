import React from 'react'
import Image from 'next/image'
// import image
import border from '../../assets/detection/border.png'
import imageOne from '../../assets/detection/image.png'
import textImage from '../../assets/detection/text_image.png'

const Detection = () => {
  return (
    <div className="container mx-auto my-36">
      <Image
        src={border}
        alt="border"
        width={750}
        height={300}
        className="-mb-[80px] z-0"
      />
      <h1 className="text-primaryText text-7xl font-bold z-10">
        Detection of Heart
      </h1>

      <div className="w-full mx-auto -mt-24 -mr-10">
        <Image src={imageOne} alt="image" width={'100%'} className="mx-auto" />
      </div>
      <div className="w-full mx-auto -mr-10">
        <Image src={textImage} alt="image" width={'100%'} className="mx-auto" />
      </div>
    </div>
  )
}

export default Detection
