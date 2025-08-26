export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Meu Site — Next.js + Docker + Terraform
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            EN: Production-ready starter with auto-deploy to a temporary VM via GitHub Actions.
          </p>
          <p className="text-lg text-slate-300">
            PT-BR: Starter pronto para produção com deploy automático para uma VM temporária via GitHub Actions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://nextjs.org"
              className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:opacity-90"
              target="_blank"
              rel="noreferrer"
            >
              Next.js Docs
            </a>
            <a
              href="https://www.terraform.io"
              className="px-5 py-3 rounded-xl border border-slate-700 hover:bg-slate-800"
              target="_blank"
              rel="noreferrer"
            >
              Terraform
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Fast",
              pt: "Rápido",
              en: "Fast"
            },
            {
              title: "Secure",
              pt: "Seguro",
              en: "Secure"
            },
            {
              title: "Scalable",
              pt: "Escalável",
              en: "Scalable"
            },
          ].map((f) => (
            <div key={f.title} className="p-6 rounded-2xl border bg-slate-50">
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="text-slate-600 mt-2">
                EN: {f.en} by default using modern tooling.
              </p>
              <p className="text-slate-600">
                PT-BR: {f.pt} por padrão usando ferramentas modernas.
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-slate-500">
        <p>
          Built with ❤️ — {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  );
}
