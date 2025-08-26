
import Events from "@/components/landing/events";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <Events />
      </main>
      <Footer />
    </div>
  );
}
