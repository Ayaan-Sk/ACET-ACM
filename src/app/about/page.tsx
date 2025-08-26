
import About from "@/components/landing/about";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <About />
      </main>
      <Footer />
    </div>
  );
}
