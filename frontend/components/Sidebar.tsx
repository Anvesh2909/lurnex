"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Book, MessageCircle, Sheet, LogOut } from "lucide-react";

const menuItems = [
    { href: "/dashboard", icon: <Home />, label: "Home" },
    { href: "/dashboard/course", icon: <Book />, label: "Library" },
    { href: "/dashboard/chat", icon: <MessageCircle />, label: "Messages" },
    { href: "/dashboard/timetables", icon: <Sheet />, label: "Time Tables" },
];

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <div className="h-[95vh] w-20 bg-glass-border border flex flex-col items-center py-4 rounded-2xl fixed shadow mt-5 mb-5">
            <div className="ml-4 rounded-full">
                <img src="/logo.png" alt="Logo" className="w-2/3" />
            </div>
            <div className="flex flex-col items-center gap-6 mt-20 flex-1 pt-10">
                {menuItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`relative p-3 rounded-xl flex items-center justify-center transition-all ${
                            (item.href === "/dashboard"
                                ? pathname === item.href
                                : pathname.startsWith(item.href))
                                ? "bg-purple-200"
                                : "text-gray-500 hover:bg-gray-100"
                        }`}
                    >
                        {item.icon}
                    </Link>
                ))}
            </div>
            <div className="flex flex-col gap-4 pb-4">
                <button className="p-3 text-gray-500 hover:bg-gray-100 rounded-xl">
                    <LogOut />
                </button>
            </div>
        </div>
    );
};
export default Sidebar;