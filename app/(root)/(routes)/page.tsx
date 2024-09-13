import Navbar from "@/components/Navbar";
import Category from "@/components/Root/Category";
import Recommendation from "@/components/Root/Recommendation";
import Review from "@/components/Root/Review";
import Gallery from "@/components/Root/Gallery";
import Footer from "@/components/Footer";
import Hero from "@/components/Root/Hero";
import About from "@/components/Root/About";
import AdsBanner from "@/components/Root/AdsBanner";
import { useAuth } from "@/context/AuthContext";

export default function Page() {
  // const { user } = useAuth;

  // if(!user){
  //   alert("hiks");
  // }else {
  //   alert("hehe");
  // }

  return (
    <>
      <Navbar type={true} />
      <main className="flex flex-col gap-40">
        <Hero />
        <Category />
        <Recommendation />
        <AdsBanner />
        <About />
        <Review />
        <Gallery />
        <Footer />
      </main>
    </>
  );
}
