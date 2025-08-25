import Image from "next/image"
import { Mail, Phone } from "lucide-react"
import { MotionDiv } from "./motion-div"
import { Card, CardContent } from "../ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://placehold.co/1920x1080.png" 
          alt="Abstract background"
          data-ai-hint="abstract tech background"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Contact Us
          </h2>
        </MotionDiv>

        <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-md mx-auto"
        >
            <Card className="bg-background/70 backdrop-blur-sm border-primary/20 shadow-2xl rounded-2xl overflow-hidden">
                <div className="p-8 text-center">
                    <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-primary/50 shadow-lg">
                        <AvatarImage src="https://placehold.co/128x128.png" alt="Faculty Advisor" data-ai-hint="professional portrait woman" />
                        <AvatarFallback>FA</AvatarFallback>
                    </Avatar>
                    <h3 className="font-headline text-2xl font-bold text-foreground">Prof. Faculty Advisor</h3>
                    <p className="text-primary font-semibold">Faculty Sponsor</p>
                    <p className="text-muted-foreground mb-6">ACM Anjuman Chapter</p>
                    
                    <div className="space-y-3 text-left">
                        <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-primary" />
                            <a href="tel:+911234567890" className="text-muted-foreground hover:text-primary transition-colors">+91 12345 67890</a>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-primary" />
                            <a href="mailto:advisor@anjuman.edu" className="text-muted-foreground hover:text-primary transition-colors">advisor@anjuman.edu</a>
                        </div>
                    </div>
                </div>
                <div className="bg-primary/10 p-6 text-center">
                    <h4 className="font-headline font-semibold text-primary">We Are Here to Help!</h4>
                    <p className="text-muted-foreground text-sm mt-1">
                        Feel free to reach out for any inquiries or support. We're always ready to assist you!
                    </p>
                </div>
            </Card>
        </MotionDiv>
      </div>
    </section>
  )
}
