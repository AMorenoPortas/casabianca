"use client";

import { useState } from "react";
import Button from "./components/button";

const PRODUCTOS = [
  { nombre: "Sábanas King · 300 hilos", detalle: "Percal suave y respirable", img: "/productos/sabana-king-300h/Screenshot_20260604_101618_WhatsApp.jpg" },
  { nombre: "Sábanas King · 400 hilos", detalle: "El estándar de lujo de hotelería", img: "/productos/sabana-king-400h/Screenshot_20260604_102002_WhatsApp.jpg" },
  { nombre: "Almohadas de Pluma", detalle: "Suavidad y soporte natural", img: "/productos/almohadas-pluma/Screenshot_20260604_102242_WhatsApp.jpg" },
  { nombre: "Deco & Hogar", detalle: "Detalles que cambian la energía", img: "/productos/home-deco/IMG-20260520-WA0029.jpg" },
  { nombre: "Toallones Premium", detalle: "Sensación tipo hotel", img: "/productos/productos-destacados/destacado1.jpg" },
  { nombre: "Acolchado Matelaseado", detalle: "Abrigo y caída perfecta", img: "/productos/productos-destacados/destacado2.jpg" },
];

const FAQS = [
  {
    q: "¿El poliéster es malo? ¿Y qué es la microfibra?",
    a: 'El poliéster no es "malo": es una fibra sintética muy resistente, durable y de fácil mantenimiento. La microfibra es un poliéster ultrafino, suave y liviano, ideal para sábanas, acolchados y toallas de secado rápido. Tiene ventajas como el secado rápido, menor arruga y practicidad para el uso diario. Su conveniencia depende del destino: en un mantel es ideal porque repele manchas, pero en una sábana puede resultar menos respirable y dar más calor.',
  },
  {
    q: '"1600 hilos" y "Cotton Touch", ¿es publicidad engañosa?',
    a: 'Puede prestarse a confusión. El número de hilos no siempre define la calidad real: también influyen la calidad del hilo, el tipo de tejido y la composición de la tela. Muchas veces son "1600 hilos" de poliéster con frases como "textura algodonosa". "Cotton Touch" significa "tacto algodón": suele ser una tela sintética o mezcla que imita la suavidad del algodón, pero no es algodón puro.',
  },
  {
    q: "¿Cuál es la diferencia en cortinados Black Out?",
    a: "El Black Out bloquea la entrada de luz y ayuda al aislamiento térmico, aportando privacidad y mejor descanso. Hay distintos niveles: el Black Out textil tiene mejor caída y lavado más simple, aunque no siempre bloquea el 100% de la luz; el vinílico logra mayor oscuridad y aislamiento, con variantes más livianas o pesadas y con diferentes terminaciones.",
  },
  {
    q: "¿Qué es un toallón premium?",
    a: "Se diferencia por su mayor gramaje (más densidad y cuerpo), mejor calidad de algodón, mayor absorción, suavidad y durabilidad. Son toallas pensadas para una sensación más confortable, mullida y tipo hotel.",
  },
  {
    q: "¿Las medidas de los envoltorios son correctas?",
    a: 'Sí, aunque puede haber una pequeña variación por el proceso de confección y terminación textil. En algunos productos las medidas pueden variar algunos centímetros según el lavado, el matelaseado o el tipo de tela. Además, denominaciones como "Twin", "Queen" o "King" no siempre corresponden a una medida estándar universal. Por eso conviene mirar la medida real del producto y hacer tus propios cálculos.',
  },
  {
    q: "¿Percal o satén?",
    a: "No se refiere a la fibra del hilo (algodón o poliéster), sino a la forma en la que se teje el hilo. El percal se construye mediante un ligamento simple y equilibrado: tejido uniforme, fresco, mate y respirable. El satén se elabora con un ligamento más complejo, los hilos flotan sobre varios antes de entrelazarse, logrando una superficie más lisa, sedosa y con brillo. Existe satén tanto de algodón como de poliéster.",
  },
  {
    q: "¿Por qué unas toallas secan y otras no?",
    a: "Depende de la calidad del algodón, el gramaje, el tipo de confección y cómo fue trabajado el hilado. Los procesos de teñido y terminación también pueden afectar la absorción final.",
  },
  {
    q: "¿Por qué algunas sábanas hacen pelotitas?",
    a: "Las pelotitas o pilling aparecen por fricción y desgaste, sobre todo en telas con fibras sintéticas de menor calidad. Para reducirlo conviene elegir sábanas con tratamiento anti-peeling (proceso que elimina las microfibras superficiales que sobresalen del tejido). Las de algodón en general no forman pelotitas, aunque pueden soltar pelusas naturales.",
  },
  {
    q: "¿Por qué algunos acolchados se apelmazan?",
    a: "La diferencia está en la calidad del relleno (guata) y la confección. Los acolchados de menor calidad usan guatas más económicas, con fibras cortas o menos resistentes, que con el uso y lavados tienden a compactarse, deformarse o apelmazarse. Un buen acolchado utiliza guatas resistentes con memoria y una confección que mantiene el relleno uniforme, conservando volumen y suavidad por años.",
  },
  {
    q: "¿Importa el tamaño del matelaseado?",
    a: "Sí, influye en la durabilidad y la sensación térmica del acolchado. Un matelaseado más pequeño sujeta mejor la guata y evita que el relleno se desplace o apelmace con el tiempo y los lavados; uno más amplio deja la guata más suelta, generando más aire interno, más abrigo y mullidez.",
  },
];

