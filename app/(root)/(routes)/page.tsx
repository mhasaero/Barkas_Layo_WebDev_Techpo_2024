import Navbar from "@/components/Navbar";
import Home from "@/components/Root/Home";
import Category from "@/components/Root/Category";
import Recommendation from "@/components/Root/Recommendation";
import Review from "@/components/Root/Review";
import Gallery from "@/components/Root/Gallery";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-40">
        <Home />
        <Gallery />
        <Footer />
      </main>
    </>
  );
}
