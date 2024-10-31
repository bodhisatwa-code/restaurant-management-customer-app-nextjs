'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Search, Clipboard, User, HelpCircle, Menu, X, ShoppingCartIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const menuItems = [
  { name: 'Home', href: '/dashboard', icon: Home },
  { name: 'Search', href: '/restaurant-listing', icon: Search },
  { name: 'Orders', href: '/order-tracking', icon: Clipboard },
  { name: 'Profile', href: '/user-profile', icon: User },
  { name: 'Cart', href: '/cart-checkout', icon: ShoppingCartIcon },
  { name: 'Help', href: '/support-help', icon: HelpCircle },
]

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const NavItems = () => (
    <>
      {menuItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`flex items-center space-x-2 ${
            pathname === item.href
              ? 'text-primary-700 font-semibold'
              : 'text-secondary-700 hover:text-primary-700'
          }`}
        >
          <item.icon className="w-5 h-5" />
          <span>{item.name}</span>
        </Link>
      ))}
    </>
  )

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <span className="font-bold text-xl">LeChefGo</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <NavItems />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="lg">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-4">
                  <NavItems />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}