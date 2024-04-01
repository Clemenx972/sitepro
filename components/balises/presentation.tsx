import React from "react";
const Presentation = () => {
  return (
    <section className='lg:py-16'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div
          className='col-span-6 place-self-center text-center sm:text-left justify-self-center'
          style={{ transform: "none" }}
        >
          <h1 className='text-7xl font-bold'>Steven Etienne</h1>
          <h2 className='text-3xl font-semibold'>Etudiant Cybersécurité </h2>
          <h3 className='mt-12'>
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
      </div>
    </section>
  );
};

export default Presentation;
