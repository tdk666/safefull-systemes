import { FadeIn } from './FadeIn';
import { ShieldCheck, Activity, LocateFixed } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-deep-dark border-b border-white/10">

            {/* Background Matrix/Neon effect (LCP Optimization via fetchPriority) */}
            <img
                src="/matrix-bg.png"
                alt="Architecture Cybersécurité Safefull Systems"
                fetchPriority="high"
                decoding="sync"
                loading="eager"
                className="absolute inset-0 w-full h-full object-cover opacity-5 mix-blend-overlay pointer-events-none"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-safefull-orange/20 opacity-20 blur-[100px]"></div>
            <div className="absolute right-0 bottom-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-safefull-slate/20 opacity-20 blur-[100px]"></div>

            <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
                <div className="text-center">
                    <FadeIn delay={0.1}>
                        <div className="inline-flex items-center gap-2 border border-safefull-orange/30 bg-safefull-orange/10 px-3 py-1 text-sm font-medium text-safefull-orange">
                            <ShieldCheck className="h-4 w-4" />
                            Leader de la sécurité communicante B2B
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2} direction="up">
                        <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl text-balance">
                            Supervision Critique & <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-safefull-orange to-safefull-slate">
                                Protection des Travailleurs
                            </span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.3} direction="up">
                        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 text-pretty">
                            Des solutions "Clef en main" en environnement hospitalier et industriel.
                            De l'alerte PTI géolocalisée indoor/outdoor à la supervision d'alarmes hétérogènes (Fresenius, GTC, Incendie).
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.4} direction="up" className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
                        <Link
                            to="/solutions/mobeeweb"
                            className="group relative inline-flex items-center justify-center rounded-sm bg-safefull-orange px-8 py-3.5 text-base font-bold text-deep-dark transition-all duration-300 hover:bg-white hover:shadow-orange-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-safefull-orange focus-visible:ring-offset-2 focus-visible:ring-offset-deep-dark"
                        >
                            <span className="sr-only">Demander un audit de cybersécurité complet et découvrir l'architecture PTI MobeeWeb pour la protection des travailleurs</span>
                            <span aria-hidden="true" className="flex items-center">
                                Découvrir MobeeWeb PTI
                                <LocateFixed className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                        </Link>

                        <Link
                            to="/solutions/nephrocall"
                            className="group relative inline-flex items-center justify-center rounded-sm border border-safefull-slate/40 bg-safefull-slate/5 px-8 py-3.5 text-base font-bold text-safefull-slate transition-all duration-300 hover:bg-safefull-slate hover:text-deep-dark hover:shadow-glass focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-safefull-slate focus-visible:ring-offset-2 focus-visible:ring-offset-deep-dark"
                        >
                            <span className="sr-only">Explorer nos solutions de supervision médicale d'alarmes hétérogènes NephroCall pour cliniques et hôpitaux</span>
                            <span aria-hidden="true" className="flex items-center">
                                Où explorer NephroCall
                                <Activity className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                            </span>
                        </Link>
                    </FadeIn>
                </div>

                {/* Feature Highlights extracted from data */}
                <FadeIn delay={0.6} direction="up" className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3">
                    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-glass-gradient p-8 shadow-glass backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-safefull-orange/30 hover:shadow-orange-glow">
                        <LocateFixed className="relative z-10 h-8 w-8 text-safefull-orange mb-4" />
                        <h3 className="relative z-10 text-lg font-bold text-white mb-2 font-mono text-balance">Géolocalisation Précise</h3>
                        <p className="relative z-10 text-sm text-gray-400 text-pretty">Indoor via Tags BLE/NFC et Outdoor via GPS. Fiches itinéraires générées automatiquement.</p>
                    </div>
                    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-glass-gradient p-8 shadow-glass backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-safefull-slate/30 hover:shadow-slate-glow">
                        <Activity className="relative z-10 h-8 w-8 text-safefull-slate mb-4" />
                        <h3 className="relative z-10 text-lg font-bold text-white mb-2 font-mono text-balance">PTI Evolué</h3>
                        <p className="relative z-10 text-sm text-gray-400 text-pretty">Perte de verticalité, immobilité prolongée, appels volontaires (SOS) sur terminaux durcis et Atex.</p>
                    </div>
                    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-glass-gradient p-8 shadow-glass backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-safefull-orange/30 hover:shadow-orange-glow">
                        <ShieldCheck className="relative z-10 h-8 w-8 text-safefull-orange mb-4" />
                        <h3 className="relative z-10 text-lg font-bold text-white mb-2 font-mono text-balance">Supervision Médicale</h3>
                        <p className="relative z-10 text-sm text-gray-400 text-pretty">Interface native Fresenius. Traçabilité complète des événements 24/24 pour une réactivité maximale.</p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
