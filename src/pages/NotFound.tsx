import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft, Terminal } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { FadeIn } from '../components/FadeIn';

export function NotFound() {
    return (
        <main className="relative min-h-screen bg-deep-dark flex items-center justify-center overflow-hidden">
            <SEOHead
                title="Page Introuvable - 404 | Safefull Systems"
                description="La page que vous recherchez semble avoir été déplacée ou n'existe plus."
                canonicalUrl="/404"
            />

            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-safefull-orange/10 via-deep-dark to-deep-dark"></div>
            <div className="absolute inset-0 bg-[url('/matrix-bg.png')] opacity-5 mix-blend-overlay"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-safefull-orange/20 to-transparent"></div>

            <article className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
                <FadeIn direction="up">
                    <div className="flex justify-center mb-8">
                        <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-white/5 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] backdrop-blur-xl">
                            <div className="absolute inset-0 rounded-2xl bg-safefull-orange/10 animate-pulse"></div>
                            <Terminal className="h-10 w-10 text-safefull-orange" />
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={0.1} direction="up">
                    <h1 className="text-display font-extrabold text-white sm:text-7xl mb-6 text-balance">
                        Erreur <span className="text-safefull-orange">404</span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-400 font-medium mb-10 max-w-2xl mx-auto leading-relaxed text-pretty">
                        Cette interface n'est pas répertoriée dans notre système. La page demandée a été déplacée ou supprimée de notre architecture.
                    </p>
                </FadeIn>

                <FadeIn delay={0.2} direction="up">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/"
                            className="group flex w-full sm:w-auto items-center justify-center rounded-sm bg-safefull-orange px-8 py-3.5 text-base font-bold text-deep-dark shadow-[0_0_20px_rgba(242,97,34,0.3)] transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] focus:outline-none focus:ring-2 focus:ring-safefull-orange focus:ring-offset-2 focus:ring-offset-deep-dark"
                        >
                            <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
                            Retour au Serveur Central
                        </Link>

                        <Link
                            to="/contact"
                            className="flex w-full sm:w-auto items-center justify-center rounded-sm border border-white/10 bg-white/5 px-8 py-3.5 text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-deep-dark"
                        >
                            <ShieldAlert className="mr-2 h-5 w-5 text-gray-400" />
                            Signaler l'anomalie
                        </Link>
                    </div>
                </FadeIn>

                <FadeIn delay={0.3} direction="up">
                    <div className="mt-16 text-sm text-gray-600 font-mono">
                        <span className="opacity-50"># STATUS:</span> <span className="text-safefull-orange/70">ERR_CONNECTION_REFUSED_404</span>
                    </div>
                </FadeIn>
            </article>
        </main>
    );
}
