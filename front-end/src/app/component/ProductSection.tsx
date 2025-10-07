"use client";

import React from "react";
import ProductTable from "./ProductTable";
import { useTheme } from "../../context/ThemeContext";

interface Product {
  product_id: string;
  name: string;
  amount: number;
  location: {
    street: string;
    city: string;
    province: string;
    postal_code: string;
    country: string;
  };
}

interface ProductSectionProps {
  products: Product[];
  onEditProduct: (product: Product) => void;
}

const ProductSection: React.FC<ProductSectionProps> = ({ products, onEditProduct }) => {
  const { themeColors } = useTheme();

  return (
    <div
      className="rounded-lg border p-6"
      style={{
        backgroundColor: themeColors.background.card,
        borderColor: themeColors.border.primary,
      }}
    >
      <div className="mb-4">
        <h2
          className="text-xl font-semibold"
          style={{ color: themeColors.text.primary }}
        >
          All Products
        </h2>
        <p
          className="text-sm mt-1"
          style={{ color: themeColors.text.secondary }}
        >
          View and manage all products in your inventory
        </p>
      </div>
      
      <ProductTable products={products} onEditProduct={onEditProduct} />
    </div>
  );
};

export default ProductSection;
