"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";

const CATEGORIAS = [
  {
    nombre: "Sábanas King",
    slug: "sabanas-king",
    productos: [
      { nombre: "Sábanas King · 300 hilos 100% Algodón Premium Espalma", detalle: "Percal suave y respirable", imgs: ["/productos/sabana-king-300h/Screenshot_20260604_101618_WhatsApp.jpg","/productos/sabana-king-300h/Screenshot_20260604_101642_WhatsApp.jpg","/productos/sabana-king-300h/Screenshot_20260604_101655_WhatsApp.jpg"] },
      { nombre: "Sábanas King · 400 hilos 100% Algodón egipcio Danubio", detalle: "El estándar de lujo de hotelería", imgs: ["/productos/sabana-king-400h/Screenshot_20260604_102002_WhatsApp.jpg","/productos/sabana-king-400h/Screenshot_20260604_102015_WhatsApp.jpg"] },
    ],
  },
  {
    nombre: "Almohadas de Pluma",
    slug: "almohadas",
    productos: [
      { nombre: "Almohadas de Pluma", detalle: "Suavidad y soporte natural", imgs: ["/productos/almohadas-pluma/Screenshot_20260604_102242_WhatsApp.jpg","/productos/almohadas-pluma/Screenshot_20260604_102255_WhatsApp.jpg","/productos/almohadas-pluma/Screenshot_20260604_102303_WhatsApp.jpg"] },
    ],
  },
  {
    nombre: "Batas",
    slug: "batas",
    productos: [
      { nombre: "Batas unisex · 100% algodón peinado de 300gr Urban Espalma", detalle: "Confort y elegancia para el hogar", imgs: ["/productos/batas/Screenshot_20260612_132726_WhatsApp.jpg","/productos/batas/Screenshot_20260612_132734_WhatsApp.jpg","/productos/batas/Screenshot_20260612_132742_WhatsApp.jpg","/productos/batas/Screenshot_20260612_132752_WhatsApp.jpg","/productos/batas/Screenshot_20260612_132800_WhatsApp.jpg","/productos/batas/Screenshot_20260612_132807_WhatsApp.jpg"] },
    ],
  },
  {
    nombre: "Juegos de Toallas & Toallón",
    slug: "juegos-toalla",
    productos: [
      { nombre: "Juego de toallas · 600gr 100% Algodón Edy Arcoiris", detalle: "600 gramos de puro algodón", imgs: ["/productos/juegos-toalla-toallon/toallas-600gr-algodon-arcoiris/Screenshot_20260616_161209_WhatsApp.jpg","/productos/juegos-toalla-toallon/toallas-600gr-algodon-arcoiris/Screenshot_20260616_161219_WhatsApp.jpg","/productos/juegos-toalla-toallon/toallas-600gr-algodon-arcoiris/Screenshot_20260616_161226_WhatsApp.jpg","/productos/juegos-toalla-toallon/toallas-600gr-algodon-arcoiris/Screenshot_20260616_161234_WhatsApp.jpg","/productos/juegos-toalla-toallon/toallas-600gr-algodon-arcoiris/Screenshot_20260616_161242_WhatsApp.jpg","/productos/juegos-toalla-toallon/toallas-600gr-algodon-arcoiris/Screenshot_20260616_161249_WhatsApp.jpg"] },
      { nombre: "Juego de toallas · 700gr 100% Algodón Top Espalma", detalle: "Gramaje superior, sensación tipo hotel", imgs: ["/productos/juegos-toalla-toallon/toallas-700gr-algodon-top-espalma/Screenshot_20260616_161739_WhatsApp.jpg","/productos/juegos-toalla-toallon/toallas-700gr-algodon-top-espalma/Screenshot_20260616_161745_WhatsApp.jpg","/productos/juegos-toalla-toallon/toallas-700gr-algodon-top-espalma/Screenshot_20260616_161753_WhatsApp.jpg","/productos/juegos-toalla-toallon/toallas-700gr-algodon-top-espalma/Screenshot_20260616_161801_WhatsApp.jpg","/productos/juegos-toalla-toallon/toallas-700gr-algodon-top-espalma/Screenshot_20260616_161810_WhatsApp.jpg","/productos/juegos-toalla-toallon/toallas-700gr-algodon-top-espalma/Screenshot_20260616_161817_WhatsApp.jpg","/productos/juegos-toalla-toallon/toallas-700gr-algodon-top-espalma/Screenshot_20260616_161824_WhatsApp.jpg","/productos/juegos-toalla-toallon/toallas-700gr-algodon-top-espalma/Screenshot_20260616_161835_WhatsApp.jpg","/productos/juegos-toalla-toallon/toallas-700gr-algodon-top-espalma/Screenshot_20260616_161842_WhatsApp.jpg"] },
    ],
  },
  {
    nombre: "Toallas de Cocina",
    slug: "toallas-cocina",
    productos: [
      { nombre: "Toalla de cocina · pack x2 50x70 cm 100% algodón Espalma", detalle: "Algodón absorbente para la cocina", imgs: ["/productos/toallas-cocina/pack-x2-50x70/Screenshot_20260612_131503_WhatsApp.jpg","/productos/toallas-cocina/pack-x2-50x70/Screenshot_20260612_131510_WhatsApp.jpg","/productos/toallas-cocina/pack-x2-50x70/Screenshot_20260612_131517_WhatsApp.jpg","/productos/toallas-cocina/pack-x2-50x70/Screenshot_20260612_131529_WhatsApp.jpg","/productos/toallas-cocina/pack-x2-50x70/Screenshot_20260612_131535_WhatsApp.jpg","/productos/toallas-cocina/pack-x2-50x70/Screenshot_20260612_131541_WhatsApp.jpg","/productos/toallas-cocina/pack-x2-50x70/Screenshot_20260612_131548_WhatsApp.jpg","/productos/toallas-cocina/pack-x2-50x70/Screenshot_20260612_131554_WhatsApp.jpg","/productos/toallas-cocina/pack-x2-50x70/Screenshot_20260612_131601_WhatsApp.jpg"] },
      { nombre: "Repasador de cocina · pack x4 45x70 cm 100% algodón Palette", detalle: "Ideal para equipar toda la cocina", imgs: ["/productos/toallas-cocina/pack-x4-45x70/Screenshot_20260612_131122_WhatsApp.jpg","/productos/toallas-cocina/pack-x4-45x70/Screenshot_20260612_131134_WhatsApp.jpg"] },
    ],
  },
  {
    nombre: "Toallas de Playa",
    slug: "toallas-playa",
    productos: [
      { nombre: "Toalla de Playa · 150x180 cm 500gr Náutical Arcoiris", detalle: "Grande, suave y de secado rápido", imgs: ["/productos/toallas-playa/150x180/Screenshot_20260616_103022_WhatsApp.jpg","/productos/toallas-playa/150x180/Screenshot_20260616_103033_WhatsApp.jpg","/productos/toallas-playa/150x180/Screenshot_20260616_103058_WhatsApp.jpg","/productos/toallas-playa/150x180/Screenshot_20260616_103105_WhatsApp.jpg"] },
      { nombre: "Toalla de Playa · 180x90 cm - 350 gr Isla Espalma", detalle: "Un clásico de verano en tamaño ideal", imgs: ["/productos/toallas-playa/180x90/Screenshot_20260616_103418_WhatsApp.jpg","/productos/toallas-playa/180x90/Screenshot_20260616_103426_WhatsApp.jpg","/productos/toallas-playa/180x90/Screenshot_20260616_103434_WhatsApp.jpg","/productos/toallas-playa/180x90/Screenshot_20260616_103445_WhatsApp.jpg","/productos/toallas-playa/180x90/Screenshot_20260616_103451_WhatsApp.jpg"] },
      { nombre: "Toalla de playa reversible · 180x90 cm 500gr Hamptons Espalma", detalle: "Dos colores en una sola toalla", imgs: ["/productos/toallas-playa/reversibles-180x90/Screenshot_20260616_102027_WhatsApp.jpg","/productos/toallas-playa/reversibles-180x90/Screenshot_20260616_102037_WhatsApp.jpg","/productos/toallas-playa/reversibles-180x90/Screenshot_20260616_102044_WhatsApp.jpg","/productos/toallas-playa/reversibles-180x90/Screenshot_20260616_102052_WhatsApp.jpg","/productos/toallas-playa/reversibles-180x90/Screenshot_20260616_102058_WhatsApp.jpg","/productos/toallas-playa/reversibles-180x90/Screenshot_20260616_102105_WhatsApp.jpg","/productos/toallas-playa/reversibles-180x90/Screenshot_20260616_102128_WhatsApp.jpg","/productos/toallas-playa/reversibles-180x90/Screenshot_20260616_102135_WhatsApp.jpg","/productos/toallas-playa/reversibles-180x90/Screenshot_20260616_102144_WhatsApp.jpg"] },
    ],
  },
  {
    nombre: "Accesorios de Hogar",
    slug: "accesorios",
    productos: [
      { nombre: "Alfombra Kitchen · 150×50 cm", detalle: "Diseño moderno para tu cocina", imgs: ["/productos/accesorios-hogar/alfombra-kitchen-150.50/Screenshot_20260616_162352_WhatsApp.jpg","/productos/accesorios-hogar/alfombra-kitchen-150.50/Screenshot_20260616_162359_WhatsApp.jpg","/productos/accesorios-hogar/alfombra-kitchen-150.50/Screenshot_20260616_162406_WhatsApp.jpg","/productos/accesorios-hogar/alfombra-kitchen-150.50/Screenshot_20260616_162412_WhatsApp.jpg","/productos/accesorios-hogar/alfombra-kitchen-150.50/Screenshot_20260616_162419_WhatsApp.jpg"] },
      { nombre: "Puff Hilo Kraft", detalle: "Textura natural, carácter y estilo", imgs: ["/productos/accesorios-hogar/puff-hilo-kraft/Screenshot_20260616_162648_WhatsApp.jpg","/productos/accesorios-hogar/puff-hilo-kraft/Screenshot_20260616_162708_WhatsApp.jpg","/productos/accesorios-hogar/puff-hilo-kraft/Screenshot_20260616_162716_WhatsApp.jpg","/productos/accesorios-hogar/puff-hilo-kraft/Screenshot_20260616_162724_WhatsApp.jpg","/productos/accesorios-hogar/puff-hilo-kraft/Screenshot_20260616_162732_WhatsApp.jpg"] },
    ],
  },
  {
    nombre: "Diseño de Interiores",
    slug: "diseno-interiores",
    productos: [
      { nombre: "Diseño de Interiores", detalle: "Piezas que transforman cada ambiente", imgs: ["/productos/diseno-interiores/IMG-20260610-WA0080.jpg","/productos/diseno-interiores/IMG-20260610-WA0081.jpg","/productos/diseno-interiores/IMG-20260610-WA0082.jpg","/productos/diseno-interiores/IMG-20260610-WA0083.jpg","/productos/diseno-interiores/IMG-20260610-WA0084.jpg","/productos/diseno-interiores/IMG-20260610-WA0085.jpg","/productos/diseno-interiores/IMG-20260610-WA0086.jpg"] },
    ],
  },
  {
    nombre: "Home Deco",
    slug: "home-deco",
    productos: [
      { nombre: "Home Deco", detalle: "Detalles que cambian la energía del espacio", imgs: ["/productos/home-deco/IMG-20260520-WA0029.jpg","/productos/home-deco/IMG-20260520-WA0030.jpg","/productos/home-deco/IMG-20260520-WA0031.jpg","/productos/home-deco/IMG-20260520-WA0033.jpg"] },
    ],
  },
];

