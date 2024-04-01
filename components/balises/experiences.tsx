const Experiences = () => {
  return (
    <>
      <section id='experiences'>
        <div className=' w-full'>
          <div className='w-full md:mr-10 mr-0'>
            <h4 className='mb-6 sm:mb-10 text-4x1 text-center font-extrabold text-2xl'>
              Expériences
            </h4>
            <div className='justify-between'>
              <h5 className='flex font-bold text-1x1 justify-center'>
                <div className='text-center mr-6'>
                  Diplômes :<div className='font-semibold'>(Théorie)</div>
                  <ul className='flex flex-col gap-2 mt-3 font-normal'>
                    <li className='flex items-center gap-1 text-lg'>
                      <span className='text-1xl'>
                        Licence Pro Métier des Réseaux Informatiques et
                        Télécommunications
                      </span>
                    </li>

                    <li className='flex items-center gap-1 text-lg'>
                      <span className='text-1xl'>
                        BTS Systèmes Numériques Option Informatique et Réseaux
                      </span>
                    </li>

                    <li className='flex items-center gap-1 text-lg'>
                      <span className='text-1xl'>
                        Bac Général (Mathématiques, Numérique et Sciences
                        Informatiques)
                      </span>
                    </li>
                  </ul>
                </div>
                <div className='text-center ml-6'>
                  Entreprises :<div className='font-semibold'>(Pratique)</div>
                  <ul className='flex flex-col gap-2 mt-3 font-normal'>
                    <li className='flex items-center gap-1 text-lg'>
                      <span className='text-1xl'>
                        Alternance Licence Pro MRIT{" "}
                        <a
                          href='https://www.cgss-martinique.fr'
                          className='hover:text-orange-500'
                          target='_blank'
                        >
                          CGSSM
                        </a>
                      </span>
                    </li>

                    <li className='flex items-center gap-1 text-lg'>
                      <span className='text-1xl'>
                        Stage de 1ème année de BTS SN IR{" "}
                        <a
                          href='https://groupe-acoma.com'
                          className='hover:text-orange-500'
                          target='_blank'
                        >
                          Groupe Acoma
                        </a>
                      </span>
                    </li>

                    <li className='flex items-center gap-1 text-lg'>
                      <span className='text-1xl '>
                        Stage de 3ème{" "}
                        <a
                          href='https://www.villes-internet.net/structs/57425fa3218c78dd964b4195'
                          className='hover:text-orange-500'
                          target='_blank'
                        >
                          Cyberbase Robert
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experiences;
