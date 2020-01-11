import React, { useState } from "react"
import PropTypes from "prop-types"
import "./module.scss"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  const [isOpenSocial, setIsOpenSocial] = useState(false)
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const socialTrigger = () => {
    setIsOpenSocial(!isOpenSocial)
  }
  const menuTrigger = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  const closeMenu = () => {
    setIsOpenMenu(false)
  }

  return (
    <>
      <div class={`social ${isOpenSocial ? "open" : ""}`}>
        <ul>
          <li>Social 1</li>
          <li>Social 2</li>
          <li>Social 3</li>
          <li>Social 4</li>
        </ul>
      </div>
      <div className={`menu ${isOpenMenu ? "open" : ""}`}>
        <div class="menu-items">
          <span onClick={closeMenu}>Close Menu</span>
          <Link to="/">Home</Link>
          <Link to="/">Experience</Link>
          <Link to="/">Skils</Link>
          <Link to="/">About Me</Link>
        </div>
      </div>
      <div className={`global ${isOpenSocial ? "open" : ""}`}>
        <div className="header">
          <span className="burgerButton" onClick={menuTrigger}>
            button 1
          </span>
          <span className="socialButton" onClick={socialTrigger}>
            button 2
          </span>
        </div>
        <div>
          <div className="body">{children}</div>
          <footer>
            © {new Date().getFullYear()}, <p>Jonathan Moeller</p>
          </footer>
        </div>
      </div>
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
