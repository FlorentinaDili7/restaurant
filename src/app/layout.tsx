import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Notification from './components/Notification'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AuthProvider from './components/AuthProvider'
import QueryProvider from './components/QueryProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pizza Mania',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Notification /> */}
        <AuthProvider>
          <QueryProvider>
            <Navbar />
            {children}
            <Footer />
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
