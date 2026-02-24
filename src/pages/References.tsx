import { Trophy, CheckCircle2, ArrowRight } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { SEOHead } from '../components/SEOHead';
import { Link } from 'react-router-dom';

export function References() {
    const references = [
        "Air France", "SNECMA", "CEA", "Procter & Gamble",
        "SKF", "Cogema", "ABB", "Yoplait",
        "Danone", "Nestlé", "Schneider",
        "Saint Louis Sucre", "LFB Lafarge", "Pechiney",
        "Dalkia", "Parkings de Reims", "Hôpital de Valenciennes",
        "Cliniques Groupe Hospitalor", "AFM (France Myopathie)"
    ];

    return (
        <div className="bg-deep-dark min-h-screen pb-24 relative">
            <SEOHead
                title="Références Clients et Confiance | Safefull Systems"
                description="Découvrez les leaders de l'industrie, de l'aéronautique (Air France, SNECMA) et du médical qui font confiance à Safefull Systems pour leur sécurité critique."
                canonicalUrl="https://safefull-systemes.netlify.app/references"
            />

            {/* Grid Tech Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none h-[70vh]"></div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-24 sm:pt-32">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <FadeIn direction="up">
                        <div className="inline-flex items-center gap-2 rounded-full border border-safefull-slate/30 bg-safefull-slate/5 px-4 py-1.5 text-xs font-bold tracking-widest text-safefull-slate uppercase mb-6">
                            <Trophy className="h-4 w-4" />
                            La Preuve Sociale Absolue
                        </div>
                        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl text-balance">
                            Ils s'appuient sur notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-safefull-slate to-safefull-orange">Résilience</span>
                        </h1>
                        <p className="mt-6 text-xl leading-8 text-gray-400 font-medium text-pretty">
                            Depuis des années, SafeFull Systems sécurise les infrastructures les plus exigeantes. Du pôle nucléaire aux chaînes d'assemblage aéronautiques, l'erreur n'est pas une option.
                        </p>
                    </FadeIn>
                </div>

                {/* Bannière Visuelle B2B: Les Logos Modernes */}
                <FadeIn delay={0.2} direction="up" className="w-full max-w-5xl mx-auto">
                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-10 shadow-2xl backdrop-blur-2xl">
                        {/* Soft Inner Glow */}
                        <div className="absolute inset-0 bg-safefull-slate/5 opacity-50"></div>

                        <div className="relative z-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-10">
                            {/* Assurez-vous que vos images sont bien détourées en PNG sans fond */}
                            <img src="/logos/ARKEMA_logo.png" alt="Arkema" className="h-12 sm:h-16 w-auto object-contain opacity-40 grayscale transition-all duration-500 hover:scale-110 hover:grayscale-0 hover:opacity-100 drop-shadow-md" />
                            <img src="/logos/Logo_Sanofi_(2022).png" alt="Sanofi" className="h-12 sm:h-16 w-auto object-contain opacity-40 grayscale transition-all duration-500 hover:scale-110 hover:grayscale-0 hover:opacity-100 drop-shadow-md" />
                            <img src="/logos/Logo_Tereos_2016.png" alt="Tereos" className="h-12 sm:h-16 w-auto object-contain opacity-40 grayscale transition-all duration-500 hover:scale-110 hover:grayscale-0 hover:opacity-100 drop-shadow-md" />
                            <img src="/logos/Viatris.svg.png" alt="Viatris" className="h-12 sm:h-16 w-auto object-contain opacity-40 grayscale transition-all duration-500 hover:scale-110 hover:grayscale-0 hover:opacity-100 drop-shadow-md" />
                            <img src="/logos/Logo-Ramsay-Sante.png" alt="Ramsay Santé" className="h-12 sm:h-16 w-auto object-contain opacity-40 grayscale transition-all duration-500 hover:scale-110 hover:grayscale-0 hover:opacity-100 drop-shadow-md" />
                            <img src="/logos/Safran_-_logo_2016.png" alt="Safran" className="h-12 sm:h-16 w-auto object-contain opacity-40 grayscale transition-all duration-500 hover:scale-110 hover:grayscale-0 hover:opacity-100 drop-shadow-md" />
                            <img src="/logos/Borealis_logo.svg.png" alt="Borealis" className="h-12 sm:h-16 w-auto object-contain opacity-40 grayscale transition-all duration-500 hover:scale-110 hover:grayscale-0 hover:opacity-100 drop-shadow-md" />
                            <img src="/logos/ChrHansen.svg.png" alt="Chr Hansen" className="h-12 sm:h-16 w-auto object-contain opacity-40 grayscale transition-all duration-500 hover:scale-110 hover:grayscale-0 hover:opacity-100 drop-shadow-md" />
                            <img src="/logos/Remymartin_logo_317px.png" alt="Rémy Martin" className="h-12 sm:h-16 w-auto object-contain opacity-40 grayscale transition-all duration-500 hover:scale-110 hover:grayscale-0 hover:opacity-100 drop-shadow-md" />
                            <img src="/logos/logo-delpharm-300x180.png" alt="Delpharm" className="h-12 sm:h-16 w-auto object-contain opacity-40 grayscale transition-all duration-500 hover:scale-110 hover:grayscale-0 hover:opacity-100 drop-shadow-md" />
                            <img src="/logos/lu-logo.png" alt="LU" className="h-12 sm:h-16 w-auto object-contain opacity-40 grayscale transition-all duration-500 hover:scale-110 hover:grayscale-0 hover:opacity-100 drop-shadow-md" />
                        </div>
                    </div>
                </FadeIn>

                {/* Grille des clients en "Pills" Design 2026 */}
                <div className="mt-32 max-w-6xl mx-auto">
                    <h3 className="text-xl font-bold text-white mb-12 text-center tracking-wide text-balance">
                        L'Exigence Partagée par les Leaders
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {references.map((ref, index) => (
                            <FadeIn key={ref} delay={0.1 + (index * 0.02)} direction="up">
                                <div className="group flex items-center gap-3 rounded-full border border-white/5 bg-white/[0.02] px-6 py-3 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-safefull-slate/40 hover:bg-white/[0.06] hover:shadow-[0_10px_20px_-10px_rgba(255,255,255,0.1)] cursor-default">
                                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-gray-600 group-hover:text-safefull-slate transition-colors duration-300" />
                                    <span className="text-sm font-semibold text-gray-400 group-hover:text-white transition-colors duration-300">{ref}</span>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>

                {/* Closing CTA */}
                <FadeIn delay={0.4} direction="up" className="mt-32">
                    <div className="relative overflow-hidden rounded-3xl border border-safefull-slate/30 bg-glass-gradient p-12 text-center shadow-2xl backdrop-blur-2xl group">
                        <div className="absolute inset-0 bg-safefull-slate/5 transform transition-transform duration-1000 group-hover:scale-110"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-extrabold text-white mb-6 tracking-tight text-balance">Votre logo a sa place ici.</h2>
                            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto text-pretty">
                                Rejoignez les acteurs majeurs de l'industrie et de la santé qui sécurisent leur capital humain et technologique avec Safefull Systems.
                            </p>
                            <Link
                                to="/contact"
                                className="group/btn inline-flex items-center justify-center rounded-lg bg-safefull-slate px-10 py-5 text-lg font-extrabold tracking-wide text-deep-dark shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                            >
                                Demander un Audit Infrastructures
                                <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-2" />
                            </Link>
                        </div>
                    </div>
                </FadeIn>

            </div>
        </div>
    );
}
