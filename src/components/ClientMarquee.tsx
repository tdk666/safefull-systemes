import type { FC } from 'react';

const clients = [
    { id: 1, name: 'Arkema', logo: '/logos/ARKEMA_logo.png' },
    { id: 2, name: 'Borealis', logo: '/logos/Borealis_logo.svg.png' },
    { id: 3, name: 'Chr Hansen', logo: '/logos/ChrHansen.svg.png' },
    { id: 4, name: 'Ramsay Santé', logo: '/logos/Logo-Ramsay-Sante.png' },
    { id: 5, name: 'Sanofi', logo: '/logos/Logo_Sanofi_(2022).png' },
    { id: 6, name: 'Tereos', logo: '/logos/Logo_Tereos_2016.png' },
    { id: 7, name: 'Rémy Martin', logo: '/logos/Remymartin_logo_317px.png' },
    { id: 8, name: 'Viatris', logo: '/logos/Viatris.svg.png' },
    { id: 9, name: 'Delpharm', logo: '/logos/logo-delpharm-300x180.png' },
    { id: 10, name: 'LU', logo: '/logos/png-transparent-lu-logo-product-logos.png' },
    { id: 11, name: 'Safran', logo: '/logos/safran logo.png' },
];

export const ClientMarquee: FC = () => {
    return (
        <section className="w-full overflow-hidden bg-deep-dark py-16 border-y border-white/5 relative">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10 text-center">
                <h2 className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
                    Ils sécurisent leurs infrastructures avec nous
                </h2>
            </div>

            {/* Fade Edges (CSS Mask) pour une entrée/sortie subliminale */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-deep-dark to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-deep-dark to-transparent"></div>

            <div className="relative flex w-full overflow-hidden group">
                {/* Bandeau unique à défilement infini (-50%) */}
                <div className="flex w-max animate-marquee-loop space-x-16 px-8 items-center justify-start group-hover:[animation-play-state:paused]">
                    {/* On duplique 4 fois le tableau pour être sûr de couvrir n'importe quel écran avant les 50% de la largeur du conteneur */}
                    {[...Array(4)].map((_, arrayIndex) => (
                        <div key={arrayIndex} className="flex space-x-16 items-center">
                            {clients.map((client) => (
                                <img
                                    key={`m-${arrayIndex}-${client.id}`}
                                    src={client.logo}
                                    alt={client.name}
                                    className="h-16 w-auto object-contain opacity-40 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-110 cursor-pointer"
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
