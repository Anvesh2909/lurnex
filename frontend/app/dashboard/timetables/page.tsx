"use client"
import React, { useState } from "react"
import { ChevronDown, Clock, User, School } from "lucide-react"

const TimeTable = () => {
    const [selectedYear, setSelectedYear] = useState("3")
    const [selectedSemester, setSelectedSemester] = useState("6")
    const timetableData = [
        {
            day: "Monday",
            slots: [
                { time: "9:00 - 10:30", subject: "Data Structures", code: "CS201", teacher: "Dr. Smith", type: "lecture", room: "A-101" },
                { time: "11:00 - 12:30", subject: "Algorithms", code: "CS202", teacher: "Prof. Johnson", type: "lab", room: "Lab-1" },
                { time: "14:00 - 15:30", subject: "Database Systems", code: "CS203", teacher: "Dr. Williams", type: "tutorial", room: "B-203" }
            ]
        },
        {
            day: "Tuesday",
            slots: [
                { time: "9:30 - 11:00", subject: "Operating Systems", code: "CS204", teacher: "Prof. Davis", type: "lecture",room: "C-302" },
                { time: "13:00 - 14:30", subject: "Computer Networks", code: "CS205", teacher: "Dr. Brown", type: "lab", room: "Lab-2" },
                { time: "15:00 - 16:30", subject: "Web Development", code: "CS206", teacher: "Dr. Miller", type: "tutorial", room: "B-204" }
            ]
        },
        {
            day: "Wednesday",
            slots: [
                { time: "9:00 - 10:30", subject: "Software Engineering", code: "CS207", teacher: "Prof. Wilson", type: "lecture", room: "A-101" },
                { time: "11:00 - 12:30", subject: "AI Fundamentals", code: "CS208", teacher: "Dr. Taylor", type: "lab", room: "Lab-1" },
                { time: "14:00 - 15:30", subject: "Machine Learning", code: "CS209", teacher: "Prof. Anderson", type: "tutorial", room: "B-203" }
            ]
        },
        {
            day: "Thursday",
            slots: [
                { time: "9:30 - 11:00", subject: "Cloud Computing", code: "CS210", teacher: "Dr. Thomas", type: "lecture", room: "C-302" },
                { time: "13:00 - 14:30", subject: "Mobile Development", code: "CS211", teacher: "Prof. Garcia", type: "lab", room: "Lab-2" },
                { time: "15:00 - 16:30", subject: "System Design", code: "CS212", teacher: "Dr. Lee", type: "tutorial", room: "B-204" }
            ]
        },
        {
            day: "Friday",
            slots: [
                { time: "9:00 - 10:30", subject: "Cybersecurity", code: "CS213", teacher: "Prof. White", type: "lecture", room: "A-101" },
                { time: "11:00 - 12:30", subject: "IoT Systems", code: "CS214", teacher: "Dr. Harris", type: "lab", room: "Lab-1" },
                { time: "14:00 - 15:30", subject: "Project Workshop", code: "CS215", teacher: "Prof. Martinez", type: "tutorial", room: "B-203" }
            ]
        }
    ]

    const typeColors:{[key: string]: string} = {
        lecture: "bg-purple-500/20 text-purple-500",
        lab: "bg-blue-500/20 text-blue-500",
        tutorial: "bg-green-500/20 text-green-500"
    }

    return (
        <div className="min-h-screen p-6 bg-background">
            <div className="bg-glass-bg backdrop-blur-glass border border-glass-border rounded-lg p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                    <h1 className="text-2xl font-bold text-purple-500">Academic Timetable</h1>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-4 bg-input-bg rounded-lg p-2">
                            <div className="relative">
                                <select
                                    value={selectedYear}
                                    onChange={(e) => setSelectedYear(e.target.value)}
                                    className="appearance-none bg-transparent py-2 pl-4 pr-8 text-foreground focus:outline-none"
                                >
                                    {[1, 2, 3, 4].map(year => (
                                        <option key={year} value={year}>{year} Year</option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-2.5 w-5 h-5 text-muted-foreground pointer-events-none" />
                            </div>

                            <div className="relative">
                                <select
                                    value={selectedSemester}
                                    onChange={(e) => setSelectedSemester(e.target.value)}
                                    className="appearance-none bg-transparent py-2 pl-4 pr-8 text-foreground focus:outline-none"
                                >
                                    {[1, 2].map(sem => (
                                        <option key={sem} value={sem}>Semester {sem}</option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-2.5 w-5 h-5 text-muted-foreground pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto rounded-lg border border-glass-border">
                    <table className="w-full">
                        <thead className="bg-input-bg">
                        <tr className="border-b border-glass-border">
                            <th className="p-4 text-left text-muted-foreground font-medium">Day</th>
                            <th className="p-4 text-left text-muted-foreground font-medium">Time</th>
                            <th className="p-4 text-left text-muted-foreground font-medium">Subject</th>
                            <th className="p-4 text-left text-muted-foreground font-medium">Teacher</th>
                            <th className="p-4 text-left text-muted-foreground font-medium">Classroom</th>
                            <th className="p-4 text-left text-muted-foreground font-medium">Type</th>
                        </tr>
                        </thead>
                        <tbody>
                        {timetableData.map((dayData) => (
                            <React.Fragment key={dayData.day}>
                                {dayData.slots.map((slot, index) => (
                                    <tr
                                        key={`${dayData.day}-${index}`}
                                        className="border-b border-glass-border last:border-b-0 hover:bg-glass-bg transition-colors"
                                    >
                                        {index === 0 && (
                                            <td rowSpan={dayData.slots.length} className="p-4 align-top font-medium text-foreground">
                                                {dayData.day}
                                            </td>
                                        )}
                                        <td className="p-4">
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <Clock className="w-4 h-4 text-purple-500" />
                                                {slot.time}
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <div>
                                                <p className="font-medium text-foreground">{slot.subject}</p>
                                                <p className="text-sm text-purple-500">{slot.code}</p>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <User className="w-4 h-4 text-purple-500" />
                                                {slot.teacher}
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <School className="w-4 h-4 text-purple-500" />
                                                {slot.room}
                                            </div>
                                        </td>
                                        <td className="p-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${typeColors[slot.type]}`}>
                                                    {slot.type}
                                                </span>
                                        </td>
                                    </tr>
                                ))}
                            </React.Fragment>
                        ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-purple-500/20"></div>
                        <span className="text-sm text-muted-foreground">Lecture</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500/20"></div>
                        <span className="text-sm text-muted-foreground">Lab Session</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                        <span className="text-sm text-muted-foreground">Tutorial</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TimeTable