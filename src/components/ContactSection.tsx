import { Contact } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        const response = await fetch("https://formspree.io/f/xeoledaj", {
            method: "POST",
            body: formData,
            headers: { Accept: "application/json" },
        });

        if (response.ok) {
            setSubmitted(true);
            form.reset();
        } else {
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <section id="contact" className="py-16">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center lg:text-left">
                        Fale Conosco
                    </h2>
                    <p className="text-gray-600 mb-10 text-center lg:text-left">
                        Conte-nos sobre o seu projeto e entraremos em contato o mais rápido possível
                        para discutir como a automação pode levar a sua empresa ao próximo nível.
                    </p>

                    {submitted ? (
                        <div className="p-6 bg-green-100 text-green-800 rounded-xl text-center font-semibold">
                            ✅ Obrigado! Sua mensagem foi enviada.
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6 text-left bg-white p-8 rounded-2xl shadow-md"
                        >
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Mensagem
                                </label>
                                <textarea
                                    name="message"
                                    rows={5}
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-orange-500 text-white py-3 px-6 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
                            >
                                Enviar Mensagem
                            </button>
                        </form>
                    )}
                </div>

                {/* Right - Made By Humans */}
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative shadow-md">
                    <div
                        className="bg-no-repeat bg-cover bg-center h-full p-6 sm:p-8 min-h-[300px] flex flex-col justify-between"
                        style={{
                            backgroundImage: `url('${import.meta.env.BASE_URL}background-section3.png')`,
                        }}
                    >
                        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start text-white">
                            <img
                                src={`${import.meta.env.BASE_URL}no_bg.png`}
                                alt="Pulse Robot Logo"
                                className="h-12 w-auto mb-4 sm:mb-0 sm:h-16 md:h-20 mr-0 sm:mr-3 mx-auto sm:mx-0"
                            />
                            <span className="text-white text-xl font-medium"></span>
                        </div>

                        <div className="mt-6">
                            <h2 className="font-playfair text-white italic font-thin text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center">
                                Made By AI & Human
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
