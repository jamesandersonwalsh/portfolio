import './global.css'
import { Inter } from 'next/font/google'
import { PropsWithChildren } from 'react'
import { container } from 'styled-system/patterns'
import { TopNavbar } from '@/components/AppShell/TopNavbar'
import { Paper } from '@/components/AppShell/Paper'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'James Walsh',
  description: 'Full Stack Javascript Engineer',
}

const mainStyles = container({
  py: '4rem',
})
export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={inter.className}>
        <Paper>
          <TopNavbar />
          <main className={mainStyles}>{children}</main>
        </Paper>
      </body>
    </html>
  )
}
