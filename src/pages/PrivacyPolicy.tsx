import { SEOHead } from '../components/SEOHead';
import { FadeIn } from '../components/FadeIn';

export function PrivacyPolicy() {
    return (
        <div className="bg-deep-dark min-h-screen pb-24 relative overflow-hidden">
            <SEOHead
                title="Politique de Confidentialité | Safefull Systems"
                description="Notre politique de traitement des deonnées, conformité RGPD, et modalités d'exercice de vos droits."
                canonicalUrl="https://safefull-systemes.netlify.app/politique-confidentialite"
            />

            {/* Grid Tech Background avec Lueur d'ambiance */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
            <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-safefull-orange/5 blur-[150px]"></div>
            <div className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] rounded-full bg-safefull-slate/5 blur-[150px]"></div>

            <div className="relative mx-auto max-w-4xl px-6 lg:px-8 pt-24 sm:pt-32">
                <FadeIn direction="up">
                    <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl mb-12 text-balance">
                        Politique de <span className="text-transparent bg-clip-text bg-gradient-to-r from-safefull-slate to-safefull-orange">Confidentialité</span>
                    </h1>
                </FadeIn>

                <div className="space-y-6">
                    <FadeIn delay={0.1} direction="up">
                        <section className="group relative rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent p-8 sm:p-10 shadow-glass backdrop-blur-xl transition-all duration-500 hover:border-safefull-slate/30 hover:bg-white/[0.05]">
                            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 tracking-tight text-balance">1. Données Collectées</h2>
                            <div className="space-y-4 text-gray-400 leading-relaxed">
                                <p className="text-pretty">
                                    Nous collectons les données que vous nous soumettez explicitement via nos formulaires de contact :
                                </p>
                                <ul className="list-none list-inside mt-2 space-y-2">
                                    <li className="flex items-center gap-2 text-pretty"><div className="h-1.5 w-1.5 rounded-full bg-safefull-orange"></div> Nom de votre entreprise</li>
                                    <li className="flex items-center gap-2 text-pretty"><div className="h-1.5 w-1.5 rounded-full bg-safefull-orange"></div> Nom du contact principal</li>
                                    <li className="flex items-center gap-2 text-pretty"><div className="h-1.5 w-1.5 rounded-full bg-safefull-orange"></div> Adresse email professionnelle</li>
                                    <li className="flex items-center gap-2 text-pretty"><div className="h-1.5 w-1.5 rounded-full bg-safefull-orange"></div> Secteur d'activité</li>
                                    <li className="flex items-center gap-2 text-pretty"><div className="h-1.5 w-1.5 rounded-full bg-safefull-orange"></div> Contenu de votre demande</li>
                                </ul>
                            </div>
                        </section>
                    </FadeIn>

                    <FadeIn delay={0.2} direction="up">
                        <section className="group relative rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent p-8 sm:p-10 shadow-glass backdrop-blur-xl transition-all duration-500 hover:border-safefull-slate/30 hover:bg-white/[0.05]">
                            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 tracking-tight text-balance">2. Finalité du Traitement</h2>
                            <div className="space-y-4 text-gray-400 leading-relaxed">
                                <p className="text-pretty">
                                    Celles-ci sont traitées uniquement afin de répondre à votre demande académique, d'organiser une démonstration de nos solutions B2B ou de dimensionner un audit de sécurité (PTI, alertes).
                                    <strong className="text-white block mt-2">Aucune donnée n'est revendue ou transférée à des entités tierces à des fins commerciales.</strong>
                                </p>
                            </div>
                        </section>
                    </FadeIn>

                    <FadeIn delay={0.3} direction="up">
                        <section className="group relative rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent p-8 sm:p-10 shadow-glass backdrop-blur-xl transition-all duration-500 hover:border-safefull-slate/30 hover:bg-white/[0.05]">
                            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 tracking-tight text-balance">3. Sécurité</h2>
                            <div className="space-y-4 text-gray-400 leading-relaxed">
                                <p className="text-pretty">
                                    Vos données sont transmises via chiffrement <strong className="text-white">SSL/TLS</strong> et stockées dans une infrastructure cloud sécurisée (Supabase), conforme aux exigences d'anonymat et de restriction de base de données asynchrone imposées par le RGPD.
                                </p>
                            </div>
                        </section>
                    </FadeIn>

                    <FadeIn delay={0.4} direction="up">
                        <section className="group relative rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent p-8 sm:p-10 shadow-glass backdrop-blur-xl transition-all duration-500 hover:border-safefull-orange/30 hover:bg-white/[0.05]">
                            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 tracking-tight text-balance">4. Droit d'Accès et de Rectification</h2>
                            <div className="space-y-4 text-gray-400 leading-relaxed">
                                <p className="text-pretty">
                                    Conformément à la Loi Informatique et Libertés et au RGPD européen, vous disposez d'un droit de retrait, d'accès, d'opposition et de rectification de vos données.
                                </p>
                                <div className="mt-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                    <p className="mb-2 text-pretty">Délégué à la Protection des Données (DPO) :</p>
                                    <strong className="text-safefull-orange text-lg block mb-1">Marc Dequecker</strong>
                                    <p className="text-pretty">Contact : <a href="mailto:marc.dequecker@safefull.com" className="text-white hover:text-safefull-slate transition-colors underline decoration-white/30 underline-offset-4">marc.dequecker@safefull.com</a></p>
                                </div>
                            </div>
                        </section>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
}
