import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MenuCheck — Restaurant Menu Compliance',
  description: 'Check restaurant menus for allergen and calorie compliance required by local laws.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b3813b3f-aff2-43de-a92d-aad0c82dc76f"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
