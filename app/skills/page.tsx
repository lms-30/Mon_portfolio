
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [hoveredProgress, setHoveredProgress] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);

    // Animation séquentielle des cartes
    const timer = setTimeout(() => {
      skillCategories.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards(prev => new Set(prev).add(index));
        }, index * 200);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    {
      title: "Réseaux - Bases",
      icon: "ri-router-line",
      color: "blue",
      skills: [
        { name: "Configuration IP", level: 60 },
        { name: "Routage de base", level: 55 },
        { name: "DHCP", level: 65 },
        { name: "DNS", level: 58 },
        { name: "NAT", level: 52 },
        { name: "Cisco Packet Tracer", level: 62 }
      ]
    },
    {
      title: "Systèmes - Bases",
      icon: "ri-computer-line",
      color: "green",
      skills: [
        { name: "Linux Ubuntu", level: 58 },
        { name: "Administration utilisateurs", level: 55 },
        { name: "Services de base", level: 50 },
        { name: "Terminal/Shell", level: 60 },
        { name: "Installation système", level: 65 },
        { name: "Configuration réseau", level: 52 }
      ]
    },
    {
      title: "Sécurité - Initiation",
      icon: "ri-shield-line",
      color: "red",
      skills: [
        { name: "Concepts sécurité", level: 45 },
        { name: "Pare-feu basique", level: 40 },
        { name: "Analyse logs", level: 48 },
        { name: "CTF - Challenges", level: 65 },
        { name: "Vulnérabilités web", level: 42 },
        { name: "Cryptographie base", level: 38 }
      ]
    },
    {
      title: "Virtualisation - Découverte",
      icon: "ri-cloud-line",
      color: "purple",
      skills: [
        { name: "VirtualBox", level: 55 },
        { name: "Docker basics", level: 45 },
        { name: "VM Configuration", level: 50 },
        { name: "Réseaux virtuels", level: 48 },
        { name: "KVM/QEMU", level: 40 },
        { name: "Gestion ressources", level: 42 }
      ]
    },
    {
      title: "Bases de Données - Fondamentaux",
      icon: "ri-database-line",
      color: "orange",
      skills: [
        { name: "MySQL basics", level: 50 },
        { name: "Requêtes SQL", level: 55 },
        { name: "Installation BDD", level: 58 },
        { name: "Sauvegarde simple", level: 45 },
        { name: "Gestion utilisateurs", level: 42 },
        { name: "Configuration base", level: 48 }
      ]
    },
    {
      title: "Outils et Technologies",
      icon: "ri-tools-line",
      color: "teal",
      skills: [
        { name: "Git/GitLab", level: 52 },
        { name: "Documentation", level: 60 },
        { name: "Scripts bash simples", level: 45 },
        { name: "Monitoring basique", level: 40 },
        { name: "Dépannage réseau", level: 55 },
        { name: "Wireshark basics", level: 48 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: "bg-blue-100", text: "text-blue-600", progress: "bg-blue-600" },
      red: { bg: "bg-red-100", text: "text-red-600", progress: "bg-red-600" },
      green: { bg: "bg-green-100", text: "text-green-600", progress: "bg-green-600" },
      purple: { bg: "bg-purple-100", text: "text-purple-600", progress: "bg-purple-600" },
      orange: { bg: "bg-orange-100", text: "text-orange-600", progress: "bg-orange-600" },
      teal: { bg: "bg-teal-100", text: "text-teal-600", progress: "bg-teal-600" }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section avec animation de texte */}
      <section
        className="relative py-32 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://readdy.ai/api/search-image?query=Student%20learning%20IT%20and%20network%20fundamentals%20with%20computers%20and%20networking%20equipment%2C%20beginner%20level%20technical%20skills%20development%2C%20educational%20technology%20environment%20showing%20basic%20competencies%20in%20system%20administration&width=1920&height=800&seq=skills-basics-student&orientation=landscape')`
        }}
      >
        {/* Particules animées */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center text-white relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Mes Compétences
          </h1>
          <p className="text-xl text-gray-200 animate-fade-in-up animation-delay-300">
            Compétences fondamentales en administration réseau et système
          </p>
        </div>
      </section>

      {/* CTF Achievement Section avec animation bounce */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-orange-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl animate-bounce-in">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-500 rounded-full mr-4 animate-pulse hover:animate-spin transition-all duration-300">
                <i className="ri-trophy-line text-3xl text-white"></i>
              </div>
              <div className="text-left">
                <h2 className="text-3xl font-bold text-gray-800 animate-fade-in-right">1ère Place CTF INSI</h2>
                <p className="text-lg text-gray-600 animate-fade-in-right animation-delay-200">Capture The Flag - Compétition de cybersécurité</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed animate-fade-in-up animation-delay-400">
              Victoire lors de la compétition CTF organisée par l'INSI, démontrant mes compétences
              en résolution de challenges de sécurité informatique, analyse de vulnérabilités et
              exploitation de failles de sécurité dans un environnement contrôlé.
            </p>
          </div>
        </div>
      </section>

      {/* Compétences par catégorie avec animations améliorées */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          {skillCategories.map((category, categoryIndex) => {
            const colorClasses = getColorClasses(category.color);
            const isCardVisible = visibleCards.has(categoryIndex);
            return (
              <div
                key={categoryIndex}
                className={`mb-16 transform transition-all duration-1000 ${
                  isCardVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${categoryIndex * 100}ms` }}
              >
                <div className="text-center mb-12">
                  <div className={`w-16 h-16 flex items-center justify-center ${colorClasses.bg} rounded-full mx-auto mb-4 transform hover:scale-110 hover:rotate-12 transition-all duration-300 animate-float`}>
                    <i className={`${category.icon} text-2xl ${colorClasses.text}`}></i>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 animate-fade-in-up">{category.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transform hover:scale-105 hover:shadow-2xl transition-all duration-500 hover:border-blue-200 cursor-pointer animate-slide-in-left"
                      style={{
                        animationDelay: `${(categoryIndex * 300) + (skillIndex * 100)}ms`,
                        animationFillMode: 'both'
                      }}
                      onMouseEnter={() => {
                        setHoveredSkill(`${categoryIndex}-${skillIndex}`);
                        setHoveredProgress(`${categoryIndex}-${skillIndex}`);
                      }}
                      onMouseLeave={() => {
                        setHoveredSkill(null);
                        setHoveredProgress(null);
                      }}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 hover:text-blue-600">
                          {skill.name}
                        </h3>
                        <span className={`text-sm font-medium transition-all duration-300 ${
                          hoveredSkill === `${categoryIndex}-${skillIndex}`
                            ? `${colorClasses.text} font-bold text-lg transform scale-110`
                            : 'text-gray-600'
                        }`}>
                          {hoveredProgress === `${categoryIndex}-${skillIndex}` ? Math.min(skill.level + 15, 100) : skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden hover:h-4 transition-all duration-300">
                        <div
                          className={`h-full rounded-full ${colorClasses.progress} transition-all duration-700 ease-out relative overflow-hidden hover:shadow-lg`}
                          style={{
                            width: isVisible
                              ? hoveredProgress === `${categoryIndex}-${skillIndex}`
                                ? `${Math.min(skill.level + 15, 100)}%`
                                : `${skill.level}%`
                              : '0%',
                            transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                          }}
                        >
                          {/* Effet de brillance qui passe sur la barre */}
                          <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent ${
                            hoveredProgress === `${categoryIndex}-${skillIndex}` ? 'animate-shimmer-fast' : 'animate-shimmer'
                          }`}></div>

                          {/* Particules animées sur hover */}
                          {hoveredProgress === `${categoryIndex}-${skillIndex}` && (
                            <>
                              {[...Array(3)].map((_, i) => (
                                <div
                                  key={i}
                                  className="absolute w-1 h-1 bg-white rounded-full animate-bounce"
                                  style={{
                                    right: `${10 + i * 15}%`,
                                    top: '25%',
                                    animationDelay: `${i * 0.2}s`,
                                    animationDuration: '0.8s'
                                  }}
                                />
                              ))}
                            </>
                          )}
                        </div>
                      </div>

                      {/* Indicateur de progression animé */}
                      {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                        <div className="mt-2 flex items-center justify-between animate-fade-in">
                          <span className="text-xs text-gray-500">
                            {skill.level < 50 ? 'Niveau débutant' : skill.level < 70 ? 'Niveau intermédiaire' : 'Niveau avancé'}
                          </span>
                          <span className="text-xs text-green-600 font-medium animate-pulse">
                            +15% sur focus
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Formation et objectifs avec animations staggered */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 animate-fade-in-up">
            Formation et Objectifs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "ri-graduation-cap-line", title: "Licence 2 en cours", desc: "Administration réseau et système - INSI", badge: "2024", color: "blue" },
              { icon: "ri-award-line", title: "Cisco CCNA", desc: "Certification réseau visée", badge: "Objectif 2024", color: "green" },
              { icon: "ri-shield-check-line", title: "CompTIA Security+", desc: "Certification sécurité envisagée", badge: "Objectif 2025", color: "red" },
              { icon: "ri-cloud-line", title: "VMware vSphere", desc: "Spécialisation virtualisation", badge: "Futur", color: "purple" },
              { icon: "ri-database-2-line", title: "Oracle DBA", desc: "Administration bases de données", badge: "Futur", color: "orange" },
              { icon: "ri-git-branch-line", title: "DevOps", desc: "CI/CD et automatisation", badge: "En cours", color: "teal" }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transform hover:scale-105 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-in-up cursor-pointer group"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'both'
                }}
              >
                <div className={`w-12 h-12 flex items-center justify-center bg-${item.color}-100 rounded-lg mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                  <i className={`${item.icon} text-xl text-${item.color}-600`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                <span className={`bg-${item.color}-100 text-${item.color}-600 px-3 py-1 rounded-full text-xs font-medium animate-pulse`}>{item.badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outils et technologies avec effet wave */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 animate-fade-in-up">
            Outils et Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Cisco Packet Tracer", icon: "ri-router-line", color: "bg-blue-600" },
              { name: "Wireshark", icon: "ri-radar-line", color: "bg-green-600" },
              { name: "pfSense", icon: "ri-shield-line", color: "bg-red-600" },
              { name: "Docker", icon: "ri-cloud-line", color: "bg-cyan-600" },
              { name: "VirtualBox", icon: "ri-computer-line", color: "bg-purple-600" },
              { name: "KVM/QEMU", icon: "ri-server-line", color: "bg-orange-600" },
              { name: "MySQL", icon: "ri-database-line", color: "bg-yellow-600" },
              { name: "Apache", icon: "ri-global-line", color: "bg-pink-600" },
              { name: "Nginx", icon: "ri-window-line", color: "bg-indigo-600" },
              { name: "GitLab", icon: "ri-git-branch-line", color: "bg-teal-600" },
              { name: "Snort", icon: "ri-bug-line", color: "bg-red-700" },
              { name: "OpenVPN", icon: "ri-shield-keyhole-line", color: "bg-gray-600" }
            ].map((tool, index) => (
              <div
                key={index}
                className="text-center p-4 group cursor-pointer animate-fade-in-up"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both'
                }}
              >
                <div className={`w-16 h-16 flex items-center justify-center ${tool.color} rounded-lg mx-auto mb-3 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 shadow-lg group-hover:shadow-2xl`}>
                  <i className={`${tool.icon} text-2xl text-white group-hover:animate-bounce`}></i>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{tool.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Skills avec animations pulse */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 animate-fade-in-up">
            Qualités personnelles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "ri-search-line", title: "Curiosité", desc: "Passion pour l'apprentissage continu", color: "blue" },
              { icon: "ri-user-line", title: "Autonomie", desc: "Capacité à travailler de manière indépendante", color: "green" },
              { icon: "ri-settings-line", title: "Approche pratique", desc: "Apprentissage par la mise en pratique", color: "purple" },
              { icon: "ri-lightbulb-line", title: "Innovation", desc: "Recherche de solutions créatives", color: "orange" }
            ].map((skill, index) => (
              <div
                key={index}
                className="text-center p-6 group cursor-pointer animate-slide-in-up"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animationFillMode: 'both'
                }}
              >
                <div className={`w-16 h-16 flex items-center justify-center bg-${skill.color}-100 rounded-full mx-auto mb-4 group-hover:scale-110 group-hover:animate-pulse transition-all duration-300 shadow-lg`}>
                  <i className={`${skill.icon} text-2xl text-${skill.color}-600`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">{skill.title}</h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes shimmer-fast {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-bounce-in {
          animation: bounce-in 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .animate-shimmer-fast {
          animation: shimmer-fast 1s infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
    </div>
  );
}
