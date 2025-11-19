import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const products = [
  { name: "Recalo", path: "/products/recalo" },
  { name: "RecaloLite", path: "/products/recalolite" },
  { name: "Sivvar", path: "/products/sivvar" },
  { name: "Intellio", path: "/products/intellio" },
  { name: "Verivo", path: "/products/verivo" },
];

const ProductNav = () => {
  const location = useLocation();

  return (
    <nav className="bg-codec-lightGray py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {products.map((product) => (
            <Link
              key={product.path}
              to={product.path}
              className={cn(
                "px-6 py-3 rounded-lg font-medium transition-all duration-300",
                location.pathname === product.path
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-codec-darkGray hover:bg-primary hover:text-white hover:shadow-lg"
              )}
            >
              {product.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default ProductNav;
