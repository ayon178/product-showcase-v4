import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { AnimatePresence } from 'framer-motion'
import mainImage from '../../assets/slider/slide_1.jpg'
import secondImage from '../../assets/slider/slide_2.jpg'
import thirdImage from '../../assets/slider/slide_3.jpg'

const images = [
  {
    image: mainImage,
    alt: 'Image 1',
    title: 'REVOLUTIONARY CONCEPT in EQUIPMENT MAINTENANCE',
    text: 'Infrared Scanning / Thermography to assess the condition of your Electrical Machineries',
  },
  {
    image: secondImage,
    alt: 'Image 2',
    title: 'Air we breathe is free, Compressed Air is NOT',
    text: 'Accurately detect & locate the leaks in your production system',
  },
  {
    image: thirdImage,
    alt: 'Image 3',
    title: 'Achieve Zero Air Leak',
    text: 'Precisely quantify the Air Leaks,take proper measure to prevent wastage & damage',
  },
]

const FocusedSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % images.length)
    }, 7000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    const zoomAndTranslateAnimation = gsap.fromTo(
      '.slide-img',
      { scale: 1, x: 0 },
      {
        scale: 1.2,
        x:
          currentSlide === 0
            ? 130
            : currentSlide === 1
            ? -130
            : currentSlide === 2
            ? -130
            : 0,
        y: currentSlide === 1 ? -80 : currentSlide === 2 ? -80 : 0,
        duration: 8,
        ease: 'power2.inOut',
      }
    )

    return () => {
      zoomAndTranslateAnimation.kill()
    }
  }, [currentSlide])

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          className="absolute top-0 left-0 max-w-screen h-auto w-screen overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <img
            src={images[currentSlide].image.src}
            alt={images[currentSlide].alt}
            className="object-cover w-full h-full slide-img"
          />
          <div
            className={`absolute top-[40%] ${
              currentSlide === 0 ? 'right-1 -mr-[8%]' : 'left-28 '
            } transform -translate-y-1/2 text-white`}
          >
            <h1 className="text-4xl text-white font-semibold w-1/2">
              {currentSlide === 2 ? (
                <span
                  style={{ lineHeight: 1.2 }}
                  className="text-4xl text-white no_wrap"
                >
                  <span className="text-gray-400 ">Achieve</span>
                  <br /> Zero Air Leak
                </span>
              ) : currentSlide === 1 ? (
                <span
                  style={{ lineHeight: 1.2 }}
                  className="text-4xl text-white no_wrap"
                >
                  <span className="text-gray-400 ">Air we breathe is free</span>
                  <br /> Compressed Air is NOT
                </span>
              ) : (
                <span
                  style={{ lineHeight: 1.2 }}
                  className="text-4xl text-white no_wrap"
                >
                  <span className="text-gray-400 ">REVOLUTIONARY CONCEPT</span>
                  <br /> in EQUIPMENT MAINTENANCE
                </span>
              )}
            </h1>
            <p
              className={`text-lg  text-white font-semibold mt-3 ${
                currentSlide === 0 ? 'w-1/2' : 'w-2/3'
              }`}
            >
              {images[currentSlide].text}
            </p>
            <div className="flex justify-start">
              <button className="bg-[#A5A4A8] px-4 py-2 pointer font-bold rounded-md text-primaryText mt-8">
                Call to Order
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default FocusedSlider
