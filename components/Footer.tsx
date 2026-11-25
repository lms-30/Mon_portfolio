
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-pacifico)' }}>
              Lahiniriko Mara Sylvain
            </h3>
            <p className="text-gray-400 mb-4">
              Étudiant en Licence 3 informatique, orienté systèmes, réseaux et DevSecOps.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/lms-30" target="_blank" rel="noopener noreferrer" aria-label="Profil GitHub" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition-colors cursor-pointer">
                <i className="ri-github-fill text-lg"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Accueil</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors cursor-pointer">À propos</Link></li>
              <li><Link href="/skills" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Compétences</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Projets</Link></li>
              <li><Link href="/experience" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Parcours</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <i className="ri-mail-line w-5 h-5 flex items-center justify-center mr-2"></i>
                <a href="mailto:lms30062004@gmail.com" className="hover:text-white">lms30062004@gmail.com</a>
              </li>
              <li className="flex items-center">
                <i className="ri-phone-line w-5 h-5 flex items-center justify-center mr-2"></i>
                <a href="tel:+261347130833" className="hover:text-white">+261 34 71 308 33</a>
              </li>
              <li className="flex items-center">
                <i className="ri-map-pin-line w-5 h-5 flex items-center justify-center mr-2"></i>
                Antananarivo, Madagascar
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Lahiniriko Mara Sylvain. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
