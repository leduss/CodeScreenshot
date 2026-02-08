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
              <li>5 exports PNG gratuits, avec badge Pro sur les options avancées.</li>
              <li>Console Dark, Console Light et Dracula inclus, les autres thèmes restent visibles mais verrouillés.</li>
              <li>UI de partage visible, mais les actions ne sont jamais capturées dans l’image exportée.</li>
              <li>Le footer reste affiché à l’export, sans contenu masqué.</li>
              <li>Recherche, surlignage, line numbers, pliage, zen, watermark et multi‑panes visibles mais bloqués.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border/60 bg-gradient-card p-6 shadow-glow">
            <h3 className="mb-4 text-xl font-semibold">Pro</h3>
            <ul className="space-y-3 text-sm text-white/90">
              <li>Exports PNG/JPEG illimités, tailles personnalisées et qualité réglable.</li>
              <li>Presets ratio 1:1 / 4:5 / 16:9 avec crop intelligent.</li>
              <li>Export long (scroll complet) avec pagination optionnelle.</li>
              <li>Multi‑panes pour comparer deux versions, avec surlignage des différences.</li>
              <li>Recherche, line numbers, pliage, ligne active, zen, watermark et metasnippet activables.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeVsPro;
