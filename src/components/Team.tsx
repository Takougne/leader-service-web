import React from 'react';
import { Linkedin, Mail, Phone, HardHat, Users, ClipboardList } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  icon?: React.ReactNode;
  socials?: {
    linkedin?: string;
    email?: string;
    phone?: string;
  };
}

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'SIGNING François Roger',
      position: 'Directeur Général',
      icon: (
        <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary">
          <Users className="w-20 h-20" />
        </div>
      ),
      socials: {
        linkedin: '#',
        email: 'leaderservicebtpcm@gmail.com',
        phone: '+237 6XX XXX XXX',
      },
    },
    {
      id: 2,
      name: 'Équipe Technique',
      position: 'Ingénieurs et Spécialistes',
      icon: (
        <div className="w-full h-full bg-blue-50 flex items-center justify-center text-blue-600">
          <HardHat className="w-20 h-20" />
        </div>
      ),
    },
    {
      id: 3,
      name: 'Chargés de Projets',
      position: 'Gestion et Suivi',
      icon: (
        <div className="w-full h-full bg-green-50 flex items-center justify-center text-green-600">
          <ClipboardList className="w-20 h-20" />
        </div>
      ),
    },
    {
      id: 4,
      name: 'Ouvriers Qualifiés',
      position: 'Exécution des Travaux',
      icon: (
        <div className="w-full h-full bg-orange-50 flex items-center justify-center text-orange-600">
          <HardHat className="w-20 h-20" />
        </div>
      ),
    },
  ];

  return (
    <section id="team" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Notre Équipe</h2>
          <p className="section-subtitle">
            Une équipe soudée de professionnels qualifiés engagés dans l'excellence de nos réalisations
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map(member => (
            <div key={member.id} className="card group text-center overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative overflow-hidden h-64">
                {member.icon}
                {member.socials && (
                  <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {member.socials.linkedin && (
                      <a 
                        href={member.socials.linkedin} 
                        className="bg-white p-3 rounded-full text-primary hover:bg-secondary hover:text-white transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-6 w-6" />
                      </a>
                    )}
                    {member.socials.email && (
                      <a 
                        href={`mailto:${member.socials.email}`} 
                        className="bg-white p-3 rounded-full text-primary hover:bg-secondary hover:text-white transition-colors duration-300"
                      >
                        <Mail className="h-6 w-6" />
                      </a>
                    )}
                    {member.socials.phone && (
                      <a 
                        href={`tel:${member.socials.phone}`} 
                        className="bg-white p-3 rounded-full text-primary hover:bg-secondary hover:text-white transition-colors duration-300"
                      >
                        <Phone className="h-6 w-6" />
                      </a>
                    )}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-3">{member.position}</p>
                {member.id === 1 && (
                  <p className="text-sm text-gray-500 border-t pt-3">
                    Fondateur et dirigeant de LEADER SERVICE
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-primary mb-4">Une équipe dédiée à vos projets</h3>
          <p className="max-w-3xl mx-auto text-gray-600 mb-6">
            Chez LEADER SERVICE, nous croyons que la réussite d'un projet repose sur une équipe compétente et soudée.
            De notre direction à nos équipes opérationnelles, chaque membre apporte son expertise pour garantir
            l'excellence de nos réalisations.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="bg-white px-4 py-2 rounded-full shadow-sm flex items-center">
              <HardHat className="w-5 h-5 mr-2 text-primary" />
              <span>+20 ingénieurs qualifiés</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full shadow-sm flex items-center">
              <Users className="w-5 h-5 mr-2 text-primary" />
              <span>+50 ouvriers spécialisés</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full shadow-sm flex items-center">
              <ClipboardList className="w-5 h-5 mr-2 text-primary" />
              <span>Gestion de projet rigoureuse</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;