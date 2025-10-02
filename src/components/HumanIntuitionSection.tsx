
import React, { useRef } from "react";

const HumanIntuitionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12" id="human-intuition" ref={sectionRef}> {/* Reduced from py-20 */}
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="pulse-chip mb-4">
              <span>Como nós trabalhamos</span>
            </div>
            <h2 className="section-title mb-6">Do primeiro contato ao seu negócio no piloto automático</h2>
            <p className="text-lg text-gray-700 mb-6">
              Nosso processo é simples, transparente e focado em resultados, guiando você passo
              a passo até a sua automação estar 100% funcional e pronta para escalar seu negócio.
            </p>
            <ul className="space-y-4">
              {[
                "Contato inicial: Entendemos suas necessidades e metas de crescimento.",
                "Análise: Mapeamos seu processo comercial e de atendimento atual.",
                "Configuração: Criamos e configuramos toda a automação e a atendente de IA no seu WhatsApp.",
                "Implementação: Subimos as campanhas de tráfego pago e testamos o sistema.",
                "Lançamento: A automação começa a atrair leads e a atendente de IA assume o atendimento."
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 text-pulse-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanIntuitionSection;
