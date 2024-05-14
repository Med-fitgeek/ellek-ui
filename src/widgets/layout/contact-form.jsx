import React from 'react';
import { Input, Textarea, Button } from "@material-tailwind/react";

const ContactForm = () => {
  return (
    <form className="contact-form mx-auto mt-12 max-w-3xl text-center">
      <div className="mb-8 flex gap-8">
        <Input variant="standard" size="lg" label="Nom complet" />
        <Input variant="standard" size="lg" label="Adresse e-mail" />
      </div>
      <Textarea variant="standard" size="lg" label="Message" rows={8} />
      <Button variant="gradient" size="lg" className="mt-8">
        Envoyer un message
      </Button>
    </form>
  );
}

export default ContactForm;
