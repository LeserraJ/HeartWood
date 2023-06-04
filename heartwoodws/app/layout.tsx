import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Heartwood Books and Art',
  description: 'Specializing in Mystery, Science Fiction / Fantasy, Original Illustration Art, Illustrated Books and Manuscripts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
