/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/70 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1582142306909-195724d339ef?auto=format&fit=crop&q=80&w=1920&h=1080" 
          alt="Premium Acrylic Keychains Showcase"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full glass text-brand-blue text-sm font-bold tracking-widest uppercase animate-pulse-slow">
            Brindes Corporativos de Luxo
          </span>
          <h1 className="font-display text-5xl md:text-8xl font-black leading-[0.9] mb-8 tracking-tighter">
            TRANSFORME SEU <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-white to-brand-deep text-glow">
              LOGOTIPO EM DESEJO
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Chaveiros em acrílico premium com corte a laser e impressão de alta definição. 
            A solução definitiva para fixar sua marca no dia a dia dos seus clientes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://wa.me/5515992601355"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-brand-deep text-white font-bold rounded-2xl box-glow hover:bg-brand-blue hover:text-brand-purple transition-all duration-300 text-lg group text-center"
            >
              QUERO MEUS BRINDES
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300 text-lg"
            >
              VER CATÁLOGO
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs uppercase tracking-widest text-white/40">Desça para saber mais</span>
        <ChevronDown className="text-brand-blue" />
      </motion.div>

      {/* Decorative Glows */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-brand-blue/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-brand-deep/20 blur-[120px] rounded-full" />
    </section>
  );
}
