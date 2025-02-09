"use client"
import { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff, Mail, Lock, Loader2, ArrowLeft, AlertCircle } from "lucide-react";
import logo from "../../public/logo.png";
import Link from "next/link";
import animation from "../../public/Animation - sign-in.json";
import LottieAnimation from "@/components/LottieAnimation";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log("Logging in with:", email, password);
        } catch (err) {
            setError("Invalid email or password. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className="min-h-screen bg-background flex flex-col">
            {/* Navigation */}
            <nav className="border-b border-glass-border bg-glass-bg backdrop-blur-glass">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors">
                            <ArrowLeft className="h-5 w-5" />
                            <span className="font-medium">Back to Home</span>
                        </Link>
                    </div>
                </div>
            </nav>
            <div className="flex-1 flex items-center justify-center p-4">
                <div className="w-full max-w-6xl mx-4 flex flex-col lg:flex-row items-center justify-center gap-12">
                    {/* Form Container */}
                    <div className="hidden lg:block max-w-2xl w-3/4">
                        <div className="relative hover:transform hover:-translate-y-2 transition-transform duration-300">
                            <div className="absolute -inset-8 bg-gradient-to-r from-purple-500/20 to-transparent rounded-3xl opacity-30 blur-3xl" />
                            <LottieAnimation
                                animationData={animation}
                                className="rounded-2xl border border-glass-border bg-glass-bg backdrop-blur-glass p-8"
                            />
                        </div>
                    </div>
                    <div className="w-full max-w-md bg-glass-bg backdrop-blur-glass border border-glass-border p-8 rounded-2xl shadow-glass hover:shadow-glass-hover transition-shadow">
                        <div className="flex flex-col items-center mb-8 space-y-4">
                            <Image
                                src={logo}
                                alt="logo"
                                width={80}
                                height={80}
                                className="mb-4 hover:scale-105 transition-transform"
                            />
                            <div className="text-center">
                                <h2 className="text-3xl font-bold text-foreground mb-2">
                                    Welcome Back
                                    <span className="ml-2 bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">.</span>
                                </h2>
                                <p className="text-muted-foreground">Sign in to access your academic dashboard</p>
                            </div>
                        </div>

                        {error && (
                            <div className="mb-6 p-4 rounded-xl bg-destructive/10 border border-destructive/20 flex items-center gap-3 text-destructive">
                                <AlertCircle className="h-5 w-5 flex-shrink-0" />
                                <span className="text-sm">{error}</span>
                            </div>
                        )}

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-transparent rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity blur-lg" />
                                    <div className="relative">
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            College Email
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                placeholder="name@college.edu"
                                                className="w-full pl-12 pr-4 py-3 rounded-xl bg-input-bg border border-glass-border focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-transparent rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity blur-lg" />
                                    <div className="relative">
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Password
                                        </label>
                                        <div className="relative">
                                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                                placeholder="••••••••"
                                                className="w-full pl-12 pr-12 py-3 rounded-xl bg-input-bg border border-glass-border focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                            >
                                                {showPassword ? (
                                                    <EyeOff className="h-5 w-5" />
                                                ) : (
                                                    <Eye className="h-5 w-5" />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <button
                                    type="button"
                                    className="text-sm text-purple-500 hover:text-purple-600 transition-colors font-medium hover:underline underline-offset-4"
                                >
                                    Forgot password?
                                </button>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-3.5 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white rounded-xl font-medium transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                        <span>Authenticating...</span>
                                    </>
                                ) : (
                                    <span>Continue to Dashboard</span>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
