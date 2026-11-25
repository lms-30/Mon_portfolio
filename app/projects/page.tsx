
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'Tous les projets' },
    { id: 'security', name: 'Sécurité' },
    { id: 'network', name: 'Réseaux' },
    { id: 'virtualization', name: 'Virtualisation' },
    { id: 'database', name: 'Bases de données' },
    { id: 'devops', name: 'DevOps' }
  ];

  const projects = [
    {
      id: 1,
      title: "Stage DevSecOps chez RELIA Group",
      description: "Sécurisation des pipelines et déploiement de trois applications conteneurisées en production.",
      longDescription: "Intervention sur ESSAIE, MAGIA et MIAHY : intégration de contrôles de sécurité dans les pipelines GitLab CI, construction d'images Docker et déploiements blue-green automatisés sur VPS OVHcloud.",
      image: "https://readdy.ai/api/search-image?query=Zero%20Trust%20network%20architecture%20visualization%20with%20security%20layers%2C%20VPN%20tunnel%20connections%2C%20firewall%20configuration%20interface%2C%20network%20segmentation%20diagram%2C%20modern%20cybersecurity%20infrastructure%20with%20authentication%20servers%20and%20access%20control%20systems&width=600&height=400&seq=project-zerotrust-detail&orientation=landscape",
      category: ["security", "devops"],
      technologies: ["GitLab CI", "Docker", "Ansible", "Traefik", "Gitleaks", "Semgrep", "Trivy", "Cosign"],
      features: ["Tests et scans de sécurité", "DAST éphémère", "Déploiement blue-green", "HTTPS avec Let's Encrypt", "Rollback", "Runner GitLab auto-hébergé"],
      github: "https://github.com/lms-30",
      demo: "",
      year: "2026"
    },
    {
      id: 2,
      title: "Pipeline DevSecOps – App Reservation",
      description: "Pipeline Jenkins de plus de dix étapes, avec scans de sécurité, registre d'images et déploiement automatisé.",
      longDescription: "Construction multi-stage de l'application, contrôles automatisés avec Trivy, Gitleaks, SonarQube et OWASP Dependency-Check, publication dans Harbor, signature avec Cosign puis déploiement Ansible et smoke tests.",
      image: "https://readdy.ai/api/search-image?query=Secure%20database%20and%20web%20server%20configuration%20with%20MySQL%20PostgreSQL%20interfaces%2C%20Apache%20Nginx%20administration%20panels%2C%20Ubuntu%20server%20terminal%2C%20SSL%20certificates%20setup%2C%20database%20security%20configuration%20screens%20with%20professional%20server%20management%20environment&width=600&height=400&seq=project-database-detail&orientation=landscape",
      category: ["devops", "security"],
      technologies: ["Jenkins", "Docker", "Trivy", "Gitleaks", "SonarQube", "Harbor", "Cosign", "Ansible"],
      features: ["Pipeline de plus de dix étapes", "Build Docker multi-stage", "Scans de dépendances", "Images signées", "Déploiement automatisé", "Smoke tests"],
      github: "https://github.com/lms-30",
      demo: "",
      year: "2026"
    },
    {
      id: 3,
      title: "Application Java/PostgreSQL sur Kubernetes",
      description: "Pipeline Jenkins et déploiement Kubernetes avec analyse de code et supervision Prometheus/Grafana.",
      longDescription: "Projet académique de chaîne CI/CD pour une application Java avec PostgreSQL : Jenkins, SonarQube et Gitleaks pour les contrôles, Trivy et OWASP Dependency-Check pour les scans, registre Harbor, déploiement Kubernetes via Ansible et supervision Prometheus/Grafana.",
      image: "https://readdy.ai/api/search-image?query=GitLab%20CI%2FCD%20pipeline%20dashboard%20with%20automated%20testing%20stages%2C%20continuous%20integration%20workflow%20visualization%2C%20Docker%20containers%20deployment%2C%20DevOps%20automation%20tools%2C%20code%20quality%20metrics%20and%20deployment%20status%20with%20modern%20software%20development%20interface&width=600&height=400&seq=project-cicd-detail&orientation=landscape",
      category: ["devops", "database"],
      technologies: ["Jenkins", "Java", "PostgreSQL", "Kubernetes", "Harbor", "Ansible", "Prometheus", "Grafana"],
      features: ["Analyse SonarQube", "Détection de secrets", "Scans de dépendances", "Déploiement Kubernetes", "Monitoring", "Pipeline automatisé"],
      github: "https://github.com/lms-30",
      demo: "",
      year: "2026"
    },
    {
      id: 4,
      title: "Déploiement GitOps sur Kubernetes (K3s)",
      description: "Déploiement d'un site conteneurisé avec ArgoCD, Ingress NGINX et certificats TLS automatisés.",
      longDescription: "Site web conteneurisé publié sur Docker Hub et déployé sur K3s. ArgoCD synchronise l'état depuis GitHub et assure l'auto-réparation; Ingress NGINX expose quatre réplicas NGINX et cert-manager gère les certificats TLS.",
      image: "https://readdy.ai/api/search-image?query=KVM%20virtualization%20server%20management%20interface%20with%20virtual%20machines%20dashboard%2C%20network%20bridge%20configuration%2C%20VM%20resource%20allocation%2C%20hypervisor%20management%20console%20with%20multiple%20running%20virtual%20machines%20and%20network%20topology%20visualization&width=600&height=400&seq=project-kvm-detail&orientation=landscape",
      category: ["virtualization", "devops"],
      technologies: ["K3s", "Docker", "Docker Hub", "ArgoCD", "Ingress NGINX", "cert-manager"],
      features: ["Synchronisation GitOps", "Auto-réparation", "Quatre réplicas NGINX", "Ingress", "Certificats TLS", "Diagnostic réseau Linux"],
      github: "https://github.com/lms-30",
      demo: "",
      year: "2026"
    },
    {
      id: 5,
      title: "Centralisation des journaux et audit serveur",
      description: "Mise en place de Grafana Loki pour les logs et scan de vulnérabilités avec Nessus Essentials.",
      longDescription: "Travaux académiques de supervision et de sécurité : centralisation des journaux avec Grafana Loki et audit de serveurs Linux à l'aide de Nessus Essentials.",
      image: "https://readdy.ai/api/search-image?query=Docker%20microservices%20architecture%20with%20containerized%20applications%2C%20data%20visualization%20dashboard%2C%20CSV%20analysis%20tools%20interface%2C%20Docker%20Compose%20configuration%2C%20modern%20web%20dashboard%20with%20charts%20and%20graphs%20for%20data%20analytics&width=600&height=400&seq=project-docker-detail&orientation=landscape",
      category: ["security", "devops"],
      technologies: ["Grafana Loki", "Nessus Essentials", "Linux"],
      features: ["Centralisation des logs", "Analyse de vulnérabilités", "Audit serveur", "Supervision d'infrastructure"],
      github: "https://github.com/lms-30",
      demo: "",
      year: "2026"
    },
    {
      id: 6,
      title: "Architecture Zero Trust et services réseau",
      description: "Projets académiques autour de VPN inter-sites, FreeRADIUS, pare-feu et services Linux.",
      longDescription: "Réalisation de projets d'infrastructure comprenant une architecture Zero Trust avec OpenVPN, FreeRADIUS et segmentation pfSense, ainsi que des services de messagerie, Active Directory, détection CrowdSec et supervision réseau NtopNG.",
      image: "https://readdy.ai/api/search-image?query=Cisco%20Packet%20Tracer%20network%20simulation%20with%20routers%20switches%20configuration%2C%20VLAN%20setup%2C%20network%20topology%20diagram%2C%20routing%20protocols%20visualization%2C%20enterprise%20network%20infrastructure%20with%20professional%20network%20equipment%20layout&width=600&height=400&seq=project-cisco-detail&orientation=landscape",
      category: ["network", "security"],
      technologies: ["OpenVPN", "FreeRADIUS", "pfSense", "CrowdSec", "Postfix", "Dovecot", "Active Directory", "NtopNG"],
      features: ["VPN inter-sites", "Segmentation réseau", "Détection et bannissement", "Messagerie complète", "Gestion de domaine", "Supervision trafic"],
      github: "https://github.com/lms-30",
      demo: "",
      year: "2025-2026"
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(selectedCategory));

  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Network%20administration%20projects%20showcase%20with%20multiple%20server%20setups%2C%20virtualization%20environments%2C%20database%20configurations%2C%20security%20infrastructure%2C%20professional%20IT%20project%20portfolio%20with%20modern%20technology%20stack&width=1920&height=800&seq=projects-hero-admin&orientation=landscape')`
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Mes Projets</h1>
          <p className="text-xl text-gray-200">
            Découvrez mes réalisations en administration réseau et système
          </p>
        </div>
      </section>

      {/* Filtres de catégories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grille de projets */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                    <span className="text-sm text-gray-500 font-medium">{project.year}</span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 cursor-pointer text-sm whitespace-nowrap"
                    >
                      Détails
                    </button>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
                      title="Voir le profil GitHub"
                      aria-label="Voir le profil GitHub"
                    >
                      <i className="ri-github-line text-gray-600"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de détails */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover object-top rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all cursor-pointer"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedProject.title}</h2>
                  <p className="text-gray-600">Projet réalisé en {selectedProject.year}</p>
                </div>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-8">{selectedProject.longDescription}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Technologies utilisées</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-600 px-3 py-2 rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Fonctionnalités clés</h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <i className="ri-check-line text-green-500 mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 cursor-pointer whitespace-nowrap flex items-center"
                >
                  <i className="ri-github-line mr-2"></i>
                  Profil GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
