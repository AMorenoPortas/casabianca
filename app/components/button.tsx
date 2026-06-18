import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
}

export default function Button({ href, children, variant = "primary" }: ButtonProps) {
  const base = "rounded-full px-6 py-2 text-sm tracking-wide transition-all hover:-translate-y-0.5 inline-block";
  const variants = {
    primary: "bg-[#2E2A24] text-[#F7F3EC]",
    outline: "border border-[#A6896F] text-[#A6896F] hover:bg-[#A6896F] hover:text-[#F7F3EC]",
    ghost: "border border-[#D8CCB6] text-[#5a5247] hover:border-[#A6896F] hover:text-[#A6896F]",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </Link>
  );
}