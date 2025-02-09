"use client"
import React from 'react'
import {
    Mail,
    BookOpen,
    CalendarCheck,
    Award,
    Trophy,
    Briefcase,
    Activity,
    Phone,
    Home,
    GraduationCap,
    School, Upload, CheckCircle, AlertCircle
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar } from 'recharts';

const Profile = () => {
    const user = {
        name: "Anvesh Yadav",
        email: "2300032813@kluniversity.in",
        phone: "+91 9063967297",
        address: "Tirupati",
        studentId: "2300032813",
        role: "Student",
        college: "KL University",
        department: "Computer Science",
        year: "Second Year",
        semester: "Semester 4",
        hostelStatus: "Hosteler",
        avatar: "/profile.png",
        cgpa: 9.5,
        maxGpa: 10,
        studyHours: 56,
        streak: 7,
        fees: {
            total: 150000,
            paid: 120000,
            balance: 30000,
            dueDate: "2024-04-30"
        },
        attendance: [
            { date: "2024-03-05", present: true },
            { date: "2024-03-12", present: true },
            { date: "2024-03-19", present: false },
            // ... more attendance records
        ]
    };

    const academicData = {
        courses: [
            { name: "Advanced Algorithms", progress: 85, status: "In Progress" },
            { name: "Machine Learning", progress: 100, status: "Completed" },
            { name: "Database Systems", progress: 45, status: "In Progress" }
        ],
        deadlines: [
            { title: "ML Project Submission", date: "2024-03-25", course: "Machine Learning" },
            { title: "DBMS Midterm Exam", date: "2024-04-01", course: "Database Systems" }
        ],
        achievements: [
            { title: "Hackathon Winner", issuer: "Tech Fest 2024", date: "2024-02-15" },
            { title: "Python Certification", issuer: "Coding Academy", date: "2023-11-30" }
        ],
        semesterGPAs: [
            { semester: "Sem 1", gpa: 8.2 },
            { semester: "Sem 2", gpa: 8.7 },
            { semester: "Sem 3", gpa: 9.0 },
            { semester: "Sem 4", gpa: 9.3 },
            { semester: "Sem 5", gpa: 9.1 },
            { semester: "Sem 6", gpa: 9.5 }
        ],
        subjectGrades: [
            { subject: "Data Structures", grade: "A+", credits: 4 },
            { subject: "Algorithms", grade: "A", credits: 3 },
            { subject: "Database Systems", grade: "A", credits: 3 },
            { subject: "Machine Learning", grade: "A+", credits: 4 }
        ],
        studyData: [
            { date: 'Mon', hours: 4 },
            { date: 'Tue', hours: 6 },
            { date: 'Wed', hours: 5 },
            { date: 'Thu', hours: 3 },
            { date: 'Fri', hours: 7 },
            { date: 'Sat', hours: 2 },
            { date: 'Sun', hours: 1 }
        ]
    };

    const CustomTooltip = ({ active, payload }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-card text-card-foreground p-2 rounded-lg border border-border">
                    <p className="text-sm font-medium">{`CGPA: ${payload[0].value}/${user.maxGpa}`}</p>
                </div>
            );
        }
        return null;
    };
    const currentMonth = new Date();
    const totalClasses = 25;
    const presentClasses = 20;
    const attendancePercentage = (presentClasses / totalClasses) * 100;
    const attendanceStatus = attendancePercentage >= 85 ? 'good' : attendancePercentage >= 70 ? 'average' : 'poor';
    return (
        <div className="min-h-screen p-6 bg-background text-foreground space-y-8">
            {/* Profile Header Section */}
            <div className="bg-glass-bg backdrop-blur-glass rounded-2xl border border-glass-border shadow-glass">
                <div className="p-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                        <div className="relative group">
                            <div className="w-40 h-40 rounded-2xl border-4 border-purple-500/30 overflow-hidden shadow-profile">
                                <img
                                    src={user.avatar}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <button className="absolute bottom-4 right-4 bg-purple-500 text-white p-2 rounded-xl shadow-lg hover:bg-purple-600 transition-all">
                                <Upload className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Contact Details */}
                            <div className="space-y-4">
                                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent">
                                    {user.name}
                                </h1>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 bg-input-bg/50 p-3 rounded-xl">
                                        <Mail className="w-5 h-5 text-purple-500" />
                                        <div>
                                            <p className="text-sm font-medium">College Email</p>
                                            <p className="text-muted-foreground text-sm">{user.email}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 bg-input-bg/50 p-3 rounded-xl">
                                        <Phone className="w-5 h-5 text-purple-500" />
                                        <div>
                                            <p className="text-sm font-medium">Contact Number</p>
                                            <p className="text-muted-foreground text-sm">{user.phone}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 bg-input-bg/50 p-3 rounded-xl">
                                        <Home className="w-5 h-5 text-purple-500" />
                                        <div>
                                            <p className="text-sm font-medium">Address</p>
                                            <p className="text-muted-foreground text-sm">{user.address}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Academic Details */}
                            <div className="space-y-4">
                                <div className="bg-input-bg/50 p-4 rounded-xl border border-glass-border">
                                    <div className="flex items-center gap-3 mb-2">
                                        <GraduationCap className="w-6 h-6 text-purple-500" />
                                        <h3 className="font-semibold">{user.college}</h3>
                                    </div>
                                    <p className="text-muted-foreground text-sm">{user.department}</p>

                                    <div className="grid grid-cols-2 gap-2 mt-4">
                                        <div className="bg-purple-500/10 p-2 rounded-lg text-center">
                                            <p className="text-xs text-purple-500">Current Year</p>
                                            <p className="font-medium text-sm">{user.year}</p>
                                        </div>
                                        <div className="bg-purple-500/10 p-2 rounded-lg text-center">
                                            <p className="text-xs text-purple-500">Semester</p>
                                            <p className="font-medium text-sm">{user.semester}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-purple-500/10 to-transparent p-4 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <School className="w-6 h-6 text-purple-500" />
                                        <div>
                                            <p className="text-sm font-medium">Student Status</p>
                                            <p className="text-purple-500 font-semibold">{user.hostelStatus}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Academic Performance Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* GPA Progress */}
                <div className="bg-glass-bg backdrop-blur-glass border border-glass-border rounded-xl p-6 shadow-glass">
                    <div className="flex items-center gap-3 mb-6">
                        <Award className="w-8 h-8 text-purple-500" />
                        <h2 className="text-2xl font-semibold">CGPA Progress</h2>
                    </div>

                    <div className="flex flex-col items-center gap-6">
                        <div className="relative w-40 h-40">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={[{ value: user.cgpa }]}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={55}
                                        outerRadius={70}
                                        startAngle={90}
                                        endAngle={-270}
                                        dataKey="value"
                                    >
                                        <Cell fill="#7B1FA2" />
                                    </Pie>
                                    <Tooltip content={<CustomTooltip />} />
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-3xl font-bold">{user.cgpa}</span>
                                <span className="text-sm text-muted-foreground">/ {user.maxGpa}</span>
                            </div>
                        </div>

                        <div className="w-full space-y-4">
                            {/* Semester GPA Chart */}
                            <div className="bg-input-bg p-4 rounded-lg border border-glass-border">
                                <h3 className="font-medium mb-4">Semester-wise GPA</h3>
                                <div className="h-40">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={academicData.semesterGPAs}>
                                            <XAxis dataKey="semester" />
                                            <YAxis domain={[0, 10]} />
                                            <Tooltip />
                                            <Bar
                                                dataKey="gpa"
                                                fill="#7B1FA2"
                                                radius={[4, 4, 0, 0]}
                                            />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            {/* Subject Grades */}
                            <div className="bg-input-bg p-4 rounded-lg border border-glass-border">
                                <h3 className="font-medium mb-4">Subject-wise Grades</h3>
                                <div className="space-y-3">
                                    {academicData.subjectGrades.map((subject, index) => (
                                        <div key={index} className="flex justify-between items-center">
                                            <span className="text-sm">{subject.subject}</span>
                                            <div className="flex items-center gap-4">
                                                <span className="text-purple-500 font-medium">{subject.grade}</span>
                                                <span className="text-muted-foreground text-sm">
                                                    {subject.credits} Credits
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Courses & Deadlines */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Enrolled Courses */}
                    <div className="bg-glass-bg backdrop-blur-glass border border-glass-border rounded-xl p-6 shadow-glass">
                        <div className="flex items-center gap-3 mb-6">
                            <BookOpen className="w-8 h-8 text-purple-500" />
                            <h2 className="text-2xl font-semibold">Current Courses</h2>
                        </div>

                        <div className="space-y-6">
                            {academicData.courses.map((course, index) => (
                                <div key={index} className="bg-input-bg p-4 rounded-lg border border-glass-border">
                                    <div className="flex justify-between items-center mb-3">
                                        <h3 className="font-medium">{course.name}</h3>
                                        <span className={`text-sm px-2 py-1 rounded-full ${
                                            course.status === 'Completed'
                                                ? 'bg-green-500/10 text-green-500'
                                                : 'bg-purple-500/10 text-purple-500'
                                        }`}>
                                            {course.status}
                                        </span>
                                    </div>
                                    <div className="w-full bg-glass-bg h-2 rounded-full">
                                        <div
                                            className="bg-purple-500 h-2 rounded-full"
                                            style={{ width: `${course.progress}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Academic Deadlines */}
                    <div className="bg-glass-bg backdrop-blur-glass border border-glass-border rounded-xl p-6 shadow-glass">
                        <div className="flex items-center gap-3 mb-6">
                            <CalendarCheck className="w-8 h-8 text-purple-500" />
                            <h2 className="text-2xl font-semibold">Upcoming Deadlines</h2>
                        </div>

                        <div className="space-y-4">
                            {academicData.deadlines.map((deadline, index) => (
                                <div key={index} className="bg-input-bg p-4 rounded-lg border border-glass-border">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h3 className="font-medium">{deadline.title}</h3>
                                            <p className="text-sm text-muted-foreground">{deadline.course}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm text-purple-500">
                                                {new Date(deadline.date).toLocaleDateString()}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                {Math.ceil((new Date(deadline.date).getTime() - Date.now()) / (1000 * 3600 * 24))} days left
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-glass-bg backdrop-blur-glass border border-glass-border rounded-xl p-6 shadow-glass">
                    <div className="flex items-center gap-3 mb-6">
                        <Activity className="w-8 h-8 text-purple-500" />
                        <h2 className="text-2xl font-semibold">Fees Balance</h2>
                    </div>

                    <div className="flex flex-col items-center gap-6">
                        <div className="relative w-40 h-40">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={[{ value: user.fees.paid }]}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={55}
                                        outerRadius={70}
                                        startAngle={90}
                                        endAngle={-270}
                                        dataKey="value"
                                    >
                                        <Cell fill="#7B1FA2" />
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-2xl font-bold">₹{user.fees.balance}</span>
                                <span className="text-sm text-muted-foreground">Remaining</span>
                            </div>
                        </div>

                        <div className="w-full space-y-4">
                            <div className="bg-input-bg p-4 rounded-lg border border-glass-border">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-muted-foreground">Total Fees</span>
                                    <span className="font-medium">₹{user.fees.total}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">Paid</span>
                                    <span className="text-green-500 font-medium">₹{user.fees.paid}</span>
                                </div>
                            </div>

                            <div className="bg-input-bg p-4 rounded-lg border border-glass-border">
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">Due Date</span>
                                    <span className="text-purple-500 font-medium">
                  {new Date(user.fees.dueDate).toLocaleDateString()}
                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Attendance Section */}
                <div className="bg-glass-bg backdrop-blur-glass rounded-xl p-6 shadow-glass">
                    <div className="flex items-center gap-3 mb-6">
                        <CalendarCheck className="w-8 h-8 text-purple-500" />
                        <h2 className="text-2xl font-semibold">Attendance</h2>
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

                        <div className={`p-4 rounded-xl border ${
                            attendanceStatus === 'good' ? 'bg-green-500/10 border-green-500/20' :
                                attendanceStatus === 'average' ? 'bg-yellow-500/10 border-yellow-500/20' :
                                    'bg-red-500/10 border-red-500/20'
                        }`}>
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
            </div>
            {/* Activity & Achievements Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Learning Analytics */}
                <div className="bg-glass-bg backdrop-blur-glass border border-glass-border rounded-xl p-6 shadow-glass">
                    <div className="flex items-center gap-3 mb-6">
                        <BarChart className="w-8 h-8 text-purple-500" />
                        <h2 className="text-2xl font-semibold">Learning Analytics</h2>
                    </div>

                    <div className="space-y-6">
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div className="bg-input-bg p-4 rounded-lg border border-glass-border">
                                <div className="text-2xl font-bold text-purple-500">{user.streak}</div>
                                <div className="text-sm text-muted-foreground">Day Streak</div>
                            </div>
                            <div className="bg-input-bg p-4 rounded-lg border border-glass-border">
                                <div className="text-2xl font-bold text-purple-500">{user.studyHours}</div>
                                <div className="text-sm text-muted-foreground">Study Hours</div>
                            </div>
                            <div className="bg-input-bg p-4 rounded-lg border border-glass-border">
                                <div className="text-2xl font-bold text-purple-500">
                                    {academicData.courses.filter(c => c.status === 'Completed').length}
                                </div>
                                <div className="text-sm text-muted-foreground">Courses Completed</div>
                            </div>
                        </div>

                        <div className="bg-input-bg p-4 rounded-lg border border-glass-border">
                            <h3 className="font-medium mb-4">Weekly Study Hours</h3>
                            <div className="h-40">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={academicData.studyData}>
                                        <XAxis dataKey="date" />
                                        <YAxis />
                                        <Tooltip />
                                        <Line
                                            type="monotone"
                                            dataKey="hours"
                                            stroke="#7B1FA2"
                                            strokeWidth={2}
                                            dot={{ fill: '#7B1FA2' }}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Achievements Section */}
                <div className="bg-glass-bg backdrop-blur-glass border border-glass-border rounded-xl p-6 shadow-glass">
                    <div className="flex items-center gap-3 mb-6">
                        <Trophy className="w-8 h-8 text-purple-500" />
                        <h2 className="text-2xl font-semibold">Achievements</h2>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {academicData.achievements.map((achievement, index) => (
                            <div key={index} className="bg-input-bg p-4 rounded-lg border border-glass-border">
                                <div className="flex items-center gap-4">
                                    <div className="bg-purple-500/10 p-3 rounded-lg">
                                        <Briefcase className="w-6 h-6 text-purple-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">{achievement.title}</h3>
                                        <p className="text-sm text-muted-foreground">{achievement.issuer}</p>
                                        <p className="text-xs text-muted-foreground">
                                            {new Date(achievement.date).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile