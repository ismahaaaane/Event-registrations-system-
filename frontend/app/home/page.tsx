"use client";

import HomeNavbar from "../../componenets/layout/HomeNavbar";

export default function HomePage() {
  return (
   <>
        <HomeNavbar></HomeNavbar>
        
        <main className="min-h-screen bg-beige">
            <h1 className="text-4xl font-bold text-marron">
              Welcome Home 🎉
            </h1>

            <p className="text-marron">
              You are logged in.
            </p>
        </main>
    </>
  );
}