import { Trophy, CheckCircle2 } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { SEOHead } from '../components/SEOHead';

export function References() {
    const references = [
        "Air France", "SNECMA", "CEA", "Procter & Gamble",
        "SKF", "Cogema", "ABB", "Yoplait",
        "Danone", "Nestlé", "Schneider",
        "Saint Louis Sucre", "LFB Lafarge", "Pechiney",
        "Dalkia", "Parkings de Reims", "Hôpital de Valenciennes",
        "Cliniques Groupe Hospitalor", "AFM (Association France Myopathe)"
    ];

    return (
        <div className="bg-deep-dark min-h-screen pb-24">
            <SEOHead
                title="Références Clients et Confiance | Safefull Systems"
                description="Découvrez les leaders de l'industrie, de l'aéronautique (Air France, SNECMA) et du médical qui font confiance à Safefull Systems pour leur sécurité critique."
                canonicalUrl="https://safefull-systemes.netlify.app/references"
            />

            {/* Grid d'arrière plan type technologie sombre */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none h-[50vh]"></div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-24 sm:pt-32">
                <div className="mx-auto max-w-3xl text-center">
                    <FadeIn direction="up">
                        <h2 className="text-sm font-bold tracking-widest text-matrix-green uppercase">La Preuve Sociale Absolue</h2>
                        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                            Ils s'appuient sur notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-matrix-green to-neon-blue">Résilience</span>
                        </h1>
                        <p className="mt-6 text-xl leading-8 text-gray-400 font-medium">
                            Depuis des années, SafeFull Systems sécurise les infrastructures les plus exigeantes de France. Du pôle nucléaire aux chaînes d'assemblage aéronautiques, l'erreur n'est pas une option.
                        </p>
                    </FadeIn>
                </div>

                {/* Bannière Visuelle B2B */}
                <FadeIn delay={0.2} direction="up" className="mt-16 w-full max-w-5xl mx-auto border border-gray-800 bg-dark-surface p-4">
                    <div className="relative aspect-[21/9] w-full overflow-hidden bg-deep-dark">
                        {/* Fallback styling si l'image n'est pas trouvée, mais on force le chargement de l'image */}
                        <img
                            src="/logoREFERENCES.jpg"
                            alt="Mosaïque des références clients SafeFull Systems : Air France, SNECMA, Danone, CEA..."
                            className="absolute inset-0 h-full w-full object-cover opacity-80 mix-blend-screen"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-deep-dark via-deep-dark/40 to-transparent"></div>
                        <div className="absolute bottom-8 left-8 flex items-center gap-3">
                            <Trophy className="h-8 w-8 text-matrix-green" />
                            <span className="text-2xl font-bold text-white tracking-wide">Excellence Française</span>
                        </div>
                    </div>
                </FadeIn>

                {/* Grille des clients en CSS Grid */}
                <div className="mt-24">
                    <h3 className="text-2xl font-bold text-white mb-10 text-center border-b border-gray-800 pb-6 max-w-2xl mx-auto">
                        L'Exigence Partagée par les Leaders
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-min">
                        {references.map((ref, index) => (
                            <FadeIn key={ref} delay={0.1 + (index * 0.05)} direction="up" className="h-full">
                                <div className="group flex items-center gap-3 h-full rounded-none border border-white/5 bg-white/5 p-4 transition-all hover:border-neon-blue/40 hover:bg-white/10">
                                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-matrix-green group-hover:text-neon-blue transition-colors" />
                                    <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">{ref}</span>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
