"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  variant?: "full" | "centered";
}

export default function Header({ variant = "centered" }: HeaderProps) {
  if (variant === "full") {
    return (
      <header className="sticky top-0 z-50" style={{ borderBottom: "1px solid var(--border-color)", background: "var(--background)" }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <nav className="hidden items-center gap-8 text-sm tracking-wide md:flex" style={{ color: "var(--muted)" }}>
            <Link href="#nosotros" className="transition-colors hover:text-[#A6896F]">Nosotros</Link>
            <Link href="#productos" className="transition-colors hover:text-[#A6896F]">Productos</Link>
            <Link href="#diseno" className="transition-colors hover:text-[#A6896F]">Diseño</Link>
            <Link href="#faq" className="transition-colors hover:text-[#A6896F]">Guía</Link>
            <Link href="#medidas" className="transition-colors hover:text-[#A6896F]">Medidas</Link>
            <Link href="#test" className="transition-colors hover:text-[#A6896F]">Test</Link>
            <Link href="/devoluciones" className="transition-colors hover:text-[#A6896F]">Devoluciones</Link>
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="https://wa.me/541141952834"
              target="_blank"
              rel="noreferrer"
              className="rounded-full px-5 py-2 text-sm tracking-wide transition-all"
              style={{ border: "1px solid var(--foreground)", color: "var(--foreground)" }}
            >
              Escribinos
            </a>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50" style={{ borderBottom: "1px solid var(--border-color)", background: "var(--background)" }}>
      <div className="mx-auto grid max-w-6xl grid-cols-3 items-center px-6 py-4">
        <div />
        <div className="flex justify-center">
          <Link href="/">
            <img src="/productos/logo/Caasabianca.jpeg" alt="Casabianca" className="h-20 w-auto mix-blend-multiply" />
          </Link>
        </div>
        <div className="flex items-center justify-end gap-3">
          <ThemeToggle />
          <a
            href="https://wa.me/541141952834"
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-5 py-2 text-sm tracking-wide transition-all"
            style={{ border: "1px solid var(--foreground)", color: "var(--foreground)" }}
          >
            Escribinos
          </a>
        </div>
      </div>
    </header>
  );
}