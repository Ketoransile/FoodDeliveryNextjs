import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareYoutube } from "react-icons/fa6";
import { SlSocialDribbble } from "react-icons/sl";
import { Input } from "./ui/input";

export default function Footer() {
  return (
    <div
      className="grid grid-cols-4 gap-y-12 px-20 pt-20 pb-12 mt-32 backdrop-blur-lg bg-white/10 text-slate-300 max-lg:grid-cols-2 max-lg:gap-x-20"
      id="footer"
    >
      <div className="flex flex-col gap-8 ">
        <div className="flex gap-4 max-lg:grid max-lg:grid-cols-2 max-lg:gap-x-2">
          <Link href="#">
            <FaInstagram />
          </Link>
          <Link href="#">
            <AiFillTwitterCircle />
          </Link>
          <Link href="#">
            <FaSquareYoutube />
          </Link>
          <Link href="#">
            <SlSocialDribbble />
          </Link>
        </div>
        <div className="flex flex-col text-sm gap-2">
          <p>Copyright © 2020 Food delivery website</p>
          <p>All rights reserved</p>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="text-xl text-white">Company</h1>
        <ul className="text-sm flex flex-col gap-4">
          <li>About us</li>
          <li>Blog</li>
          <li>Contact Us</li>
          <li>Pricing</li>
          <li>Testimonials</li>
        </ul>
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="text-xl text-white">Support</h1>
        <ul className="text-sm flex flex-col gap-4">
          <li>Help Center</li>
          <li>Terms of Service</li>
          <li>Legal</li>
          <li>Privacy Policy</li>
          <li>Status</li>
        </ul>
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="text-white text-xl">Stay up to date</h1>
        <Input
          type="text"
          placeholder="Your email address"
          className="text-xs placeholder:text-xs bg-slate-600 border-none text-white placeholder:text-slate-200 max-w-80"
        />
      </div>
    </div>
  );
}
