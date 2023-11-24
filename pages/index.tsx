import bons_plans from '@/components/sections/bons_plans-section';
import Navbar_Section from '@/components/sections/navbar-section';

import '@/app/globals.css';
import Footer_Section from '@/components/sections/footer-section';

export default function Home() {
  return (
    <>
      <header>
        <title>Mon site</title>
      </header>

       <Navbar_Section />
      <div>
              
            
            <h1>Salut !</h1>
            <h4>Je me présente : </h4>
            <h3>Je m'appelle Steven Etienne, j'ai actuellement 20 ans et je suis un étudiant en informatique, plus particulièrement sur les systèmes informatiques et les réseaux</h3>
            <h3>Actuellement en possession d'un BTS Systèmes Numériques, je poursuis dans la voie de la cybersécurité dans une Licence Professonnelle Métiers et Réseaux Informatiques et Télécommunications au centre de formation Skillfor en Martinique</h3>
            
            <h2>Our Story</h2>
            <p>
              Our journey began in 2010 with a simple idea: to create a platform that caters to the needs of our customers. Over the years, we have grown exponentially, thanks to our loyal customers and hardworking team. Today, we are proud to say that we have served thousands of customers and have become a trusted name in the industry.
            </p>

            <h2>Our Mission</h2>
            <p>
              Our mission is to provide high-quality products and services that exceed our customers' expectations. We believe in the power of innovation and strive to improve our products and services continuously. We are committed to delivering exceptional customer service and ensuring that our customers have a great experience with us.
            </p>

            <h2>Our Team</h2>
            <p>
              Our team is composed of dedicated professionals who are passionate about what they do. They work tirelessly to ensure that our customers receive the best service possible. Our team's expertise and commitment to excellence are what sets us apart from our competitors.
            </p>

            <h2>Our Products and Services</h2>
            <p>
              We offer a wide range of products and services to cater to the diverse needs of our customers. From the latest tech gadgets to professional consulting services, we have something for everyone. We are constantly updating our product range to include the latest and most innovative products in the market.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions or need further information, please don't hesitate to contact us. Our customer service team is always ready to assist you. We look forward to hearing from you!
            </p>
    <Footer_Section />
    </div>      
    </>
  );
}