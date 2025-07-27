import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
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
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg',
      socials: {
        linkedin: '#',
        email: 'contact@leaderservice.com',
        phone: '+123456789',
      },
    },
    {
      id: 2,
      name: 'Michel Laurent',
      position: 'Directeur Technique',
      image: 'https://images.pexels.com/photos/5668770/pexels-photo-5668770.jpeg',
      socials: {
        linkedin: '#',
        email: 'technique@leaderservice.com',
      },
    },
    {
      id: 3,
      name: 'Sophie Dubois',
      position: 'Responsable Projets',
      image: 'https://images.pexels.com/photos/5668779/pexels-photo-5668779.jpeg',
      socials: {
        linkedin: '#',
        email: 'projets@leaderservice.com',
      },
    },
    {
      id: 4,
      name: 'Thomas Moreau',
      position: 'Ingénieur Civil Senior',
      image: 'https://images.pexels.com/photos/5668867/pexels-photo-5668867.jpeg',
      socials: {
        linkedin: '#',
        email: 'ingenierie@leaderservice.com',
      },
    },
  ];

  return (
    <section id="team" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Notre Équipe</h2>
          <p className="section-subtitle">
            Des professionnels qualifiés et passionnés qui font de LEADER SERVICE une entreprise d'excellence
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map(member => (
            <div key={member.id} className="card group text-center overflow-hidden">
              <div className="relative overflow-hidden h-72">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center" 
                />
                {member.socials && (
                  <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {member.socials.linkedin && (
                      <a 
                        href={member.socials.linkedin} 
                        className="bg-white p-2 rounded-full text-primary hover:bg-secondary hover:text-white transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.socials.email && (
                      <a 
                        href={`mailto:${member.socials.email}`} 
                        className="bg-white p-2 rounded-full text-primary hover:bg-secondary hover:text-white transition-colors duration-300"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    )}
                    {member.socials.phone && (
                      <a 
                        href={`tel:${member.socials.phone}`} 
                        className="bg-white p-2 rounded-full text-primary hover:bg-secondary hover:text-white transition-colors duration-300"
                      >
                        <Phone className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary">{member.name}</h3>
                <p className="text-gray-dark">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;