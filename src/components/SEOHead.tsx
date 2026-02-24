import { useEffect } from 'react';

/**
 * Composant SEOHead pour Mails & B2B
 * Loi Bouchand: Gère le titre, la description, et la balise rel="canonical" pour prévenir la duplication de contenu (Duplicate Content)
 */

interface SEOHeadProps {
    title: string;
    description: string;
    canonicalUrl: string;
    jsonLd?: Record<string, any>;
}

export function SEOHead({ title, description, canonicalUrl, jsonLd }: SEOHeadProps) {
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

        // 4. Injection du JSON-LD pour le GEO (Authority & Silo)
        const organizationSchema = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Safefull Systems",
            "url": "https://safefull-systemes.netlify.app/",
            "logo": "https://safefull-systemes.netlify.app/logoSAFEFULL.png",
            "description": "Leader de la sécurité communicante B2B. Audits et architectures de cybersécurité pour les systèmes d'alarmes (PTI/DATI, NephroCall).",
            "founder": {
                "@type": "Person",
                "name": "Marc Dequecker"
            }
        };

        const serviceSchema = {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Audit Cybersécurité B2B & Supervision d'Alarmes",
            "provider": {
                "@type": "Organization",
                "name": "Safefull Systems"
            },
            "areaServed": "France"
        };

        const finalJsonLd = jsonLd ?
            (Array.isArray(jsonLd) ? [organizationSchema, serviceSchema, ...jsonLd] : [organizationSchema, serviceSchema, jsonLd])
            : [organizationSchema, serviceSchema];

        let scriptJsonLd = document.querySelector('script[id="seo-jsonld"]');
        if (!scriptJsonLd) {
            scriptJsonLd = document.createElement('script');
            scriptJsonLd.setAttribute('type', 'application/ld+json');
            scriptJsonLd.setAttribute('id', 'seo-jsonld');
            document.head.appendChild(scriptJsonLd);
        }
        scriptJsonLd.textContent = JSON.stringify(finalJsonLd);

        // Cleanup partiel si le composant est démonté de manière non-SPA (rare, mais bonne pratique)
        return () => {
            // On conserve le canonical actuel, mais on pourrait le retirer si besoin
            if (scriptJsonLd) document.head.removeChild(scriptJsonLd);
        };
    }, [title, description, canonicalUrl, jsonLd]);

    // Ce composant ne rend rien dans le DOM React visuel
    return null;
}
