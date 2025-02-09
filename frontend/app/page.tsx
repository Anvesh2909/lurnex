"use client"
import React, { useState } from 'react';
import Image from "next/image";
import { Menu, X, Book, Users, Calendar, Mail, BookOpen, CheckCircle, ArrowRight, Instagram, Twitter, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import LottieAnimation from "@/components/LottieAnimation";
import '../styles/globals.css';
import animation1 from "../public/landing/Animation - 1.json";
import animation3 from "../public/landing/Animation - 3.json";
import animation2 from "../public/landing/Animation - 2.json";
import animation4 from "../public/landing/Animation - 4.json";
import animation5 from "../public/landing/Animation - 5.json";
const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
};

const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const staggerChildren = {
    visible: { transition: { staggerChildren: 0.2 } }
};

const hoverCard = {
    hover: {
        y: -5,
        boxShadow: "0 20px 40px -10px rgba(109, 40, 217, 0.15)"
    }
};
const LandingPage = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const features = [
        {
            icon: <Book className="w-8 h-8 text-purple-500" />,
            title: "Seamless Course Management",
            description: "Upload, assign, and track course materials with ease. Streamline your teaching and learning process."
        },
        {
            icon: <Users className="w-8 h-8 text-purple-500" />,
            title: "Collaboration Tools",
            description: "Foster engagement through integrated chat, discussion boards, and group project features."
        },
        {
            icon: <Calendar className="w-8 h-8 text-purple-500" />,
            title: "Timetables",
            description: "Effortlessly access your timetable in just two clicks, now reimagined with Lurnex's intuitive and enhanced features for a seamless experience."
        },
    ];
    const steps = [
        {
            number: "1️⃣",
            icon: <Mail className="w-8 h-8 text-purple-500" />,
            title: "Login with Your College Email",
            description: "Securely access your personalized learning environment with your institutional credentials."
        },
        {
            number: "2️⃣",
            icon: <BookOpen className="w-8 h-8 text-purple-500" />,
            title: "Join Your Courses & Start Learning",
            description: "Easily enroll in your courses and access all your learning materials in one place."
        },
        {
            number: "3️⃣",
            icon: <CheckCircle className="w-8 h-8 text-purple-500" />,
            title: "Collaborate, Submit Assignments & Track Progress",
            description: "Engage with peers, submit work, and monitor your academic journey seamlessly."
        }
    ];

    return (
        <div className="relative min-h-screen">
            {/* Navigation Bar (unchanged) */}
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="fixed top-0 left-0 right-0 z-50 border-b border-glass-border bg-glass-bg backdrop-blur-lg"
            >
            <nav className="fixed top-0 left-0 right-0 z-40 border-b border-glass-border bg-glass-bg">
                <div className="max-w-8xl mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex-shrink-0">
                            <Image
                                src="/logo.png"
                                alt="Lurnex Logo"
                                width={100}
                                height={50}
                                className="h-12 w-auto"
                            />
                        </div>

                        <div className="hidden md:flex items-center space-x-8">

                            <Link
                                href="/sign-in"
                                className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                            >
                                Login
                            </Link>
                        </div>

                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-foreground p-2"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden bg-glass-bg border-t border-glass-border">
                        <div className="px-4 pt-2 pb-4 space-y-2">

                            <Link
                                href="/sign-in"
                                className="block w-full mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-center"
                            >
                                Get Started with College Account
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
            </motion.nav>
            {/* Hero Section (unchanged) */}

            <section className="max-w-7xl mx-auto px-4 py-8">
                <div className="py-16 md:py-24 flex flex-col md:flex-row items-center justify-between">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerChildren}
                        className="md:w-1/2 space-y-6"
                    >
                        <motion.div variants={slideUp}>
              <span className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-500 text-sm font-medium inline-block">
                Trusted by Leading Institutions
              </span>
                        </motion.div>

                        <motion.h1 variants={slideUp} className="text-4xl md:text-6xl font-bold text-foreground">
                            Transform College Learning with{' '}
                            <span className="bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent">
                Lurnex
              </span>
                        </motion.h1>

                        <motion.p variants={slideUp} className="text-xl text-muted-foreground">
                            A seamless LMS designed for students & teachers—collaborate, learn, and grow
                            in a modern educational environment.
                        </motion.p>

                        <motion.div variants={slideUp} className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/sign-in"
                                className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/20 flex items-center gap-2"
                            >
                                <span>Get Started with College Account</span>
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="md:w-1/2 mt-12 md:mt-0 md:pl-8"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-transparent opacity-10 blur-3xl" />

                            <LottieAnimation animationData={animation1} className="w-full h-auto rounded-lg transform hover:rotate-1 transition-transform duration-300"/>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Modified Features Section with Side-by-Side Layout */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={staggerChildren}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-center mb-16"
                    >
                        <motion.h2 variants={slideUp} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Why Choose Lurnex?
                        </motion.h2>
                        <motion.p variants={slideUp} className="text-xl text-muted-foreground">
                            Discover the features that make Lurnex the preferred choice for modern education
                        </motion.p>
                    </motion.div>

                    <div className="flex flex-col md:flex-row gap-8 items-center max-w-6xl mx-auto">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="md:w-1/2"
                        >
                            <LottieAnimation
                                animationData={animation2}
                                className="w-full h-auto rounded-lg transform hover:rotate-1 transition-transform duration-300"
                            />
                        </motion.div>

                        <motion.div
                            variants={staggerChildren}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="md:w-1/2 space-y-6"
                        >
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    whileHover="hover"
                                    variants={{ ...slideUp, ...hoverCard }}
                                    className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 group"
                                >
                                    <div className="mb-4 p-3 bg-purple-50 rounded-lg inline-block transform group-hover:rotate-12 transition-transform">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* New How It Works Section */}
            <section className="py-20 ">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={staggerChildren}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <motion.h2 variants={slideUp} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Get Started in 3 Simple Steps
                        </motion.h2>
                        <motion.p variants={slideUp} className="text-xl text-muted-foreground">
                            Begin your learning journey with Lurnex in minutes
                        </motion.p>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 space-y-8"
                        >
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start space-x-6 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-purple-50"
                                >
                                    <div className="flex-shrink-0 flex flex-col items-center">
                                        <div className="p-3 bg-purple-50 rounded-lg transform group-hover:scale-110 transition-transform">
                                            {step.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <LottieAnimation animationData={animation4} className="w-full h-auto object-contain animate-float"/>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* Final CTA Section */}
            <section className="relative py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        {/* Image Section - Now on the Left */}
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 order-1 lg:order-1" /* Changed order */
                        >
                            <div className="relative">
                                <div className="absolute -inset-8 bg-gradient-to-r from-purple-500 to-transparent opacity-10 blur-3xl" />
                                <LottieAnimation
                                    animationData={animation3}
                                    className="w-full h-auto rounded-lg transform hover:rotate-1 transition-transform duration-300"
                                />
                            </div>
                        </motion.div>

                        {/* Text Section - Now on the Right */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 space-y-8 order-2 lg:order-2" /* Changed order */
                        >
                            <div className="space-y-6">
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                                    Ready to Experience the{' '}
                                    <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
              Future of Learning?
            </span>
                                </h2>
                                <p className="text-xl text-gray-600">
                                    Join thousands of students and educators transforming their educational journey with Lurnex.
                                </p>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link
                                        href="/sign-in"
                                        className="px-8 py-4 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 inline-flex items-center gap-2 text-lg font-medium"
                                    >
                                        Sign In with College Account
                                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/*About Us*/}
            <section className="py-20 ">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <h2 className="text-3xl font-bold text-gray-900">
                                Lurnex - A Part of Nexera's Vision
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Lurnex is not just an LMS; it's a step toward the future of education. As part of Nexera, we bridge traditional learning with AI-powered education through innovation and intelligent collaboration.
                            </p>

                            <div className="space-y-4">
                                <Link
                                    href="mailto:nexerabyray@gmail.com"
                                    className="inline-flex items-center text-purple-500 hover:text-purple-600 transition-all duration-300 group"
                                >
                                    <Mail className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1" />
                                    nexerabyray@gmail.com
                                </Link>

                                <div className="flex space-x-6">
                                    {[
                                        { icon: Github, link: "https://github.com/nexera" },
                                        { icon: Linkedin, link: "https://linkedin.com/company/nexera" },
                                        { icon: Twitter, link: "https://twitter.com/nexera" },
                                        { icon: Instagram, link: "https://instagram.com/nexera" },
                                    ].map((social, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ y: -3 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <Link
                                                href={social.link}
                                                target="_blank"
                                                className="text-gray-500 hover:text-purple-500 transition-colors duration-300"
                                            >
                                                <social.icon className="w-6 h-6" />
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="lg:pl-8"
                        >
                            <div className="relative rounded-2xl overflow-hidden">
                                <div className="absolute inset-0 " />
                                <LottieAnimation animationData={animation5} className="w-full h-auto "/>
                            </div>
                        </motion.div>
                    </div>

                    {/* Footer */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="border-t border-gray-200 mt-20 pt-8"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <Image
                                src="/logo.png"
                                alt="Lurnex Logo"
                                width={120}
                                height={60}
                                className="h-12 w-auto mb-4 md:mb-0"
                            />
                            <p className="text-sm text-gray-500">
                                © {new Date().getFullYear()} Lurnex by Nexera. All rights reserved.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};
export default LandingPage;