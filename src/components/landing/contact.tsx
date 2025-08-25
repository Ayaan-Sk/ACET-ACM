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
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.680500592823!2d79.0837852149348!3d21.16520198592566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0f1b3f1b3f1%3A0x8b3f1b3f1b3f1b3f!2sAnjuman%20College%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1620208343946!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-md"
                  title="Anjuman College of Engineering Location"
                ></iframe>
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
