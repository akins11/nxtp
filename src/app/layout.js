


import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ayomide',
  description: 'A brief description about me.',
}

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {props.children}
      </body>
    </html>
  )
}