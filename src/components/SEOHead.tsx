import { useEffect } from 'react';

/**
 * Composant SEOHead pour Mails & B2B
 * Loi Bouchand: Gère le titre, la description, et la balise rel="canonical" pour prévenir la duplication de contenu (Duplicate Content)
 */

interface SEOHeadProps {
    title: string;
    description: string;
    canonicalUrl: string;
}

export function SEOHead({ title, description, canonicalUrl }: SEOHeadProps) {
    useEffect(() => {
        // 1. Mise à jour du tag <title>
        document.title = title;

        // 2. Mise à jour ou création du tag <meta name="description">
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', description);

        // 3. Mise à jour ou création du tag <link rel="canonical">
        let canonicalLink = document.querySelector('link[rel="canonical"]');
        if (!canonicalLink) {
            canonicalLink = document.createElement('link');
            canonicalLink.setAttribute('rel', 'canonical');
            document.head.appendChild(canonicalLink);
        }
        canonicalLink.setAttribute('href', canonicalUrl);

        // Cleanup partiel si le composant est démonté de manière non-SPA (rare, mais bonne pratique)
        return () => {
            // On conserve le canonical actuel, mais on pourrait le retirer si besoin
        };
    }, [title, description, canonicalUrl]);

    // Ce composant ne rend rien dans le DOM React visuel
    return null;
}
