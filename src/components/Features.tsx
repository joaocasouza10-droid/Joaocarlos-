/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Layers, ShieldCheck, Palette, LayoutGrid } from 'lucide-react';

const features = [
  {
    title: "100% Acrílico",
    description: "Material premium que garante leveza, transparência cristalina e acabamento profissional incomparável",
    icon: <Layers className="w-8 h-8" />
  },
  {
    title: "Alta Durabilidade",
    description: "Resistente a impactos, riscos e desgaste diário, mantendo o brilho e cor por muito mais tempo",
    icon: <ShieldCheck className="w-8 h-8" />
  },
  {
    title: "Personalização Completa",
    description: "Impressão de nomes, logos, fotos, datas e temas personalizados com precisão e qualidade",
    icon: <Palette className="w-8 h-8" />
  },
  {
    title: "Uso Versátil",
    description: "Ideal para eventos corporativos, casamentos, aniversários, formaturas e estratégias de marketing. Encaixe os 4 1 em cada aba nas nossas coleções",
    icon: <LayoutGrid className="w-8 h-8" />
  }
];

export default function Features() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-black/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-[2rem] border border-white/5 hover:border-brand-blue/30 transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-brand-purple transition-all duration-500 box-glow">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-white group-hover:text-brand-blue transition-colors">
                {feature.title}
              </h3>
              <p className="text-white/50 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
