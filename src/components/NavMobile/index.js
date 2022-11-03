import React, {useState} from "react";
import { css } from "@emotion/css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faHome, faSuitcase, faUser} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const easeSlow = css`
  transition: all 450ms ease-in-out;
`;

const menuBtn = css`
  display: none;
  position: fixed;
  z-index: 3;
  right: 35px;
  top: 35px;
  cursor: pointer;
  ${easeSlow};
  &.closer {
    transform: rotate(180deg);
  }
  @media screen and (max-width: 881px) {
    display: unset;
  }
`;

const btnLine = css`
  width: 28px;
  height: 4px;
  margin: 0 0 5px 0;
  background-color: #8C92AC;
  ${easeSlow};
  &.closer {
    background-color: #8C92AC;  
    &:nth-child(1) {
      transform: rotate(45deg) translate(4px, 0px);
      width: 20px;
    }
    &:nth-child(2) {
      transform: translateX(-8px);
    }
    &:nth-child(3) {
      transform: rotate(-45deg) translate(4px, 0px);
      width: 20px;
    }
  }
`;

const menuOverlay = css`
  display: none;
  z-index: 2;
  position: fixed;
  top: 0;
  right: 0;
  background-color: rgba(24,24,24, 0.8);
  height: 100vh;
  width: 40vw;
  transform: translateX(100%);
  transition: all 500ms ease-in-out;
  &.show {
    background-color: rgba(24,24,24, 0.8);
    transform: translateX(0%); 
  }
  nav {
    padding-top: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(24, 24, 24, 0.03);
    
    .navLink {
      height: 30px;
      text-decoration: none;
      color: rgba(140, 146, 172, 0.5);
      cursor: pointer;
      font-size: 35px;
      transition: all 150ms ease-in-out;
      &:hover {
        color: rgba(140, 146, 172, 1);
        font-size: 30px;
      } 
    }
  }
  @media screen and (max-width: 881px) {
    display: unset;
  }
  @media (max-width: 800px) {
    width: 100vw;
  }
`;

const NavMobile = () => {
  
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  
  return (
    <React.Fragment>
      <div
        className={`${menuBtn} ${isMenuOpen ? "closer" : null}`}
        onClick={toggleMenu}
      >
        <div className={`${btnLine} ${isMenuOpen ? "closer" : null}`} />
        <div className={`${btnLine} ${isMenuOpen ? "closer" : null}`} />
        <div className={`${btnLine} ${isMenuOpen ? "closer" : null}`} />
      </div>
      <div className={`${menuOverlay} ${isMenuOpen ? "show" : null}`}>
        <nav>
          <NavLink onClick={() => setIsMenuOpen(false)} exact="true" activeclassname="active" className="navLink" to="/">
              <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink onClick={() => setIsMenuOpen(false)} exact="true" activeclassname="active" className="about-link navLink" to="/about">
              <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink onClick={() => setIsMenuOpen(false)} exact="true" activeclassname="active" className="portfolio-link navLink" to="/portfolio">
              <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
          </NavLink>
          <NavLink onClick={() => setIsMenuOpen(false)} exact="true" activeclassname="active" className="contact-link navLink" to="/contact">
              <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>
      </div>
    </React.Fragment>
  );
}


export default NavMobile;