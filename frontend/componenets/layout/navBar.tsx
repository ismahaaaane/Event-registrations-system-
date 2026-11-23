"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react"; 
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar(){
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <nav className="w-full  sm:relative z-50 w-full bg-kaki shadow-md/15 h-18 ">
            <div className="flex max-w-7xl justify-between px-5 py-4">

                {/* LOGO */}
                <Link 
                href="/">
                    <Image 
                        src="/image/logo.png"
                        alt="Planiha Logo"
                        width={80}
                        height={80}
                    />
                </Link>

                {/* Desktop Navigation Links */}

                <div className="hidden md:flex items-center gap-10 justify-center ml-45">

                    <Link 
                    href="/"
                    className={` font-bold text-xl mb-9 text-shadow-lg text-beige transiton-colors ${
                        pathname === "/" ? " test-marron underline underline-offset-8" : "hover:text-marron"
                             }`}>
                        Home
                    </Link>
                    <Link 
                    href="/register"
                    className={`text-beige font-bold text-xl mb-9 text-shadow-lg transiton-colors ${
                        pathname === "/events" ? " test-marron underline underline-offset-8" : "hover:text-marron"
                             }
                    } `}>
                        Events
                    </Link>
                    <Link 
                    href="/creatEvent"
                    className={`text-marron font-bold text-xl mb-9 text-shadow-lg transiton-colors ${
                        pathname === "/createEvent" ? " test-beige underline underline-offset-8" : "hover:text-beige"
                             }`}>
                        Create event
                    </Link>

                </div>

                {/* Desktop Auth buttons*/}

                <div className=" hidden md:flex  gap-5 ">

                    <Link
                    href="/login"
                    className="bg-marron rounded-full border border-marron px-6 py-2 text-beige transition-colors hover:bg-marron/80 mb-9 font-semibold shadow-md/25">
                        Log In
                    </Link>
                    <Link
                    href="/register"
                    className="bg-marron rounded-full border border-marron px-6 py-2 text-beige transition-colors hover:bg-marron/80 mb-9 font-semibold shadow-md/25">
                        Join Us
                    </Link>
                </div> 

                {/* Mobile Menu Button */}
                <button
                  type="button"
                  onClick={()=> setIsMenuOpen(!isMenuOpen)}
                  className=" relative z-[70] text-4xl text-marron md:hidden "
                >
                    {isMenuOpen ? <div>f</div> : <FiMenu />}
                </button>

                {/* Mobile Overlay */}
                <div 
                    onClick={()=> setIsMenuOpen(false)}
                    className={`fixed inset-0 z-49 bg-black/10 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-opacity-none opacity-0"}`}
                />

                {/* Mobile Side Drawer */}

                <aside
                    className={`fixed right-0 top-0 z-50 h-screen w-64 bg-kaki/95 shadow-2xl backdrop-blur-md transition-transform duration-500 ease-in-out md:hidden ${
                        isMenuOpen
                            ? "translate-x-0"
                            : "translate-x-full"
                    }`}
                >
                   {/* CLOSE BUTTON INSIDE DRAWER */}
                    <div className="flex justify-end px-5 pt-5">

                        <button
                          type="button"
                          onClick={() => setIsMenuOpen(false)}
                          className="text-3xl text-marron transition-transform duration-200 hover:scale-110"
                          aria-label="Close menu"
                        >
                            <FiX />
                        </button>
                    </div>

                    {/* MOBILE LINKS */}
                    <div className="flex flex-col items-center gap-8 pt-12">

                        <Link
                        href="/"
                        onClick={() => setIsMenuOpen(false)}
                        className={`text-lg font-bold text-shadow-lg transition-all duration-200 ${
                        pathname === "/"
                            ? "text-marron underline underline-offset-8"
                            : "text-beige hover:scale-105 hover:text-marron"
                        }`}
                        >
                            Home
                        </Link>


                        <Link
                            href="/events"
                            onClick={() => setIsMenuOpen(false)}
                            className={`text-lg font-bold text-shadow-lg transition-all duration-200 ${
                            pathname === "/events"
                                ? "text-marron underline underline-offset-8"
                                : "text-beige hover:scale-105 hover:text-marron"
                            }`}
                            >
                            Events
                        </Link>


                        <Link
                            href="/createEvent"
                            onClick={() => setIsMenuOpen(false)}
                            className={`text-lg font-bold text-shadow-lg transition-all duration-200 ${
                            pathname === "/createEvent"
                                ? "text-beige underline underline-offset-8"
                                : "text-marron hover:scale-105"
                            }`}
                        >
                             Create event
                        </Link>

                        <Link
                            href="/login"
                            onClick={() => setIsMenuOpen(false)}
                            className="w-32 rounded-full bg-marron px-5 py-2 text-center font-semibold text-beige shadow-md transition-all duration-200 hover:scale-105 hover:bg-marron/80"
                        >
                            Log In
                        </Link>

                        <Link
                            href="/register"
                            onClick={() => setIsMenuOpen(false)}
                            className="w-32 rounded-full bg-marron px-5 py-2 text-center font-semibold text-beige shadow-md transition-all duration-200 hover:scale-105 hover:bg-marron/80"
                        >
                            Join Us
                        </Link>

                    </div>

                </aside>
            </div>
        </nav>
  );
}