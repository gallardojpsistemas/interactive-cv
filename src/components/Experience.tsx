const Experience = () => {
    const experiences = [
        {
            title: "Frontend Developer - Biolink",
            period: "Ago 2025 - Actualidad",
            description: "Responsable de la evolución de la plataforma en producción. Refactorización del codebase, mejora de performance y desarrollo de nuevas funcionalidades. Implementación de scrapers en Python para extracción automatizada de datos desde redes sociales e integración con backend y base de datos SQL.",
            tech: ["Next.js", "TypeScript", "Node.js", "SQL", "Python", "Scrapers"],
            type: "Trabajo Actual",
            highlights: ["Producción", "Refactorización", "Scrapers en Python", "Performance"]
        },
        {
            title: "Backend Developer & Tech Lead - Macro Intell SA (AgroCarteira)",
            period: "Jun 2025 - Feb 2026",
            description: "Lideré un equipo de 3 developers backend en el desarrollo de una billetera digital para el mercado brasileño (pagos PIX, boletos, tarjeta y P2P). Diseñé y mantuve una arquitectura de 12 microservicios con NestJS, incluyendo despliegues automáticos en producción vía GitLab CI/CD, Docker y Portainer.",
            tech: ["NestJS", "TypeScript", "MongoDB", "Redis", "Docker", "JWT"],
            type: "Full-time",
            highlights: ["Tech Lead", "12 Microservicios", "CI/CD", "Arquitectura escalable"]
        },
        {
            title: "Backend Developer - Macro Intell SA (TodoAgro)",
            period: "Sep 2022 - Jun 2025",
            description: "Desarrollo backend de marketplace agro con arquitectura de 15 microservicios. Modelado y optimización de esquemas NoSQL en MongoDB mejorando rendimiento en un 20%. Implementación de pipelines CI/CD con Jenkins y Docker, y autenticación con JWT.",
            tech: ["Node.js", "Express", "MongoDB", "Docker", "Jenkins", "Redis", "JWT"],
            type: "Full-time",
            highlights: ["15 Microservicios", "Optimización 20%", "Marketplace", "CI/CD"]
        },
        {
            title: "Frontend Developer - InboxVIP",
            period: "Ago 2023 - 2025",
            description: "Único frontend responsable de una aplicación de mensajería privada por suscripción. Desarrollo de componentes reutilizables, refactorización de código legacy y creación de landing pages integradas con backend y base de datos SQL.",
            tech: ["Next.js", "TypeScript", "Tailwind CSS", "SQL"],
            type: "Contractor",
            highlights: ["Responsable único", "Refactorización", "Integración APIs"]
        },
        {
            title: "QA Automation Engineer",
            period: "Ene 2022 - May 2025 (Part-time)",
            description: "Automatización de pruebas funcionales y testing de APIs REST. Integración de reportes automáticos en pipelines CI reduciendo tiempos de validación manual en cada release.",
            tech: ["Selenium", "Cucumber", "Java", "CI/CD", "Postman"],
            type: "Freelance",
            highlights: ["Automatización", "Testing APIs", "CI/CD"]
        }
    ];

    const getTypeColor = (type: string) => {
        switch (type) {
            case "Trabajo Actual":
            case "Trabajo Actual (Contractor)":
                return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
            case "Freelance":
                return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
            case "Sector Público":
                return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
            default:
                return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
        }
    };

    return (
        <section
            id="experience"
            className="bg-gray-100 dark:bg-gray-900 py-4 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6"
        >
            {/* Título */}
            <div className="max-w-6xl mx-auto">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center">
                    Experiencia Profesional
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    {experiences.map((exp, i) => (
                        <div
                            key={i}
                            className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-4 sm:p-5 md:p-6 hover:scale-[1.02] transform transition-all duration-300 border-l-4 border-blue-500"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                                    {exp.title}
                                </h3>
                                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(exp.type)}`}>
                                    {exp.type}
                                </span>
                            </div>

                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">
                                {exp.period}
                            </p>

                            <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                {exp.description}
                            </p>

                            <div className="mb-4">
                                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">
                                    Tecnologías:
                                </p>
                                <div className="flex flex-wrap gap-1 sm:gap-2">
                                    {exp.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-2 py-1 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-xs rounded-md border border-blue-200 dark:border-blue-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">
                                    Aspectos destacados:
                                </p>
                                <div className="flex flex-wrap gap-1 sm:gap-2">
                                    {exp.highlights.map((highlight, highlightIndex) => (
                                        <span
                                            key={highlightIndex}
                                            className="px-2 py-1 bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300 text-xs rounded-md border border-green-200 dark:border-green-700"
                                        >
                                            {highlight}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;