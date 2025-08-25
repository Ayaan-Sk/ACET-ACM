import { Button } from "@/components/ui/button"
import { MotionDiv } from "./motion-div"

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_70%)] bg-gradient-to-tr from-primary/10 via-transparent to-accent/10"></div>
      </div>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Welcome to Anjuman ACM Hub
            </h1>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          >
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
              Inspiring innovation, collaboration, and excellence in computing at Anjuman College of Engineering & Technology.
            </p>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Button asChild size="lg">
              <a href="#about">Learn More</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Contact Us</a>
            </Button>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
