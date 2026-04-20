/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4 glass border-b border-brand-blue/20' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-deep rounded-lg flex items-center justify-center box-glow">
            <span className="font-display font-bold text-xl text-brand-purple">C</span>
          </div>
          <span className="font-display font-bold text-2xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            CHAVEIRO<span className="text-brand-blue">MASTER</span>
          </span>
        </div>

        <motion.a
          href="https://wa.me/5515992601355"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-2.5 bg-brand-blue text-brand-purple font-bold rounded-full hover:bg-white transition-colors duration-300 box-glow"
        >
          <MessageCircle size={18} />
          <span className="hidden sm:inline">Orçamento Grátis</span>
        </motion.a>
      </div>
    </motion.nav>
  );
}
