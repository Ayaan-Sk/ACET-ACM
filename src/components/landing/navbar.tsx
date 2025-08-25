"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { href: "#about", label: "About" },
  { href: "#events", label: "Events" },
  { href: "#team", label: "Team" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={() => setMobileMenuOpen(false)}
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          {item.label}
        </a>
      ))}
    </>
  );

  const Logo = () => (
     <Link href="#" className="flex items-center gap-2">
      <Image src="https://github.com/faskey37/college-website/blob/main/R.jpg?raw=true" alt="Anjuman ACM Logo" width={32} height={32} className="h-8 w-8 rounded-full" />
      <span className="font-headline text-lg font-bold">Anjuman ACM</span>
    </Link>
  )

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "border-b bg-background/80 backdrop-blur-sm" : ""}`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Logo />
        <nav className="hidden md:flex items-center gap-6">
          <NavLinks />
        </nav>
        <div className="flex items-center gap-2">
           <Image src="https://1000logos.net/wp-content/uploads/2021/04/ACM-logo-500x313.png" alt="ACM Logo" width={60} height={40} className="hidden md:block h-10 w-auto" />
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="p-6">
                    <div className="flex justify-between items-center">
                       <div onClick={() => setMobileMenuOpen(false)}>
                          <Logo/>
                       </div>
                        <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                          <X className="h-6 w-6" />
                           <span className="sr-only">Close menu</span>
                        </Button>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="p-6 pt-0">
                  <nav className="flex flex-col gap-4">
                    <NavLinks />
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
