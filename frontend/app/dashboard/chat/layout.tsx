"use client"

import { Search, Users } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

// Chat interface
interface Chat {
    id: string
    name: string
    type: 'group' | 'direct'
    members?: number
    unread?: number
    avatar?: string
    status?: 'online' | 'offline'
}

const chats: Chat[] = [
    { id: 'group-1', name: 'CS201 - Data Structures', type: 'group', members: 23, unread: 2 },
    { id: 'direct-1', name: 'Dr. Smith', type: 'direct', avatar: '/dummy.png', status: 'online' },
    { id: 'direct-2', name: 'John Doe', type: 'direct', avatar: '/dummy.png', status: 'offline' },
]

export default function ChatLayout({ children }: { children: React.ReactNode }) {
    const [selectedChat, setSelectedChat] = useState<string | null>(null)

    return (
        <div className="flex h-[calc(100vh-4rem)] bg-background text-foreground">
            {/* Sidebar */}
            <div className="w-full md:w-80 bg-glass-bg backdrop-blur border-r border-glass-border">
                <div className="p-4 border-b border-glass-border">
                    <h2 className="text-xl font-bold mb-4">Chats</h2>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search chats..."
                            className="w-full bg-input-bg border border-purple-300 outline-none rounded-lg pl-10 pr-4 py-2"
                        />
                        <Search className="absolute left-3 top-2.5 w-5 h-5 text-purple-500" />
                    </div>
                </div>

                <div className="overflow-y-auto h-[calc(100vh-12rem)]">
                    {chats.map(chat => (
                        <Link href={`/dashboard/chat/${chat.id}`} key={chat.id}>
                            <div
                                onClick={() => setSelectedChat(chat.id)}
                                className={`flex items-center gap-4 p-4 cursor-pointer hover:bg-glass-bg ${
                                    selectedChat === chat.id ? 'bg-purple-500/20 border-l-4 border-purple-500' : ''
                                }`}
                            >
                                {chat.type === 'group' ? (
                                    <div className="p-2 rounded-lg bg-purple-500/20">
                                        <Users className="w-6 h-6 text-purple-500" />
                                    </div>
                                ) : (
                                    <img src={chat.avatar || '/dummy.png'} className="w-10 h-10 rounded-full" alt={chat.name} />
                                )}
                                <div>
                                    <p className="font-semibold">{chat.name}</p>
                                    {chat.unread && <span className="text-xs text-purple-500">{chat.unread} unread messages</span>}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="flex-1">{children}</div>
        </div>
    )
}