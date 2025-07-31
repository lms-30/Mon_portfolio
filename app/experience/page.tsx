
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Experience() {
  const academicProjects = [
    {
      title: "1ère Place CTF INSI",
      organization: "Compétition - INSI",
      location: "Antananarivo, Madagascar",
      period: "2024",
      type: "Distinction",
      description: "Victoire lors de la compétition Capture The Flag organisée par l'Institut National des Sciences de l'Informatique, démontrant des compétences avancées en cybersécurité.",
      achievements: [
        "Résolution de challenges de sécurité web et système",
        "Analyse et exploitation de vulnérabilités",
        "Techniques de reverse engineering",
        "Cryptographie et stéganographie appliquées"
      ],
      technologies: ["Web Security", "System Exploitation", "Cryptography", "Forensics", "Reverse Engineering"],
      color: "yellow"
    },
    {
      title: "Infrastructure Zero Trust",
      organization: "Projet Académique - INSI",
      location: "Antananarivo, Madagascar",
      period: "2024",
      type: "Projet Pratique",
      description: "Déploiement d'une infrastructure réseau Zero Trust avec VPN sécurisé utilisant des technologies modernes de sécurisation.",
      achievements: [
        "Configuration complète d'OpenVPN pour l'accès distant sécurisé",
        "Mise en place de FreeRADIUS pour l'authentification centralisée",
        "Configuration de Squid Proxy pour le filtrage web",
        "Sécurisation avec pfSense comme pare-feu principal"
      ],
      technologies: ["OpenVPN", "FreeRADIUS", "Squid Proxy", "pfSense", "Linux"],
      color: "blue"
    },
    {
      title: "Serveurs BDD et Web sécurisés",
      organization: "Projet Académique - INSI",
      location: "Antananarivo, Madagascar",
      period: "2024",
      type: "Projet Pratique",
      description: "Installation et configuration complète de serveurs de bases de données et serveurs web sous environnement Linux.",
      achievements: [
        "Installation et sécurisation de MySQL et PostgreSQL",
        "Configuration d'Apache et Nginx avec SSL/TLS",
        "Mise en place de Ubuntu Server 22.04.5 LTS",
        "Optimisation des performances et monitoring"
      ],
      technologies: ["MySQL", "PostgreSQL", "Apache", "Nginx", "Ubuntu Server", "SSL/TLS"],
      color: "green"
    },
    {
      title: "Pipeline CI/CD avec GitLab",
      organization: "Projet Personnel",
      location: "Antananarivo, Madagascar",
      period: "2024",
      type: "Auto-formation",
      description: "Développement d'une chaîne d'intégration et de déploiement continus pour automatiser les processus de développement.",
      achievements: [
        "Configuration complète du pipeline GitLab CI/CD",
        "Automatisation des tests, builds et déploiements",
        "Intégration de Docker pour la conteneurisation",
        "Scripts d'automatisation et monitoring du pipeline"
      ],
      technologies: ["GitLab CI/CD", "Docker", "YAML", "Shell Script", "Git"],
      color: "purple"
    },
    {
      title: "Serveur de virtualisation KVM",
      organization: "Projet Académique - INSI",
      location: "Antananarivo, Madagascar",
      period: "2023-2024",
      type: "Travaux Pratiques",
      description: "Configuration d'un serveur de virtualisation avec déploiement d'infrastructure simulée multi-VMs.",
      achievements: [
        "Déploiement d'infrastructure interne simulée",
        "Configuration de ponts réseau (bridge), NAT et host-only",
        "Création de scripts d'automatisation pour les VMs",
        "Gestion centralisée des ressources virtuelles"
      ],
      technologies: ["KVM/QEMU", "libvirt", "virt-manager", "Bridge networking", "Shell Script"],
      color: "orange"
    }
  ];

  const education = [
    {
      degree: "Licence en Administration réseau et système et bases de données",
      school: "INSI (Institut National des Sciences de l'Informatique)",
      location: "Antananarivo, Madagascar",
      period: "2023 - En cours (L2)",
      description: "Formation spécialisée en administration réseau, sécurité système et gestion de bases de données",
      achievements: [
        "Projets pratiques en configuration réseau",
        "Maîtrise des systèmes Linux (Debian, Kali, Parrot OS)",
        "Formation aux outils de virtualisation",
        "Apprentissage des technologies de sécurisation"
      ],
      courses: [
        "Administration des réseaux informatiques",
        "Sécurité des systèmes d'information",
        "Virtualisation et cloud computing",
        "Administration des bases de données",
        "Systèmes d'exploitation Linux",
        "Protocoles et services réseau"
      ]
    }
  ];

  const skills_development = [
    {
      period: "2023 - Début",
      title: "Découverte des réseaux",
      description: "Premiers pas avec Cisco Packet Tracer",
      icon: "ri-router-line",
      color: "bg-blue-500"
    },
    {
      period: "2023-2024",
      title: "Maîtrise de Linux",
      description: "Administration serveur et sécurité",
      icon: "ri-terminal-line",
      color: "bg-green-500"
    },
    {
      period: "2024",
      title: "Virtualisation",
      description: "KVM, Docker et conteneurisation",
      icon: "ri-cloud-line",
      color: "bg-purple-500"
    },
    {
      period: "2024 - Présent",
      title: "DevOps et automatisation",
      description: "CI/CD, scripts et orchestration",
      icon: "ri-git-branch-line",
      color: "bg-orange-500"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      yellow: "bg-yellow-500",
      blue: "bg-blue-500",
      green: "bg-green-500",
      purple: "bg-purple-500",
      orange: "bg-orange-500"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Student%20academic%20journey%20with%20CTF%20cybersecurity%20competition%20trophy%20and%20IT%20learning%20environment%2C%20achievement%20and%20progression%20in%20network%20administration%20with%20computers%20and%20technical%20challenges&width=1920&height=800&seq=experience-ctf-hero&orientation=landscape')`
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Mon Parcours</h1>
          <p className="text-xl text-gray-200">
            Une progression constante avec des succès en cybersécurité
          </p>
        </div>
      </section>

      {/* CTF Achievement Highlight */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-orange-500">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-20 h-20 flex items-center justify-center bg-yellow-500 rounded-full mr-4">
                    <i className="ri-trophy-line text-4xl text-white"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800">1ère Place CTF INSI</h2>
                    <p className="text-lg text-gray-600">Champion Capture The Flag 2024</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Victoire lors de la compétition de cybersécurité organisée par l'INSI. Cette réussite 
                  témoigne de mes compétences en analyse de vulnérabilités, exploitation de failles de 
                  sécurité, et résolution de challenges techniques complexes.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                    Web Security
                  </span>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    System Exploitation
                  </span>
                  <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                    Cryptography
                  </span>
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                    Forensics
                  </span>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <img
                  src="https://readdy.ai/api/search-image?query=Cybersecurity%20CTF%20competition%20victory%20celebration%20with%20trophy%20and%20certificates%2C%20technical%20achievement%20in%20information%20security%2C%20student%20success%20in%20capture%20the%20flag%20challenge%20with%20networking%20and%20computer%20security%20elements&width=400&height=300&seq=ctf-victory&orientation=landscape"
                  alt="CTF Victory"
                  className="w-full max-w-md mx-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formation académique */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
            Formation Académique
          </h2>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{edu.degree}</h3>
                    <h4 className="text-lg font-semibold text-blue-600 mb-1">{edu.school}</h4>
                    <p className="text-gray-600 flex items-center">
                      <i className="ri-map-pin-line w-4 h-4 flex items-center justify-center mr-1"></i>
                      {edu.location}
                    </p>
                  </div>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">
                    {edu.period}
                  </span>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{edu.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-3">Réalisations académiques :</h5>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-gray-600">
                          <i className="ri-star-line text-blue-500 mr-2 mt-1 w-4 h-4 flex items-center justify-center"></i>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-3">Matières principales :</h5>
                    <ul className="space-y-2">
                      {edu.courses.map((course, courseIndex) => (
                        <li key={courseIndex} className="flex items-start text-gray-600">
                          <i className="ri-book-line text-green-500 mr-2 mt-1 w-4 h-4 flex items-center justify-center"></i>
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projets académiques */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
            Projets Académiques et Personnels
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

            {academicProjects.map((project, index) => (
              <div key={index} className="relative mb-12 ml-20">
                {/* Timeline dot */}
                <div className={`absolute -left-14 top-6 w-4 h-4 rounded-full ${getColorClasses(project.color)}`}></div>

                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-1">{project.title}</h3>
                      <h4 className="text-lg font-semibold text-blue-600 mb-1">{project.organization}</h4>
                      <p className="text-gray-600 flex items-center">
                        <i className="ri-map-pin-line w-4 h-4 flex items-center justify-center mr-1"></i>
                        {project.location}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {project.period}
                      </span>
                      <p className="text-sm text-gray-500 mt-1">{project.type}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-800 mb-3">Réalisations clés :</h5>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-gray-600">
                          <i className="ri-arrow-right-line text-blue-500 mr-2 mt-1 w-4 h-4 flex items-center justify-center"></i>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-3">Technologies utilisées :</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Évolution des compétences */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
            Évolution des Compétences
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills_development.map((skill, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 flex items-center justify-center ${skill.color} rounded-full mx-auto mb-4`}>
                  <i className={`${skill.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{skill.period}</h3>
                <h4 className="font-medium text-gray-700 mb-2">{skill.title}</h4>
                <p className="text-gray-600 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectifs futurs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Objectifs Futurs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mb-4">
                <i className="ri-graduation-cap-line text-xl text-blue-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Court terme (2024-2025)</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <i className="ri-arrow-right-s-line text-blue-500 mr-1 mt-0.5"></i>
                  Finaliser ma Licence 2 avec mention
                </li>
                <li className="flex items-start">
                  <i className="ri-arrow-right-s-line text-blue-500 mr-1 mt-0.5"></i>
                  Obtenir la certification Cisco CCNA
                </li>
                <li className="flex items-start">
                  <i className="ri-arrow-right-s-line text-blue-500 mr-1 mt-0.5"></i>
                  Approfondir les compétences DevOps
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg mb-4">
                <i className="ri-briefcase-line text-xl text-green-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Long terme (2025+)</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <i className="ri-arrow-right-s-line text-green-500 mr-1 mt-0.5"></i>
                  Obtenir un stage en entreprise
                </li>
                <li className="flex items-start">
                  <i className="ri-arrow-right-s-line text-green-500 mr-1 mt-0.5"></i>
                  Spécialisation en sécurité réseau
                </li>
                <li className="flex items-start">
                  <i className="ri-arrow-right-s-line text-green-500 mr-1 mt-0.5"></i>
                  Poursuivre en Master cybersécurité
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
