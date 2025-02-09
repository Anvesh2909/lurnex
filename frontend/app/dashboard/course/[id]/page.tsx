"use client"
import React, {useState} from 'react'
import { useParams } from 'next/navigation'
import {
    BookOpen,
    GraduationCap,
    FileText,
    CalendarCheck,
    Award,
    Upload,
    AlertCircle,
    CheckCircle,
    MessageCircle, Users
} from 'lucide-react'
import {isSameDay, parseISO} from "date-fns";
import {router} from "next/client";
import Link from "next/link";

const courseDetails = {
    1: {
        title: "Advanced Algorithms",
        instructor: "Dr. Arjun",
        enrolled: true,
        sectionNo: 23,
        participants: {
            1: { name: "Shiva", avatar: "/dummy.png", online: true },
            2: { name: "Priya", avatar: "/dummy.png", online: false },
            3: { name: "Rahul", avatar: "/dummy.png", online: true },
            4: { name: "Anika", avatar: "/dummy.png", online: true }
        },
        assignments: [
            {
                id: 1,
                title: "Sorting Algorithms",
                due: "2024-03-25",
                submitted: true,
                grade: "A",
                description: "Implement and analyze various sorting algorithms",
                files: ["Problem Statement.pdf", "Sample Data.zip"]
            },
            {
                id: 2,
                title: "Graph Theory",
                due: "2024-04-01",
                submitted: false,
                grade: null,
                description: "Solve graph traversal problems using BFS and DFS",
                files: ["Assignment Guidelines.md"]
            }
        ],
        attendance: [
            { date: "2024-03-01", present: true, topic: "Introduction to Algorithms" },
            { date: "2024-03-04", present: true, topic: "Complexity Analysis" },
            { date: "2024-03-08", present: false, topic: "Divide and Conquer" },
            { date: "2024-03-11", present: true, topic: "Sorting Algorithms" },
            { date: "2024-03-15", present: true, topic: "Search Algorithms" },
            { date: "2024-03-18", present: false, topic: "Graph Theory" },
        ],
        grades: {
            midterm: { score: "A", feedback: "Excellent understanding of core concepts" },
            projects: { score: "B+", feedback: "Good implementation but needs better documentation" },
            final: { score: "Pending", feedback: "Results will be announced next week" }
        }
    },
    2: {
        title: "UI/UX Fundamentals",
        instructor: "Dr. Gopi Krishna",
        enrolled: false,
        sectionNo: 24,
        participants: {
            1: { name: "Kiran", avatar: "/student5.jpg", online: true },
            2: { name: "Sneha", avatar: "/student6.jpg", online: false }
        },
        attendance: [
            { date: "", present: false, topic: "" }
        ],
        assignments: [
            {
                id: 1,
                title: "Design Principles",
                due: "2024-04-15",
                submitted: false,
                grade: null,
                description: "Create basic UI layouts using design principles",
                files: ["Design Guidelines.pdf"]
            }
        ],
        grades: {
            midterm: { score: "", feedback: "" },
            projects: { score: "", feedback: "" },
            final: { score: "", feedback: "" }
        }
    }
};

