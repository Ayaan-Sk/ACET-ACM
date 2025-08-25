import Navbar from '@/components/landing/navbar';
import Hero from '@/components/landing/hero';
import About from '@/components/landing/about';
import Events from '@/components/landing/events';
import Team from '@/components/landing/team';
import Gallery from '@/components/landing/gallery';
import Resources from '@/components/landing/resources';
import Membership from '@/components/landing/membership';
import Contact from '@/components/landing/contact';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Events />
        <Team />
        <Gallery />
        <Resources />
        <Membership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
