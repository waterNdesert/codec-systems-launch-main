import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const products = [
    { name: "Recalo", path: "/products/recalo" },
    { name: "RecaloLite", path: "/products/recalolite" },
    { name: "Sivvar", path: "/products/sivvar" },
    { name: "Intellio", path: "/products/intellio" },
    { name: "Verivo", path: "/products/verivo" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.svg"
              alt="TheCodec Systems"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-codec-darkGray hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-codec-darkGray hover:text-primary transition-colors font-medium"
            >
              About
            </Link>

            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-codec-darkGray hover:text-primary transition-colors font-medium">
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {products.map((product) => (
                  <DropdownMenuItem key={product.path}>
                    <Link to={product.path} className="w-full">
                      {product.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/contact"
              className="text-codec-darkGray hover:text-primary transition-colors font-medium"
            >
              Contact
            </Link>

            <Button
              asChild
              className="bg-codec-black hover:bg-primary transition-colors"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-codec-darkGray hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-codec-darkGray hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-codec-darkGray hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              {/* Mobile Products */}
              <div className="space-y-2">
                <span className="text-codec-darkGray font-medium">
                  Products
                </span>
                {products.map((product) => (
                  <Link
                    key={product.path}
                    to={product.path}
                    className="block pl-4 text-codec-mediumGray hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/contact"
                className="text-codec-darkGray hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
