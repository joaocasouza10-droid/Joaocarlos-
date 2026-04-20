/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

const stats = [
  "+15.000 CLIENTES SATISFEITOS",
  "1 ANO DE MERCADO",
  "ENTREGA PARA TODO O BRASIL",
  "PRODUÇÃO PRÓPRIA",
  "QUALIDADE PREMIUM GARANTIDA",
  "PERSONALIZAÇÃO EXCLUSIVA",
  "+15.000 CLIENTES SATISFEITOS",
  "1 ANO DE MERCADO",
  "ENTREGA PARA TODO O BRASIL",
];

export default function Marquee() {
  return (
    <div className="relative py-12 bg-white/5 border-y border-white/10 overflow-hidden">
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center gap-12"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <span className="text-2xl md:text-3xl font-display font-black text-brand-blue/80">
                {stat}
              </span>
              <div className="w-2 h-2 rounded-full bg-brand-deep" />
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Gradients to fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-purple to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-r from-transparent to-brand-purple z-10" />
    </div>
  );
}
