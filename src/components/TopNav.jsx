import React, { useState } from "react"
import { NavLink } from "react-router-dom"

import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"

import * as constants from "../constants"

import "./TopNav.css"

const TopNav = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <Navbar
        collapseOnSelect
        expanded={expanded}
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/images/logo.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top font-face-gm "
            />{" "}
            Hosna Qasmei
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={() => setExpanded(expanded ? false : "expanded")}
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav className="me-auto"></Nav>
            <Nav>
              <NavLink
                to={constants.ROUTE_HOME}
                end
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                Home
              </NavLink>
              <NavLink
                to={constants.ROUTE_PROJECTS}
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                Projects
              </NavLink>
              <NavLink
                to={constants.ROUTE_RESOURCES}
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                Resources
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default TopNav