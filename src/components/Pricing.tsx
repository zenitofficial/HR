import { FC } from "react";

const Pricing: FC = () => {
    return (
        <section className="py-16 bg-gray-50" id="princing">
            <div className="max-w-8xl mx-auto px-12 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-12">Choose Your Plan</h2>

                {/* 4 planos em linha */}
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">

                    {/* Basic */}
                    <div className="flex flex-col rounded-2xl shadow-md bg-white p-8 transition-transform hover:scale-105">
                        <h3 className="text-xl font-semibold mb-4">Basic</h3>
                        <p className="text-gray-600 mb-6">
                            Simple website with up to 5 pages, hosting & domain included.
                        </p>
                        <p className="text-4xl font-bold mb-6">$99<span className="text-lg"> one-time</span></p>
                        <ul className="text-gray-600 space-y-3 mb-8">
                            <li>✔ Up to 5 pages</li>
                            <li>✔ Responsive design</li>
                            <li>✔ Hosting & domain (1 year)</li>
                            <li>✔ Support Mon–Fri</li>
                        </ul>
                        <a href="#contact">
                            <button className="mt-auto bg-orange-600 text-white py-2 px-6 rounded-xl hover:bg-orange-700">
                                Get Started
                            </button>
                        </a>
                    </div>

                    {/* Professional – destaque */}
                    <div className="flex flex-col rounded-2xl shadow-xl text-white p-10 lg:scale-105 xl:scale-110 relative z-10"
                        style={{
                            backgroundImage: `url('${import.meta.env.BASE_URL}background-section2.png')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    >
                        <h3 className="text-2xl font-bold mb-4">Professional</h3>
                        <p className="text-orange-100 mb-6">
                            Best for businesses needing custom design and integrations.
                        </p>
                        <p className="text-5xl font-extrabold mb-6">$199<span className="text-xl"> one-time</span></p>
                        <ul className="space-y-3 mb-8">
                            <li>✔ Up to 10 pages</li>
                            <li>✔ Custom design</li>
                            <li>✔ Social media and Email integration</li>
                            <li>✔ SEO basics</li>
                            <li>✔ Hosting & domain (1 year)</li>
                        </ul>
                        <a href="#contact">
                            <button className="mt-auto bg-white text-orange-600 py-2 px-6 rounded-xl font-semibold hover:bg-gray-100">
                                Get Started
                            </button>
                        </a>
                    </div>

                    {/* Premium */}
                    <div className="flex flex-col rounded-2xl shadow-md bg-white p-8 transition-transform hover:scale-105">
                        <h3 className="text-xl font-semibold mb-4">Premium</h3>
                        <p className="text-gray-600 mb-6">
                            Advanced websites with unlimited pages and full customization.
                        </p>
                        <p className="text-4xl font-bold mb-6">$299<span className="text-lg"></span></p>
                        <ul className="text-gray-600 space-y-3 mb-8">
                            <li>✔ Unlimited pages</li>
                            <li>✔ Blog or gallery</li>
                            <li>✔ Analytics & dashboards</li>
                            <li>✔ CRM / e-commerce integration</li>
                            <li>✔ 1 month free maintenance</li>
                        </ul>
                        <a href="#contact">
                            <button className="mt-auto bg-orange-600 text-white py-2 px-6 rounded-xl hover:bg-orange-700">
                                Contact Sales
                            </button>
                        </a>
                    </div>

                    {/* Website Care – recorrente / extra */}
                    <div className="flex flex-col rounded-xl shadow-sm bg-white p-6 border border-orange-200 transition-transform hover:scale-105">
                        <h3 className="text-lg font-semibold mb-2">Website Care</h3>
                        <p className="text-gray-600 mb-4">
                            Continuous updates, support and premium hosting.
                        </p>
                        <p className="text-3xl font-bold mb-4">$99<span className="text-lg">/mo</span></p>
                        <ul className="text-gray-600 space-y-2 mb-6">
                            <li>✔ Premium hosting + domain</li>
                            <li>✔ Ongoing support</li>
                            <li>✔ Security updates</li>
                            <li>✔ Monthly performance reports</li>
                        </ul>
                        <a href="#contact">
                            <button className="mt-auto bg-orange-600 text-white py-2 px-6 rounded-xl hover:bg-orange-700">
                                Subscribe
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
