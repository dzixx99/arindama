'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import bg from '/shopbg.png';

const ShopNowCard = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="bg-[#D9D9D9] py-16 flex justify-center">
      <motion.div
        className="bg-cover bg-center rounded-lg shadow-lg p-8 md:p-16 flex flex-col md:flex-row justify-between items-center w-full md:w-3/4 mx-4"
        style={{ backgroundImage: `url(${bg.src})` }} // Use the imported image
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={cardVariants}
      >
        <div className="text-white text-5xl md:text-8xl font-extrabold mb-8 md:mb-0 md:ml-8">
          Shop Now
        </div>
        <div className="text-white text-center md:text-left md:ml-16 flex flex-col items-center md:items-start">
          <p className="mb-2 text-base md:text-lg">Ready to enhance your digital experience?</p>
          <p className="mb-4 text-base md:text-lg">Reach out to us today</p>
          <button className="border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#65637C] transition font-bold">
            See Our Catalogue
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ShopNowCard;
