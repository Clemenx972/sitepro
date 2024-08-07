import colorToggle from "@/components/colorTogle";
import { useEffect, useState } from "react";

const Contact = () => {
  const [colorState, setColorState] = useState(colorToggle.state);
  useEffect(() => {
    const interval = setInterval(() => {
      setColorState(colorToggle.state);
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {colorState ? (
        <div className='sm:container sm:border-4 sm:border-secondary mt-16'>
          <h4 className='mt-4 mb-2 m:mb-10 font-extrabold text-2xl text-secondary text-center'>
            Me contacter
          </h4>
          <form
            action='https://api.web3forms.com/submit'
            method='POST'
            id='contact'
            className='text-center w-full'
          >
            <div>
              <div>
                <input type='hidden' name='access_key' value='MY_MAIL_KEY' />
                <div className='justify-center pt-4 grid'>
                  <label className='text-secondary'>Votre Nom</label>
                  <input
                    type='text'
                    name='sujet'
                    placeholder='Etienne Steven'
                    className=' w-full h-full sm:w-[500px] sm:h-[50px] flex-col gap-5  font-medium pl-[5px] rounded-[50px] border-2 border-gray-800 hover:border-orange-600 mb-4 rounded-lg;'
                    required
                  />
                </div>
                <div className='pt-2 justify-center grid'>
                  <label className='text-secondary'>Votre adresse mail</label>
                  <input
                    type='email'
                    name='email'
                    placeholder='prenom.nom@gmail.com'
                    className='flex-col gap-5 w-full h-full sm:w-[500px] sm:h-[50px] mb-4 font-medium pl-[5px] rounded-[50px] border-2 border-gray-800 hover:border-orange-600 rounded-lg;'
                    required
                  />
                </div>
                <div className='pt-4 justify-center grid'>
                  <label className='text-secondary'>Votre Sujet</label>
                  <input
                    type='text'
                    name='sujet'
                    placeholder='Recrutement, Projet, Autre...'
                    className='flex-col gap-5 w-full h-full sm:w-[500px] sm:h-[50px] font-medium pl-[5px] rounded-[50px] bg-gray-[#DCDCDC] border-2 border-gray-800 hover:border-orange-600 mb-4 rounded-lg; block;'
                    required
                  />
                </div>
                <div className='justify-center grid'>
                  <label className='text-secondary'>Votre message</label>
                  <textarea
                    name='message'
                    placeholder='Salut !'
                    className='pt-3 gap-5 w-full h-full sm:w-[500px] sm:h-[50px] font-medium pl-[5px] rounded-[50px] border-2 border-gray-800 hover:border-orange-600 rounded-lg ;'
                    required
                  ></textarea>
                </div>
                <div className='ml-4 pt-4 grid justify-center sm:justify-left'>
                  <button
                    type='submit'
                    className='bg-blue-800 hover:bg-blue-950 font-medium w-28'
                  >
                    Envoyer
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className='sm:container sm:border-4 sm:border-coral mt-16'>
          <h4 className='mt-4 mb-2 m:mb-10 font-extrabold text-2xl text-coral text-center'>
            Me contacter
          </h4>
          <form
            action='https://api.web3forms.com/submit'
            method='POST'
            id='contact'
            className='text-center w-full'
          >
            <div>
              <div>
                <input type='hidden' name='access_key' value='MY_MAIL_KEY' />
                <div className='justify-center pt-4 grid'>
                  <label className=''>Votre Nom</label>
                  <input
                    type='text'
                    name='sujet'
                    placeholder='Etienne Steven'
                    className=' w-full h-full sm:w-[500px] sm:h-[50px] flex-col gap-5  font-medium pl-[5px] rounded-[50px] border-2 border-gray-800 hover:border-primary mb-4 rounded-lg;'
                    required
                  />
                </div>
                <div className='pt-2 justify-center grid'>
                  <label className=''>Votre adresse mail</label>
                  <input
                    type='email'
                    name='email'
                    placeholder='prenom.nom@gmail.com'
                    className='flex-col gap-5 w-full h-full sm:w-[500px] sm:h-[50px] mb-4 font-medium pl-[5px] rounded-[50px] border-2 border-gray-800 hover:border-primary rounded-lg;'
                    required
                  />
                </div>
                <div className='pt-4 justify-center grid'>
                  <label className=''>Votre Sujet</label>
                  <input
                    type='text'
                    name='sujet'
                    placeholder='Recrutement, Projet, Autre...'
                    className='flex-col gap-5 w-full h-full sm:w-[500px] sm:h-[50px] font-medium pl-[5px] rounded-[50px] bg-gray-[#DCDCDC] border-2 border-gray-800 hover:border-primary mb-4 rounded-lg; block;'
                    required
                  />
                </div>
                <div className='justify-center grid'>
                  <label className=''>Votre message</label>
                  <textarea
                    name='message'
                    placeholder='Salut !'
                    className='pt-3 gap-5 w-full h-full sm:w-[500px] sm:h-[50px] font-medium pl-[5px] rounded-[50px] border-2 border-gray-800 hover:border-primary rounded-lg ;'
                    required
                  ></textarea>
                </div>
                <div className='ml-4 pt-4 grid justify-center sm:justify-left'>
                  <button
                    type='submit'
                    className='bg-blue-800 hover:bg-blue-950 font-medium w-28'
                  >
                    Envoyer
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Contact;

{
  /* <div className='ml-8'>
Pour envoyer un mail, cliquez{" "}
<a
  className='hover:text-bg-blue-950'
  href='mailto:setienne97231@gmail.com'
>
  ICI ou utilisez le formulaire ci-dessous :
</a>{" "}
</div> */
}
