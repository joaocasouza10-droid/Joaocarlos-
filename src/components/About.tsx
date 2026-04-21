/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Award, ShieldCheck, Zap } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Image with Glow */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue/30 to-brand-deep/30 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
          <div className="relative rounded-3xl overflow-hidden border border-white/10 box-glow">
            <img 
              src="https://i.postimg.cc/0j1rXnSJ/Joao-Carlos-5.jpg" 
              alt="João Carlos e sua produção" 
              className="w-full h-auto object-cover transform scale-110 group-hover:scale-100 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Badge */}
          <div className="absolute -bottom-10 -right-10 glass p-8 rounded-full box-glow hidden lg:block">
            <Award className="text-brand-blue w-12 h-12 mb-2" />
            <div className="font-display font-bold leading-none">
              <span className="text-3xl">01</span><br />
              <span className="text-xs uppercase text-white/60">Ano de XP</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-brand-blue font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Sobre o Fundador</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
            Quem é <span className="text-brand-blue">João Carlos</span>?
          </h2>
          <div className="space-y-6 text-white/70 leading-relaxed text-lg">
            <p>
              Apaixonado por design e precisão, João Carlos fundou a <strong>Chaveiro Master</strong> com a missão de elevar o padrão dos brindes corporativos no Brasil. 
            </p>
            <p>
              O que começou como um pequeno estúdio de artesanato digital, hoje é referência nacional em acrílicos de luxo, servindo desde pequenas startups até grandes corporações com a mesma dedicação e acabamento impecável.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-brand-blue/10 text-brand-blue">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Qualidade</h4>
                <p className="text-sm text-white/50">Acrílico cast virgem de alta durabilidade.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-brand-deep/10 text-brand-deep">
                <Zap size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Precisão</h4>
                <p className="text-sm text-white/50">Corte a laser com precisão milimétrica.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Section Divider - Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent shadow-[0_0_20px_rgba(45,225,252,0.5)]" />
    </section>
  );
}
