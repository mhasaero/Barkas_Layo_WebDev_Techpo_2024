import ReviewText from "./ReviewText";
import { lists } from "@/lib/review";

export default function Review() {
  return (
    <section id="review" className="mx-4 text-center">
      <h3 className="text-xl font-semibold text-muted-foreground">
        Apa Kata Mereka
      </h3>
      <h1 className="mt-4 text-4xl font-bold text-foreground">
        #TentangBarkas
      </h1>
      <div className="mx-auto mt-12 flex flex-col justify-center gap-12">
        {lists.map((lists, index) => (
          <ReviewText
            src={lists.src}
            name={lists.name}
            list={index}
            key={lists.name + index}
          >
            {lists.message}
          </ReviewText>
        ))}
      </div>
    </section>
  );
}
