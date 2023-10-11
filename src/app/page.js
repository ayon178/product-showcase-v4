'use client'

import Benefit from '@/components/benifit/Benefit'
import Brand from '@/components/branding/Brand'
import Cta from '@/components/cta/Cta'
import Cta2 from '@/components/cta2/Cta2'
import Detection from '@/components/detection/Detection'
import Market from '@/components/market/Market'
import MarketV2 from '@/components/market/MarketV2'
import Navbar from '@/components/shared/Navbar'
import FocusedSlider from '@/components/slider/FocusedSlider'
import RandomPositionSlider from '@/components/slider/RandomPositionSlider'
import SwiperAutoSlider from '@/components/slider/Slider'
import Spec from '@/components/spec/Spec'
import Specification from '@/components/specification/Specification'
import WhyChooseUs from '@/components/why/WhyChooseUs'
import gsap from 'gsap'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const navbar = document.querySelector('#navbar')
    const text = document.querySelectorAll('.text_color')
    const timeline = gsap.timeline({ paused: true })

    timeline.to(navbar, {
      // backgroundColor: 'red',
      backdropFilter: 'blur(10px)',
      duration: 0.1,
      ease: 'power3.inOut',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    })

    timeline.to(text, {
      color: '#fff',
      ease: 'power3.inOut',
    })

    const scrollListener = () => {
      if (window.scrollY === 0) {
        timeline.reverse()
      } else {
        timeline.play()
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <>
      <Navbar />
      <RandomPositionSlider />
      <main className="px-4 md:px-0">
        <WhyChooseUs />
        <Detection />
        <Spec />
        <Cta2 />
      </main>
    </>
  )
}
