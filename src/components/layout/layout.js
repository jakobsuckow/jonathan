import React, { useState } from "react"
import PropTypes from "prop-types"
import "./module.scss"

const Layout = ({ children }) => {
  const [isOpenSocial, setIsOpenSocial] = useState(false)

  const socialTrigger = () => {
    setIsOpenSocial(!isOpenSocial)
  }
  return (
    <>
    <div class={`social ${isOpenSocial ? 'open': ''}`}>
     <ul>
       <li>Social 1</li>
       <li>Social 2</li>
       <li>Social 3</li>
       <li>Social 4</li>
     </ul>
    </div>
    <div className={`global ${isOpenSocial ? 'open': ''}`}>
      <div className="menu">
        <span className="burgerButton">button 1</span>
        <span className="socialButton" onClick={socialTrigger}>button 2</span>
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
