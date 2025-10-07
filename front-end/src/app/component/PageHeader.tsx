"use client";

import React from "react";
import CreateProductButton from "./CreateProductButton";
import { useTheme } from "../../context/ThemeContext";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  onCreateClick: () => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, onCreateClick }) => {
  const { themeColors } = useTheme();

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <div>
          <h1
            className="text-3xl font-bold mb-2"
            style={{ color: themeColors.text.primary }}
          >
            {title}
          </h1>
          <p
            className="text-lg"
            style={{ color: themeColors.text.secondary }}
          >
            {subtitle}
          </p>
        </div>
        <CreateProductButton onClick={onCreateClick} />
      </div>
    </div>
  );
};

export default PageHeader;
