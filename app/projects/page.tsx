
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
      title: "Infrastructure Zero Trust",
      description: "Déploiement d'une infrastructure réseau Zero Trust avec VPN sécurisé utilisant OpenVPN, FreeRADIUS, Squid Proxy et pfSense.",
      longDescription: "Mise en place d'une architecture réseau Zero Trust complète avec authentification multi-facteurs, segmentation réseau, contrôle d'accès granulaire et surveillance continue. Le projet inclut la configuration d'un serveur OpenVPN pour l'accès distant sécurisé, l'intégration de FreeRADIUS pour l'authentification centralisée, le déploiement de Squid Proxy pour le filtrage web et la configuration de pfSense comme pare-feu principal.",
      image: "https://readdy.ai/api/search-image?query=Zero%20Trust%20network%20architecture%20visualization%20with%20security%20layers%2C%20VPN%20tunnel%20connections%2C%20firewall%20configuration%20interface%2C%20network%20segmentation%20diagram%2C%20modern%20cybersecurity%20infrastructure%20with%20authentication%20servers%20and%20access%20control%20systems&width=600&height=400&seq=project-zerotrust-detail&orientation=landscape",
      category: ["security", "network"],
      technologies: ["OpenVPN", "FreeRADIUS", "Squid Proxy", "pfSense", "Linux", "SSL/TLS"],
      features: ["Authentification multi-facteurs", "Segmentation réseau", "VPN site-to-site", "Filtrage web avancé", "Surveillance continue", "Contrôle d'accès granulaire"],
      github: "https://github.com/lms-30",
      demo: "https://demo.com",
      year: "2024"
    },
    {
      id: 2,
      title: "Serveurs BDD et Web sécurisés",
      description: "Installation et configuration de serveurs MySQL, PostgreSQL et Apache/Nginx sous Ubuntu Server 22.04.5 LTS.",
      longDescription: "Déploiement et sécurisation d'une infrastructure complète de serveurs de bases de données et web. Configuration de MySQL et PostgreSQL avec chiffrement, sauvegarde automatisée et réplication. Installation d'Apache et Nginx avec SSL/TLS, virtualisation des hôtes et optimisation des performances. Mise en place de monitoring et de systèmes d'alertes.",
      image: "https://readdy.ai/api/search-image?query=Secure%20database%20and%20web%20server%20configuration%20with%20MySQL%20PostgreSQL%20interfaces%2C%20Apache%20Nginx%20administration%20panels%2C%20Ubuntu%20server%20terminal%2C%20SSL%20certificates%20setup%2C%20database%20security%20configuration%20screens%20with%20professional%20server%20management%20environment&width=600&height=400&seq=project-database-detail&orientation=landscape",
      category: ["database", "security"],
      technologies: ["MySQL", "PostgreSQL", "Apache", "Nginx", "Ubuntu Server 22.04.5", "SSL/TLS"],
      features: ["Bases de données sécurisées", "Chiffrement des données", "Sauvegarde automatisée", "Load balancing", "SSL/TLS", "Monitoring avancé"],
      github: "https://github.com/lms-30",
      demo: "https://demo.com",
      year: "2024"
    },
    {
      id: 3,
      title: "CI/CD avec GitLab",
      description: "Mise en place d'un pipeline CI/CD complet avec GitLab pour automatiser les tests, le build et le déploiement d'applications.",
      longDescription: "Développement d'une chaîne d'intégration et de déploiement continus avec GitLab CI/CD. Configuration de runners, création de pipelines multi-étapes avec tests automatisés, build des applications, et déploiement automatique. Intégration de Docker pour la conteneurisation et de Kubernetes pour l'orchestration.",
      image: "https://readdy.ai/api/search-image?query=GitLab%20CI%2FCD%20pipeline%20dashboard%20with%20automated%20testing%20stages%2C%20continuous%20integration%20workflow%20visualization%2C%20Docker%20containers%20deployment%2C%20DevOps%20automation%20tools%2C%20code%20quality%20metrics%20and%20deployment%20status%20with%20modern%20software%20development%20interface&width=600&height=400&seq=project-cicd-detail&orientation=landscape",
      category: ["devops"],
      technologies: ["GitLab CI/CD", "Docker", "Kubernetes", "Shell Script", "YAML", "Git"],
      features: ["Pipeline automatisé", "Tests unitaires", "Déploiement continu", "Conteneurisation", "Monitoring pipeline", "Rollback automatique"],
      github: "https://github.com/lms-30",
      demo: "https://demo.com",
      year: "2024"
    },
    {
      id: 4,
      title: "Serveur de virtualisation avec KVM",
      description: "Configuration d'un serveur de virtualisation avec KVM, déploiement d'une infrastructure interne simulée avec plusieurs VMs.",
      longDescription: "Mise en place d'une infrastructure de virtualisation complète utilisant KVM/QEMU. Configuration de ponts réseau (bridge), NAT et host-only pour différents scénarios de connectivité. Développement de scripts d'automatisation pour la création et le paramétrage réseau des machines virtuelles. Gestion centralisée des ressources et monitoring des performances.",
      image: "https://readdy.ai/api/search-image?query=KVM%20virtualization%20server%20management%20interface%20with%20virtual%20machines%20dashboard%2C%20network%20bridge%20configuration%2C%20VM%20resource%20allocation%2C%20hypervisor%20management%20console%20with%20multiple%20running%20virtual%20machines%20and%20network%20topology%20visualization&width=600&height=400&seq=project-kvm-detail&orientation=landscape",
      category: ["virtualization", "network"],
      technologies: ["KVM/QEMU", "libvirt", "virt-manager", "Bridge networking", "Shell Script", "Linux"],
      features: ["Multi-VM deployment", "Network bridges", "Resource management", "Script automation", "Performance monitoring", "Snapshot management"],
      github: "https://github.com/lms-30",
      demo: "https://demo.com",
      year: "2024"
    },
    {
      id: 5,
      title: "Micro-services avec Docker",
      description: "Déploiement de micro-services avec Docker, conteneurisation d'outils d'analyse et interface web pour la visualisation de données.",
      longDescription: "Développement d'une architecture micro-services conteneurisée pour le traitement et l'analyse de données CSV. Création d'un dashboard web pour la visualisation des données avec des graphiques interactifs. Utilisation de Docker Compose pour coordonner plusieurs services et gestion des volumes persistants pour le stockage des données.",
      image: "https://readdy.ai/api/search-image?query=Docker%20microservices%20architecture%20with%20containerized%20applications%2C%20data%20visualization%20dashboard%2C%20CSV%20analysis%20tools%20interface%2C%20Docker%20Compose%20configuration%2C%20modern%20web%20dashboard%20with%20charts%20and%20graphs%20for%20data%20analytics&width=600&height=400&seq=project-docker-detail&orientation=landscape",
      category: ["virtualization", "devops"],
      technologies: ["Docker", "Docker Compose", "Python", "Flask", "JavaScript", "Chart.js"],
      features: ["Architecture microservices", "Analyse de données CSV", "Dashboard interactif", "Conteneurisation", "API REST", "Visualisation graphique"],
      github: "https://github.com/lms-30",
      demo: "https://demo.com",
      year: "2024"
    },
    {
      id: 6,
      title: "Configuration réseau Cisco",
      description: "Simulation et configuration d'infrastructures réseau complexes avec Cisco Packet Tracer incluant VLAN, routage et sécurité.",
      longDescription: "Conception et implémentation d'infrastructures réseau entreprise avec Cisco Packet Tracer. Configuration de VLAN pour la segmentation réseau, mise en place de protocoles de routage OSPF et EIGRP, configuration d'ACL pour la sécurité, et déploiement de services DHCP et DNS. Tests de connectivité et optimisation des performances réseau.",
      image: "https://readdy.ai/api/search-image?query=Cisco%20Packet%20Tracer%20network%20simulation%20with%20routers%20switches%20configuration%2C%20VLAN%20setup%2C%20network%20topology%20diagram%2C%20routing%20protocols%20visualization%2C%20enterprise%20network%20infrastructure%20with%20professional%20network%20equipment%20layout&width=600&height=400&seq=project-cisco-detail&orientation=landscape",
      category: ["network"],
      technologies: ["Cisco Packet Tracer", "OSPF", "EIGRP", "VLAN", "ACL", "DHCP"],
      features: ["Topologie complexe", "VLAN segmentation", "Routage dynamique", "Sécurité ACL", "Services réseau", "Tests de performance"],
      github: "https://github.com/lms-30",
      demo: "https://demo.com",
      year: "2023"
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
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
                    >
                      <i className="ri-external-link-line text-gray-600"></i>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
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
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 cursor-pointer whitespace-nowrap flex items-center"
                >
                  <i className="ri-external-link-line mr-2"></i>
                  Voir la documentation
                </a>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 cursor-pointer whitespace-nowrap flex items-center"
                >
                  <i className="ri-github-line mr-2"></i>
                  Configuration
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
