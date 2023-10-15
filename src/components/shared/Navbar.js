'use client'

import React, { useEffect, useRef } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import MobileMenu from './MobileMenu'
import gsap from 'gsap'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../assets/logo.png'

const Navbar = () => {
  const refMobile = useRef(null)

  useEffect(() => {
    gsap.from(refMobile.current, {
      xPercent: -150,
    })
  }, [])

  const openMenu = () => {
    gsap.to(refMobile.current, {
      xPercent: 0,
      duration: 1.2,
      ease: 'power2.out',
    })
  }

  const closeMenu = () => {
    gsap.to(refMobile.current, {
      xPercent: -100,
      duration: 1.2,
      ease: 'power2.out',
    })
  }

  const handleMenuItemHover = event => {
    // Create a unique hover animation using GSAP
    gsap.to(event.target, {
      opacity: 0.8, // Reduce opacity on hover
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  const handleMenuItemLeave = event => {
    // Restore the menu item on mouse leave
    gsap.to(event.target, {
      opacity: 1, // Restore original opacity
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  return (
    <div
      id="navbar"
      className="bg-transparent mt-4 z-50 px-2 sticky top-0 mb-[-4rem] w-screen"
    >
      <div className="z-50 container  px-4 md:px-10 py-0 mx-auto flex flex-row justify-between">
        <Link
          href="/#"
          className="text_color font-semibold text-2xl text-primaryText flex items-center"
        >
          <Image
          src={logo}
          alt="Royal Melbourne Hospital"
          width={50}
          height={50}
        />

          {/* <h1>LOGO</h1> */}
        </Link>
        <ul className="text_color flex-row items-center gap-9 text-sm font-semibold text-white hidden md:flex">
          <li>
            <Link
              href="/#"
              onMouseEnter={handleMenuItemHover}
              onMouseLeave={handleMenuItemLeave}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/#"
              onMouseEnter={handleMenuItemHover}
              onMouseLeave={handleMenuItemLeave}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/#"
              onMouseEnter={handleMenuItemHover}
              onMouseLeave={handleMenuItemLeave}
            >
              Categories
            </Link>
          </li>
          <li>
            <Link
              href="/#"
              onMouseEnter={handleMenuItemHover}
              onMouseLeave={handleMenuItemLeave}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/#"
              onMouseEnter={handleMenuItemHover}
              onMouseLeave={handleMenuItemLeave}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/#"
              onMouseEnter={handleMenuItemHover}
              onMouseLeave={handleMenuItemLeave}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="/#"
              onMouseEnter={handleMenuItemHover}
              onMouseLeave={handleMenuItemLeave}
            >
              Contact
            </Link>
          </li>
        </ul>
        <BiMenuAltRight
          className="text-primaryText text-4xl md:hidden"
          onClick={openMenu}
        />

        <MobileMenu ref={refMobile} closeMenu={closeMenu} />
      </div>
    </div>
  )
}

export default Navbar
