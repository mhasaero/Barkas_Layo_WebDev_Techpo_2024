import Navbar from "@/components/Navbar";
import Home from "@/components/Root/Home";
import Category from "@/components/Root/Category";
import Recommendation from "@/components/Root/Recommendation";
import Review from "@/components/Root/Review";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <Home />
        <Category />
        <Recommendation />
        <Review />
      </main>
    </>
  );
}
