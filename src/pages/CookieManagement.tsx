import { SEOHead } from '../components/SEOHead';
import { FadeIn } from '../components/FadeIn';

export function CookieManagement() {
    return (
        <div className="bg-deep-dark min-h-screen pb-24 relative overflow-hidden">
            <SEOHead
                title="Gestion des Cookies | Safefull Systems"
                description="Consultez et modifiez la configuration de vos préférences en matière de confidentialité (Cookies / Trackers)."
                canonicalUrl="https://safefull-systemes.netlify.app/gestion-cookies"
            />

            {/* Grid Tech Background avec Lueur d'ambiance */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
            <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-safefull-orange/5 blur-[150px]"></div>
            <div className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] rounded-full bg-safefull-slate/5 blur-[150px]"></div>

            <div className="relative mx-auto max-w-4xl px-6 lg:px-8 pt-24 sm:pt-32">
                <FadeIn direction="up">
                    <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl mb-12">
                        Gestion des <span className="text-transparent bg-clip-text bg-gradient-to-r from-safefull-slate to-safefull-orange">Cookies</span>
                    </h1>
                </FadeIn>

                <div className="space-y-6">
                    <FadeIn delay={0.1} direction="up">
                        <section className="group relative rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent p-8 sm:p-10 shadow-glass backdrop-blur-xl transition-all duration-500 hover:border-safefull-slate/30 hover:bg-white/[0.05]">
                            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 tracking-tight">1. Qu'est-ce qu'un "cookie" ?</h2>
                            <div className="space-y-4 text-gray-400 leading-relaxed">
                                <p>
                                    Un « cookie » est un traceur textuel déposé sur votre terminal mobile ou votre ordinateur lorsque vous naviguez sur internet.
                                    La directive ePrivacy (directive 2002/58/CE du Parlement européen et du Conseil) oblige tout éditeur à solliciter votre consentement préalable explicite.
                                </p>
                            </div>
                        </section>
                    </FadeIn>

                    <FadeIn delay={0.2} direction="up">
                        <section className="group relative rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent p-8 sm:p-10 shadow-glass backdrop-blur-xl transition-all duration-500 hover:border-safefull-slate/30 hover:bg-white/[0.05]">
                            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 tracking-tight">2. Les Traceurs Techniques Obligatoires</h2>
                            <div className="space-y-4 text-gray-400 leading-relaxed">
                                <p>
                                    Le bon fonctionnement de notre site logiciel (comme la mémorisation de votre choix de navigation) requiert une donnée dans votre stockage local nommé <code className="text-safefull-orange bg-deep-dark px-1.5 py-0.5 rounded">safefull_cookie_consent</code>.
                                    Par nature, ces cookies dits "strictement nécessaires" sont exemptés de consentement explicite, car ils ne relèvent aucune donnée analytique et servent uniquement à ne pas faire réapparaitre la bannière intempestivement.
                                </p>
                            </div>
                        </section>
                    </FadeIn>

                    <FadeIn delay={0.3} direction="up">
                        <section className="group relative rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent p-8 sm:p-10 shadow-glass backdrop-blur-xl transition-all duration-500 hover:border-safefull-slate/30 hover:bg-white/[0.05]">
                            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 tracking-tight">3. Les Traceurs Analytiques (Anonymisés)</h2>
                            <div className="space-y-4 text-gray-400 leading-relaxed">
                                <p>
                                    Nous tirons avantage de la technologie <strong className="text-white">Google Consent Mode v2</strong>. À votre arrivée sur notre site, ce mode bloque par défaut (<code className="text-safefull-slate bg-deep-dark px-1.5 py-0.5 rounded">denied</code>) l'injection de toute balise publicitaire ou Google Analytics.
                                </p>
                                <p>
                                    Ce n'est qu'en cliquant sur le bouton <strong className="text-white">"Tout Accepter"</strong> du panneau inférieur que le traçage analytique (<code className="text-safefull-slate bg-deep-dark px-1.5 py-0.5 rounded">analytics_storage</code>) est autorisé. Ces outils nous permettent d'améliorer la structure de nos pages et comprendre l'intérêt porté à nos solutions B2B (MobeeWeb, NephroCall).
                                </p>
                            </div>
                        </section>
                    </FadeIn>

                    <FadeIn delay={0.4} direction="up">
                        <section className="group relative rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent p-8 sm:p-10 shadow-glass backdrop-blur-xl transition-all duration-500 hover:border-safefull-orange/30 hover:bg-white/[0.05]">
                            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 tracking-tight">4. Modifier vos Paramètres</h2>
                            <div className="space-y-4 text-gray-400 leading-relaxed">
                                <p>
                                    Vous pouvez à tout moment forcer la suppression de votre consentement via les paramètres de votre navigateur, ou en purgeant le stockage local du domaine actuel.
                                    Dans les mois à venir, cet espace proposera un bouton d'interface direct pour révoquer l'autorisation.
                                </p>
                            </div>
                        </section>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
}
