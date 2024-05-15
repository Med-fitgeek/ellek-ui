import React from 'react';
import { Input, Textarea, Button } from "@material-tailwind/react";

const ContactForm = () => {
  return (
    <form className="mx-auto mt-12 max-w-3xl text-center p-2.5 md:p-0">
      <div className="flex flex-col gap-8 md:flex-row md:gap-8 mb-8">
        <Input variant="standard" size="lg" label="Nom complet" className="w-full" />
        <Input variant="standard" size="lg" label="Adresse e-mail" className="w-full" />
      </div>
      <Textarea variant="standard" size="lg" label="Message" rows={8} className="w-full" />
      <Button variant="gradient" size="lg" className="mt-8 w-full md:w-auto">
        Envoyer un message
      </Button>
    </form>
  );
}

export default ContactForm;
