"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { loginUser } from "../../lib/api";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function LoginPage() {
    const router = useRouter();

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

        if (!email || !password) {
            alert("Please fill in all the fields ! ");
            return;
        }

        try {
            const data = await loginUser(email, password);

            console.log("Login successful: ", data);

            // Save the token
            localStorage.setItem("token", data.token);

            // Go to authenticated Home
            router.replace("/home");
        }
        catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (
        <main className="bg-beige bg-fixed">
            <div className="w-full flex flex-col items-center mx-auto gap-4">

                <h1 className="text-marron text-2xl sm:text-4xl text-center font-bold mt-8 mb-3">
                    Welcome back
                </h1>

                <p className="text-marron/53 text-center text-md font-semibold mb-5">
                    Log in to your account
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="form shadow-xl bg-marron/58"
                >
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
                                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="bg-beige mt-6 w-45 mx-auto py-2 rounded-xl text-marron text-lg font-bold shadow-xl/50 cursor-pointer transition hover:scale-105 active:scale-95"
                    >
                        Log in
                    </button>

                    <div className="h-0.25 bg-beige mt-6 w-60 mx-auto"></div>

                    <div className="flex justify-between gap-35 mt-4">
                        <p className="text-beige text-lg font-semibold ml-3">
                            New here !
                        </p>

                        <Link
                            href="/register"
                            className="text-marron font-bold text-lg"
                        >
                            Join us
                        </Link>
                    </div>

                    <div className="flex mt-4">
                        <p className="text-beige text-lg font-semibold ml-3">
                            Forgot your
                        </p>

                        <Link
                            href="/"
                            className="text-marron font-bold text-lg ml-3"
                        >
                            Password !
                        </Link>
                    </div>

                </form>
            </div>
        </main>
    );
}