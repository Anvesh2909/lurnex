import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="ml-20 md:ml-24 flex-1 p-6">
                {children}
            </div>
        </div>
    );
}