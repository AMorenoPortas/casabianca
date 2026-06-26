import Header from "../components/Header";

export default function Filosofia() {
  return (
    <main className="min-h-screen" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      <Header variant="centered" />

      <section className="mx-auto max-w-3xl px-6 pt-20 pb-28">
        <p className="text-xs uppercase tracking-[0.4em] text-[#A6896F]">Filosofía Casabianca</p>
        <h1 className="mt-4 font-display text-4xl leading-tight md:text-5xl">El arte de vestir tu hogar</h1>
        <div className="mt-10 space-y-6 text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
          <p>En Casabianca, nos especializamos en brindar asesoramiento personalizado para que puedas crear el espacio de tus sueños. Nuestra tienda ofrece una variedad de productos de ropa blanca y diseño de interiores accesorios para el hogar para que puedas encontrar lo que buscas.</p>
          <p>Mi pasión es el diseño y, encontrar los productos que nos permitan vivir con confort y nos de bienestar, sobre todo, cómo los detalles pueden cambiar por completo la energía de una casa. Hace años que desde Casabianca, aquí en Don Torcuato, me dedico a seleccionar géneros y texturas que no solo visten ambientes, sino que crean momentos de bienestar.</p>
          <p>Entiendo que elegir el acolchado ideal o la cortina justa puede ser difícil. Por eso, mi compromiso con vos va más allá del mostrador: me encanta escucharte, conocer tu estilo y proponer opciones que transformen tu dormitorio, tu baño o tu mesa en espacios de revista, pero con la calidez de un hogar real.</p>
        </div>
        <a href="/" className="mt-12 inline-block rounded-full bg-[#2E2A24] px-8 py-3 text-[#F7F3EC] transition-transform hover:-translate-y-0.5">
          Volver al inicio
        </a>
      </section>
    </main>
  );
}