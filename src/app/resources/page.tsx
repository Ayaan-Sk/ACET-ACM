
import Resources from "@/components/landing/resources";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <Resources />
      </main>
      <Footer />
    </div>
  );
}
