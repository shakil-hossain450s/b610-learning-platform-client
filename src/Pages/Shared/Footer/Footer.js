import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../../asstes/images/logo.png";

const Footer = () => {
  return (
    <div className="">
      <footer className="footer items-center p-4 bg-base-200 shadow-md mt-8">
        <div className="items-center grid-flow-col">
          <div className="flex flex-col justify-center items-center">
            <img className="w-[100px]" src={Logo} alt="" />
            <p className="text-xl">Web Hero</p>
          </div>
          <p>Copyright © 2022 - All right reserved</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="https://www.facebook.com/"  target="blank" className="text-3xl font-medium"><FaFacebook></FaFacebook></a>
          <a href="https://www.linkedin.com/"  target="blank" className="text-3xl font-medium"><FaLinkedin></FaLinkedin></a>
          <a href="https://www.instagram.com/" target="blank"  className="text-3xl font-medium"><FaInstagram></FaInstagram></a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
