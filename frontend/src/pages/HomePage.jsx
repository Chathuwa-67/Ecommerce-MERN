import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
  { href: "/Laptop", name: "Laptop", imageUrl: "/Laptop.jpg" },
  { href: "/Monitor", name: "Monitor", imageUrl: "/Monitor.jpg" },
  {
    href: "/Graphic-card",
    name: "Graphic-card",
    imageUrl: "/Graphic-card.jpg",
  },
  { href: "/processors", name: "processors", imageUrl: "/processors.jpg" },
  {
    href: "/Motherboards",
    name: "Motherboards",
    imageUrl: "/Motherboards.jpg",
  },
  { href: "/Casing", name: "Casing", imageUrl: "/Casing.jpg" },
];

const HomePage = () => {
  const { fetchFeaturedProducts, products, isLoading } = useProductStore();

  useEffect(() => {
    fetchFeaturedProducts();
  }, [fetchFeaturedProducts]);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-center text-5xl sm:text-6xl font-bold text-blue-400 mb-4">
          Browse the Ultimate Gear Hub
        </h1>
        <p className="text-center text-xl text-gray-300 mb-12">
          Pro gaming gear, wallet-friendly prices – don’t miss out!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <CategoryItem category={category} key={category.name} />
          ))}
        </div>

        {!isLoading && products.length > 0 && (
          <FeaturedProducts featuredProducts={products} />
        )}
      </div>
    </div>
  );
};
export default HomePage;
