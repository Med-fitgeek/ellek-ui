import React, { useState } from 'react';
import { Input, Textarea, Button } from "@material-tailwind/react";

const ContactForm = () => {
  // État pour stocker les valeurs des entrées
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Gérer les changements des inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Construire l'URL de Formspree
    // Remplacez {your-id} par votre propre ID de projet Formspree
    const formAction = 'https://formspree.io/f/xpzvnkrr';

    // Effectuer la requête POST vers Formspree
    const response = await fetch(formAction, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      // Réinitialiser le formulaire si l'envoi a réussi
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      alert('Message envoyé avec succès !');
    } else {
      // Afficher une erreur si l'envoi a échoué
      alert('Erreur lors de l\'envoi du message.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-12 max-w-3xl text-center p-2.5 md:p-0">
      <div className="flex flex-col gap-8 md:flex-row md:gap-8 mb-8">
        <Input
          variant="standard"
          size="lg"
          label="Nom complet"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full"
        />
        <Input
          type='email'
          variant="standard"
          size="lg"
          label="Adresse e-mail"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full"
        />
      </div>
      <Textarea
        variant="standard"
        size="lg"
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows={8}
        className="w-full"
      />
      <Button
        type="submit"
        variant="gradient"
        size="lg"
        className="mt-8 w-full md:w-auto"
      >
        Envoyer un message
      </Button>
    </form>
  );
};

export default ContactForm;
