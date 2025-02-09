"use client"

import { useState, useEffect, useRef } from 'react'
import { useParams } from 'next/navigation'
import { Send, Paperclip, Smile } from 'lucide-react'

// Message Interface
interface Message {
    id: number
    sender: string
    text: string
    timestamp: string
    type: 'text' | 'file'
    avatar?: string
}

const sampleMessages: Message[] = [
    { id: 1, sender: 'Dr. Smith', text: 'Welcome to the Data Structures group!', timestamp: '09:30', type: 'text', avatar: '/dummy.png' },
    { id: 2, sender: 'You', text: 'Glad to be here!', timestamp: '09:32', type: 'text' },
]

export default function ChatDetail() {
    const { id } = useParams()
    const [messages, setMessages] = useState<Message[]>(sampleMessages)
    const [message, setMessage] = useState('')
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const sendMessage = () => {
        if (message.trim()) {
            setMessages([...messages, { id: Date.now(), sender: 'You', text: message, timestamp: 'Now', type: 'text' }])
            setMessage('')
        }
    }

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    return (
        <div className="flex flex-col h-full">
            {/* Chat Header */}
            <div className="p-4 bg-glass-bg border-b border-glass-border flex items-center">
                <h2 className="text-xl font-bold">{(id as string).replace('-', ' ')}</h2>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map(msg => (
                    <div key={msg.id} className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[70%] rounded-xl p-4 ${msg.sender === 'You' ? 'bg-purple-500 text-white' : 'bg-glass-bg'}`}>
                            {msg.sender !== 'You' && <p className="text-sm font-medium">{msg.sender}</p>}
                            <p className="mt-1">{msg.text}</p>
                            <p className="text-xs text-right mt-2 opacity-75">{msg.timestamp}</p>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="p-4 bg-glass-bg border-t border-glass-border flex items-center gap-2">
                <button className="p-2 rounded-full hover:bg-purple-500/20">
                    <Paperclip className="w-5 h-5 text-purple-500" />
                </button>
                <input
                    type="text"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 bg-input-bg border border-purple-300 rounded-lg px-4 py-2 outline-none"
                    onKeyPress={e => e.key === 'Enter' && sendMessage()}
                />
                <button className="p-2 rounded-full hover:bg-purple-500/20">
                    <Smile className="w-5 h-5 text-purple-500" />
                </button>
                <button className="p-2 rounded-full bg-purple-500 text-white hover:bg-purple-600" onClick={sendMessage}>
                    <Send className="w-5 h-5" />
                </button>
            </div>
        </div>
    )
}
