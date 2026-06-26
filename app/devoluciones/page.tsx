import Link from "next/link";
import Header from "../components/Header";

const SECCIONES = [
  {
    titulo: "Motivos válidos para cambios y devoluciones",
    items: [
      "Producto defectuoso.",
      "Producto llegó roto o con desperfectos.",
      "Producto con variantes (color, tamaño, etc.) diferentes al pedido.",
      "Producto distinto al pedido.",
    ],
  },
  {
    titulo: "Casos no contemplados",
    items: [
      "Productos usados.",
      "Productos sin alguno de sus accesorios, piezas o envoltorio original.",
      "Productos manchados, pisados o con deterioro por uso.",
      "Productos sin su empaque original (cajas, bolsas, etc.).",
    ],
    nota: "Si el producto de devolución llega usado, pisado o manchado, será reenviado al cliente y el costo de ese envío correrá por su cuenta.",
  },
  {
    titulo: "Consideraciones generales",
    items: [
      "Los cambios están sujetos a disponibilidad de stock.",
      "Para solicitudes de cambio o devolución por responsabilidad del cliente, el costo de retiro será abonado por el usuario.",
    ],
  },
];

export default function DevolucionesPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      <Header variant="centered" />

      <section className="px-6 py-16 text-center" style={{ borderBottom: "1px solid var(--border-color)", background: "var(--surface)" }}>
        <p className="text-xs uppercase tracking-[0.4em] text-[#A6896F]">Información importante</p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl">Política de Devoluciones y Cambios</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
          Queremos que estés feliz con tu compra. Si algo no salió como esperabas, estamos para ayudarte.
        </p>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-20 space-y-16">
        <div className="rounded-2xl p-8" style={{ border: "1px solid var(--border-color)", background: "var(--surface)" }}>
          <p className="text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
            En Casabianca queremos que estés satisfech@ con tu compra. Por eso podés solicitar el cambio o devolución de un producto dentro de los plazos y condiciones que detallamos a continuación.
          </p>
        </div>

        {SECCIONES.map((s) => (
          <section key={s.titulo}>
            <div className="mb-6 pb-3" style={{ borderBottom: "1px solid var(--border-color)" }}>
              <h2 className="font-display text-2xl md:text-3xl">{s.titulo}</h2>
            </div>
            <ul className="space-y-3">
              {s.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 leading-relaxed" style={{ color: "var(--muted)" }}>
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A6896F]" />
                  {item}
                </li>
              ))}
            </ul>
            {s.nota && (
              <div className="mt-6 rounded-xl p-5" style={{ border: "1px solid var(--border-color)", background: "var(--background)" }}>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  <span className="font-semibold" style={{ color: "var(--foreground)" }}>Importante: </span>{s.nota}
                </p>
              </div>
            )}
          </section>
        ))}

        <section>
          <div className="mb-6 pb-3" style={{ borderBottom: "1px solid var(--border-color)" }}>
            <h2 className="font-display text-2xl md:text-3xl">¿Cómo gestionar un cambio o devolución?</h2>
          </div>
          <div className="rounded-2xl p-6" style={{ border: "1px solid var(--border-color)", background: "var(--surface)" }}>
            <p className="text-xs uppercase tracking-[0.3em] text-[#A6896F]">Pasados los 15 días</p>
            <h3 className="mt-2 font-display text-xl">Consulta previa</h3>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Podés consultarnos igual. La aceptación quedará a criterio de Casabianca según el caso y las condiciones del producto.
            </p>
            <a href="https://wa.me/541141952834" target="_blank" rel="noreferrer"
              className="mt-5 inline-block rounded-full border border-[#A6896F] px-6 py-2.5 text-sm text-[#A6896F] transition-colors hover:bg-[#A6896F] hover:text-[#F7F3EC]">
              Consultanos
            </a>
          </div>
        </section>

        <section className="rounded-2xl bg-[#2E2A24] p-10 text-center text-[#F7F3EC]">
          <p className="text-xs uppercase tracking-[0.4em] text-[#A6896F]">¿Tenés dudas?</p>
          <h2 className="mt-3 font-display text-3xl">Estamos para ayudarte</h2>
          <p className="mx-auto mt-4 max-w-md text-[#cabfae]">Contactanos por WhatsApp o visitanos en el local. Te asesoramos sin compromiso.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/541141952834" target="_blank" rel="noreferrer"
              className="rounded-full bg-[#A6896F] px-8 py-3 text-[#F7F3EC] transition-transform hover:-translate-y-0.5">
              WhatsApp 
            </a>
            <Link href="/" className="rounded-full border border-[#cabfae] px-8 py-3 text-[#cabfae] transition-colors hover:border-[#F7F3EC] hover:text-[#F7F3EC]">
              Volver al inicio
            </Link>
          </div>
        </section>
      </div>

      <footer className="bg-[#2E2A24] py-10 text-center text-[#cabfae]">
        <p className="font-display text-2xl uppercase tracking-[0.18em] text-[#F7F3EC]">Casabianca</p>
        <p className="mt-2 text-sm">Don Torcuato · Blanqueria & Accesorios</p>
      </footer>
    </main>
  );
}