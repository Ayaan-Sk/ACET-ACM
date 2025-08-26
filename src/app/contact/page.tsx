
import Contact from "@/components/landing/contact";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
