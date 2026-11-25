
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitError('');

    // Validation des champs requis
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      setSubmitError('Vérifiez les champs requis et la longueur du message.');
      setIsSubmitting(false);
      return;
    }

    // Validation de la longueur du message
    if (formData.message.length > 500) {
      setSubmitStatus('error');
      setSubmitError('Le message ne peut pas dépasser 500 caractères.');
      setIsSubmitting(false);
      return;
    }

    // Envoi réel du message
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json().catch(() => null);

      if (!response.ok || result?.success !== true) {
        throw new Error(result?.error || 'Le message n’a pas pu être envoyé. Réessayez plus tard.');
      }

      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        projectType: ''
      });
    } catch (error) {
      setSubmitStatus('error');
      setSubmitError(error instanceof Error ? error.message : 'Erreur réseau. Vérifiez votre connexion et réessayez.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Professional%20communication%20and%20networking%20concept%20with%20technology%20elements%2C%20IT%20collaboration%20theme%2C%20modern%20office%20environment%20with%20computers%20and%20network%20equipment%2C%20contact%20and%20professional%20networking%20atmosphere&width=1920&height=800&seq=contact-hero-network&orientation=landscape')`
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contactez-moi</h1>
          <p className="text-xl text-gray-200">
            Discutons de vos projets réseau, système ou bases de données
          </p>
        </div>
      </section>

      {/* Section contact principale */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Restons en contact</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Je suis toujours intéressé par de nouveaux défis techniques, des opportunités d'apprentissage 
                ou des collaborations sur des projets réseau et système. N'hésitez pas à me contacter !
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mr-4">
                    <i className="ri-mail-line text-xl text-blue-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <a href="mailto:lms30062004@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                      lms30062004@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg mr-4">
                    <i className="ri-phone-line text-xl text-green-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Téléphone</h3>
                    <a href="tel:+261347130833" className="text-gray-600 hover:text-green-600 transition-colors cursor-pointer">
                      +261 34 71 308 33
                    </a>
                    <br />
                    <a href="tel:+261330879137" className="text-gray-600 hover:text-green-600 transition-colors cursor-pointer">
                      +261 33 08 791 37
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-lg mr-4">
                    <i className="ri-map-pin-line text-xl text-purple-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Adresse</h3>
                    <p className="text-gray-600">Antananarivo, Madagascar</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-lg mr-4">
                    <i className="ri-graduation-cap-line text-xl text-orange-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Formation</h3>
                    <p className="text-gray-600">Étudiant en Licence 3 - INSI</p>
                  </div>
                </div>
              </div>
              
              {/* Domaines d'expertise */}
              <div className="mt-8">
                <h3 className="font-semibold text-gray-800 mb-4">Domaines d'expertise</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    Administration réseau
                  </span>
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                    Sécurité système
                  </span>
                  <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                    Virtualisation
                  </span>
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                    Bases de données
                  </span>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Envoyez-moi un message</h2>
              
              <form id="contact-form-student" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                      placeholder="Sujet de votre message"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      Type de projet
                    </label>
                    <div className="relative">
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 pr-8 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm appearance-none"
                      >
                        <option value="">Sélectionnez un domaine</option>
                        <option value="network">Configuration réseau</option>
                        <option value="security">Sécurité système</option>
                        <option value="virtualization">Virtualisation</option>
                        <option value="database">Base de données</option>
                        <option value="devops">DevOps/CI-CD</option>
                        <option value="ctf">CTF/Cybersécurité</option>
                        <option value="learning">Échange/Apprentissage</option>
                        <option value="other">Autre</option>
                      </select>
                      <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message * <span className="text-xs text-gray-500">(max 500 caractères)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={500}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm resize-none"
                    placeholder="Décrivez votre projet, vos questions ou ce qui vous intéresse..."
                  ></textarea>
                  <div className="text-right text-xs text-gray-500 mt-1">
                    {formData.message.length}/500
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting || formData.message.length > 500}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Envoi en cours...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <i className="ri-send-plane-line mr-2"></i>
                      Envoyer le message
                    </span>
                  )}
                </button>
              </form>
              
              {/* Messages de statut */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-lg">
                  <div className="flex items-center text-green-700">
                    <i className="ri-check-line mr-2"></i>
                    Votre message a été envoyé avec succès ! Je vous répondrai bientôt.
                  </div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-100 border border-red-300 rounded-lg">
                  <div className="flex items-center text-red-700">
                    <i className="ri-error-warning-line mr-2"></i>
                    {submitError}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Questions Fréquentes
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Quel est votre domaine de spécialisation ?
              </h3>
              <p className="text-gray-600">
                Je me spécialise en administration réseau et système, avec un focus sur la sécurité, 
                la virtualisation et les bases de données. Je travaille principalement avec Linux.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Êtes-vous disponible pour des stages ou projets étudiants ?
              </h3>
              <p className="text-gray-600">
                Oui, je suis ouvert aux opportunités de stage, projets collaboratifs ou échanges 
                d'apprentissage avec d'autres étudiants ou professionnels du domaine.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Pouvez-vous aider avec des configurations réseau ?
              </h3>
              <p className="text-gray-600">
                Absolument ! J'ai de l'expérience avec les VLAN, routage, VPN, pare-feux et autres 
                configurations réseau. Je peux partager mes connaissances ou collaborer sur des projets.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Travaillez-vous sur des projets personnels ?
              </h3>
              <p className="text-gray-600">
                Oui, je développe constamment mes compétences à travers des projets personnels. 
                N'hésitez pas à me contacter si vous voulez échanger sur nos expériences !
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Avez-vous participé à des CTF ?
              </h3>
              <p className="text-gray-600">
                  Nous avons terminé premiers au CTF Data Day. J'ai également participé au CTF CIRT/MNDPT et à la première
                  édition de la CyberCup Indian Ocean.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
