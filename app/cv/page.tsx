'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function CV() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section className="bg-slate-900 py-16 text-white">
          <div className="mx-auto max-w-5xl px-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-300">Parcours professionnel</p>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Mon CV</h1>
            <p className="max-w-2xl text-lg text-slate-200">
              Licence 3 informatique, administration systèmes et réseaux, cybersécurité et DevSecOps.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/images/CV_LAHINIRIKO_Mara_Sylvain.pdf"
                download
                className="rounded-md bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
              >
                Télécharger le PDF
              </a>
              <a
                href="/images/CV_LAHINIRIKO_Mara_Sylvain.docx"
                download
                className="rounded-md border border-white/50 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Télécharger le DOCX
              </a>
              <a
                href="https://github.com/lms-30"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-white/50 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">Aperçu du CV</h2>
          <div className="overflow-hidden border border-slate-200 bg-slate-100">
            <iframe
              src="/images/CV_LAHINIRIKO_Mara_Sylvain.pdf#view=FitH"
              title="CV de Lahiniriko Mara Sylvain"
              className="h-[80vh] min-h-[640px] w-full"
            />
          </div>
          <p className="mt-4 text-sm text-slate-600">
            Si l'aperçu ne s'affiche pas, <a className="font-semibold text-blue-700 underline" href="/images/CV_LAHINIRIKO_Mara_Sylvain.pdf">ouvrez le CV PDF</a>.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
