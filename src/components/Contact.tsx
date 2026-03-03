import { useState } from "react";

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsOpen(true);
    };
    return (
        <section
            id="contact"
            className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-12 lg:py-16 text-center"
        >
            {/* Título */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
                Contacto
            </h2>

            {/* Descripción */}
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 px-4">
                Si te interesa trabajar conmigo, no dudes en escribirme.
            </p>

            {/* Formulario */}
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-2 sm:gap-3 md:gap-4 max-w-xs sm:max-w-sm md:max-w-md mx-auto mb-4 sm:mb-6 md:mb-8 lg:mb-12"
            >
                <input
                    type="text"
                    placeholder="Nombre"
                    className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 text-xs sm:text-sm md:text-base rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 text-xs sm:text-sm md:text-base rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                />
                <textarea
                    placeholder="Mensaje"
                    rows={4}
                    className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 text-xs sm:text-sm md:text-base rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none transition-all"
                ></textarea>
                <button
                    type="submit"
                    className="px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base bg-blue-600 text-white rounded-lg hover:bg-blue-500 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all shadow-md hover:shadow-lg active:transform active:scale-95"
                >
                    Enviar
                </button>
            </form>

            {/* Enlaces sociales */}
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center items-center">
                {/* GitHub 3D Button */}
                <a
                    href="https://github.com/gallardojpsistemas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    style={{ perspective: '1000px' }}
                >
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 transition-all duration-200 transform-gpu group-hover:scale-110 group-hover:-rotate-y-12 group-hover:-rotate-x-6"
                        style={{
                            transformStyle: 'preserve-3d',
                            transform: 'rotateX(15deg) rotateY(15deg)'
                        }}
                    >
                        {/* Base 3D del botón */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-xl shadow-2xl shadow-gray-900/50 transition-all duration-200 group-hover:shadow-gray-900/70"
                            style={{
                                transform: 'translateZ(-6px)',
                                background: 'linear-gradient(135deg, #1f2937 0%, #374151 50%, #111827 100%)'
                            }}
                        ></div>

                        {/* Superficie frontal */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:bg-gradient-to-br group-hover:from-gray-600 group-hover:via-gray-500 group-hover:to-gray-700 overflow-hidden"
                            style={{ transform: 'translateZ(0px)' }}
                        >
                            {/* Brillo superior */}
                            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-xl opacity-60 group-hover:opacity-80 transition-opacity duration-200"></div>

                            {/* Icono GitHub */}
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white relative z-10 group-hover:scale-110 transition-transform duration-150" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.295-1.23 3.295-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>

                            {/* Efecto de partículas */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <div className="absolute top-2 left-2 w-0.5 h-0.5 bg-white rounded-full animate-pulse"></div>
                                <div className="absolute top-3 right-3 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                                <div className="absolute bottom-2 left-3 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                            </div>
                        </div>
                    </div>
                </a>

                {/* LinkedIn 3D Button */}
                <a
                    href="https://linkedin.com/in/gallardo-juan-pablo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    style={{ perspective: '1000px' }}
                >
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 transition-all duration-200 transform-gpu group-hover:scale-110 group-hover:-rotate-y-12 group-hover:-rotate-x-6"
                        style={{
                            transformStyle: 'preserve-3d',
                            transform: 'rotateX(15deg) rotateY(15deg)'
                        }}
                    >
                        {/* Base 3D del botón */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-900 rounded-xl shadow-2xl shadow-blue-900/50 transition-all duration-200 group-hover:shadow-blue-900/70"
                            style={{ transform: 'translateZ(-6px)' }}
                        ></div>

                        {/* Superficie frontal */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-700 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:via-blue-400 group-hover:to-indigo-600 overflow-hidden"
                            style={{ transform: 'translateZ(0px)' }}
                        >
                            {/* Brillo superior */}
                            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-xl opacity-60 group-hover:opacity-80 transition-opacity duration-200"></div>

                            {/* Icono LinkedIn */}
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white relative z-10 group-hover:scale-110 transition-transform duration-150" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>

                            {/* Efecto de ondas */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <div className="absolute top-2 right-2 w-1 h-1 border border-white/50 rounded-full animate-ping"></div>
                                <div className="absolute bottom-3 left-3 w-0.5 h-0.5 border border-white/40 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
                            </div>
                        </div>
                    </div>
                </a>

                {/* Email 3D Button */}
                <a
                    href="mailto:gallardojpsistemas@gmail.com"
                    className="group relative"
                    style={{ perspective: '1000px' }}
                >
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 transition-all duration-200 transform-gpu group-hover:scale-110 group-hover:-rotate-y-12 group-hover:-rotate-x-6"
                        style={{
                            transformStyle: 'preserve-3d',
                            transform: 'rotateX(15deg) rotateY(15deg)'
                        }}
                    >
                        {/* Base 3D del botón */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 via-green-700 to-teal-900 rounded-xl shadow-2xl shadow-green-900/50 transition-all duration-200 group-hover:shadow-green-900/70"
                            style={{ transform: 'translateZ(-6px)' }}
                        ></div>

                        {/* Superficie frontal */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:bg-gradient-to-br group-hover:from-emerald-400 group-hover:via-green-400 group-hover:to-teal-500 overflow-hidden"
                            style={{ transform: 'translateZ(0px)' }}
                        >
                            {/* Brillo superior */}
                            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent rounded-t-xl opacity-60 group-hover:opacity-80 transition-opacity duration-200"></div>

                            {/* Icono Email */}
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white relative z-10 group-hover:scale-110 transition-transform duration-150" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661Z" />
                            </svg>

                            {/* Efecto de envío */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <div className="absolute top-2 right-2 w-0.5 h-3 bg-white/60 rounded-full transform rotate-45 animate-pulse"></div>
                                <div className="absolute top-2.5 right-3 w-0.5 h-2 bg-white/40 rounded-full transform rotate-45 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                <div className="absolute top-3 right-4 w-0.5 h-1 bg-white/30 rounded-full transform rotate-45 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 px-4">
                    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full p-6 text-center animate-fade-in">

                        <h3 className="text-xl sm:text-2xl font-bold mb-4">
                            ¡Gracias por tu mensaje!
                        </h3>

                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6">
                            Gracias por visitar mi portfolio y por tu interés.
                            <br />
                            Te responderé lo antes posible.
                        </p>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all shadow-md hover:shadow-lg active:scale-95"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;