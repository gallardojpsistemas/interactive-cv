import Image from "next/image";

const Hero = () => {
    return (
        <section
            id="home"
            className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center px-4 sm:px-6 py-4 sm:py-6 md:py-0"
        >
            <div className="mb-4 sm:mb-6 md:mb-8">
                <Image
                    src="/avatar.png"
                    alt="Foto de perfil de Juan Pablo Gallardo"
                    width={280}
                    height={280}
                    className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full shadow-xl border-4 border-blue-600 object-cover"
                    priority
                />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4">
                Hola, soy Juan
            </h1>

            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 mb-4 sm:mb-5 md:mb-6">
                Desarrollador Frontend | Licenciado en Sistemas
            </h2>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mb-6 sm:mb-8 md:mb-10 leading-relaxed">
                Desarrollador Frontend con más de 2 años de experiencia profesional especializado en{" "}
                <b>Next.js</b>, <b>TypeScript</b> y <b>Tailwind CSS</b>.
                <br className="hidden sm:block" />
                También tengo experiencia en Backend con <b>Node.js</b> y QA Automation.
                <br className="hidden sm:block" />
                Construyo interfaces performantes y escalables.
            </p>

            {/* Enlaces sociales */}
            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-5 justify-center items-center">
                {/* GitHub */}
                <a
                    href="https://github.com/gallardojpsistemas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 dark:from-gray-700 dark:via-gray-600 dark:to-gray-800 text-white rounded-xl shadow-lg hover:shadow-2xl hover:shadow-gray-500/25 hover:scale-110 transition-all duration-300 overflow-hidden"
                    title="GitHub"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <svg className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.295-1.23 3.295-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                </a>

                {/* LinkedIn */}
                <a
                    href="https://linkedin.com/in/gallardo-juan-pablo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-110 transition-all duration-300 overflow-hidden"
                    title="LinkedIn"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <svg className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                </a>

                {/* Email */}
                <a
                    href="mailto:gallardojpsistemas@gmail.com"
                    className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600 text-white rounded-xl shadow-lg hover:shadow-2xl hover:shadow-green-500/25 hover:scale-110 transition-all duration-300 overflow-hidden"
                    title="Email"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <svg className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                </a>

                {/* CV */}
                <a
                    href="https://drive.google.com/file/d/1_iqMqu7Xu3uO0RVtpqNejxob02CvLd5O/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-600 via-violet-500 to-fuchsia-600 text-white rounded-xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-110 transition-all duration-300 overflow-hidden"
                    title="Descargar CV"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <svg className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default Hero;