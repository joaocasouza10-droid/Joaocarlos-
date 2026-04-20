/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Download, MessageCircle, ArrowRight } from 'lucide-react';

export default function LeadMagnet() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative glass-dark rounded-[3rem] p-10 md:p-20 overflow-hidden border border-white/10">
          {/* Decorações */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-blue/20 blur-[100px] rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-brand-deep/20 blur-[100px] rounded-full" />

          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-blue font-black tracking-widest uppercase text-xs mb-6 block">Oferta Exclusiva</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
                Baixe nosso <br />
                <span className="text-brand-blue">Catálogo 2024</span>
              </h2>
              <p className="text-white/60 text-lg md:text-xl mb-10 leading-relaxed">
                Descubra todos os modelos, cores e opções de personalização. Prepare o próximo brinde da sua empresa com quem entende do assunto.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="https://wa.me/5515992601355"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 px-8 py-5 bg-brand-blue text-brand-purple font-black rounded-2xl box-glow text-lg translate-y-0 hover:-translate-y-1 transition-transform cursor-pointer"
                >
                  <Download size={24} />
                  BAIXAR GRÁTIS
                </motion.a>
                <motion.a
                  href="https://wa.me/5515992601355"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 px-8 py-5 glass text-white font-bold rounded-2xl hover:bg-white/10 transition-all text-lg cursor-pointer"
                >
                  FALAR COM CONSULTOR
                  <ArrowRight size={20} />
                </motion.a>
              </div>
            </div>

            <motion.div
              initial={{ rotate: 10, y: 50, opacity: 0 }}
              whileInView={{ rotate: 0, y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative hidden md:block"
            >
              <div className="absolute inset-0 bg-brand-blue/20 blur-3xl rounded-full" />
              <div className="relative glass aspect-[3/4] rounded-3xl p-8 border-2 border-white/20 shadow-2xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1549463591-24c1882bd398?auto=format&fit=crop&q=80&w=600&h=800" 
                  alt="Catalog Cover" 
                  className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-8 bottom-8 glass p-6 rounded-2xl">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-brand-purple">
                        <MessageCircle size={24} />
                      </div>
                      <div>
                        <div className="font-bold">Guia Definitivo</div>
                        <div className="text-xs text-white/60">PDF Interativo via WhatsApp</div>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
