"use client";

import React from "react";
import { Plus } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

interface CreateProductButtonProps {
  onClick: () => void;
}

const CreateProductButton: React.FC<CreateProductButtonProps> = ({ onClick }) => {
  const { themeColors } = useTheme();

  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
      style={{
        backgroundColor: themeColors.interactive.primary.bg,
        color: themeColors.interactive.primary.text,
        border: `1px solid ${themeColors.interactive.primary.border}`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = themeColors.interactive.primary.bgHover;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = themeColors.interactive.primary.bg;
      }}
    >
      <Plus className="w-4 h-4" />
      Create Product
    </button>
  );
};

export default CreateProductButton;
