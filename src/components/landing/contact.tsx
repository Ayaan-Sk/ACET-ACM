import Image from "next/image"
import { Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react"
import { MotionDiv } from "./motion-div"
import ContactForm from "./contact-form"
import { Card } from "../ui/card"

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Have questions or want to collaborate? We'd love to hear from you.
          </p>
        </MotionDiv>

        <div className="mt-12 grid lg:grid-cols-2 gap-12 items-start">
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="p-6 sm:p-8">
               <ContactForm />
            </Card>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <Card className="p-6">
              <h3 className="font-headline text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Anjuman College of Engineering, Nagpur, India</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:acm@anjuman.edu" className="hover:text-primary">acm@anjuman.edu</a>
                </div>
              </div>
              <div className="mt-6">
                <Image src="https://placehold.co/600x400.png" data-ai-hint="college campus map" alt="Map" width={600} height={400} className="rounded-md w-full" />
              </div>
            </Card>
             <Card className="p-6">
              <h3 className="font-headline text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary"><Twitter /></a>
                <a href="#" className="text-muted-foreground hover:text-primary"><Github /></a>
                <a href="#" className="text-muted-foreground hover:text-primary"><Linkedin /></a>
              </div>
            </Card>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
