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

const topPartData = [
  {
    title: 'Thermal Imaging ',
  },
  {
    title: 'Electrical Trouble Shooting',
  },
  {
    title: 'HVAC Application',
  },
  {
    title: 'Complete CBM',
  },
]

const leftPartData = [
  {
    title: 'Locating Micro Leaks',
  },
  {
    title: 'ULTRASONIC Technology',
  },
  {
    title: 'Immediate Detection',
  },
  {
    title: 'Precise Location of Air Leak',
  },
]

const iconData = [
  {
    title: 'Data Logging Facility ',
  },
  {
    title: 'Various Line Sizes',
  },
  {
    title: 'Leak Quantity ',
  },
  {
    title: 'Air Sensor',
  },
]

const Spec = () => {
  return (
    <div className="container mx-auto mt-16">
      <div className="flex flex-col items-start">
        {/* <Image
          src={border}
          alt="border"
          width={400}
          height={50}
          className="-mb-[80px] z-0 ml-[30%]"
        /> */}
        <div className="flex justify-center w-full">
          <h1 className="text-primaryText w-fit text-4xl font-bold z-10 border-b-8 border-[#FD9F32]">
            Product Specifications
          </h1>
        </div>

        {/* <Image src={headerImage} alt="headerImage" width={500} height={300} /> */}

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

        <div className="w-[90%] right_top_left_bottom_radius_big px-36 spec_top mx-auto py-28 mt-8">
          <div className="w-fit ml-auto ">
            <h1 className="text-3xl font-semibold mb-4 text-white">
              IR Scanning / Thermography
            </h1>
            {topPartData.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <Image src={bullet} alt="bullet" width={10} height={10} />
                <p className="text-white font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[90%] flex mt-3 ml-auto -mr-16">
          <div className="w-[40%] left_bottom_radius  mr-4 spec_left flex items-center  py-28 px-4">
            <div className="w-fit ml-auto ">
              <h1 className="text-3xl font-semibold mb-4 text-white">
                Air Flow Meter
              </h1>
              {iconData.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Image src={bullet} alt="bullet" width={10} height={10} />
                  <p className="text-white font-semibold">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[45%] spec_right right_bottom_radius">
            <div className="w-fit ml-auto py-28 px-4">
              <h1 className="text-3xl font-semibold mb-4 text-white">
                Air Leak Detector
              </h1>{' '}
              {leftPartData.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Image src={bullet} alt="bullet" width={10} height={10} />
                  <p className="text-white font-semibold">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Spec
