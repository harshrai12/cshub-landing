import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"

const Header = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
    
      <Navbar color="Dark" light expand="md" fixed="top">
        <div className="container">
          <NavbarBrand href="/">CSCODERSHUB</NavbarBrand>
          <NavbarToggler color="light" onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                <Link to="/">Home</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                <Link to="/event">CTF</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                <Link to="/teams">Team page</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                <Link to="/about">About</Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
