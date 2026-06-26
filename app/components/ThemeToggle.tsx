"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDark(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggle = (toDark: boolean) => {
    setDark(toDark);
    if (toDark) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => toggle(false)}
        aria-label="Modo claro"
        className="w-9 h-9 flex items-center justify-center rounded-full border-none bg-transparent cursor-pointer transition-colors duration-200"
        style={{ color: !dark ? "var(--foreground)" : "var(--muted)" }}
      >
        <Sun size={20} strokeWidth={1.5} />
      </button>
      <button
        onClick={() => toggle(true)}
        aria-label="Modo oscuro"
        className="w-9 h-9 flex items-center justify-center rounded-full border-none bg-transparent cursor-pointer transition-colors duration-200"
        style={{ color: dark ? "var(--foreground)" : "var(--muted)" }}
      >
        <Moon size={20} strokeWidth={1.5} fill="currentColor" />
      </button>
    </div>
  );
}