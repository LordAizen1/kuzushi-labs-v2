// Centralized theme colors for JavaScript contexts
// Use these for WebGL components, SVG fills, and Framer Motion animations
// For Tailwind classes, use: bg-accent, text-accent, hover:bg-accent, etc.

export const theme = {
    colors: {
        accent: "#8a5cff",
        accentSecondary: "#00ffd1",
        accentTertiary: "#ff5c7a",
        background: "#111111",
        foreground: "#ffffff",
        surface: "#0a0a0a",
        muted: "#d4d4d4",
    },
    // Color array for animated backgrounds (ColorBends, FloatingLines, etc.)
    gradientColors: ["#8a5cff", "#00ffd1", "#ff5c7a"] as const,
} as const;

// Convenience exports
export const { colors, gradientColors } = theme;
