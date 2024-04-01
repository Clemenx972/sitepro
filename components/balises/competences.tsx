import React, { Component } from "react";
const Competences = () => {
  return (
    <>
      <section id='competences'>
        <div className='items-center sm:py-16 lg:px-16'>
          <div className='mt-4 md:mt-0 h-full w-full'>
            <h4 className='text-2xl mb-6 sm:mb-10 text-4x1 text-center font-extrabold '>
              Compétences
            </h4>
            <div className='grid grid-cols-3'>
              <div className='grid'>
                <h5 className='text-l font-bold text-center'>Front-end</h5>
                <ul className='grid gap-2 mt-12 justify-center'>
                  <li className='flex items-center gap-1 text-lg'>
                    <span>
                      <img
                        src='/images/icones/html.png'
                        alt='HTML'
                        height={30}
                        width={20}
                      />
                    </span>

                    <span className='text-xl'>html</span>
                  </li>

                  <li className='flex items-center gap-1 text-lg'>
                    <span>
                      <img
                        src='/images/icones/react.png'
                        alt='React'
                        height={30}
                        width={20}
                      />
                    </span>

                    <span className='text-1xl'>react</span>
                  </li>

                  <li className='flex items-center gap-1 text-lg'>
                    <span>
                      <img
                        src='/images/icones/javascript.png'
                        alt='JavaScript'
                        height={30}
                        width={20}
                      />
                    </span>

                    <span className='text-1xl'>JavaScript</span>
                  </li>

                  <li className='flex items-center gap-1 text-lg'>
                    <span>
                      <img
                        src='/images/icones/typescript.png'
                        alt='TypeScript'
                        height={30}
                        width={20}
                      />
                    </span>

                    <span className='text-1xl'>TypeScript</span>
                  </li>

                  <li className='flex items-center gap-1 text-lg '>
                    <span>
                      <img
                        src='/images/icones/css.png'
                        alt='CSS'
                        height={30}
                        width={20}
                      />
                    </span>

                    <span className='text-1xl'>css</span>
                  </li>

                  <li className='flex items-center gap-1 text-lg'>
                    <span>
                      <img
                        src='/images/icones/tailwind.png'
                        alt='TailWind'
                        height={30}
                        width={20}
                      />
                    </span>

                    <span className='text-1xl'>tailwind</span>
                  </li>
                </ul>
              </div>
              <div className='grid'>
                <h5 className='text-l font-bold text-center'>Back-end</h5>
                <ul className='grid justify-center'>
                  <li className='flex items-center gap-1 text-lg'>
                    <span>
                      <img
                        src='/images/icones/c++.png'
                        alt='C++'
                        height={30}
                        width={20}
                      />
                    </span>

                    <span className='text-xl'>c++</span>
                  </li>

                  <li className='flex items-center gap-1 text-lg'>
                    <span>
                      <img
                        src='/images/icones/python.jpg'
                        alt='Python'
                        height={30}
                        width={20}
                      />
                    </span>

                    <span className='text-1xl'>python</span>
                  </li>

                  <li className='flex items-center gap-1 text-lg'>
                    <span>
                      <img
                        src='/images/icones/mysql.png'
                        alt='MySQL'
                        height={30}
                        width={20}
                      />
                    </span>

                    <span className='text-1xl'>mysql</span>
                  </li>
                </ul>
              </div>

              <div className='grid'>
                <h5 className='text-l font-bold justify-center text-center'>Autre</h5>
                <ul className='grid gap-2 mt-12 justify-center'>
                  <li className='flex items-center gap-1 text-lg'>
                    <span>
                      <img
                        src='/images/icones/github.png'
                        alt='GitHub'
                        height={30}
                        width={20}
                      />
                    </span>

                    <span className='text-xl'>github</span>
                  </li>

                  <li className='flex items-center gap-1 text-lg'>
                    <span>
                      <img
                        src='/images/icones/vercel.png'
                        alt='Vercel'
                        height={30}
                        width={20}
                      />
                    </span>

                    <span className='text-1xl'>vercel</span>
                  </li>
                  <li className='flex items-center gap-1 text-lg'>
                    <a
                      href='/Steven_ETIENNE-Routing Switch-certificate CISCO.pdf'
                      className='text-xl'
                      target='_blank'
                    >
                      <span>
                        <img
                          src='/images/icones/cisco_ccna.png'
                          alt='Cisco'
                          height={30}
                          width={20}
                        />
                      </span>
                      CCNAV
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Competences;
