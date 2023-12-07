import React, {Component} from 'react'
const Competences = () => {
  return (
    <>
    <div className="hidden sm:block w-full">
        <div className="w-full">
            <h4 className='text-2xl mb-6 sm:mb-10 text-4x1 text-center font-extrabold '>Compétences</h4>
            <div className='flex justify-center'>
                <div className='flex flex-col items-start pl-44 mr-48'>
                    <h5 className='text-xl h-4 font-bold'>Design</h5>
                        <ul className='flex flex-col items-start gap-2 mt-10'>
                                <li className='flex items-center gap-1 text-lg '>
                                    <span>
                                    <img src='/images/icones/css.png' alt="CSS" height={30} width={20}/>
                                    </span>

                                    <span className='text-1xl'>css</span>     
                                </li>
                                    
                                <li className='flex items-center gap-1 text-lg'>
                                    <span>
                                    <img src='/images/icones/tailwind.png' alt="TailWind" height={30} width={20}/>
                                    </span>
                                    
                                    <span className='text-1xl'>tailwind</span>                           
                                </li>
                        </ul>
                </div>
                <div className='flex flex-col items-start mr-48'>
                        
                    <h5 className='text-xl h-4 font-bold'>Front-end</h5>
                        <ul className='flex flex-col gap-2 mt-10'>
                                <li className='flex items-center gap-1 text-lg'>
                                    <span>
                                    <img src='/images/icones/html.png' alt="HTML" height={30} width={20}/>
                                    </span>

                                    <span className='text-xl'>html</span>     
                                </li>
                                    
                                <li className='flex items-center gap-1 text-lg'>
                                    <span>
                                    <img src='/images/icones/react.png' alt="React" height={30} width={20}/>
                                    </span>
                                    
                                    <span className='text-1xl'>react</span>                           
                                </li>

                                <li className='flex items-center gap-1 text-lg'>
                                    <span>
                                    <img src='/images/icones/javacript.png' alt="JavaScript" height={30} width={20}/>
                                    </span>
                                    
                                    <span className='text-1xl'>JavaScript</span>                           
                                </li>

                                <li className='flex items-center gap-1 text-lg'>
                                    <span>
                                    <img src='/images/icones/typescript.png' alt="TypeScript" height={30} width={20}/>
                                    </span>
                                    
                                    <span className='text-1xl'>TypeScript</span>                           
                                </li>
                        </ul>
                    </div>
                    <div className='flex flex-col items-start mr-48'>
                        <h5 className='text-xl h-4 font-bold'>Back-end</h5>
                        <ul className='flex flex-col gap-2 mt-10'>
                                <li className='flex items-center gap-1 text-lg'>
                                    <span>
                                    <img src='/images/icones/c++.png' alt="C++" height={30} width={20}/>
                                    </span>

                                    <span className='text-xl'>c++</span>     
                                </li>
                                    
                                <li className='flex items-center gap-1 text-lg'>
                                    <span>
                                    <img src='/images/icones/python.jpg' alt="Python" height={30} width={20}/>
                                    </span>
                                    
                                    <span className='text-1xl'>python</span>                           
                                </li>

                                <li className='flex items-center gap-1 text-lg'>
                                    <span>
                                    <img src='/images/icones/javacript.png' alt="JavaScript" height={30} width={20}/>
                                    </span>
                                    
                                    <span className='text-1xl'>mysql</span>                           
                                </li>

                                
                        </ul>
                    </div>

                    <div className='flex flex-col items-start mr-48'>
                        <h5 className='text-xl h-4 font-bold'>Autre</h5>
                        <ul className='flex flex-col gap-2 mt-10'>
                                <li className='flex items-center gap-1 text-lg'>
                                    <span>
                                    <img src='/images/icones/githupng' alt="GitHub" height={30} width={20}/>
                                    </span>

                                    <span className='text-xl'>github</span>     
                                </li>
                                    
                                <li className='flex items-center gap-1 text-lg'>
                                    <span>
                                    <img src='/images/icones/vercel.png' alt="Vercel" height={30} width={20}/>
                                    </span>
                                    
                                    <span className='text-1xl'>vercel</span>                           
                                </li>

                               
                        </ul>
                    </div>
                </div>


            </div>

        </div>


    </>
  )
}

export default Competences