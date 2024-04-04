const Contact = () => {
  return (
    <>
      <h4 className='mt-6 mb-2 m:mb-10 text-4x1 text-center font-extrabold text-2xl'>
        Me contacter
      </h4>
      <form
        action='https://api.web3forms.com/submit'
        method='POST'
        id='contact'
        className='bg-slate-400 text-center w-full'
      >
        <div>
          <div>
            <input
              type='hidden'
              name='access_key'
              value='9ee50700-76c3-4780-bf66-a56bc8fbe4f7'
            />
            <div className='justify-center pt-4 grid'>
              <label className='md:ml-6'>Votre Nom</label>
              <input
                type='text'
                name='sujet'
                placeholder='Etienne Steven'
                className=' w-full h-full flex-col gap-5  font-medium pl-[25px] rounded-[50px] bg-gray-[#DCDCDC] border-[none] mb-4 rounded-lg; block;'
                required
              />
            </div>
            <div className='pt-2 justify-center grid'>
              <label className='md:ml-6'>Votre adresse mail</label>
              <input
                type='email'
                name='email'
                placeholder='prenom.nom@gmail.com'
                className='flex-col gap-5 w-full h-full gap-5 mb-4 font-medium pl-[25px] rounded-[50px] border-[none] rounded-lg;'
                required
              />
            </div>
            <div className='pt-4 justify-center grid'>
              <label className='md:ml-6'>Votre Sujet</label>
              <input
                type='text'
                name='sujet'
                placeholder='Recrutement, Projet, Autre...'
                className='flex-col gap-5 w-full h-full  font-medium pl-[25px] rounded-[50px] bg-gray-[#DCDCDC] border-[none] mb-4 rounded-lg; block;'
                required
              />
            </div>
            <div className='justify-center grid'>
              <label className='ml-6'>Votre message</label>
              <textarea
                name='message'
                placeholder='Salut !'
                className='pt-4 gap-5 w-full h-full  font-medium pl-[25px] rounded-[50px] border-[none] rounded-lg ;'
                required
              ></textarea>
            </div>
            <div className='ml-6 pt-4 grid justify-center'>
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
    </>
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
