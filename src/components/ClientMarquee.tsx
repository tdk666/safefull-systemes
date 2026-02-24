import type { FC } from 'react';

const clients = [
    { id: 1, name: 'Client 1', logo: '/logos/client1.png' },
    { id: 2, name: 'Client 2', logo: '/logos/client2.png' },
    { id: 3, name: 'Client 3', logo: '/logos/client3.png' },
    { id: 4, name: 'Client 4', logo: '/logos/client4.png' },
    { id: 5, name: 'Client 5', logo: '/logos/client5.png' },
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
                {/* Bandeau 1 */}
                <div className="flex w-max animate-marquee space-x-16 px-8 items-center justify-center group-hover:[animation-play-state:paused]">
                    {clients.map((client) => (
                        <img
                            key={`m1-${client.id}`}
                            src={client.logo}
                            alt={client.name}
                            className="h-16 w-auto object-contain opacity-40 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-110 cursor-pointer"
                        />
                    ))}
                    {/* On duplique le set pour être sûr de remplir l'écran même sur Ultra-Wide */}
                    {clients.map((client) => (
                        <img
                            key={`m1-dup-${client.id}`}
                            src={client.logo}
                            alt={client.name}
                            className="h-16 w-auto object-contain opacity-40 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-110 cursor-pointer"
                        />
                    ))}
                </div>

                {/* Bandeau 2 (Clone parfait pour la boucle) */}
                <div className="absolute top-0 flex w-max animate-marquee2 space-x-16 px-8 items-center justify-center group-hover:[animation-play-state:paused]">
                    {clients.map((client) => (
                        <img
                            key={`m2-${client.id}`}
                            src={client.logo}
                            alt={client.name}
                            className="h-16 w-auto object-contain opacity-40 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-110 cursor-pointer"
                        />
                    ))}
                    {clients.map((client) => (
                        <img
                            key={`m2-dup-${client.id}`}
                            src={client.logo}
                            alt={client.name}
                            className="h-16 w-auto object-contain opacity-40 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-110 cursor-pointer"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
