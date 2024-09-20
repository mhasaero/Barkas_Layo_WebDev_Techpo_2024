"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useProduct } from "@/context/ProductContext";
import { useEffect, useState } from "react";

export default function SearchBar() {
  const { products } = useProduct();
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearchChange = (e: any) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);

    const filteredItems = products.filter((product: any) =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    );

    setFilteredProducts(filteredItems);
  };

  useEffect(() => {
    products.forEach(async (product: any) => {});
  }, [search]);

  return (
    <Popover>
      <PopoverTrigger>
        <Search className="size-6 duration-200 hover:text-primary xl:size-8" />
      </PopoverTrigger>
      <PopoverContent className="mt-10">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="text"
            placeholder="Search..."
            onChange={handleSearchChange}
            value={search}
          />
          <Button type="submit">Search</Button>
        </div>
        <ul className="mt-4 cursor-pointer space-y-4 rounded-md border-2 border-border bg-background p-4">
          {filteredProducts.map((product: any) => (
            <li
              key={product.id}
              className="rounded-md border-2 border-border px-4 py-2 duration-300 hover:bg-card"
              onClick={
                product.uid !== null
                  ? () => router.push(`/view-product/${product.id}`)
                  : () => router.push(`/login`)
              }
            >
              {product.name}
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
