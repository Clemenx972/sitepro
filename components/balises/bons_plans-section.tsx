import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const jobsSequence = [
    "CHANGER VOTRE VIE ?", 1000,
    "AUGMENTER VOTRE POUVOIR D'ACHAT ?", 1000,
    "PROFITER DE VACANCES DUREMENT MERITEES ?", 1000,
];


export default function bons_plans(){
    return (
        <>
      <div className="grid grid-cols-1 sm:grid-cols-12">
      <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
      >
          <h6 className="text-black mb-4 sm:text-4xl lg:text-7xl lg:leading-normal font-bold ml-14">
              <span className='text-2xl text-blue-700 sm:text-4xl lg:text-7xl lg:leading-normal font-bold'>
              Voulez-vous : 
              </span>
              <br></br>
              <TypeAnimation
                  sequence={jobsSequence}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  style={{ fontSize: "0.61em", color: "#1716ef" }}
              />
          </h6>
          <p className="flex text-2xl text-black  mb-6 ml-14 mt-12 mr-14">   
          Ce site est entièrement dédié à une méthode pour voyager en faisant des économies.
          <br></br>Après tout, qui ne voudrait pas économiser tout en profitant de divertissement aux meilleurs prix ?
          </p><br></br></motion.div></div> 
          <h6 className='text-sky-500 font-bold unterline-offset-2 text-3xl mb-6 ml-14'>Le problème du monde actuel !</h6>    
          <p className='flex text-2xl text-black  mb-6 ml-14 mr-14 '>
          Avec l'inflation qui détériorre petit à petit le pouvoir d'achat des français et nous force à se priver de certains plaisir de la vie,
           les familles sont contraintes à réduire leurs budgets de loisir. Je ne vous souhaite pas cela. Dans cette démarche,
            je rédige ce site dont le but est de vous expliquer comment VOUS aider à profiter de cette vie qui est la vôtre sans se mettre 
            dans des situations difficiles. 
            <br></br><br></br>Pour ce faire, je vais vous présenter la plateforme Travel Advantage !
            En effet, Travel Advantage est une plateforme regroupant les meilleures offres disponible sur le marché. 
            </p>
            <h6 className='text-sky-500 font-bold text-3xl mb-6 ml-14'>Comment est-ce possible ?</h6>
          <p className='flex text-2xl text-black  mb-6 ml-14 mr-14 justify-between'>
          Contrairement à des applications de réservation comme Booking ou TripAdvisor qui se font une marge de profit importante
           à cause du coût de publicité, Travel Advantage se démarque par son envie de permettre un voyage ou des vacances à petit prix. 
           Afin d'obtenir des résultats différents de ceux que nous connaissons déjà, Travel Advantage a choisi d'adopter un modèle économique
            beaucoup plus avantageux pour nous en tant que clients, il s'agit d'un système d'abonnement. 
          </p>
          <h6 className='text-sky-500 font-bold text-3xl mb-6 ml-14'>Contenu de la plateforme </h6>
          <p className='flex text-2xl text-black  mb-6 ml-14 mr-14 justify-between'>
          Cette plateforme offre de nombreux avantages grâce à son fonctionnement basé sur trois piliers :
            Le premier pilier est que La plateforme vous permet de réaliser des économies sur les hôtels, les vols, les transferts, les croisières, les séjours et les activités. Elle propose également un onglet forfait comprenant des offres de vols et d'hôtels, ainsi qu'une section dédiée au shopping en ligne.
            Le deuxième pilier concerne les avantages exclusifs offerts aux membres, tels que des crédits de voyage, des points de fidélité et une garantie de 150% du prix le plus bas pour les hôtels. Cette garantie vous permet de recevoir un remboursement de 150% de la différence si vous trouvez un hôtel moins cher ailleurs, sous réserve des conditions de la plateforme Travel Advantage.
            Le troisière pilier s'agit des Life Experiences, le produit phare de la plateforme Travel Advantage, que nous examinerons plus en détail par la suite
            </p>
            <h6 className='text-sky-500 font-bold text-3xl mb-6 ml-14'>Système d'abonnement </h6>
            <p className='flex text-2xl text-black  mb-6 ml-14 mr-14 justify-between'>
            Travel Advantage propose 3 types d'abonnements : - VIP, Plus et Elite - qui vous permettront de bénéficier d'un nombre croissant d'avantages.            
            </p>
            <span className='justify-items-center'>
                <img src='/images/abotravel.png' alt="Abonnements" max-width={70} className='ml-14 mr-14'/>
            </span><br></br>
            <p className='flex text-3xl text-sky-700 font-bold mb-6 ml-14 mr-14 justify-between'>                
            Mais ce n'est pas tout !</p>
            <p className='flex text-2xl text-black mb-6 ml-14 mr-14 justify-between'>En plus des réductions présentes sur notre site il y a des méthodes pour encore plus accentuer les économies, et cela s'appelle 
                les crédits voyage. À chaque réservation effectuée sur la plateforme, vous cumulez des crédits voyage. Ces crédits vous permettent de réaliser 
                des économies encore plus significatives sur vos réservations futures. Ceux-ci n'expirent jamais et peuvent être utilisés à tout moment. 
                De plus, l'application propose un système de partage intéressant. Lorsque vous réservez un hôtel, la plateforme vous offre la possibilité 
                de gagner 30% de crédits voyage supplémentaires en partageant simplement votre réservation sur le réseau social Facebook.</p><br></br>
                <p className='flex text-2xl text-black mb-6 ml-14 mr-14 justify-between'>Pour ce qu'il s'agit de la formule Elite elle présente encore un avantage supplémentaire (Il faut bien qu'on vous remercie de la confiance !).
                Il s'agit de la présence de points de fidélité, points qui peuvent être utilisés pour effectuer des économies supplémentaires (et oui, encore!).
                 Les points de fidélité sont cumulés chaque mois grâce à l'abonnement Élite et n'expirent jamais. (1 point de fidélité = 1€)</p>
            <h6 className='text-sky-500 font-bold text-3xl mb-6 ml-14'>Conclusion </h6>
            <p className='flex text-2xl text-black mb-6 ml-14 mr-14 justify-between'>
            Qu'attendez-vous pour passer à l'action pour changer votre vie ainsi que votre potentiel de découverte du monde et d'activités extraordinaires ?
            Rejoignez-nous dès maintenant sur TravelAdvantage : 
            </p>
            <br></br>
            <h6 className='text-sky-500 font-bold text-3xl mb-6 ml-14'>Tips </h6>
            <p className='flex text-2xl text-black mb-6 ml-14 mr-14 justify-between'>De vous à moi, je vous recommande la version Plus ou éventuellement la Elite si vous êtes ambicieux, 
            car vous pourrez la partager avec un ami ou membre de la famille et bénéficier de tous les avantages de ces abonnements pour la moitié du prix ;)</p>
            <br></br>
            <p className='flex text-2xl text-black mb-6 ml-14 mr-14 justify-between'> J'espère de tout coeur recevoir la nouvelle concernant votre voyage dans votre pays de rêve !</p><br></br>
            <p className='flex text-2xl font-bold text-black ml-14 mr-14 justify-between'>À bientôt !</p><br></br>
            
            </>
      
);
}

{/* // sm:text-lg  lg:text-xl */}