export default function ProductosPage() {
  const [lightbox, setLightbox] = useState<{ imgs: string[]; idx: number } | null>(null);

  const abrirLightbox = (imgs: string[], idx: number) => setLightbox({ imgs, idx });
  const cerrarLightbox = () => setLightbox(null);
  const anterior = () => setLightbox((l) => l ? { ...l, idx: (l.idx - 1 + l.imgs.length) % l.imgs.length } : null);
  const siguiente = () => setLightbox((l) => l ? { ...l, idx: (l.idx + 1) % l.imgs.length } : null);

  return (
    <main className="min-h-screen" style={{ background: "var(--background)", color: "var(--foreground)" }}>

      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={cerrarLightbox}>
          <img src={lightbox.imgs[lightbox.idx]} alt="" className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl" onClick={(e) => e.stopPropagation()} />
          <button onClick={cerrarLightbox} className="absolute top-5 right-5 text-white text-3xl leading-none hover:text-[#A6896F] transition-colors">✕</button>
          {lightbox.imgs.length > 1 && <button onClick={(e) => { e.stopPropagation(); anterior(); }} className="absolute left-5 text-white text-4xl leading-none hover:text-[#A6896F] transition-colors">‹</button>}
          {lightbox.imgs.length > 1 && <button onClick={(e) => { e.stopPropagation(); siguiente(); }} className="absolute right-5 text-white text-4xl leading-none hover:text-[#A6896F] transition-colors">›</button>}
          <p className="absolute bottom-5 text-white/60 text-sm">{lightbox.idx + 1} / {lightbox.imgs.length}</p>
        </div>
      )}

      <Header variant="centered" />

      <section className="px-6 py-16 text-center" style={{ borderBottom: "1px solid var(--border-color)", background: "var(--surface)" }}>
        <p className="text-xs uppercase tracking-[0.4em] text-[#A6896F]">Catálogo completo</p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl">Todos los productos</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed" style={{ color: "var(--muted)" }}>Explorá cada categoría y encontrá el detalle perfecto para tu hogar.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {CATEGORIAS.map((c) => (
            <a key={c.slug} href={`#${c.slug}`} className="rounded-full px-4 py-1.5 text-sm transition-colors hover:text-[#A6896F]" style={{ border: "1px solid var(--border-color)", color: "var(--muted)" }}>{c.nombre}</a>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-20 space-y-24">
        {CATEGORIAS.map((cat) => (
          <section key={cat.slug} id={cat.slug}>
            <div className="mb-10 pb-4" style={{ borderBottom: "1px solid var(--border-color)" }}>
              <p className="text-xs uppercase tracking-[0.4em] text-[#A6896F]">Categoría</p>
              <h2 className="mt-2 font-display text-3xl md:text-4xl">{cat.nombre}</h2>
            </div>
            <div className="space-y-16">
              {cat.productos.map((prod) => (
                <div key={prod.nombre}>
                  <div className="mb-5">
                    <h3 className="font-display text-2xl">{prod.nombre}</h3>
                    <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>{prod.detalle}</p>
                  </div>
                  <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                    {prod.imgs.map((img, idx) => (
                      <button key={idx} onClick={() => abrirLightbox(prod.imgs, idx)} className="group overflow-hidden rounded-2xl cursor-zoom-in" style={{ border: "1px solid var(--border-color)", background: "var(--surface-2)" }}>
                        <img src={img} alt={`${prod.nombre} ${idx + 1}`} className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="px-6 py-20 text-center" style={{ borderTop: "1px solid var(--border-color)", background: "var(--surface)" }}>
        <h2 className="font-display text-3xl md:text-4xl">¿Querés saber más sobre algún producto?</h2>
        <p className="mx-auto mt-4 max-w-md text-lg" style={{ color: "var(--muted)" }}>Escribinos y te asesoramos.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="https://wa.me/541141952834" target="_blank" rel="noreferrer" className="rounded-full bg-[#2E2A24] px-8 py-3 text-[#F7F3EC] transition-transform hover:-translate-y-0.5">Escribinos por WhatsApp</a>
          <Link href="/" className="rounded-full border border-[#A6896F] px-8 py-3 text-[#A6896F] transition-colors hover:bg-[#A6896F] hover:text-[#F7F3EC]">Volver al inicio</Link>
        </div>
      </section>

      <footer className="bg-[#2E2A24] py-10 text-center text-[#cabfae]">
        <p className="font-display text-2xl uppercase tracking-[0.18em] text-[#F7F3EC]">Casabianca</p>
        <p className="mt-2 text-sm">Don Torcuato · Blanqueria & Accesorios</p>
      </footer>
    </main>
  );
}