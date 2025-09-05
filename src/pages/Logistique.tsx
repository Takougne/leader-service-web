import { motion } from 'framer-motion';
import { Truck, Package, MapPin, Clock, Users, Shield, CheckCircle, Download } from 'lucide-react';

const Logistique = () => {
  const logisticsServices = [
    {
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: "Transport de Matériaux",
      description: "Transport sécurisé et efficace de tous types de matériaux de construction vers vos chantiers."
    },
    {
      icon: <Package className="h-8 w-8 text-primary" />,
      title: "Gestion des Stocks",
      description: "Optimisation de la gestion des stocks et approvisionnement en temps réel pour vos projets."
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Planification des Livraisons",
      description: "Coordination précise des livraisons selon les contraintes de vos chantiers et planning."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Suivi en Temps Réel",
      description: "Monitoring continu de vos expéditions avec notifications et mises à jour en direct."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Équipe Spécialisée",
      description: "Personnel qualifié et expérimenté pour la manutention et le transport de matériaux lourds."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Assurance Complète",
      description: "Couverture d'assurance complète pour tous vos envois et matériaux transportés."
    }
  ];

  const advantages = [
    "Réduction des coûts de transport jusqu'à 30%",
    "Délais de livraison respectés à 99%",
    "Traçabilité complète de vos expéditions",
    "Support client 24/7",
    "Flotte de véhicules modernes et entretenus",
    "Conformité aux normes de sécurité"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Solutions Logistiques
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 text-gray-light"
            >
              Optimisez vos chaînes d'approvisionnement avec nos services logistiques spécialisés
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-light transition-colors">
                Demander un Devis
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                En Savoir Plus
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
              Nos Services Logistiques
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions complètes pour tous vos besoins de transport et de gestion des matériaux
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {logisticsServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-6">
                Pourquoi Choisir Nos Services ?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Avec plus de 10 ans d'expérience dans le domaine de la logistique du BTP, 
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
                  <div className="text-3xl font-bold mb-2">500+</div>
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

      {/* Nos Réalisations Section */}
     
    </motion.div>
  );
};

export default Logistique;