const CourseDetailPage = () => {
    const params = useParams()
    const courseId = Number(params.id)
    const course = courseDetails[courseId as keyof typeof courseDetails]

    if (!course) return <div className="p-6 text-center">Course not found</div>

    const handleFileUpload = (assignmentId: number) => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.onchange = (e: Event) => {
            const target = e.target as HTMLInputElement;
            const file = target.files?.[0];
            if (file) {
                console.log('Uploading file:', file.name, 'for assignment', assignmentId);
                // Add your file upload logic here
            }
        };
        fileInput.click();
    };
    const totalClasses = course.attendance.length;
    const presentClasses = course.attendance.filter(s => s.present).length;
    const attendancePercentage = (presentClasses / totalClasses) * 100;
    const attendanceStatus = attendancePercentage >= 75 ? 'good' : attendancePercentage >= 50 ? 'average' : 'poor';
    const [selectedDate, setSelectedDate] = useState<string | null>(null);

    const generateCalendarDays = (date: Date = new Date()) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1);
        const startOffset = firstDay.getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        const days = [];
        // Previous month days
        for (let i = 0; i < startOffset; i++) {
            days.push({ date: new Date(year, month, -startOffset + i + 1), isCurrentMonth: false });
        }
        // Current month days
        for (let i = 1; i <= daysInMonth; i++) {
            days.push({ date: new Date(year, month, i), isCurrentMonth: true });
        }
        // Next month days
        const remainingDays = 42 - days.length;
        for (let i = 1; i <= remainingDays; i++) {
            days.push({ date: new Date(year, month + 1, i), isCurrentMonth: false });
        }
        return days.map(day => ({
            ...day,
            isToday: isSameDay(day.date, new Date())
        }));
    };

    const calendarDays = generateCalendarDays();
    const gradePoints: { [key: string]: number } = {
        'A+': 10.0, 'A': 9.0, 'B+': 8.0,
        'B': 7.0, 'C+': 6.0, 'C': 5.0,
        'D+': 4.0, 'D': 3.0, 'E+': 2.0,
        'E': 1.0, 'F': 0.0
    };

    const calculateSubjectGPA = (grades: any) => {
        const validGrades = Object.values(grades)
            .filter((g: any) => g.score !== 'Pending' && gradePoints[g.score] !== undefined)
            .map((g: any) => gradePoints[g.score]);

        if (validGrades.length === 0) return 0;
        return validGrades.reduce((a, b) => a + b, 0) / validGrades.length;
    };

    const convertGradeToPoints = (grade: string) => {
        return gradePoints[grade] || 'N/A';
    };

    const convertGpaToLetter = (gpa: number) => {
        if (gpa >= 9.0) return 'A+';
        if (gpa >= 8.0) return 'A';
        if (gpa >= 7.0) return 'B+';
        if (gpa >= 6.0) return 'B';
        if (gpa >= 5.0) return 'C+';
        if (gpa >= 4.0) return 'C';
        if (gpa >= 3.0) return 'D+';
        if (gpa >= 2.0) return 'D';
        if (gpa >= 1.0) return 'E';
        return 'F';
    };


    return (
        <div className="min-h-screen p-6 bg-background text-foreground space-y-8">
            {/* Course Header */}
            <div className="bg-glass-bg backdrop-blur-glass rounded-xl border border-glass-border p-8 mb-6 shadow-glass">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
                        <div className="flex items-center gap-4">
                            <p className="text-muted-foreground flex items-center gap-2">
                                <GraduationCap className="w-5 h-5 text-purple-500" />
                                {course.instructor}
                            </p>
                            <span className="bg-purple-500/10 text-purple-500 px-3 py-1 rounded-full text-sm">
                                Section {course.sectionNo}
                            </span>
                        </div>
                    </div>
                    {course.enrolled ? (
                        <div className="flex items-center gap-4">
                            <Link href="">
                                <span className="bg-purple-500/10 text-purple-500 px-4 py-2 rounded-lg text-sm font-medium">
                                Discussion
                                </span>
                            </Link>
                            <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors">
                                Course Materials
                            </button>
                        </div>
                    ) : (
                        <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors">
                            Enroll Now
                        </button>
                    )}
                </div>
            </div>
            {course.enrolled ? (
                <div className="space-y-8">
                    {/* Assignments Section */}
                    <section className=" rounded-xl p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <FileText className="w-8 h-8 text-purple-500" />
                            <h2 className="text-2xl font-semibold">Assignments</h2>
                        </div>
                        <div className="space-y-6">
                            {course.assignments.map(assignment => (
                                <div key={assignment.id} className="bg-input-bg p-6 rounded-xl border border-glass-border hover:border-purple-500 transition-colors">
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                                        <div>
                                            <h3 className="text-lg font-semibold mb-2">{assignment.title}</h3>
                                            <p className="text-purple-500 text-sm">{assignment.description}</p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className={`px-3 py-1 rounded-full text-sm ${
                                                assignment.submitted
                                                    ? 'bg-green-500/10 text-green-500'
                                                    : 'bg-red-500/10 text-red-500'
                                            }`}>
                                                {assignment.submitted ? 'Submitted' : 'Pending'}
                                            </span>
                                            {!assignment.submitted && (
                                                <button
                                                    onClick={() => handleFileUpload(assignment.id)}
                                                    className="flex items-center gap-2 bg-purple-500/10 text-purple-500 px-4 py-2 rounded-lg hover:bg-purple-500/20 transition-colors"
                                                >
                                                    <Upload className="w-4 h-4" />
                                                    Upload Solution
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    <div className="border-t border-glass-border pt-4 mt-4">
                                        <div className="flex flex-wrap gap-4 justify-between">
                                            <div className="space-y-2">
                                                <h4 className="text-sm font-medium text-muted-foreground">Due Date</h4>
                                                <p className="flex items-center gap-2">
                                                    <CalendarCheck className="w-4 h-4 text-purple-500" />
                                                    {assignment.due}
                                                </p>
                                            </div>

                                            <div className="space-y-2">
                                                <h4 className="text-sm font-medium text-muted-foreground">Files</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {assignment.files.map((file, index) => (
                                                        <span key={index} className="bg-glass-bg px-3 py-1 rounded-lg text-sm">
                                                            {file}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {assignment.submitted && (
                                                <div className="space-y-2">
                                                    <h4 className="text-sm font-medium text-muted-foreground">Grade</h4>
                                                    <span className="flex items-center gap-2 text-green-500">
                                                        <CheckCircle className="w-4 h-4" />
                                                        {assignment.grade}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </section>

                    {/* Attendance & Grades Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Attendance Section */}
                        <section className="   rounded-xl p-6 shadow-glass">
                            <div className="flex items-center gap-3 mb-6">
                                <CalendarCheck className="w-8 h-8 text-purple-500" />
                                <h2 className="text-2xl font-semibold">Attendance</h2>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Calendar */}
                                <div className="space-y-4">
                                    <div className="grid grid-cols-7 gap-1">
                                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                                            <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
                                                {day}
                                            </div>
                                        ))}
                                        {calendarDays.map((day, index) => {
                                            const dateStr = day.date.toISOString().split('T')[0];
                                            const attendanceEntry = course.attendance.find(a =>
                                                a.date && isSameDay(parseISO(a.date), day.date)
                                            );
                                            const isSelected = selectedDate === dateStr;
                                            const isClassDay = !!attendanceEntry;

                                            return (
                                                <button
                                                    key={index}
                                                    onClick={() => setSelectedDate(dateStr)}
                                                    className={`
                aspect-square p-2 flex items-center justify-center rounded-lg text-sm transition-colors
                ${!day.isCurrentMonth ? 'text-muted-foreground/50' : ''}
                ${isSelected ? 'bg-purple-500 text-white' : ''}
                ${day.isToday ? 'ring-2 ring-purple-500' : ''}
                ${isClassDay ?
                                                        (attendanceEntry?.present ?
                                                            'bg-green-500/10 hover:bg-green-500/20' :
                                                            'bg-red-500/10 hover:bg-red-500/20') :
                                                        'hover:bg-purple-200'}
            `}
                                                    title={day.isToday ? "Today" : undefined}
                                                >
                                                    {day.date.getDate()}
                                                    {isClassDay && (
                                                        <div className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-foreground/50" />
                                                    )}
                                                </button>
                                            );
                                        })}
                                        {selectedDate && (
                                            <div className="mt-4 p-4 bg-input-bg rounded-lg">
                                                {course.attendance.find(a => a.date === selectedDate) ? (
                                                    <div className="flex items-center gap-2">
                                                        <BookOpen className="w-4 h-4 text-purple-500" />
                                                        <span>
                    {course.attendance.find(a => a.date === selectedDate)?.present ?
                        "Attended - " : "Missed - "}
                                                            {course.attendance.find(a => a.date === selectedDate)?.topic}
                </span>
                                                    </div>
                                                ) : (
                                                    <div className="text-muted-foreground">
                                                        No class
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-input-bg p-6 rounded-xl border border-glass-border">
                                        <h3 className="text-lg font-semibold mb-4">Attendance Summary</h3>
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center">
                                                <span>Total Classes</span>
                                                <span className="font-medium">{totalClasses}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span>Present</span>
                                                <span className="text-green-500 font-medium">{presentClasses}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span>Absent</span>
                                                <span className="text-red-500 font-medium">{totalClasses - presentClasses}</span>
                                            </div>

                                            <div className="pt-4 space-y-2">
                                                <div className="flex items-center justify-between">
                                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-purple-200 text-purple-600">
                                    Attendance Rate
                                </span>
                                                    <span className="text-xs font-semibold text-purple-600">
                                    {attendancePercentage.toFixed(1)}%
                                </span>
                                                </div>
                                                <div className="h-2 rounded-full bg-glass-bg overflow-hidden">
                                                    <div
                                                        style={{ width: `${attendancePercentage}%` }}
                                                        className="h-full bg-purple-500 transition-all duration-300"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className={`p-4 rounded-xl border ${
                                            attendanceStatus === 'good' ? 'bg-green-500/10 border-green-500/20' :
                                                attendanceStatus === 'average' ? 'bg-yellow-500/10 border-yellow-500/20' :
                                                    'bg-red-500/10 border-red-500/20'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            {attendanceStatus === 'good' ? (
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                            ) : (
                                                <AlertCircle className={`w-5 h-5 ${
                                                    attendanceStatus === 'average' ? 'text-yellow-500' : 'text-red-500'
                                                }`} />
                                            )}
                                            <div>
                                                <h4 className="font-medium mb-1">Status</h4>
                                                <p className="text-sm text-muted-foreground">
                                                    {attendanceStatus === 'good'
                                                        ? "Your attendance is excellent! Keep it up."
                                                        : attendanceStatus === 'average'
                                                            ? "Your attendance needs improvement. Try to attend more classes."
                                                            : "Your attendance is critical. Please contact your advisor."}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Grades Section */}
                        <section className="bg-glass-bg backdrop-blur-glass border border-glass-border rounded-xl p-6 shadow-glass">
                            <div className="flex items-center gap-3 mb-6">
                                <Award className="w-8 h-8 text-purple-500" />
                                <h2 className="text-2xl font-semibold">Grades Overview</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* GPA Card */}
                                <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 p-6 rounded-xl border border-purple-500/30">
                                    <h3 className="text-lg font-semibold mb-4">Course GPA</h3>
                                    <div className="flex items-center gap-6">
                                        <div className="relative w-24 h-24">
                                            <svg className="w-full h-full" viewBox="0 0 100 100">
                                            </svg>
                                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold">
                            {calculateSubjectGPA(course.grades).toFixed(1)}
                        </span>
                                                <span className="text-xs text-muted-foreground">GPA</span>
                                            </div>
                                        </div>
                                        <div className="">
                                            <p className="text-sm text-muted-foreground">
                                                Based on {Object.keys(course.grades).length} evaluated components
                                            </p>
                                            <div className="mt-2 flex items-center gap-2">
                                                <span className="text-sm">Letter Grade:</span>
                                                <span className="font-semibold text-purple-500">
                            {convertGpaToLetter(calculateSubjectGPA(course.grades))}
                        </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" border-t border-purple-500/30 mt-4">
                                        <p className="text-sm italic text-muted-foreground p-2">
                                            "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful." – Albert Schweitzer
                                        </p>
                                    </div>
                                </div>

                                {/* Grades List */}
                                <div className="space-y-6">
                                    {Object.entries(course.grades).map(([key, value]) => (
                                        <div key={key} className="bg-input-bg p-4 rounded-lg border border-glass-border hover:border-purple-500/30 transition-colors">
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <h3 className="capitalize font-medium">{key}</h3>
                                                    {value.feedback && (
                                                        <p className="text-sm text-muted-foreground mt-1">
                                                            {value.feedback}
                                                        </p>
                                                    )}
                                                </div>
                                                <div className="text-right">
                            <span className={`px-3 py-1 rounded-full text-sm ${
                                value.score === 'Pending'
                                    ? 'bg-yellow-500/10 text-yellow-500'
                                    : 'bg-purple-500/10 text-purple-500'
                            }`}>
                                {value.score}
                            </span>
                                                    {value.score !== 'Pending' && (
                                                        <p className="text-xs text-muted-foreground mt-1">
                                                            {convertGradeToPoints(value.score)} GPA points
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            ) : (
                <div className="bg-glass-bg backdrop-blur-glass border border-glass-border rounded-xl p-8 shadow-glass">
                    <div className="flex flex-col items-center gap-6">
                        <div className="bg-purple-500/10 rounded-full p-4">
                            <GraduationCap className="w-12 h-12 text-purple-500" />
                        </div>
                        <div className="space-y-2 text-center">
                            <h3 className="text-xl font-semibold">Course Not Enrolled</h3>
                            <p className="text-muted-foreground max-w-md mx-auto">
                                Enroll in this course to access assignments, track attendance, view grades, and participate in class activities.
                            </p>
                        </div>
                        <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-colors">
                            Enroll Now
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default CourseDetailPage;