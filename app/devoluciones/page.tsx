import Link from "next/link";

const SECCIONES = [
  {
    titulo: "Motivos válidos para cambios y devoluciones",
    items: [
      "Producto en estado óptimo pero no fue de tu agrado o no te sirve.",
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
      "En caso de devolución aprobada, se restituirá el monto abonado en la cuenta que se nos informe dentro de la República Argentina.",
    ],
  },
];

export default function DevolucionesPage() {
  return (
    <main className="min-h-screen bg-[#F7F3EC] text-[#2E2A24]">

      {/* ───────── HEADER ───────── */}
      <header className="sticky top-0 z-50 border-b border-[#E0D6C4] bg-[#F7F3EC]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="w-24" />
          <Link href="/">
            <img
              src="/productos/logo/Caasabianca.jpeg"
              alt="Casabianca"
              className="h-20 w-auto mix-blend-multiply"
            />
          </Link>
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
      <section className="border-b border-[#E0D6C4] bg-[#EFE8DB] px-6 py-16 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-[#A6896F]">Información importante</p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl">Política de Devoluciones y Cambios</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[#5a5247]">
          Queremos que estés feliz con tu compra. Si algo no salió como esperabas, estamos para ayudarte.
        </p>
      </section>

      {/* ───────── CONTENIDO ───────── */}
      <div className="mx-auto max-w-3xl px-6 py-20 space-y-16">

        {/* Intro */}
        <div className="rounded-2xl border border-[#E0D6C4] bg-[#EFE8DB] p-8">
          <p className="text-lg leading-relaxed text-[#5a5247]">
            En Casabianca queremos que estés satisfech@ con tu compra. Por eso podés solicitar el cambio o devolución de un producto dentro de los plazos y condiciones que detallamos a continuación.
          </p>
        </div>

        {/* Secciones */}
        {SECCIONES.map((s) => (
          <section key={s.titulo}>
            <div className="mb-6 border-b border-[#E0D6C4] pb-3">
              <h2 className="font-display text-2xl md:text-3xl">{s.titulo}</h2>
            </div>
            <ul className="space-y-3">
              {s.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#5a5247] leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A6896F]" />
                  {item}
                </li>
              ))}
            </ul>
            {s.nota && (
              <div className="mt-6 rounded-xl border border-[#D8CCB6] bg-[#F7F3EC] p-5">
                <p className="text-sm leading-relaxed text-[#5a5247]">
                  <span className="font-semibold text-[#2E2A24]">Importante: </span>{s.nota}
                </p>
              </div>
            )}
          </section>
        ))}

        {/* Cómo gestionar */}
        <section>
          <div className="mb-6 border-b border-[#E0D6C4] pb-3">
            <h2 className="font-display text-2xl md:text-3xl">¿Cómo gestionar un cambio o devolución?</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-[#E0D6C4] bg-[#EFE8DB] p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[#A6896F]">Dentro de los 15 días</p>
              <h3 className="mt-2 font-display text-xl">Cambio o devolución</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5a5247]">
                Contactanos por WhatsApp o por mail dentro de los 15 días posteriores a la entrega para iniciar el proceso.
              </p>
              <a
                href="https://wa.me/541141952834"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block rounded-full bg-[#2E2A24] px-6 py-2.5 text-sm text-[#F7F3EC] transition-transform hover:-translate-y-0.5"
              >
                Escribinos por WhatsApp
              </a>
            </div>
            <div className="rounded-2xl border border-[#E0D6C4] bg-[#EFE8DB] p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[#A6896F]">Pasados los 15 días</p>
              <h3 className="mt-2 font-display text-xl">Consulta previa</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5a5247]">
                Podés consultarnos igual. La aceptación quedará a criterio de Casabianca según el caso y las condiciones del producto.
              </p>
              <a
                href="https://wa.me/541141952834"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block rounded-full border border-[#A6896F] px-6 py-2.5 text-sm text-[#A6896F] transition-colors hover:bg-[#A6896F] hover:text-[#F7F3EC]"
              >
                Consultanos
              </a>
            </div>
          </div>
        </section>

        {/* Pasos */}
        <section>
          <div className="mb-6 border-b border-[#E0D6C4] pb-3">
            <h2 className="font-display text-2xl md:text-3xl">Pasos para enviar tu solicitud</h2>
          </div>
          <div className="space-y-4">
            {[
              { n: "01", t: "Contactanos", d: "Escribinos por WhatsApp al 11 4195 2834 e indicanos el motivo del cambio o devolución." },
              { n: "02", t: "Preparar el producto", d: "Guardá el producto en su empaque original junto con todos sus accesorios." },
              { n: "03", t: "Coordinar el retiro", d: "Te indicaremos cómo proceder con el envío o retiro según tu caso." },
              { n: "04", t: "Resolución", d: "Una vez recibido y verificado el producto, procesamos el cambio o la devolución del monto abonado." },
            ].map((paso) => (
              <div key={paso.n} className="flex items-start gap-5 rounded-2xl border border-[#E0D6C4] bg-[#F7F3EC] p-6">
                <span className="font-display text-3xl text-[#D8CCB6]">{paso.n}</span>
                <div>
                  <h3 className="font-display text-xl">{paso.t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#5a5247]">{paso.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA contacto */}
        <section className="rounded-2xl bg-[#2E2A24] p-10 text-center text-[#F7F3EC]">
          <p className="text-xs uppercase tracking-[0.4em] text-[#A6896F]">¿Tenés dudas?</p>
          <h2 className="mt-3 font-display text-3xl">Estamos para ayudarte</h2>
          <p className="mx-auto mt-4 max-w-md text-[#cabfae]">
            Contactanos por WhatsApp o visitanos en el local. Te asesoramos sin compromiso.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/541141952834"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#A6896F] px-8 py-3 text-[#F7F3EC] transition-transform hover:-translate-y-0.5"
            >
              WhatsApp · 11 4195 2834
            </a>
            <Link
              href="/"
              className="rounded-full border border-[#cabfae] px-8 py-3 text-[#cabfae] transition-colors hover:border-[#F7F3EC] hover:text-[#F7F3EC]"
            >
              Volver al inicio
            </Link>
          </div>
        </section>

      </div>

      {/* ───────── FOOTER ───────── */}
      <footer className="bg-[#2E2A24] py-10 text-center text-[#cabfae]">
        <p className="font-display text-2xl uppercase tracking-[0.18em] text-[#F7F3EC]">Casabianca</p>
        <p className="mt-2 text-sm">Don Torcuato · Blanqueria & Accesorios</p>
      </footer>

    </main>
  );
}