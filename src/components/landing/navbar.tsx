"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Code2 } from "lucide-react"
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

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "border-b bg-background/80 backdrop-blur-sm" : ""}`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold">Anjuman ACM</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <NavLinks />
        </nav>
        <div className="flex items-center gap-2">
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
                       <Link href="#" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                          <Code2 className="h-6 w-6 text-primary" />
                          <span className="font-headline text-lg font-bold">Anjuman ACM</span>
                        </Link>
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
