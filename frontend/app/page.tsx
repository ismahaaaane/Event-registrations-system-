"use client";

import Navbar from "../componenets/layout/navBar"
import Hero from "../componenets/home/hero"
import Cards from "../componenets/home/cards"
import Footer from "../componenets/layout/footer"
import { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      router.replace("/home");
    }
  }, [router]);

  return (
    <>
    <Navbar/>
    <Hero/>
    <Cards/>
    <Footer/>
    </>
  );
}