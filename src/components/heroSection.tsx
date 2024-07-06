export default function HeroSection() {
  return (
    <section className='lg:py-16'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left justify-self-center sm:justify-self-start'>
          <h1 className='text-coral mb-4 text-2xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
              Steven Etienne
            </span>
            <br></br>
            <span>Etudiant Cybersécurité</span>
          </h1>

          <p className='text-lavender text-base sm:text-lg mb-6 lg:text-xl'>
            Passionné par l'informatique et toujours à la recherche de nouvelles
            connaissances en cybersécurité.
          </p>

          <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-secondary to-primary hover:bg-slate-200 text-coral'>
              <a href='#contact'>Contactez moi</a>
            </button>
            <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-secondary to-primary hover:bg-slate-800 text-coral mt-3'>
              <span className='block bg-darkpurple hover:bg-slate-800 rounded-full px-5 py-2'>
                {/* TODO: mettre le bon cv */}
                <a href='/CV_STEVEN_ENTREPRISE_2024_FINAL.pdf' target='_blank'>
                  Télécharger CV
                </a>
              </span>
            </button>
          </div>
        </div>
        <div className='col-span-5 w-full sm:w-fit text-2xl text-center sm:text-justify place-self-center text-coral mt-4 lg:mt-0'>
          Salut !<br />
          Je suis un jeune étudiant passionné d'informatique, je découvre chaque
          jour de nouvelles technologies notamment en développement web et
          applicatif. Je m'intéresse aussi au développement personnel afin de
          devenir chaque jour meilleur que le précédent.
        </div>
      </div>
    </section>
  );
}
