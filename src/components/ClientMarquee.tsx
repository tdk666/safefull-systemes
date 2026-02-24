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
    { id: 10, name: 'LU', logo: '/logos/lu-logo.png' },
    { id: 11, name: 'Safran', logo: '/logos/Safran_-_logo_2016.png' },
];

export const ClientMarquee: FC = () => {
    return (
        <section className="w-full overflow-hidden bg-deep-dark py-16 border-y border-white/5 relative">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10 text-center">
                <h2 className="text-xs font-bold tracking-[0.2em] text-safefull-slate uppercase text-balance">
                    Ils sécurisent leurs infrastructures avec nous
                </h2>
            </div>

            {/* Masques de fusion pour flouter les bords droit et gauche */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 sm:w-40 bg-gradient-to-r from-deep-dark to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 sm:w-40 bg-gradient-to-l from-deep-dark to-transparent"></div>

            {/* Container du Marquee - On place le "group" ici pour cibler le survol */}
            <div className="group relative flex overflow-hidden py-4">

                {/* Bandeau 1 */}
                <div className="flex animate-marquee shrink-0 flex-row items-center whitespace-nowrap group-hover:[animation-play-state:paused]">
                    {clients.map((client) => (
                        <div key={`m1-${client.id}`} className="mx-8 sm:mx-12 flex items-center justify-center">
                            <img
                                src={client.logo}
                                alt={client.name}
                                // Remplacement de duration-500 par duration-200 pour une réactivité instantanée à la souris
                                className="h-10 sm:h-14 w-auto max-w-none object-contain opacity-40 grayscale transition-all duration-200 ease-out hover:grayscale-0 hover:opacity-100 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] cursor-pointer"
                            />
                        </div>
                    ))}
                </div>

                {/* Bandeau 2 (Clone Parfait pour boucle infinie) */}
                <div className="flex animate-marquee shrink-0 flex-row items-center whitespace-nowrap group-hover:[animation-play-state:paused]" aria-hidden="true">
                    {clients.map((client) => (
                        <div key={`m2-${client.id}`} className="mx-8 sm:mx-12 flex items-center justify-center">
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="h-10 sm:h-14 w-auto max-w-none object-contain opacity-40 grayscale transition-all duration-200 ease-out hover:grayscale-0 hover:opacity-100 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] cursor-pointer"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
