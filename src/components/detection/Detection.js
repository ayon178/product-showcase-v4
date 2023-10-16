import React from 'react'
import Image from 'next/image'
// import image
import border from '../../assets/detection/border.png'
import imageOne from '../../assets/detection/image.png'
import textImage from '../../assets/detection/text_image_edited.png'
import detectionTextImage from '../../assets/detection/detection_text.png'
import CustomCountUp from '../counter/CustomCountUp'

const Detection = () => {
  return (
    <div className="my-36 detection_bg_one">
      <div className=" py-8 mb-16">
        <div className="container mx-auto">
          <Image
            src={detectionTextImage}
            alt="border"
            width={600}
            height={300}
            className="-mb-[80px] z-0"
          />
          <div className="w-[80%] mx-auto -mt-72 -mr-10">
            <Image
              src={imageOne}
              alt="image"
              width={'100%'}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
      <div className=" py-8">
        <div className="container mx-auto">
          <div className="w-full mx-auto flex justify-between items-start">
            <Image src={textImage} width={850} height={400} alt="image" />
            <div className="h-[500px] real_shadow w-[400px] bg-[#173176] flex items-center justify-center right_top_left_bottom_radius">
              <CustomCountUp count={40} countTitle={'reduction in cost'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detection
