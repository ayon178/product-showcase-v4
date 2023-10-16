import React from 'react'
import Image from 'next/image'
// import image
import border from '../../assets/detection/border.png'
import productOne from '../../assets/specTwo/product_one.png'
import productTwo from '../../assets/slider/slider_2.png'
import productThree from '../../assets/specTwo/product_three.png'
import bullet from '../../assets/specTwo/bullet.png'

import headerImage from '../../assets/specTwo/spec_text.png'
import imageOne from '../../assets/specTwo/spec_top.png'
import leftImage from '../../assets/specTwo/spec_left.png'
import rightImage from '../../assets/specTwo/spec_right.png'

const Spec = () => {
  return (
    <div className="container mx-auto mt-16">
      <div className="flex flex-col items-start">
        {/* <Image
          src={border}
          alt="border"
          width={650}
          height={300}
          className="-mb-[80px] z-0"
        />
        <h1 className="text-primaryText text-7xl font-bold z-10">
          Specification
        </h1> */}

        <Image src={headerImage} alt="headerImage" width={500} height={300} />

        {/* Images */}
        {/* <div className="flex spec_bg right_top_left_bottom_radius mt-10">
          <Image
            src={productOne.src}
            alt="productOne"
            width={500}
            height={300}
          />

          <div className="py-24">
            <h1 className="text-4xl text-white font-bold">
              IR Scanning / Thermography
            </h1>
            <p className="text-white mt-2 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, autem?
            </p>

            <div className="flex items-center gap-3">
              <Image src={bullet} alt="bullet" width={15} height={15} />
              <p className="text-white font-semibold">Tharmal Imaging</p>
            </div>
            <div className="flex items-center gap-3">
              <Image src={bullet} alt="bullet" width={15} height={15} />
              <p className="text-white font-semibold my-4">Manually Usable</p>
            </div>
            <div className="flex items-center gap-3">
              <Image src={bullet} alt="bullet" width={15} height={15} />
              <p className="text-white font-semibold">Status Check</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex spec_bg mt-10 left_bottom_radius">
            <Image
              src={productTwo.src}
              alt="productOne"
              width={300}
              height={300}
            />

            <div className="py-24">
              <h1 className="text-4xl text-white font-bold">Air Flow Meter</h1>
              <p className="text-white mt-2 mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, autem?
              </p>

              <div className="flex items-center gap-3">
                <Image src={bullet} alt="bullet" width={15} height={15} />
                <p className="text-white font-semibold">Tharmal Imaging</p>
              </div>
              <div className="flex items-center gap-3">
                <Image src={bullet} alt="bullet" width={15} height={15} />
                <p className="text-white font-semibold my-4">Manually Usable</p>
              </div>
              <div className="flex items-center gap-3">
                <Image src={bullet} alt="bullet" width={15} height={15} />
                <p className="text-white font-semibold">Status Check</p>
              </div>
            </div>
          </div>
          <div className="flex spec_bg mt-10 right_bottom_radius">
            <Image
              src={productThree.src}
              alt="productOne"
              width={300}
              height={250}
            />

            <div className="py-24">
              <h1 className="text-4xl text-white font-bold">
                Air Leak Prevention
              </h1>
              <p className="text-white mt-2 mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, autem?
              </p>

              <div className="flex items-center gap-3">
                <Image src={bullet} alt="bullet" width={15} height={15} />
                <p className="text-white font-semibold">Tharmal Imaging</p>
              </div>
              <div className="flex items-center gap-3">
                <Image src={bullet} alt="bullet" width={15} height={15} />
                <p className="text-white font-semibold my-4">Manually Usable</p>
              </div>
              <div className="flex items-center gap-3">
                <Image src={bullet} alt="bullet" width={15} height={15} />
                <p className="text-white font-semibold">Status Check</p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="w-full px-36">
          <Image src={imageOne} alt="imageOne" className="mt-10" />
        </div>
        <div className="w-[90%] flex mt-3 ml-auto -mr-16">
          <div className="w-[40%]">
            <Image src={rightImage} width={500} alt="rightImage" className="" />
          </div>
          <div className="w-[45%] pl-4">
            <Image src={leftImage} width={500} alt="leftImage" className="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Spec
