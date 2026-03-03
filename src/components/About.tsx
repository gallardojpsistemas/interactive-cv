const About = () => {
  return (
    <section
      id="about"
      className="max-w-4xl mx-auto px-4 sm:px-6 text-gray-900 dark:text-gray-100 py-4 sm:py-8 md:py-12 lg:py-16"
    >
      {/* Título */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
        Sobre mí
      </h2>

      {/* Párrafo principal */}
      <p className="leading-relaxed text-sm sm:text-base lg:text-lg text-center max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-8 lg:mb-12 text-gray-700 dark:text-gray-300 px-2">
        Soy <b>Juan Pablo Gallardo</b>, Licenciado en Sistemas de Información.
        <br className="hidden sm:block" />
        <span className="sm:hidden"> </span>
        Tengo experiencia tanto en desarrollo <b>Frontend</b> como <b>Backend</b> y <b>QA Automation</b>.
        <br className="hidden sm:block" />
        <span className="sm:hidden"> </span>
        Hablo <b>inglés</b> y <b>portugués avanzado</b>, lo que me permite
        trabajar en equipos internacionales y mantenerme actualizado con la documentación técnica.
      </p>

      {/* Grid responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto">
        {/* Card de Habilidades Técnicas */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">
            Habilidades técnicas
          </h3>
          <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
            <li className="flex items-center">
              <span className="mr-2">⚛️</span>
              React / Next.js
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎨</span>
              TailwindCSS
            </li>
            <li className="flex items-center">
              <span className="mr-2">🛠️</span>
              TypeScript / JavaScript
            </li>
            <li className="flex items-center">
              <span className="mr-2">🌐</span>
              API REST
            </li>
            <li className="flex items-center">
              <span className="mr-2">💾</span>
              MongoDB / SQL
            </li>
            <li className="flex items-center">
              <span className="mr-2">⚙️</span>
              Git / CI/CD / AWS
            </li>
          </ul>
        </div>

        {/* Card de Soft Skills */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">
            Soft skills
          </h3>
          <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
            <li className="flex items-center">
              <span className="mr-2">🤝</span>
              Trabajo en equipo
            </li>
            <li className="flex items-center">
              <span className="mr-2">🚀</span>
              Proactividad
            </li>
            <li className="flex items-center">
              <span className="mr-2">🧠</span>
              Resolución de problemas
            </li>
            <li className="flex items-center">
              <span className="mr-2">📚</span>
              Aprendizaje constante
            </li>
            <li className="flex items-center">
              <span className="ml-1 mr-2">🇺🇸</span>
              Inglés avanzado
            </li>
            <li className="flex items-center">
              <span className="ml-1 mr-2">🇧🇷</span>
              Portugués intermedio
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;