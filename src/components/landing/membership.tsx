import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { MotionDiv } from "./motion-div"

const benefits = [
  "Access to exclusive workshops",
  "Networking opportunities with peers and professionals",
  "Discounts on ACM conferences and publications",
  "Career guidance and resume building sessions",
]

export default function Membership() {
  return (
    <section id="membership" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 sm:p-12 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-2xl">
            <div className="text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                Become a Part of Our Community
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
                Join the Anjuman ACM Student Chapter and unlock a world of opportunities.
              </p>
            </div>
            <div className="mt-10 grid sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-headline text-xl font-semibold">Membership Benefits</h3>
                <ul className="space-y-2">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 mt-0.5 text-accent flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-center justify-center bg-primary-foreground/10 rounded-lg p-8">
                 <h3 className="font-headline text-xl font-semibold text-center">Ready to Join?</h3>
                 <p className="text-center mt-2 text-primary-foreground/80">Click the button below to start your journey with us.</p>
                 <Button size="lg" className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                    <a href="#contact">Join ACM Now</a>
                 </Button>
              </div>
            </div>
          </Card>
        </MotionDiv>
      </div>
    </section>
  )
}
