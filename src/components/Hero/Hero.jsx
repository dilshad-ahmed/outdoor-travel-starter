import React from "react";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <section className="min-h-[900px] flex justify-center items-center bg-gradient-to-t from-brandDark from-2% to-transparent to-15% h-full">
        {/* radial gradient section */}
        <div
          className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black z-10"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 0, 0, 0.3) 50%, rgba(11, 11, 13, 0.5) 70%, rgba(11, 11, 13, 0.8) 90%)",
          }}
        ></div>

        {/* Hero Text section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="container relative z-20 text-center space-y-8"
        >
          <h1 className="text-5xl md:text-8xl font-bold font-merriweather">
            The Great Outdoors
          </h1>
          <p>Wonder often, wonder Always.</p>
          <div className="inline-flex justify-center items-center border-2 h-14 w-14 rounded-full !mt-14 md:!mt-20">
            <FaPlay />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
