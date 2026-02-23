import { FadeIn } from '../../components/FadeIn';

export function MobeeWeb() {
    return (
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <FadeIn>
                <h1 className="text-4xl font-extrabold text-white">MobeeWeb PTI</h1>
                <p className="mt-4 text-lg text-gray-300">
                    Plate-forme Web de réception et de traitement d'alertes Protection de Travailleurs Isolés.
                    Localisation Indoor Géo BLE/NFC et Outdoor. Terminaux compatibles Atex.
                </p>
            </FadeIn>
        </div>
    );
}
