
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Student%20studying%20computer%20networks%20and%20system%20administration%2C%20educational%20technology%20environment%20with%20networking%20equipment%2C%20modern%20IT%20learning%20space%20with%20servers%20and%20network%20infrastructure%2C%20inspiring%20educational%20atmosphere&width=1920&height=800&seq=about-hero-student&orientation=landscape')`
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">À propos de moi</h1>
          <p className="text-xl text-gray-200">
            Licence 3 informatique, administration systèmes, réseaux et DevSecOps
          </p>
        </div>
      </section>

      {/* Histoire personnelle */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Mon parcours
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Étudiant en Licence 3 à l'Institut National Supérieur de l'Informatique (INSI),
                je me spécialise en administration systèmes et réseaux, cybersécurité et DevSecOps.
                Je poursuis ma formation à Antananarivo, Madagascar.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Mon parcours associe projets académiques et expérience en entreprise. En stage chez RELIA Group,
                je travaille sur la sécurisation de pipelines CI/CD et le déploiement d'applications conteneurisées.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                J'utilise notamment Docker, Kubernetes, Ansible et des outils d'analyse de sécurité comme Trivy,
                Gitleaks et Semgrep, ainsi que des outils de supervision comme Prometheus, Grafana et Loki.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Young%20IT%20student%20working%20with%20network%20configuration%2C%20studying%20at%20computer%20with%20multiple%20monitors%2C%20network%20diagrams%20and%20server%20equipment%2C%20modern%20educational%20technology%20environment%20with%20learning%20materials%20and%20technical%20documentation&width=600&height=500&seq=about-studying&orientation=landscape"
                alt="Étudiant travaillant sur des configurations réseau"
                className="rounded-2xl shadow-2xl object-cover object-top w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Domaines d'expertise */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Mes domaines d'expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-6">
                <i className="ri-router-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Réseaux</h3>
              <p className="text-gray-600">
                Cisco, VLAN, OSPF, RIP, EIGRP, pfSense et OPNsense
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-red-100 rounded-full mx-auto mb-6">
                <i className="ri-shield-line text-2xl text-red-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Sécurité</h3>
              <p className="text-gray-600">
                Snort, CrowdSec, Nessus Essentials, Gitleaks, Trivy et sécurité des pipelines
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-6">
                <i className="ri-server-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Virtualisation</h3>
              <p className="text-gray-600">
                Docker, Kubernetes K3s, Proxmox, VMware, KVM et Docker Compose
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-6">
                <i className="ri-database-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Bases de données</h3>
              <p className="text-gray-600">
                Active Directory, Postfix, Dovecot, Roundcube, Nextcloud, Asterisk et FreeRADIUS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Environnements de travail */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Environnements et outils
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-orange-100 rounded-full mx-auto mb-4">
                <i className="ri-ubuntu-line text-3xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Linux</h3>
              <p className="text-gray-600 text-sm">Linux, Windows Server, scripting Shell</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                <i className="ri-cloud-line text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Virtualisation</h3>
              <p className="text-gray-600 text-sm">KVM, VMware, VirtualBox, Proxmox, Docker</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4">
                <i className="ri-links-line text-3xl text-green-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Réseau</h3>
              <p className="text-gray-600 text-sm">Cisco, pfSense, OPNsense, OpenVPN</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-4">
                <i className="ri-shield-check-line text-3xl text-purple-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sécurité</h3>
              <p className="text-gray-600 text-sm">Snort, CrowdSec, Nessus Essentials, FreeRADIUS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectifs et motivations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Mes objectifs
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Je souhaite continuer à concevoir, automatiser et sécuriser des infrastructures et des déploiements
            applicatifs, en approfondissant les pratiques DevSecOps et l'orchestration Kubernetes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                <i className="ri-graduation-cap-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Licence en informatique</h3>
              <p className="text-gray-600 text-sm">Formation en cours à l'INSI</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4">
                <i className="ri-certificate-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">DevSecOps</h3>
              <p className="text-gray-600 text-sm">Renforcer la sécurité tout au long du cycle CI/CD</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-4">
                <i className="ri-briefcase-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Infrastructure</h3>
              <p className="text-gray-600 text-sm">Automatisation, Kubernetes et observabilité</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Collaborons ensemble
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Vous avez un projet réseau ou besoin d'aide en administration système ? Contactez-moi !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              Me contacter
            </Link>
            <Link
              href="/cv"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              Voir mon CV
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
