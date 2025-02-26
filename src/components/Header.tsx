// "use client";
// import Image from "next/image";
// import logo from "./assets/logo.svg";
// import cart from "./assets/cart.svg";
// import Link from "next/link";
// import AuthButtons from "./AuthButtons";
// import ActiveLink from "./ActiveLink";
// import { useState } from "react";
// import { IoMenu } from "react-icons/io5";
// import { IoIosCloseCircle } from "react-icons/io";
// export default function Header() {
//   const [showNav, setShowNav] = useState(false);
//   const handleMenuClick = () => {
//     setShowNav(!showNav);
//   };
//   return (
//     <>
//       <div className="justify-between flex items-center backdrop-blur-3xl bg-white/10 border-b border-b-slate-400 pt-4 pb-4 px-20 max-lg:hidden">
//         <Link href="/">
//           <Image src={logo} alt="logo" width={30} height={30} />
//         </Link>
//         <div className="flex gap-10 pr-48">
//           <div className="flex justify-between items-center gap-8">
//             <ActiveLink href="/">Home</ActiveLink>
//             <ActiveLink href="/restaurants">Restaurants</ActiveLink>
//             <ActiveLink href="#footer">About</ActiveLink>
//           </div>
//         </div>
//         <div className="flex gap-8">
//           <Link href="/cart">
//             <Image src={cart} alt="cart-icon" width={30} height={30} />
//           </Link>
//           <AuthButtons />
//         </div>
//       </div>
//       <div className="lg:hidden ">
//         <div className=" absolute  ">
//           <button onClick={handleMenuClick}>
//             {showNav ? (
//               <div className="flex flex-col bg-gradient-to-br from-white/30 to-transparent">
//                 <IoIosCloseCircle size={32} />{" "}
//                 <Link href="/cart">
//                   <Image src={cart} alt="cart-icon" width={30} height={30} />
//                 </Link>
//                 <AuthButtons />
//               </div>
//             ) : (
//               <IoMenu size={32} />
//             )}
//           </button>
//         </div>
//         <div className=""></div>
//       </div>
//     </>
//   );
// }
"use client";
import Image from "next/image";
import logo from "./assets/logo.svg";
import cart from "./assets/cart.svg";
import Link from "next/link";
import AuthButtons from "./AuthButtons";
import ActiveLink from "./ActiveLink";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  const handleMenuClick = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    if (showNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showNav]);
  return (
    <>
      {/* Desktop Navigation (hidden on max-lg screens) */}
      <div className="justify-between flex items-center backdrop-blur-3xl bg-white/10 border-b border-b-slate-400 pt-4 pb-4 px-20 max-lg:hidden">
        <Link href="/">
          <Image src={logo} alt="logo" width={30} height={30} />
        </Link>
        <div className="flex gap-10 pr-48">
          <div className="flex justify-between items-center gap-8">
            <ActiveLink href="/">Home</ActiveLink>
            <ActiveLink href="/restaurants">Restaurants</ActiveLink>
            <ActiveLink href="#footer">About</ActiveLink>
          </div>
        </div>
        <div className="flex gap-8">
          <Link href="/cart">
            <Image src={cart} alt="cart-icon" width={30} height={30} />
          </Link>
          <AuthButtons />
        </div>
      </div>

      {/* Mobile Navigation (visible on max-lg screens) */}
      <div className="lg:hidden">
        {/* Hamburger Menu Button */}
        <div className="fixed top-4 left-4 z-50">
          <button onClick={handleMenuClick} className="focus:outline-none">
            {showNav ? (
              <IoIosCloseCircle size={32} className="text-white" />
            ) : (
              <IoMenu size={32} className="text-white" />
            )}
          </button>
        </div>

        {/* Side Navigation with Animation */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
            showNav ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={handleMenuClick}
        ></div>

        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white/10 backdrop-blur-3xl border-l border-l-slate-400 z-40 transform transition-transform duration-300 ${
            showNav ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-start gap-6 p-6">
            <Link href="/" onClick={handleMenuClick}>
              <Image src={logo} alt="logo" width={30} height={30} />
            </Link>
            <button onClick={handleMenuClick}>
              <ActiveLink href="/">Home</ActiveLink>
            </button>
            <button onClick={handleMenuClick}>
              <ActiveLink href="/restaurants">Restaurants</ActiveLink>
            </button>
            <button onClick={handleMenuClick}>
              <ActiveLink href="#footer">About</ActiveLink>
            </button>
            <Link href="/cart" onClick={handleMenuClick}>
              <Image src={cart} alt="cart-icon" width={30} height={30} />
            </Link>
            <AuthButtons />
          </div>
        </div>
      </div>
    </>
  );
}
