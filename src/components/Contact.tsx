import React, { FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Message envoyé avec succès!');
        form.reset();
      } else {
        throw new Error('Erreur lors de l\'envoi du message');
      }
    } catch (error) {
      alert('Une erreur est survenue. Veuillez réessayer plus tard.');
    }
  };

  return (
    <section className="section-padding bg-gray-50 pt-32">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Coordonnées</h2>
          <p className="section-subtitle">
            Vous avez un projet ? Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">Informations de Contact</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary p-3 rounded-md text-white mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-primary">Adresse</h4>
                  <p className="text-gray-dark">123 Avenue Centrale, Ville, Pays</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary p-3 rounded-md text-white mr-4">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-primary">Téléphone</h4>
                  <p className="text-gray-dark">+123 456 7890</p>
                  <p className="text-gray-dark">+123 456 7891</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary p-3 rounded-md text-white mr-4">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-primary">Email</h4>
                  <p className="text-gray-dark">contact@leaderservice.com</p>
                  <p className="text-gray-dark">info@leaderservice.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary p-3 rounded-md text-white mr-4">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-primary">Heures d'Ouverture</h4>
                  <p className="text-gray-dark">Lundi - Vendredi: 8h00 - 18h00</p>
                  <p className="text-gray-dark">Samedi: 9h00 - 13h00</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">Envoyez-nous un Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-dark mb-1">Nom</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    className="input-field"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-dark mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    className="input-field"
                    placeholder="Votre email"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-dark mb-1">Sujet</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  className="input-field"
                  placeholder="Sujet de votre message"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-dark mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={5} 
                  className="input-field resize-none"
                  placeholder="Votre message..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn-primary w-full flex items-center justify-center group hover:scale-105 transform transition-all duration-300"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  Envoyer le Message
                </span>
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
        
        {/* Welcome Message */}
        <div className="mt-10 rounded-lg overflow-hidden shadow-md bg-white p-8 text-center">
          <h3 className="text-2xl font-semibold text-primary mb-4">Bienvenue chez LEADER SERVICE</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans vos projets. 
            N'hésitez pas à nous contacter pour discuter de vos besoins spécifiques.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;