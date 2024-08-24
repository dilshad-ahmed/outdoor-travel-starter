import React from "react";
import FooterImg from "../../assets/footer.jpg";
import { motion } from "framer-motion";

const bgImg = {
  backgroundImage: `url(${FooterImg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
};
const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.2 }}
      style={bgImg}
      className="mt-16 h-[500px] bg-brandDark relative flex justify-center items-end"
    >
      {/* radial overlay */}
      <div
        className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 0, 0, 0.3) 50%, rgba(11, 11, 13, 0.5) 70%, rgba(11, 11, 13, 0.8) 90%)",
        }}
      ></div>
      <p className="relative z-20 mb-6">
        © 2024. All rights reserved | The Coding Journey
      </p>
    </motion.footer>
  );
};

export default Footer;
