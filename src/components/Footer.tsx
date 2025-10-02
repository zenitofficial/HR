
import React from "react";
const Footer = () => {
  return <footer className="w-full bg-white py-0">
    <div className="section-container">
      <p className="text-center text-gray-600 text-sm">© {new Date().getFullYear()}{" "}
        <a href="https://www.instagram.com/zenit_web/" target="_blank" rel="noopener noreferrer" className="text-pulse-500 hover:underline">HR.</a>{" "}
        All Rights Reserved
      </p>
    </div>
  </footer>;
};
export default Footer;
