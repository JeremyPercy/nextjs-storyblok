import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'

import '../styles/globals.css'

import { cn } from '../lib/utils'

import StoryblokProvider from './StoryblokProvider'

export const metadata: Metadata = {
  title: 'Storyblok Next.js Starter',
  description: 'Storyblok Next.js Starter',
  icons: '/favicon.ico',
}

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_SB_ACCESS_TOKEN,
  use: [apiPlugin],
})

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--barlow',
  weight: ['600', '700', '900'],
})

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable,
          )}
        >
          {children}
        </body>
      </html>
    </StoryblokProvider>
  )
}
