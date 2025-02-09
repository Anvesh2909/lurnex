"use client"
import React, { useState, useEffect } from "react";
import { Search, Clock, GraduationCap, BookOpen, MessageSquarePlus,
    PlusCircle, X } from "lucide-react";
import Link from 'next/link';

// @ts-ignore
const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
    useEffect(() => {
        const handleEsc = (e: { key: string; }) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [onClose]);
    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-glass-bg backdrop-blur-glass border border-glass-border rounded-lg p-6 w-full max-w-md m-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <button onClick={onClose} className="p-1 hover:bg-input-bg rounded-lg">
                        <X className="w-5 h-5" />
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};

// @ts-ignore
const Button = ({ children, className = "", ...props }) => (
    <button
        className={`px-4 py-2 rounded-lg font-medium ${className}`}
        {...props}
    >
        {children}
    </button>
);

const CoursePage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const enrolledCourses = [
        {
            id: 1,
            title: "Advanced Algorithms",
            description: "Master complex algorithms and data structures with hands-on practice",
            category: "Programming",
            duration: "6 Weeks",
            progress: 65,
            instructor: "Dr. Sarah Chen",
            nextMilestone: "Binary Trees",
            deadline: "2 days"
        }
    ];

    return (
        <div className="min-h-screen p-6 bg-background">
            <div className="bg-glass-bg backdrop-blur-glass border border-glass-border rounded-lg p-6 mb-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-semibold mb-1 text-purple-500">My Courses</h1>
                        <p className="text-muted-foreground">Track your progress and learning journey</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                        <div className="relative flex-grow sm:max-w-md">
                            <input
                                type="text"
                                placeholder="Search courses..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-input-bg border border-input-border rounded-lg focus:outline-none"
                            />
                            <Search className="absolute left-3 top-2.5 w-5 h-5 text-purple-500" />
                        </div>
                        <Button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-purple-500 text-white hover:bg-purple-600 flex items-center justify-center gap-2"
                        >
                            <PlusCircle className="w-4 h-4" />
                            Request Course
                        </Button>
                    </div>
                </div>
            </div>
            <section>
                {enrolledCourses.length > 0 ? (
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold flex items-center gap-2">
                            <GraduationCap className="w-5 h-5 text-purple-500" />
                            Enrolled Courses
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {enrolledCourses.map(course => (
                                <Link
                                    key={course.id}
                                    href={`course/${course.id}`}
                                    className="bg-glass-bg backdrop-blur-glass border border-glass-border rounded-lg p-6 hover:border-purple-500/50 transition-colors"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-sm text-muted-foreground">{course.category}</span>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4 text-purple-500" />
                                            <span className="text-sm text-muted-foreground">{course.duration}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-muted-foreground"><span className="text-purple-500">Next:</span> {course.nextMilestone}</span>
                                            <span className="text-purple-500">{course.progress}%</span>
                                        </div>
                                        <div className="w-full bg-input-bg rounded-full h-2">
                                            <div
                                                className="bg-purple-500 h-full rounded-full transition-all"
                                                style={{ width: `${course.progress}%` }}
                                            />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center p-12 text-center bg-glass-bg backdrop-blur-glass border border-glass-border rounded-lg">
                        <MessageSquarePlus className="w-8 h-8 text-muted-foreground mb-4" />
                        <h3 className="text-xl font-semibold mb-2">No Enrolled Courses</h3>
                        <p className="text-muted-foreground mb-6 max-w-md">
                            Ready to start learning? Request enrollment in a course to begin.
                        </p>
                        <Button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-purple-500 text-white hover:bg-purple-600"
                        >
                            Request Course
                        </Button>
                    </div>
                )}
            </section>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Request Course Enrollment"
            >
                <div className="space-y-4">
                    <p className="text-muted-foreground">
                        Submit a request to enroll in a new course.
                    </p>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Course Name</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 bg-input-bg border border-input-border rounded-lg focus:outline-none"
                                placeholder="Enter course name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Reason for Request</label>
                            <textarea
                                className="w-full px-3 py-2 bg-input-bg border border-input-border rounded-lg focus:outline-none"
                                rows={3}
                                placeholder="Briefly explain why you want to take this course"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end gap-2 mt-6">
                        <Button
                            onClick={() => setIsModalOpen(false)}
                            className="bg-input-bg hover:bg-input-border"
                        >
                            Cancel
                        </Button>
                        <Button className="bg-purple-500 text-white hover:bg-purple-600">
                            Submit Request
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};
export default CoursePage;