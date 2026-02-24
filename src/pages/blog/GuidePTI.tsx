import { Link } from 'react-router-dom';
import { SEOHead } from '../../components/SEOHead';
import {
    ArrowRight, ChevronDown, ShieldAlert, Activity,
    Network, FileSignature, Scale, Database, CheckCircle2
} from 'lucide-react';
import { FadeIn } from '../../components/FadeIn';

export function GuidePTI() {
    // ------------------------------------------------------------------------
    // 1. DÉDUCTIONS FAQ SUR BASE DU TEXTE EXPERT FOURNI
    // ------------------------------------------------------------------------
    const faqItems = [
        {
            question: "Quelle est la différence entre PTI et DATI ?",
            answer: "La Protection des Travailleurs Isolés (PTI) est le concept global, la procédure organisationnelle et humaine pour sécuriser l'employé. Le DATI (Dispositif d'Alarme pour Travailleur Isolé) est l'équipement technologique (logiciel ou boîtier) qui équipe l'agent pour rendre cette protection effective sur le terrain."
        },
        {
            question: "Quelles technologies utiliser en zone blanche ?",
            answer: "Dans les environnements denses ou souterrains sans couverture réseau classique (GSM, 3G, 4G, 5G), les équipements avancés doivent opérer en architectures multi-réseaux exploitant le Wi-Fi local ou les réseaux basse fréquence longue portée comme le LoRaWAN. Pour la localisation sans GPS, des micro-capteurs indoor tels que des Beacons BLE (Bluetooth Low Energy) ou des tags NFC prennent le relais."
        },
        {
            question: "Le PTI est-il obligatoire dans le DUERP ?",
            answer: "Oui, le cadre juridique français (Code du travail Art. L4121-1) impose une obligation de résultat en matière de sécurité. Si un collaborateur opère en isolement, ce risque et les moyens de prévention/secours associés doivent obligatoirement être transcrits formellement au sein du Document Unique d'Évaluation des Risques Professionnels (DUERP)."
        }
    ];

    // ------------------------------------------------------------------------
    // 2. SCHÉMAS JSON-LD (ARTICLE + FAQ) POUR LES LLMS (GEO) ET GOOGLE
    // ------------------------------------------------------------------------
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Solution de sécurité communicante PTI : protéger vos travailleurs isolés",
        "description": "Le guide technique pour comprendre les enjeux PTI / DATI, les algorithmes de détection sur smartphone, l'obligation légale HSE et les technologies Indoor/Outdoor.",
        "author": {
            "@type": "Organization",
            "name": "Safefull Systems"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Safefull Systems"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    const combinedJsonLd = [articleSchema, faqSchema];

    return (
        <main className="bg-deep-dark min-h-screen pt-24 pb-24 text-gray-300 relative overflow-hidden">
            {/* Ambient background glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-safefull-orange/5 blur-[150px] pointer-events-none rounded-full"></div>

            <SEOHead
                title="Guide Sécurité Communicante : Solutions PTI & DATI | Safefull Systems"
                description="Guide expert sur la sécurité communicante, la Protection des Travailleurs Isolés (PTI / DATI), les exigences HSE, et la redondance technologique MutualDroid."
                canonicalUrl="/blog/guide-pti"
                jsonLd={combinedJsonLd}
            />

            <article className="relative mx-auto max-w-4xl px-6 lg:px-8 z-10">
                {/* ----------------- H1 : HEADER SUBLIMÉ ----------------- */}
                <header className="mb-20">
                    <FadeIn direction="up">
                        <div className="inline-flex items-center gap-2 rounded-full border border-safefull-orange/30 bg-safefull-orange/5 px-4 py-1.5 text-xs font-bold tracking-widest text-safefull-orange uppercase mb-8">
                            <ShieldAlert className="h-4 w-4" />
                            Dossier Technique Expert
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-8 text-balance">
                            Solution de sécurité communicante PTI : <span className="text-transparent bg-clip-text bg-gradient-to-r from-safefull-orange to-safefull-slate">protéger vos travailleurs isolés</span>
                        </h1>

                        {/* Abstract / Chapeau en style Bento */}
                        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 shadow-glass backdrop-blur-md">
                            <p className="text-lg sm:text-xl text-gray-400 font-medium leading-relaxed m-0 text-pretty">
                                L'obligation d'assurer l'intégrité physique des collaborateurs opérant seuls sur le terrain ou dans des zones à risques est la priorité absolue des directions HSE et des DRH. Pour anticiper les accidents et agir dans l'urgence, le simple téléphone ne suffit plus ; le déploiement d'un écosystème d'alerte global et automatisé s'impose. Qu'il s'agisse d'applications mobiles capables d'analyser la posture d'un agent, de plateformes de supervision centralisant les données, ou de balises de géolocalisation pour les environnements complexes, ces dispositifs technologiques garantissent une transmission immédiate de la détresse. L'objectif est clair : détecter l'anomalie, situer l'individu avec une précision chirurgicale, et déclencher une chaîne de secours infaillible pour sauver des vies.
                            </p>
                        </div>
                    </FadeIn>
                </header>

                <div className="space-y-20">

                    {/* ----------------- SECTION 1 ----------------- */}
                    <FadeIn delay={0.1} direction="up" as="section">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-safefull-orange/10 border border-safefull-orange/20 text-safefull-orange shadow-inner">
                                <Activity className="h-6 w-6" />
                            </div>
                            <h2 className="text-3xl font-bold text-white tracking-tight m-0 text-balance">Qu'est-ce qu'une solution de sécurité communicante PTI et DATI ?</h2>
                        </div>

                        <p className="text-lg text-gray-400 leading-relaxed mb-6 text-pretty">
                            Dans l'univers de la prévention des risques professionnels, il est fréquent de confondre les termes, ce qui fausse souvent les cahiers des charges lors des appels d'offres. Pour bâtir une architecture de secours efficace, il est crucial de comprendre la synergie entre la protection théorique et l'outil technologique qui la rend possible.
                        </p>

                        <h3 className="text-xl font-bold text-white mt-10 mb-4 flex items-center gap-2 text-balance">
                            <span className="h-px w-6 bg-safefull-slate"></span>
                            Définition et différence technique entre PTI et DATI
                        </h3>
                        <p className="text-lg text-gray-400 leading-relaxed mb-4 text-pretty">
                            La Protection des Travailleurs Isolés (PTI) désigne le concept global, la procédure organisationnelle et humaine mise en place par une entreprise pour sécuriser un employé hors de portée de voix ou de vue de ses collègues. Le DATI (Dispositif d'Alarme pour Travailleur Isolé), en revanche, est l'équipement matériel ou logiciel concret qui équipe l'agent.
                        </p>
                        <p className="text-lg text-gray-400 leading-relaxed mb-8 text-pretty">
                            Historiquement, le marché se limitait à des boîtiers physiques rudimentaires. Aujourd'hui, l'innovation permet de s'appuyer sur des smartphones robustes (Android) équipés d'applications expertes comme <strong className="text-white">MutualDroid</strong>. Ce type de logiciel embarqué agit comme un véritable capteur de survie : il détecte automatiquement une perte de verticalité, une immobilité prolongée ou un choc, tout en permettant à l'utilisateur de déclencher une alerte manuelle (bouton SOS) ou de signaler une agression. L'intelligence de ces systèmes modernes réside dans leur capacité à émettre ces alertes en bi-modalité (SMS et flux de données GPRS/Wi-Fi), assurant une redondance vitale pour que le signal parvienne toujours à la plateforme de supervision centrale (comme <strong className="text-white">MobeeWeb</strong>).
                        </p>

                        {/* Callout Legal (Casse le rythme de lecture intelligemment) */}
                        <div className="rounded-2xl border-l-4 border-safefull-orange bg-safefull-orange/5 p-8 mt-10">
                            <h3 className="text-xl font-bold text-safefull-orange mb-4 flex items-center gap-3 text-balance">
                                <FileSignature className="h-5 w-5" />
                                Les enjeux légaux en France
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-4 text-pretty">
                                Le cadre juridique français est intransigeant. Le Code du travail (Art. L4121-1 et suivants) impose à l'employeur de prendre toutes les mesures nécessaires pour protéger la santé physique et mentale de ses salariés. Lorsqu'un agent est isolé, cette obligation de résultat implique l'intégration stricte des risques liés à l'isolement dans le Document Unique d'Évaluation des Risques Professionnels (DUERP).
                            </p>
                            <p className="text-gray-300 leading-relaxed m-0 text-pretty">
                                La CNAMTS recommande fortement l'usage de dispositifs d'alerte fiables et traçables. Une solution professionnelle ne se contente pas de sonner ; elle doit prouver que la sécurité était active. Grâce à des plateformes web centralisées, les responsables HSE garantissent une historisation complète des événements : état de protection de l'agent, horodatage précis, et enregistrement de l'acquittement.
                            </p>
                        </div>
                    </FadeIn>


                    {/* ----------------- SECTION 2 ----------------- */}
                    <FadeIn delay={0.2} direction="up" as="section">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-safefull-slate/10 border border-safefull-slate/20 text-safefull-slate shadow-inner">
                                <Network className="h-6 w-6" />
                            </div>
                            <h2 className="text-3xl font-bold text-white tracking-tight m-0 text-balance">Comment fonctionne un dispositif d'alarme pour travailleur isolé ?</h2>
                        </div>
                        <p className="text-lg text-gray-400 leading-relaxed mb-10 text-pretty">
                            L'efficacité d'un système de protection repose sur une mécanique de précision où chaque milliseconde compte. Du déclenchement du capteur jusqu'à l'intervention des secours, la chaîne de transmission ne doit souffrir d'aucune latence ni d'aucune zone d'ombre. Les architectures modernes délaissent les mécanismes analogiques basiques au profit de flux de données intelligents, capables de qualifier la situation de détresse avant même d'alerter le poste de supervision.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 shadow-sm">
                                <h3 className="text-lg font-bold text-white mb-3 text-balance">1. Détection des dangers</h3>
                                <p className="text-gray-400 leading-relaxed text-sm text-pretty">
                                    La première étape consiste à capter l'anomalie physique. Les applications embarquées sur smartphones durcis utilisent les gyroscopes et accéléromètres natifs pour analyser la posture en temps réel : perte de verticalité (chute) et immobilité prolongée.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 shadow-sm">
                                <h3 className="text-lg font-bold text-white mb-3 text-balance">2. Transmission temps réel</h3>
                                <p className="text-gray-400 leading-relaxed text-sm text-pretty">
                                    Une fois le danger qualifié, la redondance réseau opère en bi-modalité (data GPRS/Wi-Fi et SMS). La géolocalisation absolue de l'incident est envoyée, qu'elle soit Outdoor (GPS) ou Indoor (Beacons BLE).
                                </p>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mt-10 mb-4 flex items-center gap-2 text-balance">
                            <span className="h-px w-6 bg-safefull-slate"></span>
                            La levée de doute vocale et la chaîne de secours
                        </h3>
                        <p className="text-lg text-gray-400 leading-relaxed mb-4 text-pretty">
                            L'alerte est remontée, mais le protocole de sécurité n'est pas encore achevé. Le PC de télésurveillance doit procéder à la levée de doute. Les terminaux modernes activent instantanément un mode main-libre avec haut-parleur haute puissance, permettant au superviseur d'entendre l'environnement ou de dialoguer sans manipulation de l'appareil.
                        </p>
                        <p className="text-lg text-gray-400 leading-relaxed text-pretty">
                            L'intelligence centralisée automatise ensuite la gestion de crise : diffusion scénarisée de l'alerte vers les pompiers ou responsables HSE. La plateforme transmet aux équipes d'intervention les consignes de sécurité spécifiques à la zone d'incident (codes d'accès, produits chimiques), transformant une simple sonnerie en une opération de sauvetage coordonnée.
                        </p>
                    </FadeIn>


                    {/* ----------------- SECTION 3 ----------------- */}
                    <FadeIn delay={0.3} direction="up" as="section">
                        <h2 className="text-3xl font-bold text-white tracking-tight mb-8 text-balance">Les technologies déployées dans les équipements de sécurité</h2>
                        <p className="text-lg text-gray-400 leading-relaxed mb-8 text-pretty">
                            Pour garantir une protection absolue, le matériel ne doit souffrir d'aucune faille. Historiquement, la limite majeure des DATI résidait dans leur dépendance à un réseau unique. Les avancées en matière de télécommunication et d'algorithmique ont permis de lever ces barrières.
                        </p>

                        <h3 className="text-xl font-bold text-white mt-8 mb-4 text-balance">Connectivité absolue : GSM, 5G, LoRa et balises indoor</h3>
                        <p className="text-lg text-gray-400 leading-relaxed mb-6 text-pretty">
                            Le cauchemar de tout préventeur HSE est la "zone blanche" : un sous-sol, une chambre frigorifique, ou un site industriel dense où les ondes cellulaires ne pénètrent pas. Pour pallier ce risque, les solutions basculent vers des architectures multi-réseaux (Wi-Fi local, LoRaWAN). En intérieur, la micro-localisation prend le relais grâce à la technologie Bluetooth (Beacons BLE, Tags NFC).
                        </p>

                        <h3 className="text-xl font-bold text-white mt-8 mb-4 text-balance">Algorithmes intelligents et "Sécurité Positive"</h3>
                        <p className="text-lg text-gray-400 leading-relaxed mb-6 text-pretty">
                            Le frein majeur à l'adoption par les salariés est la fausse alarme. L'ingénierie logicielle s'appuie désormais sur des algorithmes de filtrage sophistiqués (réglage des angles, timers paramétrables).
                            De plus, la notion de <strong>"sécurité positive" (Watch Dog)</strong> est un standard. Le système interroge le réseau en permanence. S'il détecte une anomalie ou une perte de connexion avec le téléphone de l'agent, le serveur central déclenche de lui-même une procédure d'alerte.
                        </p>
                    </FadeIn>

                    {/* ----------------- CTA INTERNE STRATÉGIQUE ----------------- */}
                    <FadeIn delay={0.4} direction="up">
                        <div className="relative overflow-hidden rounded-3xl border border-safefull-orange/30 bg-glass-gradient p-10 sm:p-12 text-center shadow-2xl backdrop-blur-2xl group my-16">
                            <div className="absolute inset-0 bg-safefull-orange/5 transform transition-transform duration-1000 group-hover:scale-105"></div>
                            <div className="relative z-10">
                                <h3 className="text-3xl font-extrabold text-white mb-4 text-balance">Centralisez vos alertes PTI</h3>
                                <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto text-pretty">
                                    Découvrez <strong>MobeeWeb</strong>, notre plateforme intelligente conçue pour l'hypercentralisation, doublée du traceur natif <strong>MutualDroid</strong>.
                                </p>
                                <Link
                                    to="/solutions/mobeeweb"
                                    className="inline-flex items-center justify-center rounded-lg bg-safefull-orange px-10 py-5 text-base font-extrabold tracking-wide text-deep-dark shadow-[0_0_20px_rgba(242,97,34,0.3)] transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                >
                                    Découvrir l'Architecture MobeeWeb
                                    <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    </FadeIn>

                    {/* ----------------- SECTION 5 : LE COMPARATIF ----------------- */}
                    <FadeIn delay={0.5} direction="up" as="section">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-safefull-slate/10 border border-safefull-slate/20 text-safefull-slate shadow-inner">
                                <Scale className="h-6 w-6" />
                            </div>
                            <h2 className="text-3xl font-bold text-white tracking-tight m-0 text-balance">Boîtier physique durci vs Application Smartphone</h2>
                        </div>
                        <p className="text-lg text-gray-400 leading-relaxed mb-8 text-pretty">
                            Pendant longtemps, le marché de la protection isolée s'est scindé en deux catégories. D'un côté, le boîtier physique dédié (ou "bipeur" PTI). De l'autre, le terminal multifonction. Aujourd'hui, l'heure n'est plus au compromis. L'application PTI embarquée sur smartphone représente le standard absolu de la sécurité moderne.
                        </p>

                        <ul className="grid gap-4 mt-8">
                            <li className="flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:border-safefull-orange/30 hover:bg-white/[0.04] text-pretty">
                                <CheckCircle2 className="h-6 w-6 text-safefull-orange flex-shrink-0 mt-0.5" />
                                <div>
                                    <strong className="text-white text-lg block mb-1">Ergonomie et adoption immédiate</strong>
                                    <span className="text-gray-400 text-sm leading-relaxed block">L'agent n'a pas à mémoriser le fonctionnement d'un nouvel appareil. L'activation se fait intuitivement, sécurisée par mot de passe, sur son outil de travail quotidien.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:border-safefull-orange/30 hover:bg-white/[0.04] text-pretty">
                                <CheckCircle2 className="h-6 w-6 text-safefull-orange flex-shrink-0 mt-0.5" />
                                <div>
                                    <strong className="text-white text-lg block mb-1">Résistance aux environnements extrêmes</strong>
                                    <span className="text-gray-400 text-sm leading-relaxed block">Les applications s'installent facilement sur des smartphones durcis certifiés ATEX (Atmosphères Explosives) ou IP68, alliant intelligence logicielle et robustesse physique.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:border-safefull-orange/30 hover:bg-white/[0.04] text-pretty">
                                <CheckCircle2 className="h-6 w-6 text-safefull-orange flex-shrink-0 mt-0.5" />
                                <div>
                                    <strong className="text-white text-lg block mb-1">Fonctionnalités vitales avancées</strong>
                                    <span className="text-gray-400 text-sm leading-relaxed block">Géolocalisation hybride, lecture de plans d'évacuation sur l'interface, levée de doute vocale en haut-parleur surpuissant, et accès aux consignes de sécurité de la zone.</span>
                                </div>
                            </li>
                        </ul>
                    </FadeIn>

                    {/* ----------------- SECTION 6 ----------------- */}
                    <FadeIn delay={0.6} direction="up" as="section">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-safefull-orange/10 border border-safefull-orange/20 text-safefull-orange shadow-inner">
                                <Database className="h-6 w-6" />
                            </div>
                            <h2 className="text-3xl font-bold text-white tracking-tight m-0 text-balance">De la détection à l'analyse : l'impact des datas</h2>
                        </div>
                        <p className="text-lg text-gray-400 leading-relaxed mb-6 text-pretty">
                            Équiper ses collaborateurs avec des terminaux intelligents n'est que la face émergée de l'ingénierie préventive. Le véritable enjeu de demain réside dans l'exploitation des métadonnées générées par ces écosystèmes.
                        </p>
                        <p className="text-lg text-gray-400 leading-relaxed mb-6 text-pretty">
                            Lorsqu'une plateforme de supervision archive méticuleusement chaque événement — des alertes pour perte de verticalité aux tests de connectivité silencieux —, elle crée une base de données d'une valeur inestimable. L'analyse de ces logs permet d'identifier des zones d'ombre réseau ou d'optimiser les temps de réponse des secours.
                        </p>
                        <p className="text-lg text-gray-400 leading-relaxed font-medium text-white/90 border-l-2 border-safefull-slate pl-4 ml-2 text-pretty">
                            La sécurité communicante ne se limite plus à réagir face à l'accident. Coupler les remontées d'informations humaines avec la supervision d'équipements ouvre la voie à l'hypervision prédictive : le stade ultime où le bâtiment et le travailleur communiquent pour anticiper le danger.
                        </p>
                    </FadeIn>

                </div>

                {/* ----------------- FAQ SECTION (GEO / JSON-LD SYNCED) ----------------- */}
                <section id="faq" className="mt-32 pt-16 border-t border-white/5">
                    <FadeIn delay={0.7} direction="up">
                        <div className="text-center mb-16">
                            <h2 className="text-xs font-bold tracking-[0.2em] text-safefull-slate uppercase mb-4 text-balance">Expertise en bref</h2>
                            <h3 className="text-3xl font-extrabold text-white tracking-tight text-balance">Questions Fréquentes (FAQ)</h3>
                        </div>

                        <div className="space-y-4 max-w-3xl mx-auto">
                            {faqItems.map((item, index) => (
                                <details key={index} className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 open:border-safefull-slate/30 open:bg-white/[0.04]">
                                    <summary className="flex cursor-pointer items-center justify-between text-lg font-bold text-white outline-none list-none">
                                        <span className="pr-6">{item.question}</span>
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-deep-dark transition-transform duration-300 group-open:rotate-180 group-open:border-safefull-slate/30 group-open:text-safefull-slate">
                                            <ChevronDown className="h-5 w-5" />
                                        </div>
                                    </summary>
                                    <div className="mt-6 text-gray-400 leading-relaxed pr-8 border-t border-white/5 pt-4 text-base">
                                        {item.answer}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </FadeIn>
                </section>

            </article>
        </main>
    );
}
