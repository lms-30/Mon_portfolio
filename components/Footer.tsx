
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
              Étudiant en Administration réseau et système et bases de données passionné par la cybersécurité et les infrastructures IT.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
              <a href="https://github.com/lms-30" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition-colors cursor-pointer">
                <i className="ri-github-fill text-lg"></i>
              </a>
              <a href="https://www.facebook.com" className="w-10 h-10 flex items-center justify-center bg-blue-400 rounded-full hover:bg-blue-500 transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-lg"></i>
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
                lahinirikomarasylvain30@gmail.com
              </li>
              <li className="flex items-center">
                <i className="ri-phone-line w-5 h-5 flex items-center justify-center mr-2"></i>
                +261 34 62 381 12
              </li>
              <li className="flex items-center">
                <i className="ri-map-pin-line w-5 h-5 flex items-center justify-center mr-2"></i>
                Antananarivo, Madagascar
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Lahiniriko Mara Sylvain. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
