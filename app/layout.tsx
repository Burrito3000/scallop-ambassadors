import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Scallop Ambassadors',
  description: 'Ambassadors shaping the future of borderless finance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Gilroy:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{__html: `
          @font-face {
            font-family: 'Gilroy';
            font-display: swap;
          }
        `}} />
      </head>
      <body>{children}</body>
    </html>
  )
}

