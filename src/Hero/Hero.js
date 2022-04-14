import React from 'react'
import Navbar from "../components/Navbar"
import SlideBar from '../components/SlideBar/SlideBar'
import { HeroContainer,
   HeroContent,
    HeroItems,
    Heroh1,
    HeroP,
    HeroBtn } 
    from './HeroElement'
import { useState } from "react"

const Hero = () => {
  const [isOpen, setisOpen] = useState(false)
  const toggle = () => {
    setisOpen(!isOpen)
  }
  return (
    <HeroContainer>
        <Navbar toggle={toggle} />
        <SlideBar isOpen={isOpen} toggle ={toggle}/>
        <HeroContent>
          <HeroItems>
            <Heroh1>Combo Trà Sữa </Heroh1>
            <HeroP>Giá 70.000 Đ</HeroP>
            <HeroBtn>Mua Hàng</HeroBtn>
          </HeroItems>
        </HeroContent>
    </HeroContainer>
  )
}

export default Hero