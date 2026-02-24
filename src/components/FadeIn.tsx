import type { ElementType, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    className?: string;
    as?: ElementType;
}

export function FadeIn({ children, delay = 0, direction = 'up', className = '', as = 'div' }: FadeInProps) {
    const shouldReduceMotion = useReducedMotion();
    const Tag = as as ElementType;

    if (shouldReduceMotion) {
        return <Tag className={className}>{children}</Tag>;
    }

    const directions = {
        up: { y: 24, x: 0 },
        down: { y: -24, x: 0 },
        left: { x: 24, y: 0 },
        right: { x: -24, y: 0 },
        none: { x: 0, y: 0 },
    };

    const MotionComponent = motion[as as keyof typeof motion] as any;

    return (
        <MotionComponent
            initial={{ opacity: 0, ...directions[direction] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay, ease: 'easeOut' }}
            className={`max-md:!transform-none max-md:!opacity-100 ${className}`}
        >
            {children}
        </MotionComponent>
    );
}
