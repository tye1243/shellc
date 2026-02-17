import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TYE - Transform. Your. Existence. | Elite Personal Training',
  description: 'Elite personal training and transformation coaching. 1:1 training, online coaching, and custom programs designed to transform your body and mind.',
  keywords: ['personal trainer', 'fitness coaching', 'transformation', 'online coaching', '1:1 training', 'custom programs'],
  openGraph: {
    title: 'TYE - Transform. Your. Existence.',
    description: 'Elite Personal Training & Transformation Coaching',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}
