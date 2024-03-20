const Contact = () => {
  return (
    <>
      <a
        href='mailto:setienne97231@gmail.com'
        className='bg-blue-500 border rounded-full ml-6 w-26 px-4 py-2 hover:bg-blue-800'
      >
        Cliquez ici pour envoyer un mail
      </a>
      <div className='ml-8'>Ou utilisez l&apos;emplacement ci-dessous :</div>
      <form action='https://api.web3forms.com/submit' method='POST'>
        <div className='bg-slate-400 text-center'>
          <input
            type='hidden'
            name='access_key'
            value='9ee50700-76c3-4780-bf66-a56bc8fbe4f7'
          />

          <div className='ml-8 pt-2 '>
            <label className='ml-6'>Votre adresse mail</label>
            <input
              type='email'
              name='email'
              placeholder='prenom.nom@gmail.com'
              className='flex-col gap-5 w-[400px] h-[50px] font-medium pl-[25px] rounded-[50px] border-[none] rounded-lg;'
              required
            />
          </div>
          <div className='ml-8 pt-4'>
            <label className='ml-6'>Votre Sujet</label>
            <input
              type='text'
              name='sujet'
              placeholder='Recrutement, Projet, Autre...'
              className='flex-col gap-5 w-[400px] h-[50px] font-medium pl-[25px] rounded-[50px] bg-gray-[#DCDCDC] border-[none] mb-8 rounded-lg; block;'
              required
            />
          </div>
          <div className='ml-8'>
            <label className='ml-6'>Votre message</label>
            <textarea
              name='message'
              placeholder='Salut !'
              className='pt-4 gap-5 w-[400px] h-[100px] font-medium pl-[25px] rounded-[50px] border-[none] rounded-lg ;'
              required
            ></textarea>
          </div>
          <div className='ml-6 pt-4'>
            <button
              type='submit'
              className='bg-blue-800 hover:bg-blue-950 font-medium w-28'
            >
              Envoyer
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;

{
  /*.contact-inputs {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
  height: 50px;
  border: none;
  outline: none;
  padding-left: 25px;
  font-weight: 500;
border-radius: 50px;*/
}
