import React from 'react';
import { Target, Award, Users, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">À Propos de Nous</h2>
          <p className="section-subtitle">
            LEADER SERVICE est une entreprise dynamique spécialisée dans le génie civil et offrant une gamme complète de services industriels
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img 
              src="/images/WhatsApp Image 2024-11-19 à 11.33.52_11116d28.jpg" 
              alt="À propos de LEADER SERVICE" 
              className="rounded-lg shadow-lg w-full max-w-[647px] h-[400px] object-cover"
              style={{ width: '647px', height: '400px' }}
            />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-2">Notre Vision</h3>
              <p className="text-gray-dark">
                Notre vision est d'étendre notre action sur le territoire national et international, 
                devenir un acteur incontournable du génie civil et mettre en service une maintenance 
                industrielle et automobile fiable et performante.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-start">
                <div className="bg-secondary p-3 rounded-md text-white mr-4">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-primary">Objectifs</h4>
                  <p className="text-sm text-gray-dark">Satisfaire la clientèle et valoriser le rôle de l'ingénieur</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-secondary p-3 rounded-md text-white mr-4">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-primary">Qualité</h4>
                  <p className="text-sm text-gray-dark">Amélioration continue de notre savoir-faire</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-secondary p-3 rounded-md text-white mr-4">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-primary">Équipe</h4>
                  <p className="text-sm text-gray-dark">Plus de 50 employés dynamiques et qualifiés</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-secondary p-3 rounded-md text-white mr-4">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-primary">Expertise</h4>
                  <p className="text-sm text-gray-dark">Environnement local, sous-régional et international</p>
                </div>
              </div>
            </div>

            <a href="#services" className="btn-primary mt-6 inline-block">
              Nos Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;