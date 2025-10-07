"use client";

import React from "react";
import { Edit, MapPin } from "lucide-react";
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

interface ProductRowProps {
  product: Product;
  onEdit: (product: Product) => void;
}

const ProductRow: React.FC<ProductRowProps> = ({ product, onEdit }) => {
  const { themeColors, isDarkMode } = useTheme();

  const formatLocation = (location: Product["location"]) => {
    return `${location.street}, ${location.city}, ${location.province} ${location.postal_code}`;
  };

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
    }).format(amount);
  };

  return (
    <tr
      className="border-b transition-colors duration-200 hover:bg-opacity-50"
      style={{
        borderColor: isDarkMode ? themeColors.border.primary : "#c0c0c0",
      }}
    >
      {/* Product ID */}
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className="font-mono text-sm font-medium px-2 py-1 rounded"
          style={{
            color: themeColors.text.primary,
            backgroundColor: themeColors.background.secondary,
          }}
        >
          {product.product_id}
        </span>
      </td>

      {/* Product Name */}
      <td className="px-6 py-4">
        <div className="text-sm font-medium" style={{ color: themeColors.text.primary }}>
          {product.name}
        </div>
      </td>

      {/* Price */}
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className="text-sm font-semibold"
          style={{ color: colors.brand.primary[600] }}
        >
          {formatPrice(product.amount)}
        </span>
      </td>

      {/* Location */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-2 text-sm" style={{ color: themeColors.text.secondary }}>
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span className="truncate max-w-xs">{formatLocation(product.location)}</span>
        </div>
      </td>

      {/* Actions */}
      <td className="px-6 py-4 whitespace-nowrap text-right">
        <button
          onClick={() => onEdit(product)}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2"
          style={{
            backgroundColor: themeColors.interactive.secondary.bg,
            color: themeColors.interactive.secondary.text,
            border: `1px solid ${themeColors.interactive.secondary.border}`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = themeColors.interactive.secondary.bgHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = themeColors.interactive.secondary.bg;
          }}
        >
          <Edit className="w-4 h-4" />
          Edit
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
