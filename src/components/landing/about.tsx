import Image from "next/image"
import { Card } from "@/components/ui/card"
import { MotionDiv } from "./motion-div"

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="overflow-hidden shadow-lg rounded-xl">
              <Image
                src="https://placehold.co/600x400.png"
                alt="ACM team working together"
                data-ai-hint="team collaboration"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </Card>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              About Anjuman ACM
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our chapter is dedicated to advancing the art, science, engineering, and application of information technology, serving both professionals and the public.
            </p>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-headline text-xl font-semibold text-primary">Our Mission</h3>
                <p className="mt-2 text-muted-foreground">To foster a vibrant community of computer science enthusiasts, promote knowledge sharing, and provide opportunities for professional growth and development through workshops, seminars, and competitions.</p>
              </div>
              <div>
                <h3 className="font-headline text-xl font-semibold text-primary">Our Vision</h3>
                <p className="mt-2 text-muted-foreground">To be a leading student chapter that empowers its members to become innovators and leaders in the field of computing, equipped with the skills and ethical grounding to tackle future challenges.</p>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
