import { ShieldCheck, History, Target, Users } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { SEOHead } from '../components/SEOHead';

export function About() {
    return (
        <div className="bg-deep-dark min-h-screen pb-24">
            <SEOHead
                title="À Propos de Safefull Systems | Notre Histoire & Notre Mission"
                description="Découvrez l'histoire de Safefull Systems. Depuis 2009, nous accompagnons les industries critiques et les établissements de santé dans leur sécurité B2B."
                canonicalUrl="https://safefull-systemes.netlify.app/about"
            />

            {/* Grid Tech Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none h-[50vh]"></div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-24 sm:pt-32">
                <div className="mx-auto max-w-3xl text-center mb-24">
                    <FadeIn direction="up">
                        <ShieldCheck className="mx-auto h-16 w-16 text-matrix-green mb-6" />
                        <h2 className="text-sm font-bold tracking-widest text-matrix-green uppercase">Qui Sommes-Nous ?</h2>
                        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                            Sécuriser <span className="text-transparent bg-clip-text bg-gradient-to-r from-matrix-green to-neon-blue">l'Essentiel</span>
                        </h1>
                        <p className="mt-6 text-xl leading-8 text-gray-400 font-medium">
                            Safefull Systems (anciennement Safebell) est un éditeur de logiciels B2B spécialisé dans la gestion critique des événements et systèmes d'alarmes.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
                    <FadeIn delay={0.1} direction="up">
                        <div className="rounded-none border border-white/5 bg-dark-surface/50 p-8 h-full">
                            <History className="h-8 w-8 text-neon-blue mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Notre Histoire</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Fondée le 1er décembre 2009, Safefull Systems s'est immédiatement positionnée comme l'un des pionniers français de l'informatique de la sécurité métier. Après plusieurs années à équiper des cliniques, notre expertise technique s'est naturellement tournée vers l'industrie 4.0.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2} direction="up">
                        <div className="rounded-none border border-white/5 bg-dark-surface/50 p-8 h-full">
                            <Target className="h-8 w-8 text-matrix-green mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Notre Mission</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Fournir l'information, toujours la bonne. Notre objectif est de filtrer, centraliser et diffuser les éléments critiques en temps réel (PTI, IoT, DIALYSE) pour s'assurer que l'homme soit toujours l'ultime rempart efficace de son environnement.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.3} direction="up">
                        <div className="rounded-none border border-white/5 bg-dark-surface/50 p-8 h-full">
                            <Users className="h-8 w-8 text-neon-blue mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">L'Équipe</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Notre pérennité systémique (zéro dette technique depuis 2009) découle des fondateurs experts Dominique Cornillet et Marc Dequecker, dirigeant les pôles intégration, cloud logiciel et partenariat agence B2B.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
}
