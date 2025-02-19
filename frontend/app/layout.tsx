import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Lurnex',
    description: 'A NextGen LMS',
    icons: '/logo.png',
}
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className="main">
            <div className="gradient-pattern" />
        </div>
        <main className="">
            {children}
        </main>
        </body>
        </html>
    )
}