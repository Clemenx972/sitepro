import React from 'react'

const Experiences = () => {
  return (
    <><section id='experiences'>
    <div className="hidden sm:block w-full">
        <div className="w-full">
            <h4 className='mb-6 sm:mb-10 text-4x1 text-center font-extrabold text-2xl'>Expériences</h4>
            <div className=' ml-72 mr-72 justify-between'>
                <h5 className='flex font-bold text-1x1 justify-between'>
                  <div>Diplômes :
                    <div className='font-semibold'>(Théorie)</div>
                    <ul className='flex flex-col gap-2 mt-3 font-normal'>
                    <li className='flex items-center gap-1 text-lg'>
                        
                        <span className='text-1xl'>Bac Général</span> 
                        <span>(Mathématiques, Numérique et Sciences Informatiques)</span> 
                    </li>
                        
                    <li className='flex items-center gap-1 text-lg'>
                        
                        <span className='text-1xl'>BTS Systèmes Numériques Option Informatique et Réseaux</span>                           
                    </li>

                    <li className='flex items-center gap-1 text-lg'>
                        
                        <span className='text-1xl'>Licence Pro Métier des Réseaux Informatiques et Télécommunications</span>                           
                    </li>
                </ul></div>
                  <div>Entreprises :
                    <div className='font-semibold'>(Pratique)</div>
                    <ul className='flex flex-col gap-2 mt-3 font-normal'>
                    <li className='flex items-center gap-1 text-lg'>
                        
                        <span className='text-1xl'>Stage de 3ème <a href = 'https://www.villes-internet.net/structs/57425fa3218c78dd964b4195'>Cyberbase Robert</a></span> 
                    </li>
                        
                    <li className='flex items-center gap-1 text-lg'>
                        
                        <span className='text-1xl'>Stage de 1ème année de BTS SN</span> 
                        <span><a href='https://groupe-acoma.com'>Groupe Acoma</a></span>                           
                    </li>

                    <li className='flex items-center gap-1 text-lg'>
                        
                        <span className='text-1xl'>Alternance Licence Pro <a href='https://www.cgss-martinique.fr'>CGSSM</a></span> 
                                                   
                    </li>
                    </ul>
                  </div>
                </h5>
                
                
            </div>
        </div>    
    </div>
    </section>
    </>
  )
}

export default Experiences