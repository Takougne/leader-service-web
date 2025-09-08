import React from 'react';
import { Target, Award, Users, Globe, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const advantages = [
  "Expertise reconnue dans le secteur BTP",
  "Flotte moderne et entretenue",
  "Réactivité et flexibilité",
  "Suivi digitalisé des opérations",
  "Équipe dédiée et expérimentée",
];

const About: React.FC = () => {
  return (
    <>
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
      {/* Advantages Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Pourquoi Choisir Nos Services ?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Avec plus de 20 ans d'expérience dans le domaine de la logistique du BTP, 
                nous nous engageons à fournir des solutions fiables et efficaces.
              </p>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-gray-700">{advantage}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Nos Chiffres Clés</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">100+</div>
                  <div className="text-sm opacity-90">Projets Livrés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-sm opacity-90">Véhicules</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">99%</div>
                  <div className="text-sm opacity-90">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-sm opacity-90">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;