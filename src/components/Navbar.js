import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../components/image/logo.webp";
import styles from "../components/moduleCss/Navbar.module.css";

export default function Navbar() {
  return (
    <div className="">
      <nav className="navbar bg-transparent ">
        <div className="container">
          <NavLink to="/home">
            <img src={logo} alt="" className={styles.logoweb} />
          </NavLink>
          {/* <a className="navbar-brand" href="#">
            Navbar
          </a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="">
              <i className="ri-menu-3-line text-gray-600"></i>
            </span>
          </button>
          <div
            className="collapse  navbar-collapse"
            id="navbarTogglerDemo02"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center font-serif ">
              <li className="p-2 ">
                <NavLink
                  className=" active no-underline text-gray-200 hover:text-pink-600 "
                  aria-current="page"
                  to="/home"
                >
                  <span className={styles.Nav}>Home</span>
                </NavLink>
              </li>
              <li className="p-2 ">
                <a href="#about" className="no-underline">
                  <span
                    className={`${styles.Nav} hover:text-pink-600 no-underline text-gray-100`}
                  >
                    About
                  </span>
                </a>
              </li>
              <li className="p-2">
                <a href="#services" className="no-underline">
                  <span
                    className={`${styles.Nav} hover:text-pink-600 no-underline text-gray-100`}
                  >
                    Services
                  </span>
                </a>
              </li>
              <li className="p-2">
                <a href="#portfolio" className="no-underline">
                  <span
                    className={`${styles.Nav} hover:text-pink-600 no-underline text-gray-100`}
                  >
                    Portfolio
                  </span>
                </a>
              </li>
              <li className="p-2">
                <a href="#contact" className="no-underline">
                  <span
                    className={`${styles.Nav} hover:text-pink-600 no-underline text-gray-100`}
                  >
                    Contact
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
