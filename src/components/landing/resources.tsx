import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Link2, BookOpen, Newspaper } from "lucide-react"
import { MotionDiv } from "./motion-div"

const resources = [
  {
    title: "ACM Digital Library",
    description: "The most comprehensive collection of articles and papers on computing.",
    link: "#",
    icon: BookOpen,
  },
  {
    title: "ACM TechTalks",
    description: "Webinars by renowned speakers on a wide range of topics.",
    link: "#",
    icon: Newspaper,
  },
  {
    title: "CS50 by Harvard",
    description: "An excellent introductory course to computer science.",
    link: "#",
    icon: Link2,
  },
]

export default function Resources() {
  return (
    <section id="resources" className="py-16 sm:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Learning Resources
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Curated resources to help you on your learning journey.
          </p>
        </MotionDiv>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <MotionDiv
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:border-primary/50 transition-colors">
                <a href={resource.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <resource.icon className="h-8 w-8 text-primary" />
                    <CardTitle className="font-headline">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{resource.description}</p>
                  </CardContent>
                </a>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}
