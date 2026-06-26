"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  variant?: "full" | "centered";
}

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#productos", label: "Productos" },
  { href: "/#diseno", label: "Diseño" },
  { href: "/#faq", label: "Guía" },
  { href: "/#medidas", label: "Medidas" },
  { href: "/#test", label: "Test" },
  { href: "/devoluciones", label: "Devoluciones" },
];

const NAV_LINKS_MAIN = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#productos", label: "Productos" },
  { href: "#diseno", label: "Diseño" },
  { href: "#faq", label: "Guía" },
  { href: "#medidas", label: "Medidas" },
  { href: "#test", label: "Test" },
  { href: "/devoluciones", label: "Devoluciones" },
];

export default function Header({ variant = "centered" }: HeaderProps) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  if (variant === "full") {
    return (
      <header className="sticky top-0 z-50" style={{ borderBottom: "1px solid var(--border-color)", background: "var(--background)" }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <nav className="hidden items-center gap-8 text-sm tracking-wide md:flex" style={{ color: "var(--muted)" }}>
            {NAV_LINKS_MAIN.map((l) => (
              <Link key={l.href} href={l.href} className="transition-colors hover:text-[#A6896F]">{l.label}</Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a href="https://wa.me/541141952834" target="_blank" rel="noreferrer"
              className="rounded-full px-5 py-2 text-sm tracking-wide transition-all"
              style={{ border: "1px solid var(--foreground)", color: "var(--foreground)" }}>
              Escribinos
            </a>
            <button onClick={() => setMenuAbierto(!menuAbierto)}
              className="flex items-center justify-center rounded-full p-2 transition-colors md:hidden"
              style={{ color: "var(--foreground)" }} aria-label="Menú">
              {menuAbierto ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
        {menuAbierto && (
          <div className="md:hidden" style={{ borderTop: "1px solid var(--border-color)", background: "var(--background)" }}>
            <nav className="flex flex-col px-6 py-4 gap-1">
              {NAV_LINKS_MAIN.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setMenuAbierto(false)}
                  className="py-3 text-sm tracking-wide transition-colors hover:text-[#A6896F]"
                  style={{ borderBottom: "1px solid var(--border-color)", color: "var(--muted)" }}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    );
  }

  // variant === "centered" — páginas secundarias
  return (
    <header className="sticky top-0 z-50" style={{ borderBottom: "1px solid var(--border-color)", background: "var(--background)" }}>

      {/* MOBILE */}
      <div className="flex items-center justify-between px-4 py-3 md:hidden">
        <Link href="/">
          <img src="/productos/logo/Caasabianca.jpeg" alt="Casabianca" className="h-10 w-auto mix-blend-multiply" />
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href="https://wa.me/541141952834" target="_blank" rel="noreferrer"
            className="rounded-full px-3 py-1.5 text-xs tracking-wide transition-all"
            style={{ border: "1px solid var(--foreground)", color: "var(--foreground)" }}>
            Escribinos
          </a>
          <button onClick={() => setMenuAbierto(!menuAbierto)}
            className="flex items-center justify-center rounded-full p-2 transition-colors"
            style={{ color: "var(--foreground)" }} aria-label="Menú">
            {menuAbierto ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* MENÚ MOBILE desplegable */}
      {menuAbierto && (
        <div className="md:hidden" style={{ borderTop: "1px solid var(--border-color)", background: "var(--background)" }}>
          <nav className="flex flex-col px-6 py-4 gap-1">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMenuAbierto(false)}
                className="py-3 text-sm tracking-wide transition-colors hover:text-[#A6896F]"
                style={{ borderBottom: "1px solid var(--border-color)", color: "var(--muted)" }}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* DESKTOP */}
      <div className="mx-auto hidden max-w-6xl grid-cols-3 items-center px-6 py-4 md:grid">
        <div />
        <div className="flex justify-center">
          <Link href="/">
            <img src="/productos/logo/Caasabianca.jpeg" alt="Casabianca" className="h-20 w-auto mix-blend-multiply" />
          </Link>
        </div>
        <div className="flex items-center justify-end gap-3">
          <ThemeToggle />
          <a href="https://wa.me/541141952834" target="_blank" rel="noreferrer"
            className="rounded-full px-5 py-2 text-sm tracking-wide transition-all"
            style={{ border: "1px solid var(--foreground)", color: "var(--foreground)" }}>
            Escribinos
          </a>
        </div>
      </div>
    </header>
  );
}