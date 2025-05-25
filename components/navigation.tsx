"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, KeyRound } from "lucide-react"
import { cn } from "@/lib/utils"

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Residential", href: "/residential" },
  { name: "Commercial", href: "/commercial" },
  { name: "Automotive", href: "/automotive" },
  { name: "Emergency", href: "/emergency" },
  { name: "Safes", href: "/safes" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between max-w-7xl">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <KeyRound className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">SecureLock Pro</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-muted-foreground",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Call Button & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <Button asChild className="hidden sm:inline-flex">
            <Link href="tel:+1234567890">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      pathname === item.href ? "text-primary" : "text-muted-foreground",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild className="mt-4">
                  <Link href="tel:+1234567890">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
