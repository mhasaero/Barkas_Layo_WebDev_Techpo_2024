import CategoryTable from "@/components/Dashboard/CategoryTable";

export default function page() {
  return (
    <section
      id="category"
      className="mb-10 space-y-6 md:space-y-12 xl:space-y-20"
    >
      <h1 className="text-3xl font-bold">Semua Produk</h1>
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="group relative h-[30vh] w-full cursor-pointer overflow-hidden md:w-1/2 lg:h-[70vh]">
          <div className="h-full w-full bg-[url('/images/category-1.png')] bg-cover bg-center duration-700 ease-in-out group-hover:rotate-2 group-hover:scale-125"></div>
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[#0051BA] bg-opacity-35"></div>
          <span className="absolute bottom-4 left-5 text-2xl font-bold text-background">
            Bookcase
          </span>
        </div>
        <div className="w-full space-y-6 md:w-1/2">
          <div className="group relative h-[12vh] w-full cursor-pointer overflow-hidden lg:h-[30vh]">
            <div className="h-full w-full bg-[url('/images/category-2.png')] bg-cover bg-center duration-700 ease-in-out group-hover:rotate-2 group-hover:scale-125"></div>
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[#0051BA] bg-opacity-35"></div>
            <span className="absolute bottom-4 left-5 text-2xl font-bold text-background">
              Kitchen Set
            </span>
          </div>
          <div className="flex justify-between gap-6">
            <div className="group relative h-[15vh] w-full cursor-pointer overflow-hidden lg:h-[35vh]">
              <div className="h-full w-full bg-[url('/images/category-3.png')] bg-cover bg-center duration-700 ease-in-out group-hover:rotate-2 group-hover:scale-125"></div>
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[#0051BA] bg-opacity-35"></div>
              <span className="absolute bottom-4 left-5 text-2xl font-bold text-background">
                Work Place
              </span>
            </div>
            <div className="group relative h-[15vh] w-full cursor-pointer overflow-hidden lg:h-[35vh]">
              <div className="h-full w-full bg-[url('/images/category-4.png')] bg-cover bg-center duration-700 ease-in-out group-hover:rotate-2 group-hover:scale-125"></div>
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[#0051BA] bg-opacity-35"></div>
              <span className="absolute bottom-4 left-5 text-2xl font-bold text-background">
                Cosmetics
              </span>
            </div>
          </div>
        </div>
      </div>
      <CategoryTable />
      <h1 className="text-center text-2xl font-bold xl:text-4xl">
        Anda Mungkin Tertarik Juga Dengan
      </h1>
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="group relative h-[30vh] w-full cursor-pointer overflow-hidden rounded-xl lg:h-[50vh]">
          <div className="h-full w-full bg-[url('/images/shoe-category.png')] bg-cover bg-center duration-700 ease-in-out group-hover:rotate-2 group-hover:scale-125"></div>
          <div className="absolute bottom-0 left-0 right-0 top-0 rounded-xl bg-[#0051BA] bg-opacity-35"></div>
          <span className="absolute bottom-4 left-5 text-2xl font-bold text-background">
            Sepatu
          </span>
        </div>
        <div className="group relative h-[30vh] w-full cursor-pointer overflow-hidden rounded-xl lg:h-[50vh]">
          <div className="h-full w-full bg-[url('/images/chair-category.png')] bg-cover bg-center duration-700 ease-in-out group-hover:rotate-2 group-hover:scale-125"></div>
          <div className="absolute bottom-0 left-0 right-0 top-0 rounded-xl bg-[#0051BA] bg-opacity-35"></div>
          <span className="absolute bottom-4 left-5 text-2xl font-bold text-background">
            Kursi
          </span>
        </div>
        <div className="group relative h-[30vh] w-full cursor-pointer overflow-hidden rounded-xl lg:h-[50vh]">
          <div className="h-full w-full bg-[url('/images/table-category.png')] bg-cover bg-center duration-700 ease-in-out group-hover:rotate-2 group-hover:scale-125"></div>
          <div className="absolute bottom-0 left-0 right-0 top-0 rounded-xl bg-[#0051BA] bg-opacity-35"></div>
          <span className="absolute bottom-4 left-5 text-2xl font-bold text-background">
            Meja
          </span>
        </div>
      </div>
    </section>
  );
}
