/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Sparkles, Heart, Briefcase, PartyPopper, Palette, Smile } from 'lucide-react';

const catalogSections = [
  {
    title: "Seção 1: Chaveiros Minimalistas",
    description: "Design atemporal que combina com qualquer estilo. Perfeitos para uso diário e presentes corporativos.",
    items: [
      { name: "Quadro Clássico", price: "R$ 15-20", desc: "Forma quadrada com bordas suaves, ideal para logos e frases curtas.", suggestion: "Brindes corporativos e identidade visual de empresas" },
      { name: "Círculo Puro", price: "R$ 18-22", desc: "Design circular com acabamento brilhante, ótimo para nomes e iniciais.", suggestion: "Lembranças de aniversário e presentes pessoais" },
      { name: "Retângulo Slim", price: "R$ 20-25", desc: "Formato alongado perfeito para mensagens e datas especiais.", suggestion: "Eventos formais e datas comemorativas" }
    ]
  },
  {
    title: "Seção 2: Chaveiros Temáticos",
    description: "Modelos desenhados especificamente para momentos que merecem ser lembrados.",
    items: [
      { name: "Chaveiros de Casamento", price: "R$ 25-30", desc: "Designs românticos com corações, alianças e motivos florais.", suggestion: "Ideal para: Lembranças de casamento e chá-bar" },
      { name: "Chaveiros de Aniversário", price: "R$ 20-28", desc: "Moldes divertidos com balões, bolo e confetes para celebrar cada idade.", suggestion: "Ideal para: Festas infantis e aniversários adultos" },
      { name: "Chaveiros Corporativos", price: "R$ 22-35", desc: "Personalização com logos e identidade visual da empresa.", suggestion: "Ideal para: Marketing, eventos corporativos e networking" }
    ]
  },
  {
    title: "Seção 3: Chaveiros Divertidos",
    description: "Designs criativos e lúdicos que transmitem alegria e descontração.",
    items: [
      { name: "Chaveiros Coloridos", price: "R$ 18-25", desc: "Opções em diversas cores vibrantes e efeitos especiais.", suggestion: "Uso: Festas temáticas e eventos jovens" },
      { name: "Chaveiros com Temas", price: "R$ 22-35", desc: "Designs customizados para ocasiões específicas e hobbies.", suggestion: "Uso: Formaturas, aniversários temáticos, celebrações únicas" }
    ]
  }
];

export default function CatalogSections() {
  return (
    <section className="py-24 px-6 bg-brand-purple/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Guia <span className="text-brand-blue">Definitivo</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto">Confira os detalhes técnicos, preços e sugestões do nosso catálogo oficial.</p>
        </div>

        <div className="space-y-24">
          {catalogSections.map((section, sIdx) => (
            <div key={sIdx}>
              <div className="mb-10 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-2 text-brand-blue">{section.title}</h3>
                <p className="text-white/60">{section.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.items.map((item, iIdx) => (
                  <motion.div
                    key={iIdx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: iIdx * 0.1 }}
                    className="glass p-8 rounded-3xl border border-white/5 hover:border-brand-blue/30 transition-all group"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-10 h-10 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue font-bold">
                        {iIdx + 1}
                      </div>
                      <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-bold text-brand-blue tracking-wider">
                        {item.price}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold mb-4 group-hover:text-brand-blue transition-colors">{item.name}</h4>
                    <p className="text-sm text-white/50 mb-6 leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="pt-4 border-t border-white/5">
                      <p className="text-[10px] uppercase font-bold tracking-widest text-white/30 mb-1">Dica de uso:</p>
                      <p className="text-xs text-white/70 italic">{item.suggestion}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-brand-blue/10 border border-brand-blue/20 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-blue/5 to-transparent pointer-events-none" />
             <h3 className="text-3xl md:text-5xl font-display font-black mb-12 relative z-10">Quem Pode <span className="text-brand-blue">Aproveitar?</span></h3>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-brand-blue">Empresas</h4>
                    <p className="text-white/60 leading-relaxed">Fortaleça sua marca com brindes corporativos personalizados. Ideal para eventos, feiras, networking e estratégias de marketing.</p>
                </div>
                <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-brand-blue">Casais</h4>
                    <p className="text-white/60 leading-relaxed">Crie lembranças exclusivas para casamento, noivado e outras celebrações importantes do relacionamento.</p>
                </div>
                <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-brand-blue">Famílias</h4>
                    <p className="text-white/60 leading-relaxed">Comemore aniversários, formaturas e momentos especiais com presentes personalizados que todos vão adorar.</p>
                </div>
             </div>
        </div>
      </div>
    </section>
  );
}
