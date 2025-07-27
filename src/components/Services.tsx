import React from 'react';
import { HardHat, TruckIcon, Settings, Building, Briefcase, BarChart3, ShoppingBag, Wrench } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="card group p-6 flex flex-col items-center text-center">
      <div className="bg-blue-900 text-white p-4 rounded-full mb-4 group-hover:bg-orange-500 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-blue-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <HardHat className="h-8 w-8" />,
      title: "Génie Civil",
      description: "Études et réalisations d'ouvrages d'art, bâtiments industriels et travaux publics avec une attention particulière aux normes internationales."
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Maintenance Industrielle",
      description: "Services de maintenance préventive et corrective pour équipements industriels et automobiles avec des techniciens hautement qualifiés."
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "BTP",
      description: "Construction de bâtiments résidentiels et commerciaux, infrastructures publiques et aménagements urbains respectant les normes en vigueur."
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Échafaudage",
      description: "Montage et démontage d'échafaudages pour projets de construction et de maintenance industrielle, avec certification aux normes de sécurité."
    },
    {
      icon: <TruckIcon className="h-8 w-8" />,
      title: "Transport & Logistique",
      description: "Solutions logistiques complètes incluant transport de matériaux, gestion de flotte et chaîne d'approvisionnement pour vos projets."
    },
    {
      icon: <ShoppingBag className="h-8 w-8" />,
      title: "Commerce Général",
      description: "Fourniture d'équipements, de matériaux de construction et de produits industriels de qualité pour tous vos besoins professionnels."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Études Techniques",
      description: "Services d'ingénierie, études de faisabilité, conception et planification de projets avec notre équipe d'experts qualifiés."
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Management de Projets",
      description: "Gestion de projets intégrée avec planification, contrôle qualité, supervision et coordination pour une exécution parfaite."
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Nos Services</h2>
          <p className="section-subtitle">
            Nous offrons une gamme complète de services professionnels pour répondre à tous vos besoins
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;