export const metadata = {
  title: "Meu Site",
  description: "Starter Next.js + Docker + Terraform + GitHub Actions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
