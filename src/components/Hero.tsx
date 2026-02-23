import { FadeIn } from './FadeIn';
import { ShieldCheck, Activity, LocateFixed } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
    return (
        <div className="relative overflow-hidden bg-deep-dark border-b border-white/10">
            {/* Background Matrix/Neon effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-neon-blue/20 opacity-20 blur-[100px]"></div>
            <div className="absolute right-0 bottom-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-matrix-green/20 opacity-20 blur-[100px]"></div>

            <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
                <div className="text-center">
                    <FadeIn delay={0.1}>
                        <div className="inline-flex items-center gap-2 border border-neon-blue/30 bg-neon-blue/10 px-3 py-1 text-sm font-medium text-neon-blue">
                            <ShieldCheck className="h-4 w-4" />
                            Leader de la sécurité communicante B2B
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2} direction="up">
                        <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                            Supervision Critique & <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-matrix-green">
                                Protection des Travailleurs
                            </span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.3} direction="up">
                        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
                            Des solutions "Clef en main" en environnement hospitalier et industriel.
                            De l'alerte PTI géolocalisée indoor/outdoor à la supervision d'alarmes hétérogènes (Fresenius, GTC, Incendie).
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.4} direction="up" className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                        <Link
                            to="/solutions/mobeeweb"
                            className="group relative inline-flex items-center justify-center border border-neon-blue bg-neon-blue px-8 py-3 text-base font-bold text-deep-dark transition-all hover:bg-neon-blue/90"
                        >
                            Découvrir MobeeWeb PTI
                            <LocateFixed className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
                        </Link>
                        <Link
                            to="/solutions/nephrocall"
                            className="group relative inline-flex items-center justify-center border border-matrix-green bg-transparent px-8 py-3 text-base font-bold text-matrix-green transition-all hover:bg-matrix-green/10"
                        >
                            Découvrir NephroCall
                            <Activity className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
                        </Link>
                    </FadeIn>
                </div>

                {/* Feature Highlights extracted from data */}
                <FadeIn delay={0.6} direction="up" className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3">
                    <div className="border border-white/5 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-neon-blue/50">
                        <LocateFixed className="h-8 w-8 text-neon-blue mb-4" />
                        <h3 className="text-lg font-bold text-white mb-2 font-mono">Géolocalisation Précise</h3>
                        <p className="text-sm text-gray-400">Indoor via Tags BLE/NFC et Outdoor via GPS. Fiches itinéraires générées automatiquement.</p>
                    </div>
                    <div className="border border-white/5 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-matrix-green/50">
                        <Activity className="h-8 w-8 text-matrix-green mb-4" />
                        <h3 className="text-lg font-bold text-white mb-2 font-mono">PTI Evolué</h3>
                        <p className="text-sm text-gray-400">Perte de verticalité, immobilité prolongée, appels volontaires (SOS) sur terminaux durcis et Atex.</p>
                    </div>
                    <div className="border border-white/5 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-neon-blue/50">
                        <ShieldCheck className="h-8 w-8 text-neon-blue mb-4" />
                        <h3 className="text-lg font-bold text-white mb-2 font-mono">Supervision Médicale</h3>
                        <p className="text-sm text-gray-400">Interface native Fresenius. Traçabilité complète des événements 24/24 pour une réactivité maximale.</p>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
