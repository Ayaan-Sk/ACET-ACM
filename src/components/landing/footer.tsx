import Link from "next/link"
import { Code2, Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <Link href="#" className="flex items-center gap-2">
              <Code2 className="h-6 w-6 text-primary" />
              <span className="font-headline text-lg font-bold">Anjuman ACM</span>
            </Link>
            <p className="text-sm text-muted-foreground">Advancing computing as a science & profession.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li><a href="#about" className="text-sm text-muted-foreground hover:text-primary">About Us</a></li>
              <li><a href="#events" className="text-sm text-muted-foreground hover:text-primary">Events</a></li>
              <li><a href="#team" className="text-sm text-muted-foreground hover:text-primary">Team</a></li>
              <li><a href="#contact" className="text-sm text-muted-foreground hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary"><Twitter size={20}/></a>
              <a href="#" className="text-muted-foreground hover:text-primary"><Github size={20}/></a>
              <a href="#" className="text-muted-foreground hover:text-primary"><Linkedin size={20}/></a>
            </div>
             <div className="mt-4">
                <Link href="/augment" className="text-sm text-muted-foreground hover:text-primary">
                    Admin
                </Link>
             </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Anjuman College ACM Chapter. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
