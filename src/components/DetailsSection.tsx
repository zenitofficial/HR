
import React, { useState } from "react";
import { toast } from "sonner";

const DetailsSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: ""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form enviado");

    if (!formData.fullName || !formData.email) {
      toast.error("Por favor preencha todos os campos necessários.");
      return;
    }

    const subject = encodeURIComponent("Contato via site Zenit");
    const body = encodeURIComponent(
      `Nome: ${formData.fullName}\nEmail: ${formData.email}\nEmpresa: ${formData.company || "Não informada"}`
    );

    const mailtoLink = `mailto:willrm.mkt@gmail.com?subject=${subject}&body=${body}`;
    console.log("mailtoLink:", mailtoLink);

    window.location.href = mailtoLink;

    toast.success("Request submitted successfully!");

    setFormData({
      fullName: "",
      email: "",
      company: ""
    });
  };

  return <section id="details" className="w-full bg-white py-0">
    <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
        {/* Left Card - The Details */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant">
          <div className="relative h-48 sm:h-64 p-6 sm:p-8 flex items-end" style={{
            backgroundImage: `url('${import.meta.env.BASE_URL}background-section3.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
            <h2 className="text-2xl sm:text-3xl font-display text-white font-bold">
              Os detalhes
            </h2>
          </div>

          {/* Card Content */}
          <div className="bg-white p-4 sm:p-8" style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #ECECEC"
          }}>
            <h3 className="text-lg sm:text-xl font-display mb-6 sm:mb-8">
              Engenharia de precisão encontra a inovação
            </h3>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-dark-900 flex items-center justify-center mt-1 flex-shrink-0">
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="p-3 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
                    <span className="font-semibold text-base">Disponibilidade:</span> 99,9% uptime garantido
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-dark-900 flex items-center justify-center mt-1 flex-shrink-0">
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="p-3 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
                    <span className="font-semibold text-base">Suporte:</span> Atendimento todos os dias do mês, 24/7
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-dark-900 flex items-center justify-center mt-1 flex-shrink-0">
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="p-3 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
                    <span className="font-semibold text-base">Segurança:</span> Certificado SSL e protocolos avançados de proteção
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-dark-900 flex items-center justify-center mt-1 flex-shrink-0">
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="p-3 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
                    <span className="font-semibold text-base">Velocidade:</span> Sites entregues em até 48 horas
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-dark-900 flex items-center justify-center mt-1 flex-shrink-0">
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="p-3 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
                    <span className="font-semibold text-base">Precisão:</span> Otimização e testes para performance máxima
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Card - Contact Form */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant">
          {/* Card Header with background image instead of gradient */}
          <div className="relative h-48 sm:h-64 p-6 sm:p-8 flex flex-col items-start" style={{
            backgroundImage: `url('${import.meta.env.BASE_URL}background-section1.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
            <div className="inline-block px-4 sm:px-6 py-2 border border-white text-white rounded-full text-xs mb-4">
              Estou interessado
            </div>
            <h2 className="text-2xl sm:text-3xl font-display text-white font-bold mt-auto">
              Veja você mesmo
            </h2>
          </div>

          {/* Card Content - Form */}
          <div className="bg-white p-4 sm:p-8" style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #ECECEC"
          }}>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Nome completo"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Empresa (opcional)"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-pulse-500 hover:bg-pulse-600 text-white font-medium rounded-full transition-colors duration-300"
                >
                  Entrar em contato
                </button>
              </div>
            </form>
          </div>

          <div
            className="flex flex-col sm:flex-row justify-center md:justify-center gap-4 sm:gap-6 mt-4 text-center md:text-center md:flex-row md:items-center"
          >
            <p className="font-display font-normal text-black text-sm sm:text-base mb-2 md:mb-0 md:mr-6">
              Email: <span className="text-[#FC4D0A] font-normal">willrm.mkt@gmail.com</span>
            </p>
            <p className="font-display font-normal text-black text-sm sm:text-base mb-2 md:mb-0">
              Telefone: <span className="text-[#FC4D0A] font-normal">(41) 98441-8576</span>
            </p>
          </div>

        </div>
      </div>
    </div>
  </section>;
};
export default DetailsSection;
