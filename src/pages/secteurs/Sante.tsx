import { FadeIn } from '../../components/FadeIn';

export function Sante() {
    return (
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <FadeIn>
                <h1 className="text-4xl font-extrabold text-white">Secteur Santé & Hospitalier</h1>
                <p className="mt-4 text-lg text-gray-300">
                    Appel malade, centralisation d'alarmes sur terminaux WiFi et DECT, garantissant la sécurité des résidents et la réactivité des soignants.
                </p>
            </FadeIn>
        </div>
    );
}
