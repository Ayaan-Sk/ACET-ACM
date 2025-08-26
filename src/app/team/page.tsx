
import Team from "@/components/landing/team";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <Team />
      </main>
      <Footer />
    </div>
  );
}
