"use client";

import React from "react";
import ProductRow from "./ProductRow";
import { useTheme } from "../../context/ThemeContext";
import { colors } from "../../color";

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

interface ProductTableProps {
  products: Product[];
  onEditProduct: (product: Product) => void;
}

const ProductTable: React.FC<ProductTableProps> = ({ products, onEditProduct }) => {
  const { themeColors, isDarkMode } = useTheme();

  return (
    <div 
      className="overflow-hidden rounded-lg border shadow-sm"
      style={{
        borderColor: isDarkMode ? themeColors.border.primary : "#c0c0c0",
      }}
    >
      <div
        className="overflow-x-auto"
        style={{
          backgroundColor: themeColors.background.card,
          borderColor: isDarkMode ? themeColors.border.primary : "#c0c0c0",
        }}
      >
        <table 
          className="min-w-full divide-y"
          style={{
            borderColor: isDarkMode ? themeColors.border.primary : "#c0c0c0",
          }}
        >
          <thead
            style={{
              backgroundColor: themeColors.background.secondary,
            }}
          >
            <tr>
              <th
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                style={{
                  color: themeColors.text.secondary,
                  borderColor: themeColors.border.primary,
                }}
              >
                Product ID
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                style={{
                  color: themeColors.text.secondary,
                  borderColor: themeColors.border.primary,
                }}
              >
                Product Name
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                style={{
                  color: themeColors.text.secondary,
                  borderColor: themeColors.border.primary,
                }}
              >
                Price
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                style={{
                  color: themeColors.text.secondary,
                  borderColor: themeColors.border.primary,
                }}
              >
                Location
              </th>
              <th
                className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider"
                style={{
                  color: themeColors.text.secondary,
                  borderColor: themeColors.border.primary,
                }}
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {products.map((product) => (
              <ProductRow
                key={product.product_id}
                product={product}
                onEdit={onEditProduct}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
