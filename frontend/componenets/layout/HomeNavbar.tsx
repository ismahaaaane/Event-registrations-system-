"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react"; 
import { FiMenu, FiX } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

export default function HomeNavbar(){

    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);


    const router = useRouter();

    const handleLogout= () => {
        localStorage.removeItem("token");
        router.replace("/");
    };

    return(
        <nav className="w-full  sm:relative z-50 w-full bg-kaki shadow-md/15 h-18" >
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
                
                <div className="hidden md:flex items-center  gap-10 justify-center ml-45">
                    <Link 
                    href="/"
                    className={` font-bold text-xl mb-9 text-shadow-lg text-beige transiton-colors ${
                        pathname === "/home" ? " test-marron underline underline-offset-8" : "hover:text-marron"
                             }`}>
                        Home
                    </Link>
                    <Link 
                    href="/events"
                    className={`text-beige font-bold text-xl mb-9 text-shadow-lg transiton-colors ${
                        pathname === "/events" ? " test-marron underline underline-offset-8" : "hover:text-marron"
                             }
                    } `}>
                        Events
                    </Link>
                    <Link 
                    href="/events"
                    className={`text-marron font-bold text-xl mb-9 text-shadow-lg transiton-colors ${
                        pathname === "/createEvents" ? " test-beige underline underline-offset-8" : "hover:text-beige"
                             }
                    } `}>
                        New Events
                    </Link>

                    {/*Profile*/}

                    <div className="relative">
                        <button
                          type="button"
                          onClick={() => setShowMenu(!showMenu)}
                          className="flex items-center gap-2 text-marron cursor-pointer">
                            <FaUserCircle className="txt-3xl">
                                <span className="text-sm font-semibold">
                                    {user.first_name}
                                </span>
                            </FaUserCircle>

                          </button>
                    </div>

                </div>


            </div>
        </nav>
    );
}