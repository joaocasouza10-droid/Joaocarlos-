/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "Qual o pedido mínimo para brindes personalizados?",
    answer: "Trabalhamos com um pedido mínimo de 50 unidades para a maioria dos nossos modelos, garantindo o melhor custo-benefício em escala."
  },
  {
    question: "Vocês enviam mockup digital antes da produção?",
    answer: "Com certeza! Antes de iniciar qualquer produção, enviamos um mockup 3D digital para sua aprovação final dos recortes e artes."
  },
  {
    question: "Qual o prazo médio de entrega?",
    answer: "Nosso prazo médio é de 10 a 15 dias úteis, dependendo da complexidade do recorte e volume do pedido, além do tempo de frete."
  },
  {
    question: "Os chaveiros possuem garantia contra quebra?",
    answer: "Utilizamos acrílico cast de alta resistência. Oferecemos garantia total contra defeitos de fabricação e problemas no transporte."
  },
  {
    question: "Posso fazer cada chaveiro com um nome diferente?",
    answer: "Sim! Trabalhamos com personalização variável, ideal para brindes de fim de ano ou kits de boas-vindas para colaboradores."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 rounded-2xl bg-brand-blue/10 text-brand-blue">
            <HelpCircle size={32} />
          </div>
          <div>
            <h2 className="text-4xl font-display font-bold">Dúvidas <span className="text-brand-blue">Frequentes</span></h2>
            <p className="text-white/40">Tudo o que você precisa saber para começar seu projeto.</p>
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div 
                key={index}
                className={`rounded-3xl border transition-all duration-300 ${isActive ? 'glass border-brand-blue/30' : 'bg-white/5 border-white/10 hover:border-white/20'}`}
              >
                <button
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className="w-full p-8 flex items-center justify-between text-left"
                >
                  <span className={`text-xl font-bold transition-colors ${isActive ? 'text-brand-blue' : 'text-white'}`}>
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full transition-all ${isActive ? 'bg-brand-blue text-brand-purple rotate-180' : 'bg-white/10 text-white'}`}>
                    {isActive ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 text-white/60 leading-relaxed text-lg">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
