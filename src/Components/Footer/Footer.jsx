import React from "react";
import footerLogo from "../../../src/assets/Group 565.png";
import "../../CustomFont.css";
// icon import
import { HiOutlinePhone } from "react-icons/hi2";
import { CiMail, CiLocationOn } from "react-icons/ci";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-black px-3 lg:px-0 mt-[120px]">
      <div className="max-w-7xl mx-auto">
        {/* subscribe */}
        <div className="flex flex-col  md:flex-row md:justify-between pt-[100px] border-b-2 border-gray-800 pb-[58px] space-y-4 md:space-y-0">
          <p className="md:w-1/2 text-white text-4xl font-NekstBold ">
            Subscribe <br />
            for latest updates
          </p>
          {/* search form */}
          <form className="md:w-1/2">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 pl-10 text-sm text-gray-900 border rounded-lg bg-black border-gray-600 placeholder-gray-400 dark:text-white font-Montserrat"
                placeholder="Enter Your Email Address"
                required
              />
              <button
                type="submit"
                class="text-white absolute right-2.5 bottom-2.5 bg-[#FF4800] hover:bg-orange-600 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 font-Montserrat"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        {/* main footer */}
        <footer className="footer py-10  text-base-content mt-[58px] px-3 lg:px-0">
          <div className="font-Montserrat">
            <img src={footerLogo} className="mb-10" />
            <div className="space-y-4">
              <div className="text-white flex">
                <HiOutlinePhone className="h-[20px] w-[30px]" />
                <p>+1 246-345-0695</p>
              </div>
              <div className="text-white flex">
                <CiMail className="h-[20px] w-[30px]" />
                <p>+1 246-345-0695</p>
              </div>
              <div className="text-white flex">
                <CiLocationOn className="h-[20px] w-[30px]" />
                <p>4967 Sardis Sta, Victoria 8007, Montreal.</p>
              </div>
            </div>
          </div>
          <div className="text-gray-400 space-y-2 font-Montserrat">
            <span className="text-2xl font-NekstBold  text-white">Company</span>
            <a className="link link-hover">Home Page</a>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Features</a>
            <a className="link link-hover">Reviews</a>
            <a className="link link-hover">Contact Us</a>
          </div>
          <div className="text-gray-400 space-y-2 font-Montserrat">
            <span className="text-2xl font-NekstBold  text-white">Connect</span>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Help and support</a>
            <a className="link link-hover">Partners</a>
            <a className="link link-hover">Contact us</a>
            <a className="link link-hover">Newsletter</a>
          </div>
          <div className="text-gray-400 space-y-2 font-Montserrat">
            <span className="text-2xl font-NekstBold  text-white">
              Supports
            </span>
            <a className="link link-hover">FAQ</a>
            <a className="link link-hover">Size guide</a>
            <a className="link link-hover">Payments</a>
            <a className="link link-hover">Delivery & Returns</a>
            <a className="link link-hover">Warranty</a>
          </div>
        </footer>
        {/* bottom */}
        <footer className="footer items-center py-10  text-neutral-content border-t-2 border-gray-800">
          <div className="items-center grid-flow-col font-Montserrat">
            <p>Copyright © 2022. All Right Reserved By EmailReseller</p>
          </div>
          <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <button>
              <FaFacebookF className="h-5 w-5" />
            </button>
            <button>
              <FaTwitter className="h-5 w-5" />
            </button>
            <button>
              <FaInstagram className="h-5 w-5" />
            </button>
            <button>
              <FaLinkedinIn className="h-5 w-5" />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
