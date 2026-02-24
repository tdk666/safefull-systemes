import { ShieldCheck, History, Target, Users, ArrowRight } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { SEOHead } from '../components/SEOHead';
import { Link } from 'react-router-dom';

export function About() {
    return (
        <div className="bg-deep-dark min-h-screen pb-24 relative overflow-hidden">
            <SEOHead
                title="À Propos de Safefull Systems | Notre Histoire & Notre Mission"
                description="Découvrez l'histoire de Safefull Systems. Depuis 2009, nous accompagnons les industries critiques et les établissements de santé dans leur sécurité B2B."
                canonicalUrl="https://safefull-systemes.netlify.app/a-propos"
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "SAFEFULL SYSTEMS",
                        "foundingDate": "2009-12-01",
                        "founders": [
                            { "@type": "Person", "name": "Dominique Cornillet" },
                            { "@type": "Person", "name": "Marc Dequecker" }
                        ],
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "2480 ROUTE DE CAUDEBEC",
                            "postalCode": "76940",
                            "addressLocality": "VATTEVILLE-LA-RUE",
                            "addressCountry": "FR"
                        },
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+33-6-62-14-90-24",
                            "contactType": "customer service",
                            "email": "marc.dequecker@safefull.com"
                        }
                    })
                }}
            />

            {/* Grid Tech Background avec Lueur d'ambiance */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
            <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-safefull-orange/5 blur-[150px]"></div>
            <div className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] rounded-full bg-safefull-slate/5 blur-[150px]"></div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-24 sm:pt-32">
                <div className="mx-auto max-w-3xl text-center mb-20">
                    <FadeIn direction="up">
                        <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 mb-8 shadow-glass backdrop-blur-md">
                            <ShieldCheck className="h-10 w-10 text-safefull-slate" />
                        </div>
                        <h2 className="text-xs font-bold tracking-[0.2em] text-safefull-slate uppercase text-balance">Qui Sommes-Nous ?</h2>
                        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl text-balance">
                            Sécuriser <span className="text-transparent bg-clip-text bg-gradient-to-r from-safefull-slate to-safefull-orange">l'Essentiel</span>
                        </h1>
                        <p className="mt-6 text-xl leading-8 text-gray-400 font-medium text-pretty">
                            Depuis 2009, Safefull Systems est l'éditeur français de référence pour l'hypervision sécuritaire et les communications critiques B2B.
                        </p>
                    </FadeIn>
                </div>

                {/* Bento Grid Asymétrique */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-16">
                    {/* Notre Histoire (Plus large, format paysage) */}
                    <FadeIn delay={0.1} direction="up" className="md:col-span-8">
                        <div className="group relative h-full rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent p-10 shadow-glass backdrop-blur-xl transition-all duration-500 hover:border-safefull-orange/30 hover:bg-white/[0.05]">
                            <History className="h-10 w-10 text-safefull-orange mb-6 transition-transform duration-500 group-hover:-rotate-12" />
                            <h3 className="text-3xl font-bold text-white mb-4 tracking-tight text-balance">Notre Héritage</h3>
                            <p className="text-gray-400 leading-relaxed text-lg text-pretty">
                                Fondée le 1er décembre 2009, Safefull Systems s'est immédiatement positionnée comme l'un des pionniers français de l'informatique de la sécurité métier. Après plusieurs années à équiper le secteur médical exigeant, notre expertise technique s'est naturellement imposée dans l'industrie 4.0.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Notre Mission (Format Portrait) */}
                    <FadeIn delay={0.2} direction="up" className="md:col-span-4">
                        <div className="group relative h-full rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent p-10 shadow-glass backdrop-blur-xl transition-all duration-500 hover:border-safefull-slate/30 hover:bg-white/[0.05]">
                            <Target className="h-10 w-10 text-safefull-slate mb-6 transition-transform duration-500 group-hover:scale-110" />
                            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight text-balance">La Mission</h3>
                            <p className="text-gray-400 leading-relaxed text-pretty">
                                Filtrer, centraliser et diffuser l'alerte en temps réel (PTI, IoT, Dialyse). L'homme doit rester l'ultime rempart efficace de son environnement.
                            </p>
                        </div>
                    </FadeIn>

                    {/* L'Equipe (Pleine largeur) */}
                    <FadeIn delay={0.3} direction="up" className="md:col-span-12">
                        <div className="group relative rounded-3xl border border-white/5 bg-dark-surface/50 p-10 sm:p-12 shadow-glass backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-white/10">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Users className="h-48 w-48 text-white" />
                            </div>
                            <div className="relative z-10 max-w-3xl">
                                <h3 className="text-3xl font-bold text-white mb-6 tracking-tight text-balance">Zéro Dette Technique. 100% Maîtrise.</h3>
                                <p className="text-gray-400 leading-relaxed text-lg text-pretty">
                                    Notre pérennité systémique découle directement de nos fondateurs experts, Dominique Cornillet et Marc Dequecker, qui pilotent les pôles intégration, cloud logiciel et partenariats B2B avec une rigueur absolue.
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* Le CTA CRO qui manquait */}
                <FadeIn delay={0.5} direction="up" className="mt-24 text-center">
                    <h3 className="text-2xl font-bold text-white mb-8 text-balance">Prêt à sécuriser vos infrastructures avec nos experts ?</h3>
                    <Link
                        to="/contact"
                        className="group/btn inline-flex items-center justify-center rounded-lg bg-safefull-orange px-10 py-5 text-lg font-extrabold tracking-wide text-deep-dark shadow-[0_0_20px_rgba(255,107,0,0.2)] transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                        Contacter la Direction
                        <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-2" />
                    </Link>
                </FadeIn>
            </div>
        </div>
    );
}
