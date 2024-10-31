import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { MainNav } from '@/components/common/main-nav'
import '../globals.css'
import Link from 'next/link'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'LeChefGo',
  description: 'Delight in Every Dish, Managed with Ease',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        <div className="flex flex-col min-h-screen">
          <MainNav />
          <main className="flex-grow">
            {children}
          </main>
          <footer className="bg-secondary-900 text-black py-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <Link href="/dashboard" className="flex items-center space-x-2">
                    <span className="font-bold text-xl">LeChefGo</span>
                  </Link>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-primary-500">About Us</a>
                  <a href="#" className="hover:text-primary-500">Contact</a>
                  <a href="#" className="hover:text-primary-500">Terms of Service</a>
                  <a href="#" className="hover:text-primary-500">Privacy Policy</a>
                </div>
              </div>
              <div className="mt-8 text-center text-sm text-secondary-400">
                © {new Date().getFullYear()} LeChefGo. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}