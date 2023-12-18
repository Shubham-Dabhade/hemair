import React, { useState } from "react";
import "./navbar.css";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Navbar = ({ ac }) => {
  const [navHidden, setNavHidden] = useState(false);
  const [link, setLink] = useState(ac ? ac : 0);
  const { scrollY } = useScroll();
  const [menuToggle, setMenuToggle] = useState(false);

  //for removing the navbar
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setNavHidden(true);
    } else {
      setNavHidden(false);
    }
  });

  //for checking which nav button is active
  const clickLink = (e, num) => {
    setLink(num);
  };

  //handling alternative navbar toggle

  const handleMenuToggle = () => {
    setMenuToggle(!menuToggle);
  };

  // alternative navbar variants
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.3,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // alternative navbar links variants
  const menuLinks = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.3,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: "0",
      transition: {
        duration: 0.5,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };

  const ulContainer = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <>
      <motion.div
        className="Navbar"
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={navHidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <div className="navbar-left-component">
          <a href="/">
            <div className="navbar-logo-container">
              <img
                src={require("../../images/Navbar/hemair logo@2x-100.jpg")}
                alt=""
                className="navbar-logo-img"
              />
            </div>
          </a>
        </div>
        <div className="navbar-middle-component">
          <ul className="middle-component-links-container">
            <li
              className={`link-container ${link === 0 && "active"}`}
              onClick={(e) => {
                clickLink(e, 0);
              }}
            >
              {" "}
              <a href="/">HOME</a>{" "}
            </li>
            <li
              className={`link-container cleanrooms-drop ${
                link === 1 && "active"
              }`}
              onClick={(e) => {
                clickLink(e, 1);
              }}
            >
              <a href="/industries/pharmaceutical">CLEANROOMS</a>
              <ArrowDropDownIcon className="drop-down-arrow" />
              <div className="drop-down-container">
                <ul className="drop-down-content">
                  <li className="drop-down-link products-drop">
                    Products <KeyboardArrowRightIcon />
                    <div className="more-drop-down-container">
                      <ul className="more-drop-down-content">
                        <li className="more-drop-down-link">Product 1</li>
                        <li className="more-drop-down-link">Product 2</li>
                        <li className="more-drop-down-link">Product 3</li>
                        <li className="more-drop-down-link">Product 4</li>
                        <li className="more-drop-down-link">Product 5</li>
                      </ul>
                    </div>
                  </li>
                  <li className="drop-down-link industries-drop">
                    Industries <KeyboardArrowRightIcon />
                    <div className="more-drop-down-container-2">
                      <ul className="more-drop-down-content">
                        <a
                          href="/industries/pharmaceutical"
                          style={{ color: "black" }}
                        >
                          <li className="more-drop-down-link">
                            Pharmaceutical
                          </li>
                        </a>
                        <a
                          href="/industries/biotechnology"
                          style={{ color: "black" }}
                        >
                          <li className="more-drop-down-link">Medical</li>
                        </a>
                        <a
                          href="/industries/electronics"
                          style={{ color: "black" }}
                        >
                          <li className="more-drop-down-link">Electronics</li>
                        </a>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className={`link-container ${link === 2 && "active"}`}
              onClick={(e) => {
                clickLink(e, 2);
              }}
            >
              <a href="#">ABOUT US</a>
            </li>
            <li
              className={`link-container ${link === 3 && "active"}`}
              onClick={(e) => {
                clickLink(e, 3);
              }}
            >
              <a href="#">PROJECTS</a>
            </li>
            <li
              className={`link-container ${link === 4 && "active"}`}
              onClick={(e) => {
                clickLink(e, 4);
              }}
            >
              <a href="#">CONTACT US</a>
            </li>
          </ul>
        </div>
        <div className="navbar-right-component">
          <div className="navbar-right-logo-container">
            <a href="#" target="_blank">
              <img
                src={require("../../images/Navbar/icons8-linkedin-30.png")}
                alt=""
                className="navbar-social-img"
              />
            </a>
            <a href="#" target="_blank">
              <img
                src={require("../../images/Navbar/icons8-twitter-50.png")}
                alt=""
                className="navbar-social-img"
              />
            </a>
            <a href="#" target="_blank">
              <img
                src={require("../../images/Navbar/icons8-facebook-48.png")}
                alt=""
                className="navbar-social-img"
              />
            </a>
          </div>
        </div>
        <div className="alternate-navbar-right-component">
          <div className="menu-content" onClick={handleMenuToggle}>
            Menu
          </div>
        </div>
      </motion.div>
      <AnimatePresence>
        {menuToggle && (
          <motion.div
            className="Navbar-alternative"
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit={"exit"}
          >
            <div className="navbar-alternative-top-container">
              <a href="/">
                <div className="navbar-alternative-logo-container">
                  <img
                    src={require("../../images/Navbar/hemair logo@2x-100.jpg")}
                    alt=""
                    className="navbar-alternative-logo-img"
                  />
                </div>
              </a>
              <div
                className="navbar-alternative-close-button"
                onClick={handleMenuToggle}
              >
                Close
              </div>
            </div>
            <motion.div className="navbar-alternative-middle-container">
              <motion.ul
                variants={ulContainer}
                initial="initial"
                animate="open"
                exit="initial"
                className="navbar-alternative-page-links"
              >
                <div className="link-overflow-container">
                  <motion.li
                    className="navbar-alternative-page-link-container"
                    variants={menuLinks}
                  >
                    <a href="/">HOME</a>
                  </motion.li>
                </div>
                <div className="link-overflow-container">
                  <motion.li
                    className="navbar-alternative-page-link-container"
                    variants={menuLinks}
                  >
                    <a href="/industries/pharmaceutical">CLEANROOMS</a>
                  </motion.li>
                </div>
                <div className="link-overflow-container">
                  <motion.li
                    className="navbar-alternative-page-link-container"
                    variants={menuLinks}
                  >
                    <a href="#">ABOUT US</a>
                  </motion.li>
                </div>
                <div className="link-overflow-container">
                  <motion.li
                    className="navbar-alternative-page-link-container"
                    variants={menuLinks}
                  >
                    <a href="#">PROJECTS</a>
                  </motion.li>
                </div>
                <div className="link-overflow-container">
                  <motion.li
                    className="navbar-alternative-page-link-container"
                    variants={menuLinks}
                  >
                    <a href="#">CONTACT US</a>
                  </motion.li>
                </div>
              </motion.ul>
            </motion.div>
            <div className="navbar-alternative-bottom-container">
              <a
                href="#"
                className="navbar-bottom-container-socials"
                target="_blank"
              >
                <img
                  src={require("../../images/Navbar/icons8-linkedin-30.png")}
                  alt=""
                  className="navbar-bottom-container-socials-img"
                />
              </a>
              <a
                href="#"
                className="navbar-bottom-container-socials"
                target="_blank"
              >
                <img
                  src={require("../../images/Navbar/icons8-twitter-50.png")}
                  alt=""
                  className="navbar-bottom-container-socials-img"
                />
              </a>
              <a
                href="#"
                className="navbar-bottom-container-socials"
                target="_blank"
              >
                <img
                  src={require("../../images/Navbar/icons8-facebook-48.png")}
                  alt=""
                  className="navbar-bottom-container-socials-img"
                />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
