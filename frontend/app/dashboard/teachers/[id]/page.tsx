"use client"
import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import { GraduationCap, Briefcase, Mail, MessageCircle, BookOpen } from 'lucide-react'

const TeacherProfile = () => {
    const router = useRouter()
    const params = useParams()
    const teacherId = params.id
    const teacher = {
        id: "sjohnson",
        name: "Dr. Arjun",
        bio: "Professor of Computer Science with 15 years experience in algorithm design",
        department: "Computer Science",
        courses: ["Advanced Algorithms", "Data Structures", "Theory of Computation"],
        office: "CS Building Room 305",
        email: "s.johnson@university.edu",
        avatar: "/teacher-avatar.jpg"
    }

    return (
        <div className="min-h-screen p-6 bg-background text-foreground space-y-8">
            <div className="bg-glass-bg backdrop-blur-glass rounded-xl border border-glass-border p-8 shadow-glass">
                <div className="flex flex-col md:flex-row items-start gap-8">
                    <img
                        src={teacher.avatar}
                        alt={teacher.name}
                        className="w-32 h-32 rounded-full object-cover border-4 border-purple-500/20"
                    />
                    <div className="flex-1 space-y-4">
                        <h1 className="text-3xl font-bold">{teacher.name}</h1>
                        <p className="text-lg text-muted-foreground">{teacher.department}</p>

                        <div className="flex gap-4 mt-4">
                            <button
                                onClick={() => router.push(`/chat/direct/${teacher.id}`)}
                                className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg flex items-center gap-2"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Send Message
                            </button>
                            <button className="bg-glass-bg hover:bg-purple-500/10 border border-glass-border px-6 py-2 rounded-lg flex items-center gap-2">
                                <Mail className="w-5 h-5 text-purple-500" />
                                {teacher.email}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div className="bg-input-bg p-6 rounded-xl border border-glass-border">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <Briefcase className="w-6 h-6 text-purple-500" />
                            Professional Details
                        </h2>
                        <div className="space-y-2">
                            <p><strong>Office:</strong> {teacher.office}</p>
                            <p><strong>Department:</strong> {teacher.department}</p>
                            <p><strong>Courses Taught:</strong></p>
                            <ul className="list-disc pl-6">
                                {teacher.courses.map(course => (
                                    <li key={course} className="hover:text-purple-500 cursor-pointer">
                                        {course}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-input-bg p-6 rounded-xl border border-glass-border">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <BookOpen className="w-6 h-6 text-purple-500" />
                            Biography
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            {teacher.bio}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherProfile