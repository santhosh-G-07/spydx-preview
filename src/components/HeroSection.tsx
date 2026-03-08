import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  children?: ReactNode;
  highlight?: string;
}

const HeroSection = ({ title, subtitle, children, highlight }: HeroSectionProps) => (
  <section className="relative min-h-[50vh] flex items-center justify-center bg-hero-gradient overflow-hidden pt-20 pb-12">
    {/* Grid overlay */}
    <div className="absolute inset-0 opacity-5" style={{
      backgroundImage: 'linear-gradient(hsl(185 80% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(185 80% 50% / 0.3) 1px, transparent 1px)',
      backgroundSize: '60px 60px'
    }} />
    
    <div className="container mx-auto px-4 text-center relative z-10">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-6xl font-bold font-display mb-6"
      >
        {highlight ? (
          <>
            {title.split(highlight)[0]}
            <span className="text-brand-x">{highlight}</span>
            {title.split(highlight)[1]}
          </>
        ) : (
          title
        )}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
      >
        {subtitle}
      </motion.p>
      {children && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {children}
        </motion.div>
      )}
    </div>

    {/* Bottom gradient fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
