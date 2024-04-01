import React from "react";
const Presentation = () => {
  return (
    <section className='lg:py-16'>
      <div className='grid grid-cols-2 sm:grid-cols-12'>
        <div
          className='col-span-6 place-self-center text-center sm:text-left justify-self-center'
          style={{ transform: "none" }}
        >
          <h1 className='text-7xl font-bold'>Steven Etienne</h1>
          <h2 className='text-3xl font-semibold mt-4'>
            Etudiant Cybersécurité{" "}
          </h2>

          <h3 className='mt-10'>
            {" "}
            <button>
              <a href='./CV_STEVEN_ETIENNE.pdf' download>
                {" "}
                Télécharger CV
              </a>
            </button>{" "}
            <button>
              {" "}
              <a href='#contact'>Contactez Moi</a>
            </button>
          </h3>
          {/* ajoute une photo sale chien */}
        </div>
        <div className='text-xl col-span-6 place-self-center text-justify justify-self-center sm:text-justify mt-4'>
          Salut !<br></br> Je suis un jeune étudiant passioné d'informatique qui
          s'engage quotidiennement dans la découverte de nouvelles pratiques,
          quelles soient axées sur du développement web ou applicatif. Je porte
          également un intérêt au développement personnel afin de devenir chaque
          jour meilleur que le prércédent.
        </div>
      </div>
    </section>
  );
};

export default Presentation;
