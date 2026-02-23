import { Hero } from '../components/Hero';

export function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            {/* Autres sections de la page d'accueil peuvent être ajoutées ici (Partenaires, Contact etc) */}
        </div>
    );
}
