const FreeVsPro = () => {
  return (
    <section id="difference" className="relative px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="mb-4 block text-sm font-medium uppercase tracking-wider text-primary">
            Free vs Pro
          </span>
          <h2 className="mb-3 text-4xl font-bold tracking-tight md:text-5xl">
            Ce dont la version Free te laisse voir vs ce que Pro débloque
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Tout est pensé pour que la version gratuite reste complète, mais que Pro révèle les dernières fonctionnalités et les exports premiums.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border/60 bg-white/5 p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-semibold">Free</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>5 exports PNG gratuits (limite réinitialisée sur demande dev) avec watermark « SnapCode Free ».</li>
              <li>Seulement Console Dark, Console Light et Dracula accessibles sans badge « Pro ».</li>
              <li>Les boutons copy/download/share restent dans l’interface mais ne sont jamais capturés dans l’image finale.</li>
              <li>Le footer reste visible pendant l’export, mais aucun contenu caché n’apparaît sur la capture.</li>
              <li>Recherche, surlignage, line numbers, zen et watermark sont visibles avec badge Pro.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border/60 bg-gradient-card p-6 shadow-glow">
            <h3 className="mb-4 text-xl font-semibold">Pro</h3>
            <ul className="space-y-3 text-sm text-white/90">
              <li>Exports PNG/JPEG illimités, tailles personnalisées + rendu HQ sans watermark.</li>
              <li>Copier, télécharger et partager apparaissent sur l’UI et dans les exports Pro.</li>
              <li>Toutes les polices, thèmes et filtres (line numbers, search, zen, watermark, metasnippet) sont activables.</li>
              <li>Le badge « Coming soon » signale les innovations en préparation.</li>
              <li>Les exporteurs en prod voient un rendu fidèle aux réglages configurés en sidebar.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeVsPro;
