import './globals.css'
import { inconsolata } from './fonts'

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
