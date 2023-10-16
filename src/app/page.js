'use client'

import Agency from '@/components/agency/Agency'
import Cta2 from '@/components/cta2/Cta2'
import Detection from '@/components/detection/Detection'
import Navbar from '@/components/shared/Navbar'
import FocusedSlider from '@/components/slider/FocusedSlider'
import Spec from '@/components/spec/Spec'
import WhyChooseUs from '@/components/why/WhyChooseUs'
import gsap from 'gsap'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingStartTime, setLoadingStartTime] = useState(0)

  const token =
    typeof window !== 'undefined'
      ? window.localStorage.getItem('product_v4_token')
      : null

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!token) {
        window.location.href = '/login'
        return null
      }

      const navbar = document.querySelector('#navbar')
      const text = document.querySelectorAll('.text_color')
      const timeline = gsap.timeline({ paused: true })

      timeline.to(navbar, {
        // backgroundColor: 'red',
        backdropFilter: 'blur(10px)',
        duration: 0.1,
        ease: 'power3.inOut',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        marginTop: 0,
        paddingBottom: '1rem',
        paddingTop: '1rem',
      })

      timeline.to(text, {
        color: '#fff',
        ease: 'power3.inOut',
      })

      setLoadingStartTime(performance.now())
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)

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
    }
  }, [])

  useEffect(() => {
    if (!isLoading) {
      const loadingEndTime = performance.now()
      const loadingTime = loadingEndTime - loadingStartTime
      console.log(`Loading time: ${loadingTime} ms`)
    }
  }, [isLoading, loadingStartTime])

  if (!token) {
    if (typeof window !== 'undefined') {
      window.location.href = '/login'
    }
  }

  return (
    <>
      <Navbar />
      {/* <RandomPositionSlider /> */}
      <FocusedSlider />
      <main className="px-4 md:px-0">
        <WhyChooseUs />
        <Detection />
        <Agency />
        <Spec />
        <Cta2 />
      </main>
    </>
  )
}
