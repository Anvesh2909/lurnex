"use client"
import React, { useState } from "react";
import {
    Bell,
    Megaphone,
    Calendar,
    Search,
    ChevronLeft, ChevronRight,
    Quote
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import Link from "next/link";

const DashboardHome = () => {
    const user = {
        name: "Anvesh Yadav",
        email: "anveshydavmokam@gamil.com",
        role: "Student",
        avatar: "/profile.png"
    };
    const courseStats = {
        completed: 7,
        inProgress: 3,
        notStarted: 2
    };

    const pieChartData = [
        { name: 'Completed', value: courseStats.completed, color: '#7B1FA2' },
        { name: 'In Progress', value: courseStats.inProgress, color: '#9C27B0' },
        { name: 'Not Started', value: courseStats.notStarted, color: '#BA68C8' }
    ];


    const events = [
        { date: '2025-02-05', title: 'Project Submission DAA', type: 'deadline' },
        { date: '2025-02-07', title: 'Home Assignment', type: 'event' },
        { date: '2025-02-10', title: 'Course Registration Deadline', type: 'important' }
    ];

    const announcements = [
        { id: 1, title: 'New Course Available', date: '2025-02-04', content: 'New AI fundamentals course now open for registration' },
        { id: 2, title: 'System Maintenance', date: '2025-02-06', content: 'Scheduled maintenance on February 6th' }
    ];

    const inspirationalQuotes = [
        { quote: "The beautiful thing about learning is that no one can take it away from you.", author: "B.B. King" }
    ];

    const CustomTooltip = ({ active, payload }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-card text-card-foreground p-2 rounded-lg border border-border">
                    <p className="text-sm font-medium">{`${payload[0].name}: ${payload[0].value}`}</p>
                </div>
            );
        }
        return null;
    };
    const [currentMonth, setCurrentMonth] = useState(new Date(2025, 1, 1)); // February 2025
    const [selectedDate, setSelectedDate] = useState<string | null>(null);

    interface CalendarDay {
        date: Date;
        isCurrentMonth: boolean;
    }

    const generateCalendarDays = (date: Date): CalendarDay[] => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDayOfMonth = new Date(year, month, 1);
        const firstDayOfGrid = new Date(firstDayOfMonth);
        firstDayOfGrid.setDate(firstDayOfMonth.getDate() - firstDayOfMonth.getDay());

        const calendarDays: CalendarDay[] = [];
        for (let i = 0; i < 42; i++) {
            const day = new Date(firstDayOfGrid);
            day.setDate(firstDayOfGrid.getDate() + i);
            calendarDays.push({
                date: day,
                isCurrentMonth: day.getMonth() === month,
            });
        }
        return calendarDays;
    };

    const calendarDays = generateCalendarDays(currentMonth);

    const announcementsByDate = announcements.reduce((acc: { [key: string]: any[] }, announcement) => {
        const dateKey = announcement.date;
        if (!acc[dateKey]) acc[dateKey] = [];
        acc[dateKey].push(announcement);
        return acc;
    }, {});

    return (
        <div className="min-h-screen p-6 bg-background text-foreground">
            {/* Header Section */}
            <div className="flex flex-col gap-6 mb-6">
                <div className="flex justify-between items-center bg-glass-bg backdrop-blur-glass rounded-lg border border-glass-border p-4">
                    <div className="flex items-center gap-4">
                        <h1>
                            <span className="text-2xl font-semibold">Welcome Back, <span className="text-purple-500">{user.name}</span></span>
                        </h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex relative ">
                            <input
                                type="text"
                                placeholder="Search courses..."
                                className="pl-10 pr-4 py-2 bg-input-bg border border-purple-500 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none"
                            />
                            <Search className="absolute left-3 top-2.5 w-5 h-5 text-muted-foreground" />
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Bell className="w-6 h-6 text-purple-500 cursor-pointer hover:text-foreground transition-colors" />
                            <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
                        </div>
                        <div className="relative">
                            <Link href='dashboard/profile' className="flex items-center gap-2 cursor-pointer hover:bg-glass-bg rounded-lg p-2 transition-colors">
                                <img
                                    src={user.avatar}
                                    alt="Profile"
                                    className="w-10 h-10 rounded-full "
                                />
                                <div className="hidden md:block">
                                    <p className="text-sm  font-semibold">{user.name}</p>
                                    <p className="text-xs text-purple-500 text-muted-foreground">{user.role}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Inspirational Quote Banner */}
            <div className="mb-6 bg-glass-bg backdrop-blur-glass border border-glass-border rounded-lg p-6">
                <div className="flex items-start gap-4">
                    <Quote className="w-8 h-8 mt-1 flex-shrink-0 text-purple-500" />
                    <div>
                        <p className="text-xl font-medium italic mb-2">{inspirationalQuotes[0].quote}</p>
                        <p className="text-sm text-purple-500">- {inspirationalQuotes[0].author}</p>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Course Progress Section - Compact Version */}
                <div className="lg:col-span-3 bg-glass-bg backdrop-blur-glass border border-glass-border rounded-lg p-6">
                    <h2 className="text-lg font-semibold mb-4">Course Progress</h2>
                    <div className="space-y-4">
                        <div className="h-48">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={pieChartData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={40}
                                        outerRadius={60}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {pieChartData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip content={<CustomTooltip />} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                            {pieChartData.map((item) => (
                                <div key={item.name} className="bg-input-bg border border-input-border rounded-lg p-2 text-center">
                                    <div className="font-bold text-lg">{item.value}</div>
                                    <div className="text-xs text-muted-foreground">{item.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Events Section */}
                <div className="lg:col-span-5 bg-glass-bg backdrop-blur-glass border border-glass-border rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold">Upcoming Events</h2>
                        <Calendar className="w-6 h-6 text-purple-500" />
                    </div>
                    <div className="space-y-4">
                        {events.map((event, index) => (
                            <div
                                key={index}
                                className="p-4 rounded-lg flex items-center justify-between bg-input-bg border border-input-border"
                            >
                                <div>
                                    <h3 className="font-medium">{event.title}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {new Date(event.date).toLocaleDateString()}
                                    </p>
                                </div>
                                <div className={`text-xs px-3 py-1 rounded-full font-medium
                                    ${event.type === 'deadline' ? 'bg-destructive/10 text-destructive' :
                                    event.type === 'important' ? 'bg-primary/10 text-primary' :
                                        'bg-secondary/10 text-secondary'}`}
                                >
                                    {event.type}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Announcements Section */}
                <div className="lg:col-span-4 bg-glass-bg backdrop-blur-glass border border-glass-border rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold">Announcements</h2>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setCurrentMonth(new Date(
                                        currentMonth.getFullYear(),
                                        currentMonth.getMonth() - 1
                                    ))}
                                    className="p-1 hover:bg-input-bg rounded"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <span className="text-sm font-medium">
                    {currentMonth.toLocaleString('default', {
                        month: 'long',
                        year: 'numeric'
                    })}
                </span>
                                <button
                                    onClick={() => setCurrentMonth(new Date(
                                        currentMonth.getFullYear(),
                                        currentMonth.getMonth() + 1
                                    ))}
                                    className="p-1 hover:bg-input-bg rounded"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                            <Megaphone className="w-6 h-6 text-purple-500" />
                        </div>
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-1 mb-4">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                            <div key={day} className="text-center text-sm font-medium text-muted-foreground">
                                {day}
                            </div>
                        ))}
                        {calendarDays.map((day, index) => {
                            const dateKey = day.date.toLocaleDateString('en-IN', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-');
                            const hasAnnouncement = announcementsByDate[dateKey]?.length > 0;
                            const isSelected = selectedDate === dateKey;
                            const isToday = dateKey === new Date().toLocaleDateString('en-IN', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-');
                            return (
                                <button
                                    key={index}
                                    onClick={() => setSelectedDate(dateKey)}
                                    className={`p-2 text-center rounded-lg text-sm transition-colors relative
                ${isSelected
                                        ? 'bg-purple-500 text-white'
                                        : isToday
                                            ? 'bg-purple-100 border-2 border-purple-500'
                                            : day.isCurrentMonth
                                                ? 'hover:bg-purple-200'
                                                : 'bg-background text-muted-foreground'
                                    }`}
                                >
                                    <div className="flex flex-col items-center">
                                        <span>{day.date.getDate()}</span>
                                        {hasAnnouncement && !isSelected && !isToday && (
                                            <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2
                        w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                                        )}
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Selected Date Announcements */}
                    <div className="space-y-4">
                        {selectedDate ? (
                            announcementsByDate[selectedDate]?.length > 0 ? (
                                announcementsByDate[selectedDate].map((announcement) => (
                                    <div
                                        key={announcement.id}
                                        className="border-l-4 border-purple-500 pl-4 py-3 bg-input-bg rounded-r-lg"
                                    >
                                        <h3 className="font-medium">{announcement.title}</h3>
                                        <p className="text-sm text-muted-foreground mb-1">
                                            {announcement.content}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            {new Date(announcement.date).toLocaleDateString()}
                                        </p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-sm text-muted-foreground text-center">
                                    No announcements for this day
                                </p>
                            )
                        ) : (
                            <p className="text-sm text-muted-foreground text-center">
                                Select a date to view announcements
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DashboardHome;