import Link from "next/link"
import Image from "next/image"
import { FooterWave } from "./wavy-pattern"

export default function Footer() {
  return (
    <footer className="bg-secondary/50 pt-16">
      <FooterWave />
      <div className="container mx-auto px-4 md:px-6 pb-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Image src="https://github.com/faskey37/college-website/blob/main/R.jpg?raw=true" alt="Anjuman ACM Logo" width={40} height={40} className="h-10 w-10 rounded-full" />
            <div>
              <p className="font-headline text-lg font-bold">Anjuman ACM Student Chapter</p>
              <p className="text-sm text-muted-foreground">Advancing Computing as a Science & Profession.</p>
            </div>
          </div>
          <div className="text-center sm:text-right">
             <div className="mb-2">
                <Link href="/augment" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Admin Panel
                </Link>
             </div>
             <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Anjuman College ACM. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}