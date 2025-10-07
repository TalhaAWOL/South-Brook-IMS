"use client";

import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { colors } from "../../color";

interface StatsCardsProps {
  totalProducts: number;
  totalValue: number;
  uniqueLocations: number;
  averagePrice: number;
}

const StatsCards: React.FC<StatsCardsProps> = ({
  totalProducts,
  totalValue,
  uniqueLocations,
  averagePrice,
}) => {
  const { themeColors } = useTheme();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
    }).format(amount);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {/* Total Products */}
      <div
        className="p-6 rounded-lg border"
        style={{
          backgroundColor: themeColors.background.card,
          borderColor: themeColors.border.primary,
        }}
      >
        <div className="flex items-center">
          <div
            className="p-3 rounded-full"
            style={{ backgroundColor: colors.brand.primary[100] }}
          >
            <svg
              className="w-6 h-6"
              style={{ color: colors.brand.primary[600] }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </div>
          <div className="ml-4">
            <p
              className="text-sm font-medium"
              style={{ color: themeColors.text.secondary }}
            >
              Total Products
            </p>
            <p
              className="text-2xl font-bold"
              style={{ color: themeColors.text.primary }}
            >
              {totalProducts}
            </p>
          </div>
        </div>
      </div>

      {/* Total Value */}
      <div
        className="p-6 rounded-lg border"
        style={{
          backgroundColor: themeColors.background.card,
          borderColor: themeColors.border.primary,
        }}
      >
        <div className="flex items-center">
          <div
            className="p-3 rounded-full"
            style={{ backgroundColor: themeColors.success.bg }}
          >
            <svg
              className="w-6 h-6"
              style={{ color: themeColors.success[600] }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
              />
            </svg>
          </div>
          <div className="ml-4">
            <p
              className="text-sm font-medium"
              style={{ color: themeColors.text.secondary }}
            >
              Total Value
            </p>
            <p
              className="text-2xl font-bold"
              style={{ color: themeColors.text.primary }}
            >
              {formatCurrency(totalValue)}
            </p>
          </div>
        </div>
      </div>

      {/* Unique Locations */}
      <div
        className="p-6 rounded-lg border"
        style={{
          backgroundColor: themeColors.background.card,
          borderColor: themeColors.border.primary,
        }}
      >
        <div className="flex items-center">
          <div
            className="p-3 rounded-full"
            style={{ backgroundColor: themeColors.info.bg }}
          >
            <svg
              className="w-6 h-6"
              style={{ color: themeColors.info[600] }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div className="ml-4">
            <p
              className="text-sm font-medium"
              style={{ color: themeColors.text.secondary }}
            >
              Locations
            </p>
            <p
              className="text-2xl font-bold"
              style={{ color: themeColors.text.primary }}
            >
              {uniqueLocations}
            </p>
          </div>
        </div>
      </div>

      {/* Average Price */}
      <div
        className="p-6 rounded-lg border"
        style={{
          backgroundColor: themeColors.background.card,
          borderColor: themeColors.border.primary,
        }}
      >
        <div className="flex items-center">
          <div
            className="p-3 rounded-full"
            style={{ backgroundColor: themeColors.warning.bg }}
          >
            <svg
              className="w-6 h-6"
              style={{ color: themeColors.warning[600] }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </div>
          <div className="ml-4">
            <p
              className="text-sm font-medium"
              style={{ color: themeColors.text.secondary }}
            >
              Avg Price
            </p>
            <p
              className="text-2xl font-bold"
              style={{ color: themeColors.text.primary }}
            >
              {formatCurrency(averagePrice)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