const MEDIDAS = [
  { colchon: "0,80 / 0,90 × 1,90 m", talle: "1 ½ plaza" },
  { colchon: "1,00 × 2,00 m", talle: "Twin" },
  { colchon: "1,40 × 1,90 m", talle: "2 / 2 ½ plazas" },
  { colchon: "1,50 × 1,90 m", talle: "2 ½ plazas" },
  { colchon: "1,60 × 2,00 m", talle: "Queen Size" },
  { colchon: "1,80 / 2,00 × 2,00 m", talle: "King" },
  { colchon: "2,15 × 2,15 m", talle: "Super King Size" },
];

const TEST = [
  {
    q: "¿Cómo definirías tu mañana ideal?",
    opciones: [
      { letra: "A", texto: "Con mucha luz, sábanas blancas y aroma a café." },
      { letra: "B", texto: "Entre texturas naturales, colores tierra y calma." },
      { letra: "C", texto: "Con colores vibrantes, detalles modernos y energía." },
    ],
  },
  {
    q: "¿Qué es lo primero que buscás al entrar a tu dormitorio?",
    opciones: [
      { letra: "A", texto: "Orden, pulcritud y una cama que parezca una nube." },
      { letra: "B", texto: "Sentirme conectada con la naturaleza y materiales nobles." },
      { letra: "C", texto: "Un espacio con personalidad que refleje mi ritmo de vida." },
    ],
  },
  {
    q: "¿Cuál es tu paleta de colores favorita?",
    opciones: [
      { letra: "A", texto: "Blancos, tizas y grises muy claros." },
      { letra: "B", texto: "Arena, visón, lino natural y verdes secos." },
      { letra: "C", texto: "Azules profundos, grafito o contrastes definidos." },
    ],
  },
];

const RESULTADOS: Record<string, { titulo: string; texto: string }> = {
  A: {
    titulo: "Esencia Luminosa",
    texto: "Tu estilo es fresco, pulcro y atemporal. Te van los blancos puros, el percal de alta calidad y las texturas livianas que aportan esa sensación de cama de hotel. Menos es más.",
  },
  B: {
    titulo: "Esencia Natural",
    texto: "Buscás calidez y conexión con lo orgánico. El lino, los tonos arena y visón y las texturas nobles son lo tuyo: ambientes serenos que invitan a desconectar.",
  },
  C: {
    titulo: "Esencia Moderna",
    texto: "Te gusta la personalidad y el carácter. Azules profundos, grafito y contrastes definidos: piezas de diseño que hacen que tu dormitorio refleje tu ritmo de vida.",
  },
};

