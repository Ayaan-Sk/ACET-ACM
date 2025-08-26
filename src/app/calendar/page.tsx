import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import Image from "next/image";

const timelineData = [
  {
    date: "August 20, 2024",
    title: "Membership Drive Starts",
    description: "Kickstarting the new academic year with our annual membership drive. Join us to be a part of the ACM community!",
    image: "/images/calendar-1.jpg",
    aiHint: "students gathering",
  },
  {
    date: "September 15, 2024",
    title: "Workshop on AI & ML",
    description: "An interactive workshop covering the fundamentals of Artificial Intelligence and Machine Learning.",
    image: "/images/calendar-2.jpg",
    aiHint: "AI workshop",
  },
  {
    date: "October 26-27, 2024",
    title: "Annual Hackathon 2024",
    description: "A 24-hour coding marathon where students build innovative solutions to real-world problems.",
    image: "/images/calendar-3.jpg",
    aiHint: "coding hackathon",
  },
  {
    date: "November 10, 2024",
    title: "Guest Lecture: The Future of Cloud Computing",
    description: "Industry expert shares insights on the latest trends and future of cloud technologies.",
    image: "/images/calendar-4.jpg",
    aiHint: "guest lecture",
  },
  {
    date: "December 05, 2024",
    title: "Code-a-Thon '24",
    description: "Our flagship competitive programming event. Test your skills against the best.",
    image: "/images/calendar-5.jpg",
    aiHint: "programming competition",
  },
];

export default function CalendarPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Chapter Calendar
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Our schedule of events, workshops, and important dates for the upcoming year.
            </p>
          </div>

          <div className="relative">
            {/* The vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border"></div>

            <div className="space-y-16">
              {timelineData.map((item, index) => (
                <div key={index} className="relative flex items-center justify-center">
                  <div className="md:w-1/2 md:pr-8 flex justify-end">
                    {index % 2 === 0 && (
                      <div className="max-w-md w-full">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={600}
                          height={400}
                          data-ai-hint={item.aiHint}
                          className="rounded-lg shadow-xl border border-border object-cover"
                        />
                      </div>
                    )}
                  </div>

                  <div className="md:w-1/2 md:pl-8 flex justify-start">
                     {index % 2 !== 0 && (
                       <div className="max-w-md w-full">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={600}
                          height={400}
                           data-ai-hint={item.aiHint}
                          className="rounded-lg shadow-xl border border-border object-cover"
                        />
                      </div>
                    )}
                  </div>
                  
                  {/* Timeline content box */}
                  <div className={`absolute left-1/2 -translate-x-1/2 w-full max-w-md p-6 bg-card rounded-lg shadow-2xl border border-border/50 backdrop-blur-sm 
                    ${index % 2 === 0 ? 'md:left-auto md:right-1/2 md:mr-12' : 'md:right-auto md:left-1/2 md:ml-12'}`}>
                     <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background
                      ${index % 2 === 0 ? '-right-2.5' : '-left-2.5'}"></div>
                    <p className="text-sm font-semibold text-primary">{item.date}</p>
                    <h3 className="font-headline text-xl font-bold mt-1">{item.title}</h3>
                    <p className="text-muted-foreground mt-2">{item.description}</p>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
