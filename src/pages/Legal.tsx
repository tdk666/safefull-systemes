import { SEOHead } from '../components/SEOHead';
import { FadeIn } from '../components/FadeIn';

export function Legal() {
    return (
        <div className="bg-deep-dark min-h-screen pb-24">
            <SEOHead
                title="Mentions Légales | Safefull Systems"
                description="Informations juridiques, propriété intellectuelle, et mentions légales obligatoires de Safefull Systems (SARL), éditeur de logiciels applicatifs B2B."
                canonicalUrl="https://safefull-systemes.netlify.app/mentions-legales"
            />

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none h-[50vh]"></div>

            <div className="relative mx-auto max-w-4xl px-6 lg:px-8 pt-24 sm:pt-32">
                <FadeIn direction="up">
                    <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl mb-12">
                        Mentions <span className="text-matrix-green">Légales</span>
                    </h1>
                </FadeIn>

                <div className="space-y-12">
                    <FadeIn delay={0.1} direction="up">
                        <section className="rounded-none border border-white/5 bg-dark-surface/50 p-8">
                            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-4">1. Éditeur du Site</h2>
                            <div className="space-y-4 text-gray-300">
                                <p><strong className="text-neon-blue">Société :</strong> SAFEFULL SYSTEMS</p>
                                <p><strong className="text-neon-blue">Forme Juridique :</strong> SARL (Société à Responsabilité Limitée)</p>
                                <p><strong className="text-neon-blue">Capital Social :</strong> 21 000,00 €</p>
                                <p><strong className="text-neon-blue">Siège Social :</strong> 2480 ROUTE DE CAUDEBEC, 76940 VATTEVILLE-LA-RUE, France</p>
                            </div>
                        </section>
                    </FadeIn>

                    <FadeIn delay={0.2} direction="up">
                        <section className="rounded-none border border-white/5 bg-dark-surface/50 p-8">
                            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-4">2. Informations Légales</h2>
                            <div className="space-y-4 text-gray-300">
                                <p><strong className="text-neon-blue">SIREN :</strong> 519 056 063</p>
                                <p><strong className="text-neon-blue">SIRET (siège) :</strong> 519 056 063 00018</p>
                                <p><strong className="text-neon-blue">Numéro de TVA Intracommunautaire :</strong> FR41519056063</p>
                                <p><strong className="text-neon-blue">Registre du Commerce (RCS) :</strong> 519 056 063 R.C.S. Rouen</p>
                                <p><strong className="text-neon-blue">Date de création :</strong> 01/12/2009</p>
                                <p><strong className="text-neon-blue">Activité Principale (NAF/APE) :</strong> 58.29C (Édition de logiciels applicatifs)</p>
                            </div>
                        </section>
                    </FadeIn>

                    <FadeIn delay={0.3} direction="up">
                        <section className="rounded-none border border-white/5 bg-dark-surface/50 p-8">
                            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-4">3. Dirigeants</h2>
                            <div className="space-y-4 text-gray-300">
                                <p>La société est dirigée conjointement par :</p>
                                <ul className="list-disc list-inside mt-2 space-y-2">
                                    <li>Dominique Cornillet</li>
                                    <li>Marc Dequecker</li>
                                </ul>
                            </div>
                        </section>
                    </FadeIn>

                    <FadeIn delay={0.4} direction="up">
                        <section className="rounded-none border border-white/5 bg-dark-surface/50 p-8">
                            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-4">4. Hébergement</h2>
                            <div className="space-y-4 text-gray-300">
                                <p>Ce site web est hébergé par :</p>
                                <p><strong className="text-neon-blue">Netlify, Inc.</strong></p>
                                <p>44 Montgomery Street, Suite 300<br />San Francisco, California 94104<br />États-Unis</p>
                            </div>
                        </section>
                    </FadeIn>

                    <FadeIn delay={0.5} direction="up">
                        <section className="rounded-none border border-white/5 bg-dark-surface/50 p-8">
                            <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-4">5. Propriété Intellectuelle</h2>
                            <div className="space-y-4 text-gray-300">
                                <p>
                                    L'ensemble des éléments constituant ce site internet (textes, graphismes, logiciels, photographies, images, vidéos, sons, plans, noms, logos, marques, créations et œuvres protégeables diverses, bases de données, etc.) ainsi que le site lui-même, sont protégés par le droit de la Propriété Industrielle et le Droit d'auteur, et sont la propriété exclusive de SAFEFULL SYSTEMS.
                                </p>
                                <p>
                                    Toute utilisation, reproduction ou représentation totale ou partielle, de ce site ou de l'un quelconque de ses éléments, sans l'autorisation expresse et préalable de SAFEFULL SYSTEMS, est passible de sanctions pénales.
                                </p>
                            </div>
                        </section>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
}
