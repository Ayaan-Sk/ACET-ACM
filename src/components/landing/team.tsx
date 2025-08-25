import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MotionDiv } from "./motion-div"

const faculty = [
  { name: "Dr. A. K. Sharma", role: "Faculty Advisor" },
  { name: "Prof. S. B. Patil", role: "Co-Advisor" },
]

const students = [
  { name: "Rohan Verma", role: "Chairperson", initial: "RV" },
  { name: "Priya Singh", role: "Vice Chairperson", initial: "PS" },
  { name: "Amit Kumar", role: "Secretary", initial: "AK" },
  { name: "Sneha Reddy", role: "Treasurer", initial: "SR" },
  { name: "Vikram Rathod", role: "Web Master", initial: "VR" },
  { name: "Anjali Desai", role: "Event Coordinator", initial: "AD" },
]

export default function Team() {
  return (
    <section id="team" className="py-16 sm:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Meet the Team
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            The driving force behind our ACM chapter's success.
          </p>
        </MotionDiv>

        <div className="mt-12">
          <h3 className="font-headline text-2xl font-bold text-center text-primary mb-8">Faculty Advisors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {faculty.map((member, index) => (
              <MotionDiv
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={`https://placehold.co/100x100.png`} data-ai-hint="professional portrait" />
                    <AvatarFallback>{member.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-lg font-bold">{member.name}</h4>
                    <p className="text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-headline text-2xl font-bold text-center text-primary mb-8">Core Members</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {students.map((member, index) => (
              <MotionDiv
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="text-center">
                  <Avatar className="h-24 w-24 mx-auto">
                    <AvatarImage src={`https://placehold.co/100x100.png`} data-ai-hint="student portrait" />
                    <AvatarFallback>{member.initial}</AvatarFallback>
                  </Avatar>
                  <h4 className="mt-4 font-semibold">{member.name}</h4>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
