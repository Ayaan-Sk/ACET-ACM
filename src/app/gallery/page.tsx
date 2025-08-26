
import Gallery from "@/components/landing/gallery";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
