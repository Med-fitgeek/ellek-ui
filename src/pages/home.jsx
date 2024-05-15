import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import {
  Card,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer, FaqComponent } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import ClientsCarousel from "@/widgets/carousels/clients-carousel";
import ContactForm from '@/widgets/layout/contact-form';
import ScrollToTop from '@/widgets/layout/scrool-to-top';

export function Home() {

  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/teamSpirit.webp')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/40 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Ëllëk Innovations
              </Typography>
              <Typography variant="lead" color="white" className="opacity-100">
                Une entreprise tournée vers l'avenir grace a notre expertise technologique
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Votre projet est unique!
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Notre equipe devouee est specialisee dans la prestation de services
                sur mesure pour une multitude de secteurs et d'activites, tels que
                la finance, le coorce de betail, l'industrie et bien plus encore.
                <br />
                <br />
                Que vous soyez une PME ou une grande entreprise, nous nous 
                engageons a vous fournir des prestations adaptees a vos besoibs specifiques.
              </Typography>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <ClientsCarousel />
            </div>            
          </div>
        </div>
      </section>
      <section id="services" className="relative bg-gray-50 py-24 px-4">
        <div className="container mx-auto">
          <PageTitle heading="Nos services en detail">
            Apprenez-en un peu plus sur ce que nous proposons
          </PageTitle>
          <div className="mx-auto mt-20 mb-15 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.3)] transition-transform transform hover:scale-105 py-10 px-8"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section id="faq" className="relative bg-gray-50 py-24 px-14">
        <div className="container mx-auto">
              <FaqComponent />
        </div>
      </section>
      <section className="relative bg-gray-50 py-24 px-4">
        <div className="container mx-auto">
          <PageTitle heading="Vous voulez travailler avec nous?">
            Completez ce formulaire et nous vous reviendrons dans les 24h qui suivent.
          </PageTitle>
          <ContactForm/>
          </div>
      </section>
      <section id="aPropos" className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle heading="Nos fondateurs">
          Notre entreprise est fondée par des jeunes visionnaires et travailleurs, qui s'efforcent de relever les défis les plus ardus en proposant des solutions innovantes pour répondre aux besoins de notre clientèle.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-3">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-lg fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
      <ScrollToTop />
    </>
  );
}

export default Home;
