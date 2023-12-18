import React from "react";
import "./productAlt.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Swiper, Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

const Product = () => {
  const Effect = {
    rotate: 0,
    stretch: 0,
    depth: 1000,
    modifier: 1,
    slideShadows: true,
  };

  // variants
  const productsTranding = {
    show: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  //----Animation----//
  const blobZoom = {
    hidden: {
      opacity: 0,
      scale: 0.3,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "easeInOut",
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  const textLeft = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      x: 100,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  const textRight = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  return (
    <section className="tranding">
      <div className="inside-tranding">
        <div className="tranding-container">
          <h3 className="tranding-heading">Products</h3>
        </div>
        <div className="tranding-container">
          <Swiper
            modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
            effect="coverflow"
            slidesPerView={"auto"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            coverflowEffect={Effect}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              disableOnInteraction: false,
              
            }}
            style={{
              "--swiper-pagination-color": "#ec652c",
            }}
            className="swiper tranding-slider"
          >
            <motion.div className="swiper-wrapper" variants={productsTranding}>
              {/* slide start */}
              <AnimatePresence>
                <SwiperSlide className={`swiper-slide tranding-slide`}>
                  {({ isActive }) => (
                    <>
                      <div
                        className={`tranding-slide-img ${
                          isActive ? "active-slide" : "dim-slide"
                        }`}
                      >
                        <img
                          src={require("../../../images/Home/Product/no-background/air_handling_unit.png")}
                          alt="air handling unit"
                          className="tranding-product-img"
                        />
                      </div>
                      <motion.img
                        src={require("../../../images/Home/Product/no-background/blob-haikei.png")}
                        alt=""
                        variants={blobZoom}
                        initial={isActive ? "" : "hidden"}
                        animate={isActive ? "show" : ""}
                        exit={isActive ? "" : "exit"}
                        className="product-tranding-background-img"
                      />
                      <motion.div
                        className="tranding-slide-content"
                        variants={textLeft}
                        initial={isActive ? "" : "hidden"}
                        animate={isActive ? "show" : ""}
                        exit={isActive ? "" : "exit"}
                      >
                        Air Handling Unit
                      </motion.div>
                      <motion.div
                        className="tranding-slide-product-description"
                        variants={textLeft}
                        initial={isActive ? "" : "hidden"}
                        animate={isActive ? "show" : ""}
                        exit={isActive ? "" : "exit"}
                      >
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quisquam, laudantium!
                        </p>
                      </motion.div>
                      <motion.a
                        href="#"
                        className="tranding-slide-product-button"
                        variants={textRight}
                        initial={isActive ? "" : "hidden"}
                        animate={isActive ? "show" : ""}
                        exit={isActive ? "" : "exit"}
                      >
                        View Product
                      </motion.a>
                    </>
                  )}
                </SwiperSlide>
              </AnimatePresence>
              {/* slide end */}
              {/* slide start */}
              <AnimatePresence>
                <SwiperSlide className={`swiper-slide tranding-slide`}>
                  {({ isActive }) => (
                    <>
                      <div
                        className={`tranding-slide-img ${
                          isActive ? "active-slide" : "dim-slide"
                        }`}
                      >
                        <img
                          src={require("../../../images/Home/Product/no-background/fan_filter.png")}
                          alt="air handling unit"
                          className="tranding-product-img"
                        />
                      </div>
                      <motion.img
                        src={require("../../../images/Home/Product/no-background/blob-haikei.png")}
                        alt=""
                        variants={blobZoom}
                        initial={isActive ? "" : "hidden"}
                        animate={isActive ? "show" : ""}
                        exit={isActive ? "" : "exit"}
                        className="product-tranding-background-img"
                      />
                      <motion.div
                        className="tranding-slide-content"
                        variants={textLeft}
                        initial={isActive ? "" : "hidden"}
                        animate={isActive ? "show" : ""}
                        exit={isActive ? "" : "exit"}
                      >
                        Fan Filter
                      </motion.div>
                      <motion.div
                        className="tranding-slide-product-description"
                        variants={textLeft}
                        initial={isActive ? "" : "hidden"}
                        animate={isActive ? "show" : ""}
                        exit={isActive ? "" : "exit"}
                      >
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quisquam, laudantium!
                        </p>
                      </motion.div>
                      <motion.a
                        href="#"
                        className="tranding-slide-product-button"
                        variants={textRight}
                        initial={isActive ? "" : "hidden"}
                        animate={isActive ? "show" : ""}
                        exit={isActive ? "" : "exit"}
                      >
                        View Product
                      </motion.a>
                    </>
                  )}
                </SwiperSlide>
              </AnimatePresence>
              {/* slide end */}
              {/* slide start */}
              <AnimatePresence>
                <SwiperSlide className={`swiper-slide tranding-slide`}>
                  {({ isActive }) => (
                    <>
                      <div
                        className={`tranding-slide-img ${
                          isActive ? "active-slide" : "dim-slide"
                        }`}
                      >
                        <img
                          src={require("../../../images/Home/Product/no-background/terminal_boxes.png")}
                          alt="air handling unit"
                          className="tranding-product-img"
                        />
                      </div>
                      <motion.img
                        src={require("../../../images/Home/Product/no-background/blob-haikei.png")}
                        alt=""
                        variants={blobZoom}
                        initial={isActive ? "" : "hidden"}
                        animate={isActive ? "show" : ""}
                        exit={isActive ? "" : "exit"}
                        className="product-tranding-background-img"
                      />
                      <motion.div
                        className="tranding-slide-content"
                        variants={textLeft}
                        initial={isActive ? "" : "hidden"}
                        animate={isActive ? "show" : ""}
                        exit={isActive ? "" : "exit"}
                      >
                        Terminal Boxes
                      </motion.div>
                      <motion.div
                        className="tranding-slide-product-description"
                        variants={textLeft}
                        initial={isActive ? "" : "hidden"}
                        animate={isActive ? "show" : ""}
                        exit={isActive ? "" : "exit"}
                      >
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quisquam, laudantium!
                        </p>
                      </motion.div>
                      <motion.a
                        href="#"
                        className="tranding-slide-product-button"
                        variants={textRight}
                        initial={isActive ? "" : "hidden"}
                        animate={isActive ? "show" : ""}
                        exit={isActive ? "" : "exit"}
                      >
                        View Product
                      </motion.a>
                    </>
                  )}
                </SwiperSlide>
              </AnimatePresence>
              {/* slide end */}
              {/* slide start */}
              <AnimatePresence>
                <SwiperSlide className={`swiper-slide tranding-slide`}>
                  {({ isActive }) => (
                    <>
                      <div
                        className={`tranding-slide-img ${
                          isActive ? "active-slide" : "dim-slide"
                        }`}
                      >
                        <img
                          src={require("../../../images/Home/Product/no-background/voice_control_dampner.png")}
                          alt="air handling unit"
                          className="tranding-product-img"
                        />
                      </div>
                      <motion.img
                        src={require("../../../images/Home/Product/no-background/blob-haikei.png")}
                        alt=""
                        variants={blobZoom}
                        initial={isActive ? "" : "hidden"}
                        animate={isActive ? "show" : ""}
                        exit={isActive ? "" : "exit"}
                        className="product-tranding-background-img"
                      />
                      <motion.div
                        className="tranding-slide-content"
                        variants={textLeft}
                        initial={isActive ? "" : "hidden"}
                        animate={isActive ? "show" : ""}
                        exit={isActive ? "" : "exit"}
                      >
                        Voice Control Dampner
                      </motion.div>
                      <motion.div
                        className="tranding-slide-product-description"
                        variants={textLeft}
                        initial={isActive ? "" : "hidden"}
                        animate={isActive ? "show" : ""}
                        exit={isActive ? "" : "exit"}
                      >
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quisquam, laudantium!
                        </p>
                      </motion.div>
                      <motion.a
                        href="#"
                        className="tranding-slide-product-button"
                        variants={textRight}
                        initial={isActive ? "" : "hidden"}
                        animate={isActive ? "show" : ""}
                        exit={isActive ? "" : "exit"}
                      >
                        View Product
                      </motion.a>
                    </>
                  )}
                </SwiperSlide>
              </AnimatePresence>
              {/* slide end */}

            </motion.div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Product;
