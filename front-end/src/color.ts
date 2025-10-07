// South-Brook-IMS Color System
// Comprehensive color palette with light and dark modes

export const colors = {
    // Brand Colors - South-Brook-IMS Green Theme
    brand: {
      primary: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        500: "#22c55e",
        600: "#16a34a",
        700: "#15803d",
        800: "#166534",
        900: "#14532d",
        950: "#052e16",
      },
      secondary: {
        50: "#ecfdf5",
        100: "#d1fae5",
        200: "#a7f3d0",
        300: "#6ee7b7",
        400: "#34d399",
        500: "#10b981",
        600: "#059669",
        700: "#047857",
        800: "#065f46",
        900: "#064e3b",
        950: "#022c22",
      },
      accent: {
        50: "#f0f9ff",
        100: "#e0f2fe",
        200: "#bae6fd",
        300: "#7dd3fc",
        400: "#38bdf8",
        500: "#0ea5e9",
        600: "#0284c7",
        700: "#0369a1",
        800: "#075985",
        900: "#0c4a6e",
        950: "#082f49",
      },
    },
  
    // Logo Gradient Colors
    logo: {
      gradient: {
        from: "#16a34a",
        via: "#22c55e",
        to: "#4ade80",
        accent: "#86efac",
      },
      // Alternative gradient combinations
      gradients: {
        primary: "linear-gradient(to right, #16a34a, #22c55e, #4ade80, #86efac)",
        secondary: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
        accent: "linear-gradient(45deg, #34d399 0%, #06b6d4 100%)",
        green: "linear-gradient(to right, #16a34a, #22c55e, #4ade80)",
        emerald: "linear-gradient(to right, #10b981, #059669, #047857)",
      },
    },
  
    // Light Mode Colors
    light: {
      // Background Colors
      background: {
        primary: "#ffffff",
        secondary: "#f8fafc",
        tertiary: "#f1f5f9",
        card: "#ffffff",
        cardHover: "#f8fafc",
        overlay: "rgba(0, 0, 0, 0.1)",
        backdrop: "rgba(0, 0, 0, 0.05)",
      },
  
      // Text Colors
      text: {
        primary: "#0f172a",
        secondary: "#475569",
        tertiary: "#64748b",
        muted: "#94a3b8",
        inverse: "#ffffff",
        brand: "#16a34a",
      },
  
      // Border Colors
      border: {
        primary: "#e2e8f0",
        secondary: "#cbd5e1",
        tertiary: "#f1f5f9",
        brand: "#4ade80",
        focus: "#16a34a",
      },
  
      // Semantic Colors
      success: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        500: "#22c55e",
        600: "#16a34a",
        700: "#15803d",
        800: "#166534",
        900: "#14532d",
        text: "#166534",
        bg: "#f0fdf4",
        border: "#bbf7d0",
      },
  
      warning: {
        50: "#fffbeb",
        100: "#fef3c7",
        200: "#fde68a",
        300: "#fcd34d",
        400: "#fbbf24",
        500: "#f59e0b",
        600: "#d97706",
        700: "#b45309",
        800: "#92400e",
        900: "#78350f",
        text: "#92400e",
        bg: "#fffbeb",
        border: "#fde68a",
      },
  
      error: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d",
        text: "#991b1b",
        bg: "#fef2f2",
        border: "#fecaca",
      },
  
      info: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a",
        text: "#1e40af",
        bg: "#eff6ff",
        border: "#bfdbfe",
      },
  
      // Interactive Colors
      interactive: {
        primary: {
          bg: "#16a34a",
          bgHover: "#15803d",
          bgActive: "#166534",
          text: "#ffffff",
          border: "#16a34a",
        },
        secondary: {
          bg: "transparent",
          bgHover: "rgba(22, 163, 74, 0.1)",
          bgActive: "rgba(22, 163, 74, 0.2)",
          text: "#16a34a",
          border: "#16a34a",
        },
        ghost: {
          bg: "transparent",
          bgHover: "rgba(0, 0, 0, 0.05)",
          bgActive: "rgba(0, 0, 0, 0.1)",
          text: "#475569",
          border: "transparent",
        },
      },
  
      // Shadow Colors
      shadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        brand: "0 4px 14px 0 rgba(22, 163, 74, 0.25)",
      },
    },
  
    // Dark Mode Colors
    dark: {
      // Background Colors
      background: {
        primary: "#000000",
        secondary: "#111111",
        tertiary: "#1a1a1a",
        card: "#111111",
        cardHover: "#1a1a1a",
        overlay: "rgba(0, 0, 0, 0.5)",
        backdrop: "rgba(0, 0, 0, 0.3)",
      },
  
      // Text Colors
      text: {
        primary: "#ffffff",
        secondary: "#e5e5e5",
        tertiary: "#a3a3a3",
        muted: "#737373",
        inverse: "#000000",
        brand: "#c084fc",
      },
  
      // Border Colors
      border: {
        primary: "#262626",
        secondary: "#404040",
        tertiary: "#111111",
        brand: "#22c55e",
        focus: "#4ade80",
      },
  
      // Semantic Colors (adjusted for dark mode)
      success: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        500: "#22c55e",
        600: "#16a34a",
        700: "#15803d",
        800: "#166534",
        900: "#14532d",
        text: "#4ade80",
        bg: "rgba(34, 197, 94, 0.1)",
        border: "rgba(34, 197, 94, 0.2)",
      },
  
      warning: {
        50: "#fffbeb",
        100: "#fef3c7",
        200: "#fde68a",
        300: "#fcd34d",
        400: "#fbbf24",
        500: "#f59e0b",
        600: "#d97706",
        700: "#b45309",
        800: "#92400e",
        900: "#78350f",
        text: "#fbbf24",
        bg: "rgba(245, 158, 11, 0.1)",
        border: "rgba(245, 158, 11, 0.2)",
      },
  
      error: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d",
        text: "#f87171",
        bg: "rgba(239, 68, 68, 0.1)",
        border: "rgba(239, 68, 68, 0.2)",
      },
  
      info: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a",
        text: "#60a5fa",
        bg: "rgba(59, 130, 246, 0.1)",
        border: "rgba(59, 130, 246, 0.2)",
      },
  
      // Interactive Colors
      interactive: {
        primary: {
          bg: "#16a34a",
          bgHover: "#22c55e",
          bgActive: "#4ade80",
          text: "#ffffff",
          border: "#16a34a",
        },
        secondary: {
          bg: "transparent",
          bgHover: "rgba(22, 163, 74, 0.1)",
          bgActive: "rgba(22, 163, 74, 0.2)",
          text: "#4ade80",
          border: "#16a34a",
        },
        ghost: {
          bg: "transparent",
          bgHover: "rgba(255, 255, 255, 0.05)",
          bgActive: "rgba(255, 255, 255, 0.1)",
          text: "#cbd5e1",
          border: "transparent",
        },
      },
  
      // Shadow Colors
      shadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.3)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.3)",
        brand: "0 4px 14px 0 rgba(22, 163, 74, 0.4)",
      },
    },
  
    // Animation Colors
    animation: {
      shimmer: {
        from: "rgba(255, 255, 255, 0)",
        to: "rgba(255, 255, 255, 0.1)",
      },
      glow: {
        green: "rgba(22, 163, 74, 0.3)",
        emerald: "rgba(16, 185, 129, 0.3)",
        teal: "rgba(14, 165, 233, 0.3)",
        red: "rgba(239, 68, 68, 0.3)",
      },
    },
  
    // Status Colors
    status: {
      online: "#22c55e",
      offline: "#ef4444",
      away: "#f59e0b",
      busy: "#dc2626",
      pending: "#64748b",
    },
  
    // Chart Colors
    chart: {
      primary: ["#16a34a", "#22c55e", "#4ade80", "#86efac", "#15803d"],
      secondary: ["#10b981", "#059669", "#047857", "#065f46", "#064e3b"],
      success: ["#22c55e", "#16a34a", "#15803d", "#166534", "#14532d"],
      warning: ["#f59e0b", "#d97706", "#b45309", "#92400e", "#78350f"],
      error: ["#ef4444", "#dc2626", "#b91c1c", "#991b1b", "#7f1d1d"],
    },
  };
  
  // Utility functions for theme switching
  export const getThemeColors = (isDark: boolean) => {
    return isDark ? colors.dark : colors.light;
  };
  
  export const getBrandGradient = (
    variant: keyof typeof colors.logo.gradients = "primary"
  ) => {
    return colors.logo.gradients[variant];
  };
  
  export const getSemanticColor = (
    type: "success" | "warning" | "error" | "info",
    isDark: boolean = false
  ) => {
    const theme = isDark ? colors.dark : colors.light;
    return theme[type];
  };
  
  // CSS Variables for easy use in CSS
  export const cssVariables = {
    light: {
      "--color-bg-primary": colors.light.background.primary,
      "--color-bg-secondary": colors.light.background.secondary,
      "--color-text-primary": colors.light.text.primary,
      "--color-text-secondary": colors.light.text.secondary,
      "--color-border-primary": colors.light.border.primary,
      "--color-brand-primary": colors.brand.primary[600],
      "--color-success": colors.light.success[500],
      "--color-warning": colors.light.warning[500],
      "--color-error": colors.light.error[500],
      "--color-info": colors.light.info[500],
    },
    dark: {
      "--color-bg-primary": colors.dark.background.primary,
      "--color-bg-secondary": colors.dark.background.secondary,
      "--color-text-primary": colors.dark.text.primary,
      "--color-text-secondary": colors.dark.text.secondary,
      "--color-border-primary": colors.dark.border.primary,
      "--color-brand-primary": colors.brand.primary[400],
      "--color-success": colors.dark.success[500],
      "--color-warning": colors.dark.warning[500],
      "--color-error": colors.dark.error[500],
      "--color-info": colors.dark.info[500],
    },
  };
  
  export default colors;