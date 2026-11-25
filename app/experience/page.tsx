
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Experience() {
  const academicProjects = [
    {
      title: "Stage DevSecOps",
      organization: "RELIA Group",
      location: "Antananarivo, Madagascar",
      period: "15 sept. – 14 déc. 2026",
      type: "Stage en cours",
      description: "Mise en place de chaînes DevSecOps et déploiement d'applications conteneurisées sur VPS OVHcloud.",
      achievements: [
        "Pipelines GitLab CI avec tests, Gitleaks, Semgrep, Trivy et DAST éphémère",
        "Déploiements blue-green automatisés avec Ansible et Traefik",
        "Signature d'images avec Cosign et sécurisation des conteneurs",
        "Travail sur les projets ESSAIE, MAGIA et MIAHY"
      ],
      technologies: ["GitLab CI", "Docker", "Ansible", "Traefik", "Gitleaks", "Semgrep", "Trivy", "Cosign"],
      color: "blue"
    },
    {
      title: "Infrastructure Zero Trust",
      organization: "Projet Académique - INSI",
      location: "Antananarivo, Madagascar",
      period: "2025",
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
      title: "Pipeline CI/CD DevSecOps – App Reservation",
      organization: "Projet Académique - INSI",
      location: "Antananarivo, Madagascar",
      period: "2026",
      type: "Projet Pratique",
      description: "Pipeline Jenkins de plus de dix étapes, de la construction de l'application à son déploiement sécurisé.",
      achievements: [
        "Build Docker multi-stage et contrôles automatisés",
        "Scans Trivy, Gitleaks, SonarQube et OWASP Dependency-Check",
        "Publication dans Harbor et signature avec Cosign",
        "Déploiement Ansible suivi de smoke tests"
      ],
      technologies: ["Jenkins", "Docker", "Trivy", "SonarQube", "Harbor", "Cosign", "Ansible"],
      color: "green"
    },
    {
      title: "Déploiement GitOps sur Kubernetes (K3s)",
      organization: "Projet Académique - INSI",
      location: "Antananarivo, Madagascar",
      period: "2026",
      type: "Projet Pratique",
      description: "Déploiement d'un site web conteneurisé avec synchronisation GitOps et exposition HTTPS.",
      achievements: [
        "Synchronisation GitHub avec ArgoCD et auto-réparation",
        "Ingress NGINX et certificats TLS avec cert-manager",
        "Déploiement de quatre réplicas NGINX",
        "Diagnostic des problèmes réseau et de ressources sous Linux"
      ],
      technologies: ["K3s", "ArgoCD", "Ingress NGINX", "cert-manager", "Docker Hub"],
      color: "orange"
    },
    {
      title: "1ère place au CTF Data Day",
      organization: "CTF Data Day",
      location: "",
      period: "1ère place",
      type: "Distinction",
      description: "Première place collective au CTF Data Day. Participation également au CTF CIRT/MNDPT et à la première édition de la CyberCup Indian Ocean.",
      achievements: [
        "Classement final : 1ère place",
        "Participation au CTF CIRT/MNDPT et à la CyberCup Indian Ocean"
      ],
      technologies: ["CTF", "Cybersécurité", "Analyse de vulnérabilités"],
      color: "yellow"
    }
  ];

  const education = [
    {
      degree: "Licence en informatique (en cours)",
      school: "Institut National Supérieur de l'Informatique (INSI)",
      location: "Antananarivo, Madagascar",
      period: "2023 – aujourd'hui (L3)",
      description: "Formation orientée administration systèmes et réseaux, bases de données, cybersécurité et DevSecOps.",
      achievements: [
        "Projets d'automatisation et de sécurisation de pipelines CI/CD",
        "Déploiements conteneurisés sur Kubernetes et Linux",
        "Supervision et audit de sécurité d'infrastructures"
      ],
      courses: [
        "Administration systèmes Linux et Windows Server",
        "Réseaux et sécurité des infrastructures",
        "Conteneurs et orchestration Kubernetes",
        "Automatisation avec Ansible et scripting Shell",
        "Intégration continue et DevSecOps",
        "Supervision et centralisation des journaux"
      ]
    }
  ];

  const skills_development = [
    {
      period: "2023",
      title: "Réseaux et systèmes",
      description: "Bases de l'administration réseau et de Linux",
      icon: "ri-router-line",
      color: "bg-blue-500"
    },
    {
      period: "2024-2025",
      title: "Infrastructure et sécurité",
      description: "Virtualisation, services réseau et sécurisation",
      icon: "ri-terminal-line",
      color: "bg-green-500"
    },
    {
      period: "2025-2026",
      title: "Conteneurs et Kubernetes",
      description: "Docker, K3s et déploiement GitOps",
      icon: "ri-cloud-line",
      color: "bg-purple-500"
    },
    {
      period: "2026 – aujourd'hui",
      title: "DevSecOps en entreprise",
      description: "Pipelines sécurisés et déploiements automatisés en stage",
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
            Formation, projets d'infrastructure et expérience DevSecOps
          </p>
        </div>
      </section>

      {/* Expériences CTF */}
      <section className="py-16 bg-gradient-to-r from-cyan-700 to-blue-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-20 h-20 flex items-center justify-center bg-cyan-800 rounded-full mr-4">
                    <i className="ri-flag-line text-4xl text-white"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800">1ère place au CTF Data Day</h2>
                    <p className="text-lg text-gray-600">Distinction en cybersécurité</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nous avons terminé premiers au CTF Data Day. J'ai également participé au CTF CIRT/MNDPT à
                  Antananarivo et à la première édition de la CyberCup Indian Ocean.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                    1ère place
                  </span>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    Cybersécurité
                  </span>
                  <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                    Data Day
                  </span>
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                    CyberCup
                  </span>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <img
                  src="https://readdy.ai/api/search-image?query=students%20participating%20in%20a%20cybersecurity%20capture%20the%20flag%20competition%20working%20at%20computers%20in%20Antananarivo%20Madagascar&width=400&height=300&seq=ctf-participation&orientation=landscape"
                  alt="Participation à des compétitions de cybersécurité"
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
            Expériences et projets
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
                      {project.location && (
                        <p className="text-gray-600 flex items-center">
                          <i className="ri-map-pin-line w-4 h-4 flex items-center justify-center mr-1"></i>
                          {project.location}
                        </p>
                      )}
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
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Axes actuels</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <i className="ri-arrow-right-s-line text-blue-500 mr-1 mt-0.5"></i>
                  Approfondir le DevSecOps et la sécurité des pipelines
                </li>
                <li className="flex items-start">
                  <i className="ri-arrow-right-s-line text-blue-500 mr-1 mt-0.5"></i>
                  Automatiser les déploiements d'infrastructure
                </li>
                <li className="flex items-start">
                  <i className="ri-arrow-right-s-line text-blue-500 mr-1 mt-0.5"></i>
                  Renforcer la supervision et la sécurité Kubernetes
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg mb-4">
                <i className="ri-briefcase-line text-xl text-green-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Prochaines étapes</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <i className="ri-arrow-right-s-line text-green-500 mr-1 mt-0.5"></i>
                  Terminer ma Licence en informatique
                </li>
                <li className="flex items-start">
                  <i className="ri-arrow-right-s-line text-green-500 mr-1 mt-0.5"></i>
                  Continuer à développer des infrastructures fiables et sécurisées
                </li>
                <li className="flex items-start">
                  <i className="ri-arrow-right-s-line text-green-500 mr-1 mt-0.5"></i>
                  Approfondir l'automatisation et l'orchestration
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
