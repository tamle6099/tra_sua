import React from 'react'
import {SlideBarContainer, 
    Icon, 
    CloseIcon,
    SlideBarMenu, 
    SlideBarLink, 
    SlideBarWarp, 
    SlideBarRuote, }
    from "./SlideBarElemen"
const SlideBar = ({isOpen, toggle}) => {
  return (
    <SlideBarContainer isOpen = {isOpen} onClick={toggle}>
        <Icon onClick={toggle} >
            <CloseIcon />
        </Icon>
        <SlideBarMenu>
            <SlideBarLink to = "/"> Trà Sữa</SlideBarLink>
            <SlideBarLink to = "/"> Trà Trái Cây</SlideBarLink>
            <SlideBarLink to = "/"> Full Menu</SlideBarLink>

        </SlideBarMenu>
        <SlideBarWarp>
            <SlideBarRuote to = "/">Oder Now</SlideBarRuote>
        </SlideBarWarp>
    </SlideBarContainer>
  )
}

export default SlideBar