import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const links = [
        { name: 'Accueil', path: '/' },
        { name: 'MobeeWeb', path: '/solutions/mobeeweb' },
        { name: 'NephroCall', path: '/solutions/nephrocall' },
        { name: 'Santé', path: '/secteurs/sante' },
        { name: 'Industrie', path: '/secteurs/industrie' },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-deep-dark/70 backdrop-blur-xl transition-all duration-300">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-safefull-orange rounded-sm">
                        <img src="/logoSAFEFULL.png" alt="Safefull Systems" className="h-8 w-auto object-contain drop-shadow-[0_0_8px_rgba(0,210,255,0.3)]" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:items-center md:gap-8">
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`relative text-sm font-medium transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-safefull-orange rounded-sm px-2 py-1 ${location.pathname === link.path ? 'text-white' : 'text-gray-400'
                                    }`}
                            >
                                {link.name}
                                {location.pathname === link.path && (
                                    <motion.div layoutId="nav-indicator" className="absolute -bottom-2 left-0 right-0 h-0.5 bg-safefull-orange shadow-orange-glow" />
                                )}
                            </Link>
                        ))}
                        {/* PRIMARY CTA CLONED */}
                        <Link
                            to="/contact"
                            className="group relative inline-flex items-center justify-center rounded-sm bg-safefull-orange px-6 py-2.5 text-sm font-bold text-deep-dark transition-all duration-300 hover:bg-white hover:shadow-orange-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-safefull-orange focus-visible:ring-offset-2 focus-visible:ring-offset-deep-dark"
                        >
                            <ShieldAlert className="mr-2 h-4 w-4" />
                            Audit Sécurité
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-gray-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-safefull-orange rounded-sm"
                            aria-expanded={isOpen}
                            aria-label="Toggle navigation menu"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Orchestration */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden border-t border-white/5 bg-deep-dark/95 backdrop-blur-xl md:hidden"
                    >
                        <div className="flex flex-col space-y-2 px-4 py-6">
                            {links.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`rounded-sm px-4 py-3 text-base font-medium transition-colors ${location.pathname === link.path ? 'bg-white/5 text-safefull-orange border-l-2 border-safefull-orange' : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 pb-2">
                                <Link
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="flex w-full items-center justify-center rounded-sm bg-safefull-orange px-4 py-3 font-bold text-deep-dark shadow-orange-glow transition-colors hover:bg-white"
                                >
                                    Demander un Audit
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
