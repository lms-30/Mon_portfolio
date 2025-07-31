
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';

export default function CV() {
  const [downloadStarted, setDownloadStarted] = useState(false);

 const handleDownload = (format: string) => {
  setDownloadStarted(true);

  const filePath = format === 'pdf'
    ? '/images/CV_LAHINIRIKO_Mara_Sylvain.pdf'
    : '/images/CV_LAHINIRIKO_Mara_Sylvain.docx';

  const link = document.createElement('a');
  link.href = filePath;
  link.download = filePath.split('/').pop() || 'CV_LAHINIRIKO';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Remet à false après un court délai (simuler la fin du téléchargement)
  setTimeout(() => setDownloadStarted(false), 2000);
};

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Mon CV</h1>
          <p className="text-xl text-blue-100 mb-8">
            Téléchargez mon curriculum vitae pour découvrir mon parcours en détail
          </p>
          <button
            onClick={() => handleDownload('pdf')}
            disabled={downloadStarted}
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer whitespace-nowrap flex items-center mx-auto"
          >
            {downloadStarted ? (
              <>
                <i className="ri-loader-4-line animate-spin mr-3 text-xl"></i>
                Téléchargement en cours...
              </>
            ) : (
              <>
                <i className="ri-download-line mr-3 text-xl"></i>
                Télécharger le CV (PDF)
              </>
            )}
          </button>
        </div>
      </section>

      {/* Aperçu du CV */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Aperçu de mon CV
          </h2>

          <div className="bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-200">
            {/* En-tête du CV */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <img
                  src="/images/profile_cv.jpg"
                  alt="Photo professionnelle"
                  className="w-32 h-32 rounded-full object-cover border-4 border-white"
                />
                <div className="text-center md:text-left">
                  <h1 className="text-3xl font-bold mb-2">LAHINIRIKO Mara Sylvain</h1>
                  <h2 className="text-xl text-blue-100 mb-4">Étudiant en Administration réseau et système</h2>
                  <div className="space-y-2 text-blue-100">
                    <p className="flex items-center justify-center md:justify-start">
                      <i className="ri-mail-line w-5 h-5 flex items-center justify-center mr-2"></i>
                      lahinirikomarasylvain30@gmail.com
                    </p>
                    <p className="flex items-center justify-center md:justify-start">
                      <i className="ri-phone-line w-5 h-5 flex items-center justify-center mr-2"></i>
                      +261 34 62 381 12
                    </p>
                    <p className="flex items-center justify-center md:justify-start">
                      <i className="ri-map-pin-line w-5 h-5 flex items-center justify-center mr-2"></i>
                      Lot VVV 45 ter D, Amparihy, 101 Antananarivo
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Profil professionnel */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
                  PROFIL
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Étudiant en Licence 2 à l'INSI, je suis passionné par les réseaux, la cybersécurité et la virtualisation. 
                  Curieux et autonome, je travaille sur des projets pratiques comme la simulation de réseaux, la 
                  configuration de serveurs Linux et la mise en place de services tels que DNS, DHCP, VPN. J'ai aussi 
                  des notions en sécurisation (IDS/IPS) et j'utilise des outils comme Docker, KVM ou Packet Tracer.
                </p>
              </section>

              {/* Expérience technique */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
                  EXPÉRIENCE TECHNIQUE
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Réseaux</h4>
                    <p className="text-gray-700 text-sm mb-3">VLAN, ACL, NAT, DHCP, DNS, Routage (OSPF, EIGRP, RIP), Cisco Packet Tracer</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Sécurité</h4>
                    <p className="text-gray-700 text-sm mb-3">IDS/IPS avec Snort, pare-feux, journalisation, règles</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Virtualisation</h4>
                    <p className="text-gray-700 text-sm mb-3">KVM/QEMU, VirtualBox, Docker, Docker Compose</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Systèmes</h4>
                    <p className="text-gray-700 text-sm mb-3">Linux (Debian, Kali, Parrot OS), administration serveur</p>
                  </div>
                </div>
              </section>

              {/* Projets récents */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
                  PROJETS RÉCENTS
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold text-gray-800">Infrastructure Zero Trust</h4>
                        <p className="text-blue-600 font-semibold">Projet Académique</p>
                      </div>
                      <span className="text-gray-600 text-sm">2024</span>
                    </div>
                    <ul className="text-gray-700 text-sm space-y-1 ml-4">
                      <li>• Déploiement d'une infrastructure réseau Zero Trust</li>
                      <li>• Configuration OpenVPN, FreeRADIUS, Squid Proxy</li>
                      <li>• Sécurisation avec pfSense</li>
                      <li>• Authentification centralisée et contrôle d'accès</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold text-gray-800">Serveurs BDD et Web sécurisés</h4>
                        <p className="text-blue-600 font-semibold">Projet Académique</p>
                      </div>
                      <span className="text-gray-600 text-sm">2024</span>
                    </div>
                    <ul className="text-gray-700 text-sm space-y-1 ml-4">
                      <li>• Installation MySQL, PostgreSQL sous Ubuntu Server</li>
                      <li>• Configuration Apache et Nginx</li>
                      <li>• Sécurisation SSL/TLS</li>
                      <li>• Monitoring et sauvegarde automatisée</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold text-gray-800">CI/CD avec GitLab</h4>
                        <p className="text-blue-600 font-semibold">Projet Personnel</p>
                      </div>
                      <span className="text-gray-600 text-sm">2024</span>
                    </div>
                    <ul className="text-gray-700 text-sm space-y-1 ml-4">
                      <li>• Pipeline CI/CD automatisé</li>
                      <li>• Tests, build et déploiement automatique</li>
                      <li>• Intégration Docker et conteneurisation</li>
                      <li>• Scripts d'automatisation</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Projets académiques */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
                  AUTRES RÉALISATIONS ACADÉMIQUES
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-800">Configuration d'un serveur de virtualisation avec KVM</h4>
                    <ul className="text-gray-700 text-sm space-y-1 ml-4 mt-2">
                      <li>• Déploiement d'une infrastructure interne simulée avec plusieurs VMs</li>
                      <li>• Utilisation de ponts réseau (bridge), NAT et host-only</li>
                      <li>• Scripts d'automatisation pour la création et le paramétrage réseau des VMs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Déploiement de micro-services avec Docker</h4>
                    <ul className="text-gray-700 text-sm space-y-1 ml-4 mt-2">
                      <li>• Conteneurisation d'outils d'analyse et de traitement de données CSV</li>
                      <li>• Interface web (dashboard) pour la visualisation de données</li>
                      <li>• Utilisation de Docker Compose pour coordonner plusieurs services</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Formation */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
                  FORMATION
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-800">Licence en Administration réseau et système et bases de données</h4>
                      <p className="text-blue-600">INSI (Institut National des Sciences de l'Informatique)</p>
                    </div>
                    <span className="text-gray-600 text-sm">2023 - En cours</span>
                  </div>
                </div>
              </section>

              {/* Langues */}
              <section>
                <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
                  LANGUES
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-gray-800">Français</p>
                    <p className="text-gray-600">Courant</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Malagasy</p>
                    <p className="text-gray-600">Langue maternelle</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Anglais</p>
                    <p className="text-gray-600">Intermédiaire</p>
                  </div>
                </div>
              </section>

              {/* CTF Achievement dans le CV */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
                  DISTINCTIONS
                </h3>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                  <div className="flex items-center mb-2">
                    <i className="ri-trophy-line text-yellow-600 mr-2"></i>
                    <h4 className="font-bold text-gray-800">1ère Place - CTF INSI</h4>
                    <span className="ml-auto text-gray-600 text-sm">2024</span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Victoire lors de la compétition Capture The Flag organisée par l'INSI. 
                    Démonstration de compétences en cybersécurité, analyse de vulnérabilités 
                    et résolution de challenges de sécurité informatique.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Section versions du CV */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Versions disponibles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-red-100 rounded-full mx-auto mb-4">
                <i className="ri-file-pdf-line text-2xl text-red-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Version PDF</h3>
              <p className="text-gray-600 text-sm mb-4">Format standard pour impression et envoi par email</p>
              <button 
                onClick={() => handleDownload('pdf')}
                disabled={downloadStarted}
                className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 cursor-pointer text-sm whitespace-nowrap disabled:opacity-50"
              >
                Télécharger PDF
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                <i className="ri-file-word-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Version Word</h3>
              <p className="text-gray-600 text-sm mb-4">Format éditable pour personnalisation</p>
              <button 
                onClick={() => handleDownload('docx')}
                disabled={downloadStarted}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 cursor-pointer text-sm whitespace-nowrap disabled:opacity-50"
              >
                Télécharger DOCX
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4">
                <i className="ri-link text-2xl text-green-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Version en ligne</h3>
              <p className="text-gray-600 text-sm mb-4">Lien à partager pour consultation interactive</p>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(window.location.origin);
                  alert('Lien copié dans le presse-papier !');
                }}
                className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 cursor-pointer text-sm whitespace-nowrap"
              >
                Copier le lien
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
