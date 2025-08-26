
import Membership from "@/components/landing/membership";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";

export default function MembershipPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <Membership />
      </main>
      <Footer />
    </div>
  );
}
