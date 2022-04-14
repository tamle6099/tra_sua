import React from 'react'
import { Nav, NavIcon, NavLink, Bars, NavContainer } from './Navbar'

const index = ({toggle}) => {
  return (
    <NavContainer>
        <Nav>
            <NavLink to="/">VINBAR</NavLink>
            <NavIcon onClick={toggle}>
              <p>Menu</p>
              <Bars />
            </NavIcon>
        </Nav>
    </NavContainer>
  )
}

export default index