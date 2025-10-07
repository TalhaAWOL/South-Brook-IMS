"use client";

import React from "react";
import { Package } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const AppHeader = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isDarkMode
          ? "border-white/10 shadow-2xl shadow-black/80"
          : "border-gray-200/50 shadow-2xl shadow-gray-400/60"
      }`}
      style={{
        backgroundImage: isDarkMode
          ? "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%), radial-gradient(ellipse at 30% 20%, rgba(22, 163, 74, 0.2) 0%, transparent 70%), radial-gradient(ellipse at 70% 80%, rgba(34, 197, 94, 0.15) 0%, transparent 70%)"
          : "linear-gradient(135deg, #ffffff 0%, #f0fdf4 30%, #ecfdf5 70%, #f8fafc 100%), radial-gradient(ellipse at top, rgba(22, 163, 74, 0.08) 0%, transparent 70%), radial-gradient(ellipse at bottom, rgba(34, 197, 94, 0.06) 0%, transparent 70%)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center cursor-pointer select-none">
            <div className="flex items-center h-10">
              <Package 
                className="w-10 h-10"
                style={{ color: "#16a34a" }}
              />
            </div>
            <span
              className="ml-2 text-xl font-bold text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #16a34a, #22c55e, #4ade80, #86efac)",
              }}
            >
              InventoryManager
            </span>
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 ${
              isDarkMode
                ? "text-white hover:bg-white/10 focus:ring-white/20"
                : "text-gray-700 hover:bg-gray-100 focus:ring-gray-300"
            }`}
            aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
          >
            {isDarkMode ? (
              // Sun icon for light mode
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              // Moon icon for dark mode
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
