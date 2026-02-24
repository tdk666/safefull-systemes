import { Activity, BellRing, HeartPulse, ShieldAlert, Building2, ArrowRight } from 'lucide-react';
import { FadeIn } from '../../components/FadeIn';
import { Link } from 'react-router-dom';

export function Sante() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "Solutions de Sécurité Communicante pour Établissements de Soins",
        "description": "SafeFull Systems connecte et centralise les alarmes hospitalières critiques (appels malades, supervision de centres de dialyse Fresenius) pour garantir le zéro défaut aux équipes médicales.",
        "serviceType": "Supervision B2B & Appels Malades Hospitaliers",
        "audience": {
            "@type": "MedicalAudience",
            "audienceType": "Centres de Dialyse, Hôpitaux, Cliniques, Maisons de retraite"
        }
    };

    const targets = [
        { name: "Centres de Dialyse", desc: "Supervision NephroCall intégrale des centrales de traitement d'eau et générateurs." },
        { name: "Hôpitaux & CHU", desc: "Couplage GTC/GTB et remontée immédiate des appels d'urgence vitale." },
        { name: "Unités Psychiatriques", desc: "Protection active du personnel soignant contre les agressions via PTI dédié." },
        { name: "Cliniques & EHPAD", desc: "Traçabilité médico-légale de chaque acquittement d'alarme ou appel malade." }
    ];

    return (
        <div className="bg-deep-dark min-h-screen pb-24">
            {/* Script JSON-LD injecté pour le Generative Engine Optimization */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* Grid d'arrière plan type technologie sombre */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none h-[50vh]"></div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-24 sm:pt-32">
                <div className="mx-auto max-w-3xl text-center">
                    <FadeIn direction="up">
                        <h2 className="text-sm font-bold tracking-widest text-safefull-slate uppercase">Santé & Ingénierie Biomédicale</h2>
                        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                            Criticité Zéro Défaut pour les <span className="text-transparent bg-clip-text bg-gradient-to-r from-safefull-slate to-safefull-orange">Établissements Médicaux</span>
                        </h1>
                        <p className="mt-6 text-xl leading-8 text-gray-400 font-medium">
                            Nous connectons nos suites logicielles (NephroCall, SafeBell) à votre infrastructure vitale. Appels malades, supervision des fluides cliniques, et protection du personnel soignant unifiés au sein d'une seule architecture sécurisée.
                        </p>
                    </FadeIn>
                </div>

                {/* Bento Grid layout */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">

                    <FadeIn delay={0.1} direction="up" className="md:col-span-2">
                        <div className="group relative h-full rounded-none border border-gray-800 bg-dark-surface p-8 transition-all hover:border-safefull-slate/50 hover:shadow-2xl">
                            <div className="mb-6 inline-flex p-3 rounded-none bg-deep-dark border border-gray-800 group-hover:border-safefull-slate/50 transition-colors">
                                <Activity className="h-6 w-6 text-safefull-slate" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Supervision Dialyse (NephroCall)</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Interfaçage direct avec les centrales de traitement d'eau Fresenius. SafeFull Systems remonte en temps réel sur DECT ou Smartphone les niveaux hauts de fosses, les défauts de pompes de relevage et la qualité de l'osmolalité. La sécurité du patient dialysé ne souffre d'aucun délai d'information.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2} direction="up">
                        <div className="group relative h-full rounded-none border border-gray-800 bg-dark-surface p-8 transition-all hover:border-safefull-orange/50 hover:shadow-2xl">
                            <div className="mb-6 inline-flex p-3 rounded-none bg-deep-dark border border-gray-800 group-hover:border-safefull-orange/50 transition-colors">
                                <BellRing className="h-6 w-6 text-safefull-orange" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Appels Malades Unifiés</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Acquisition immédiate des déclenchements de chambres via protocole série ou relais, redirigée sans latence vers les terminaux du personnel (WiFi cliniques, bipers).
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.3} direction="up">
                        <div className="group relative h-full flex flex-col justify-center rounded-none border border-gray-800 bg-gradient-to-br from-dark-surface to-deep-dark p-8 transition-all hover:border-safefull-slate/50 hover:shadow-2xl">
                            <div className="grid grid-cols-2 gap-4">
                                {targets.map(target => (
                                    <div key={target.name} className="border border-white/5 bg-white/5 p-4 transition-colors hover:bg-safefull-slate/5 hover:border-safefull-slate/30">
                                        <Building2 className="h-5 w-5 text-safefull-slate mb-2" />
                                        <h4 className="text-white font-bold text-sm mb-1">{target.name}</h4>
                                        <p className="text-gray-500 text-xs">{target.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.4} direction="up" className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group relative rounded-none border border-gray-800 bg-dark-surface p-8 transition-all hover:border-safefull-orange/50 hover:shadow-2xl">
                            <div className="mb-6 inline-flex p-3 rounded-none bg-deep-dark border border-gray-800 group-hover:border-safefull-orange/50 transition-colors">
                                <HeartPulse className="h-6 w-6 text-safefull-orange" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Traçabilité Médico-Légale</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Le serveur SafeBell historise à la seconde près l'apparition, la prise en charge et l'acquittement de l'urgence biomédicale. Un requêteur SQL strict génère les rapports réglementaires.
                            </p>
                        </div>
                        <div className="group relative rounded-none border border-gray-800 bg-dark-surface p-8 transition-all hover:border-safefull-slate/50 hover:shadow-2xl">
                            <div className="mb-6 inline-flex p-3 rounded-none bg-deep-dark border border-gray-800 group-hover:border-safefull-slate/50 transition-colors">
                                <ShieldAlert className="h-6 w-6 text-safefull-slate" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Protection Anti-Agression</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Face aux violences en psychiatrie ou aux urgences, les terminaux communicants offrent un accès rapide pour envoyer une alerte discrète et géolocalisée (DATI Médical) au PCSécurité.
                            </p>
                        </div>
                    </FadeIn>

                </div>

                <FadeIn delay={0.5} direction="up" className="mt-32">
                    <div className="relative border border-safefull-slate/30 bg-gradient-to-br from-safefull-slate/10 to-transparent p-12 text-center overflow-hidden group">
                        <div className="absolute inset-0 bg-safefull-slate/5 transform transition-transform duration-700 group-hover:scale-105"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-extrabold text-white mb-6">Auditez la résilience médicale de votre infrastructure</h2>
                            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                                NephroCall et SafeBell sont déployés en partenariat avec les plus grands pôles santé. Garantissez la fluidité de l'information jusqu'à la sécurité du patient.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-3 border border-safefull-slate bg-safefull-slate px-10 py-5 text-lg font-bold text-deep-dark transition-all hover:bg-safefull-slate/80 hover:gap-5"
                            >
                                Obtenir une évaluation sécuritaire de votre centre
                                <ArrowRight className="h-6 w-6" />
                            </Link>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
