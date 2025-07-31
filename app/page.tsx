
'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.7)), url('https://readdy.ai/api/search-image?query=Modern%20cybersecurity%20command%20center%20with%20multiple%20monitors%20displaying%20network%20topology%2C%20server%20monitoring%20dashboards%2C%20and%20security%20analytics%2C%20dark%20futuristic%20tech%20environment%20with%20blue%20and%20cyan%20glowing%20elements%2C%20professional%20SOC%20operations%20center%20with%20network%20infrastructure%20visualization%20and%20data%20streams&width=1920&height=1080&seq=hero-cyber-modern&orientation=landscape')`
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Salut, je suis <span className="text-cyan-400">Lahiniriko Mara Sylvain</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Étudiant en Administration réseau et système et base de données passionné par la cybersécurité et la virtualisation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              Voir mes projets
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </section>

      {/* À propos rapide */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                À propos de moi
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Étudiant en Licence 2 à l'INSI, je suis passionné par les réseaux, la cybersécurité et la virtualisation. 
                Curieux et autonome, je travaille sur des projets pratiques comme la simulation de réseaux et la configuration de serveurs Linux.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                J'ai des compétences en sécurisation (IDS/IPS) et j'utilise des outils comme Docker, KVM, Packet Tracer. 
                Je me spécialise dans les services DNS, DHCP, VPN et l'infrastructure Zero Trust.
              </p>
              <Link
                href="/about"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 cursor-pointer whitespace-nowrap inline-block"
              >
                En savoir plus
              </Link>
            </div>
            <div className="relative">
              <img
                src="/images/profile.jpg"
                alt="Portrait étudiant IT"
                className="rounded-2xl shadow-2xl object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Compétences highlights */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Mes domaines d'expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-6">
                <i className="ri-router-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Réseaux</h3>
              <p className="text-gray-600">VLAN, ACL, NAT, DHCP, DNS, Routage OSPF/EIGRP</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-6">
                <i className="ri-shield-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Sécurité</h3>
              <p className="text-gray-600">IDS/IPS Snort, pare-feux, Zero Trust, VPN</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-6">
                <i className="ri-server-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Virtualisation</h3>
              <p className="text-gray-600">KVM/QEMU, Docker, VirtualBox, Linux</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/skills"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 cursor-pointer whitespace-nowrap inline-block"
            >
              Voir toutes mes compétences
            </Link>
          </div>
        </div>
      </section>

      {/* Projets récents */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Projets récents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              {
                title: "Infrastructure Zero Trust",
                description: "Déploiement d'une infrastructure réseau Zero Trust avec VPN sécurisé",
                image: "https://readdy.ai/api/search-image?query=Zero%20Trust%20network%20architecture%20diagram%20with%20security%20layers%2C%20VPN%20connections%2C%20network%20security%20infrastructure%2C%20pfSense%20firewall%20configuration%2C%20modern%20cybersecurity%20visualization%20with%20interconnected%20security%20elements%20and%20protected%20network%20zones&width=400&height=300&seq=project-zerotrust&orientation=landscape",
                tech: ["OpenVPN", "FreeRADIUS", "Squid Proxy", "pfSense"]
              },
              {
                title: "Serveurs BDD et Web sécurisés",
                description: "Installation et configuration de serveurs MySQL, PostgreSQL et Apache/Nginx",
                image: "https://readdy.ai/api/search-image?query=Database%20server%20configuration%20with%20MySQL%20and%20PostgreSQL%20interfaces%2C%20web%20server%20setup%20with%20Apache%20and%20Nginx%2C%20Ubuntu%20server%20administration%20dashboard%2C%20secure%20database%20management%20environment%20with%20professional%20server%20monitoring%20tools&width=400&height=300&seq=project-database&orientation=landscape",
                tech: ["MySQL", "PostgreSQL", "Apache/Nginx", "Ubuntu Server"]
              },
              {
                title: "CI/CD avec GitLab",
                description: "Pipeline CI/CD complet pour automatiser les tests, build et déploiement",
                image: "https://readdy.ai/api/search-image?query=GitLab%20CI%2FCD%20pipeline%20visualization%20with%20automated%20testing%20and%20deployment%20stages%2C%20DevOps%20workflow%20diagram%2C%20continuous%20integration%20dashboard%2C%20modern%20software%20development%20automation%20tools%20with%20code%20deployment%20process%20visualization&width=400&height=300&seq=project-cicd&orientation=landscape",
                tech: ["GitLab", "Docker", "Automation", "Testing"]
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
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
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 cursor-pointer whitespace-nowrap inline-block"
            >
              Voir tous mes projets
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