function IconAsesoria() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-7 w-7">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconCalidad() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-7 w-7">
      <path d="M12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconTrato() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-7 w-7">
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CasabiancaLanding() {
  const [faqAbierta, setFaqAbierta] = useState<number | null>(0);
  const [respuestas, setRespuestas] = useState<(string | null)[]>([null, null, null]);

  const elegir = (i: number, letra: string) => {
    const copia = [...respuestas];
    copia[i] = letra;
    setRespuestas(copia);
  };

  const completo = respuestas.every((r) => r !== null);
  let resultado: { titulo: string; texto: string } | null = null;
  if (completo) {
    const conteo: Record<string, number> = { A: 0, B: 0, C: 0 };
    respuestas.forEach((r) => r && (conteo[r] += 1));
    const ganadora = Object.entries(conteo).sort((a, b) => b[1] - a[1])[0][0];
    resultado = RESULTADOS[ganadora];
  }

  const reiniciarTest = () => setRespuestas([null, null, null]);

  return (
    <main className="min-h-screen bg-[#F7F3EC] text-[#2E2A24] selection:bg-[#A6896F] selection:text-[#F7F3EC]">

      {/* ───────── HEADER ───────── */}
      <header className="sticky top-0 z-50 border-b border-[#E0D6C4] bg-[#F7F3EC]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <nav className="hidden items-center gap-8 text-sm tracking-wide md:flex">
           <a href="#nosotros" className="transition-colors hover:text-[#A6896F]">Nosotros</a>
            <a href="#productos" className="transition-colors hover:text-[#A6896F]">Productos</a>
            <a href="#faq" className="transition-colors hover:text-[#A6896F]">Guía</a>
            <a href="#medidas" className="transition-colors hover:text-[#A6896F]">Medidas</a>
            <a href="#test" className="transition-colors hover:text-[#A6896F]">Test</a>
            <a href="/devoluciones" className="transition-colors hover:text-[#A6896F]">Política de devoluciones</a>
          </nav>
          <a
            href="https://wa.me/541141952834"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#2E2A24] px-5 py-2 text-sm tracking-wide transition-all hover:bg-[#2E2A24] hover:text-[#F7F3EC]"
          >
            Escribinos
          </a>
        </div>
      </header>

      {/* ───────── HERO ───────── */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-6 pt-12 pb-28 text-center md:pt-16 md:pb-36">
          <img
            src="/productos/logo/Caasabianca.jpeg"
            alt="Casabianca"
            className="mx-auto mb-8 h-32 w-auto mix-blend-multiply"
          />
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#A6896F]">Don Torcuato · Blanqueria & Accesorios</p>
          <h1 className="font-display text-5xl leading-[1.05] md:text-7xl">
            Transformamos tu casa<br />en el hogar que soñás
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#5a5247]">
            Desde un juego de sábanas hasta un artículo de diseño tenemos el detalle perfecto para renovar tu energía y tu hogar.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#productos" className="rounded-full bg-[#2E2A24] px-8 py-3 text-[#F7F3EC] transition-transform hover:-translate-y-0.5">
              Ver productos
            </a>
            <a href="#faq" className="rounded-full border border-[#A6896F] px-8 py-3 text-[#A6896F] transition-colors hover:bg-[#A6896F] hover:text-[#F7F3EC]">
              Guía de telas
            </a>
          </div>
          <div className="mt-4 flex justify-center">
            <a
              href="/filosofia"
              className="rounded-full border border-[#D8CCB6] px-8 py-3 text-sm tracking-wide text-[#5a5247] transition-colors hover:border-[#A6896F] hover:text-[#A6896F]"
            >
              Filosofía Casabianca
            </a>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#EBE3D5] blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-[#E5E2D2] blur-3xl" />
      </section>

      {/* ───────── NOSOTROS ───────── */}
      <section id="nosotros" className="border-y border-[#E0D6C4] bg-[#EFE8DB]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="font-display text-4xl md:text-5xl">¿Y si lo pensamos junt@s?</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#5a5247]">
            Mi objetivo es que te sientas acompañada en cada decisión. Cuando elegís Casabianca, te llevás
            mi mirada proactiva y mi asesoramiento sincero.
          </p>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[#D8CCB6] bg-[#D8CCB6] md:grid-cols-3">
            {[
              { icon: <IconAsesoria />, t: "Asesoría Personalizada", d: "Si tenés dudas sobre colores o medidas, consultame. Estoy en redes y en el local para guiarte en todo momento." },
              { icon: <IconCalidad />, t: "Productos de Calidad", d: "Solo traigo a la tienda aquello que yo misma pondría en mi casa. Calidad premium y diseño de vanguardia a buen precio." },
              { icon: <IconTrato />, t: "Trato Cordial", d: "Me gusta conocer a mis clientas. Para mí, cada consulta es la oportunidad de crear un vínculo sincero; 20 años de comercializar en la zona avalan esta teoría." },
            ].map((c) => (
              <div key={c.t} className="bg-[#F7F3EC] p-9">
                <div className="text-[#A6896F]">{c.icon}</div>
                <h3 className="mt-5 font-display text-2xl">{c.t}</h3>
                <p className="mt-3 leading-relaxed text-[#5a5247]">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── PRODUCTOS DESTACADOS ───────── */}
      <section id="productos" className="mx-auto max-w-6xl px-6 py-24">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[#A6896F]">Selección</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Productos destacados</h2>
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/productos" variant="primary">
            Ver todos los productos →
          </Button>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTOS.map((p) => (
            <article key={p.img} className="group overflow-hidden rounded-2xl border border-[#E0D6C4] bg-[#EBE3D5]">
              <img
                src={p.img}
                alt={p.nombre}
                className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="bg-[#F7F3EC] p-6">
                <h3 className="font-display text-xl">{p.nombre}</h3>
                <p className="mt-1 text-sm text-[#5a5247]">{p.detalle}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section id="faq" className="border-y border-[#E0D6C4] bg-[#EFE8DB]">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <p className="text-xs uppercase tracking-[0.4em] text-[#A6896F]">Guía de consulta</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Elegí con conocimiento, diseñá con libertad</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#5a5247]">
            Vestir tu hogar es una decisión personal y, a veces, técnica. Por eso armé este espacio de
            consulta rápida: mi guía sobre la calidad de los hilados, tips para combinar texturas y una
            tabla de medidas exacta para que tus sábanas y acolchados queden impecables.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { t: "Algodón Premium", d: "La fibra natural por excelencia: suave, respirable y se adapta a la temperatura del cuerpo. Ideal para frescura todo el año." },
              { t: "Percal (180 a 400 hilos)", d: 'El "hilo" son los hilos por pulgada cuadrada. A más cantidad, tejido más cerrado y sedoso. 400 hilos es el estándar de los mejores hoteles.' },
              { t: "Lino", d: "El género más noble y sofisticado. Textura rústica, sumamente durable y mejora con cada lavado." },
            ].map((m) => (
              <div key={m.t} className="rounded-2xl border border-[#D8CCB6] bg-[#F7F3EC] p-6">
                <h3 className="font-display text-xl text-[#A6896F]">{m.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5a5247]">{m.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 divide-y divide-[#D8CCB6] overflow-hidden rounded-2xl border border-[#D8CCB6] bg-[#F7F3EC]">
            {FAQS.map((f, i) => {
              const abierta = faqAbierta === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setFaqAbierta(abierta ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-[#EFE8DB]"
                  >
                    <span className="font-display text-lg">{f.q}</span>
                    <span className={`text-2xl text-[#A6896F] transition-transform duration-300 ${abierta ? "rotate-45" : ""}`}>+</span>
                  </button>
                  <div className={`grid transition-all duration-300 ease-in-out ${abierta ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 leading-relaxed text-[#5a5247]">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── MEDIDAS ───────── */}
      <section id="medidas" className="mx-auto max-w-4xl px-6 py-24">
        <p className="text-xs uppercase tracking-[0.4em] text-[#A6896F]">Guía de medidas</p>
        <h2 className="mt-3 font-display text-4xl md:text-5xl">El calce perfecto</h2>
        <p className="mt-5 text-lg leading-relaxed text-[#5a5247]">
          Evitá errores comunes midiendo tu colchón antes de elegir. Encontrá tu talle:
        </p>
        <div className="mt-10 overflow-hidden rounded-2xl border border-[#E0D6C4]">
          <table className="w-full text-left">
            <thead className="bg-[#2E2A24] text-[#F7F3EC]">
              <tr>
                <th className="px-6 py-4 font-display text-lg font-normal">Si tu colchón mide</th>
                <th className="px-6 py-4 font-display text-lg font-normal">Tu medida ideal</th>
              </tr>
            </thead>
            <tbody>
              {MEDIDAS.map((m, i) => (
                <tr key={m.talle} className={i % 2 ? "bg-[#EFE8DB]" : "bg-[#F7F3EC]"}>
                  <td className="px-6 py-4">{m.colchon}</td>
                  <td className="px-6 py-4 text-[#A6896F]">{m.talle}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-[#5a5247]">
          Si tu colchón tiene <em>euro-top</em> o <em>pillow</em>, o mide más de 30 cm de alto, subí siempre
          un talle en el acolchado para que la caída lateral sea perfecta. Medí de piso a alto y el ancho
          del colchón para saber la medida total a cubrir.
        </p>
      </section>

      {/* ───────── TEST ───────── */}
      <section id="test" className="border-y border-[#E0D6C4] bg-[#2E2A24] text-[#F7F3EC]">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <p className="text-center text-xs uppercase tracking-[0.4em] text-[#A6896F]">Test de estilo</p>
          <h2 className="mt-3 text-center font-display text-4xl md:text-5xl">¿Cuál es tu esencia Casabianca?</h2>
          <p className="mt-5 text-center text-lg text-[#cabfae]">Respondé estas 3 preguntas y descubrí tu set ideal.</p>
          {!resultado ? (
            <div className="mt-14 space-y-10">
              {TEST.map((pregunta, i) => (
                <div key={i}>
                  <h3 className="font-display text-2xl">{i + 1}. {pregunta.q}</h3>
                  <div className="mt-5 grid gap-3">
                    {pregunta.opciones.map((o) => {
                      const elegida = respuestas[i] === o.letra;
                      return (
                        <button
                          key={o.letra}
                          onClick={() => elegir(i, o.letra)}
                          className={`rounded-xl border px-5 py-4 text-left transition-all ${
                            elegida
                              ? "border-[#A6896F] bg-[#A6896F] text-[#2E2A24]"
                              : "border-[#4a4439] hover:border-[#A6896F]"
                          }`}
                        >
                          {o.texto}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
              <p className="text-center text-sm text-[#cabfae]">
                {respuestas.filter(Boolean).length}/3 respondidas
              </p>
            </div>
          ) : (
            <div className="mt-14 rounded-2xl border border-[#A6896F] bg-[#F7F3EC] p-10 text-center text-[#2E2A24]">
              <p className="text-xs uppercase tracking-[0.4em] text-[#A6896F]">Tu esencia es</p>
              <h3 className="mt-3 font-display text-4xl">{resultado.titulo}</h3>
              <p className="mx-auto mt-5 max-w-xl leading-relaxed text-[#5a5247]">{resultado.texto}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a href="https://wa.me/541141952834" target="_blank" rel="noreferrer" className="rounded-full bg-[#2E2A24] px-7 py-3 text-[#F7F3EC]">
                  Quiero asesoría
                </a>
                <button onClick={reiniciarTest} className="rounded-full border border-[#A6896F] px-7 py-3 text-[#A6896F] transition-colors hover:bg-[#A6896F] hover:text-[#F7F3EC]">
                  Volver a hacer el test
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ───────── CUIDADOS ───────── */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="text-xs uppercase tracking-[0.4em] text-[#A6896F]">Manual de cuidados</p>
        <h2 className="mt-3 font-display text-4xl md:text-5xl">Calidad para siempre</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Lavado", d: "Agua fría o tibia (máx. 30 °C). El agua muy caliente debilita las fibras de algodón." },
            { t: "Jabón", d: "Neutros o líquidos suaves. Evitá el exceso de suavizante: impermeabiliza la fibra y le quita absorción." },
            { t: "Secado", d: "Siempre que puedas, a la sombra para evitar la decoloración. En secarropas, calor bajo." },
            { t: "Planchado", d: "Para ese look de hotel, planchá apenas húmedas. O colgalas bien extendidas y prolijas." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-[#E0D6C4] bg-[#EFE8DB] p-6">
              <h3 className="font-display text-xl">{c.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5a5247]">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── CONTACTO ───────── */}
      <section id="contacto" className="border-t border-[#E0D6C4] bg-[#EFE8DB]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl md:text-5xl">Vení a conocernos</h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-[#5a5247]">
              Estoy para escucharte, conocer tu estilo y proponerte opciones que transformen tu dormitorio,
              tu baño o tu mesa en espacios de revista, con la calidez de un hogar real.
            </p>
          </div>
          <div className="space-y-5 text-lg">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#A6896F]">Local</p>
              <p className="mt-1">Ricardo Güiraldes 21, Adolfo Sourdeaux</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#A6896F]">WhatsApp</p>
              <a href="https://wa.me/541141952834" className="mt-1 inline-block underline-offset-4 hover:underline">11 4195 2834</a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#A6896F]">Instagram</p>
              <a href="https://instagram.com/casabianca_dt" target="_blank" rel="noreferrer" className="mt-1 inline-block underline-offset-4 hover:underline">@casabianca_dt</a>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── FOOTER ───────── */}
      <footer className="bg-[#2E2A24] py-10 text-center text-[#cabfae]">
        <p className="font-display text-2xl uppercase tracking-[0.18em] text-[#F7F3EC]">Casabianca</p>
        <p className="mt-2 text-sm">Don Torcuato · Blanqueria & Accesorios</p>
      </footer>

    </main>
  );
}