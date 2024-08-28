import Navbar from "@/components/Navbar";
import Category from "@/components/Root/Category";
import Recommendation from "@/components/Root/Recommendation";
import Review from "@/components/Root/Review";
import Gallery from "@/components/Root/Gallery";
import Footer from "@/components/Footer";
import Hero from "@/components/Root/Hero";
import About from "@/components/Root/About";
import AdsBanner from "@/components/Root/AdsBanner";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-40">
        <Hero />
        <Category />
        <AdsBanner/>
        <About />
        <Review />
        <Gallery />
        <Footer />
      </main>
    </>
  );
}
