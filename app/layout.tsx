import './globals.css'
import { Inter } from 'next/font/google'
import { inconsolata, source_code_pro } from './fonts'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata = {
  title: 'David Smith\'s Portfolio',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-darkerGray ${inconsolata.className}`}>{children}</body>
    </html>
  )
}
