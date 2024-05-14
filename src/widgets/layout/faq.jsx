import React from "react";
import Faq from "react-faq-component";

const data = {
    title: "FAQ (Foire aux Questions)",
    rows: [
        {
            title: "Comment puis-je contacter le support client ?",
            content: `Pour toute question ou demande d'assistance, vous pouvez nous contacter via notre formulaire de contact sur notre site web, nous envoyer un email directement à support@ellekinnovations.com, ou nous appeler au numéro fourni sur notre page de contact. Notre équipe de support est disponible pour vous aider 24/7.`,
        },
        {
            title: "Quels sont les délais de livraison pour vos projets ?",
            content: `Les délais de livraison varient en fonction de la complexité et de l'envergure du projet. Après la phase initiale de consultation, notre équipe vous fournira un calendrier de projet détaillé, incluant les étapes clés et les livrables. Nous nous engageons à respecter ces délais tout en assurant la plus haute qualité de notre travail.`,
        },
        {
            title: "Ëllëk Innovations offre-t-elle des services personnalisés ?",
            content: `Absolument. Nous croyons que chaque projet est unique, et nous travaillons de près avec nos clients pour développer des solutions sur mesure qui répondent précisément à leurs besoins. Que ce soit pour le développement d'applications, la transformation numérique, ou le conseil en stratégie IT, nos solutions sont conçues pour s'adapter à vos exigences spécifiques.`,
        },
        {
            title: "Comment puis-je obtenir un devis pour mon projet ?",
            content: `Pour obtenir un devis, veuillez remplir notre formulaire de demande de devis en ligne avec autant de détails que possible concernant votre projet. Un membre de notre équipe vous contactera sous peu pour discuter de vos besoins plus en détail et vous fournir une estimation personnalisée.`,
        },
        {
            title: "Quelle est votre politique de confidentialité et de sécurité des données ?",
            content: `Chez Ëllëk Innovations, la sécurité des données et la confidentialité de nos clients sont notre priorité absolue. Nous adhérons aux meilleures pratiques et normes de l'industrie pour protéger toutes les informations et données traitées dans le cadre de nos projets. Pour plus de détails, veuillez consulter notre politique de confidentialité disponible sur notre site web.`,
        },
    ],
};


const styles = {
    bgColor: '#ffffff', // Fond blanc
    titleTextColor: "#0999EB", // Couleur de texte pour le titre en bleu indigo
    rowTitleColor: "#1F2937", // Couleur de texte pour les titres des éléments en gris foncé
    rowContentColor: "#4B5563", // Couleur de texte pour le contenu en gris
    arrowColor: "#0999EB", // Couleur des flèches en bleu indigo
};

const config = {
    animate: true, // Activer les animations
};

export const FaqComponent = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', padding: '80px 24px', backgroundColor: '#ffffff', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px', margin: 'auto' }}>
            <div style={{ width: '100%', maxWidth: '960px' }}> {/* Ajustez la valeur de maxWidth selon vos besoins */}
                <Faq
                    data={data}
                    styles={styles}
                    config={config}
                />
            </div>
        </div>
    );
};
