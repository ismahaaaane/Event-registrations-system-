"use client";

import { useEffect, useState } from "react";
import { registerUser } from "../../lib/api";
import { useRouter } from "next/navigation";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Link from "next/link";

export default function RegisterPage() {
    const router = useRouter();

    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    // Check if the user is already logged in
    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            router.replace("/home");
        }
    }, [router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!first_name || !last_name || !email || !password) {
            alert("Please fill in all the fields !");
            return;
        }

        try {
            const data = await registerUser(
                first_name,
                last_name,
                email,
                password
            );

            console.log("Registration successful:", data);

            // Save the token
            localStorage.setItem("token", data.token);

            // Go to authenticated Home
            router.replace("/home");

        } catch (error) {
            console.error("Registration failed:", error);
        }
    };

    return (
        <main className="bg-beige">
            <h1 className="text-marron text-4xl text-center font-bold mt-8 mb-3">
                Join us
            </h1>

            <p className="text-marron/53 text-center text-md font-semibold mb-5">
                Create your free account
            </p>

            <form
                onSubmit={handleSubmit}
                className="form shadow-xl bg-marron/58"
            >

                <label className="form-label">
                    First name
                </label>

                <input
                    type="text"
                    placeholder="First name"
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="form-input"
                />

                <label className="form-label">
                    Last name
                </label>

                <input
                    type="text"
                    placeholder="Last name"
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                    className="form-input"
                />

                <label className="form-label">
                    Email
                </label>

                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                />

                <div className="password-field">

                    <label className="form-label">
                        Password
                    </label>

                    <div className="password-input-wrapper">

                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-input"
                        />

                        <button
                            type="button"
                            className="password-toggle"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? (
                                <FaRegEyeSlash />
                            ) : (
                                <FaRegEye />
                            )}
                        </button>

                    </div>
                </div>

                <button
                    type="submit"
                    className="bg-beige mt-6 w-45 mx-auto py-2 rounded-xl text-marron text-lg font-bold shadow-xl/50 cursor-pointer transition hover:scale-105 active:scale-95"
                >
                    Let's go
                </button>

                <div className="bg-beige h-0.25 mt-6 w-60 mx-auto"></div>

                <div className="flex">
                    <p className="text-beige text-lg font-semibold ml-4 mt-4">
                        Already have
                    </p>

                    <Link
                        href="/login"
                        className="text-[#4B2E2B] font-bold text-lg mt-4 ml-2"
                    >
                        an account !
                    </Link>
                </div>

            </form>
        </main>
    );
}