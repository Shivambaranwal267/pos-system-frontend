import React, { useState } from "react";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { Barcode } from "lucide-react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg",
    name: "Wireless Noise Cancelling Headphones",
    sku: "HEAD-BT-ANC-001",
    sellingPrice: "189",
    category: "men_shirt"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg",
    name: "Wireless Noise Cancelling Headphones",
    sku: "HEAD-BT-ANC-001",
    sellingPrice: "189",
    category: "men_shirt"
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg",
    name: "Wireless Noise Cancelling Headphones",
    sku: "HEAD-BT-ANC-001",
    sellingPrice: "189",
    category: "men_shirt"
  },
  
  
];

const ProductSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    console.log("Search input changed:", setSearchTerm(e.target.value));
    /// Add Logic to filter products based on search term
  };

  return (
    <div className="w-2/5 border-r bg-card flex flex-col">
      <div className="p-4 border-b bg-muted">
        <div>
          <Input
            className={`py-5`}
            value={searchTerm}
            placeholder="Search products..."
            type={"text"}
            onChange={handleSearchChange}
          />
        </div>

        <div className="pt-2 flex items-center justify-between">
          <span>{2} products founds</span>
          <Button className="text-xs" size="sm" variant="outline">
            <Barcode /> scan
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 p-5">
        {products.map((product, index) => (
          <div key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
