import colorToggle from "@/components/colorTogle";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [colorState, setColorState] = useState(colorToggle.state);
  useEffect(() => {
    const interval = setInterval(() => {
      setColorState(colorToggle.state);
    }, 100);
    return () => clearInterval(interval);
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [entry, setEntry] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e:any) => {
    e.preventDefault();
    fetch("https://www.formbackend.com/f/5e76ddb8a85be691", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ name, email, entry }),
    })
    .then((response) => {
      if (response.status === 422) {
        throw new Error("Validation error");
      } else if (!response.ok) {
        throw new Error("Something went wrong");
      }

      return response.json();
    })
    .then(data => {
      // You can even use `data` here. Access `data.submission_text`, `data.values` etc.

      toast.success("Form submitted successfully");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }

  return (
    <div>
      {colorState ? (
        <div className='sm:container sm:border-4 sm:border-secondary mt-16'>
          <h4 className='mt-4 mb-2 m:mb-10 font-extrabold text-2xl text-secondary text-center'>
            Me contacter
          </h4>
          <form onSubmit={handleSubmit}>
            <div>
              <div>
                <div className='justify-center pt-4 grid'>
                <label htmlFor="name" className="text-secondary text-center">Votre Nom</label>
                <input className='text-secondary  w-full h-full sm:w-[500px] sm:h-[50px] flex-col gap-5  font-medium pl-[5px] rounded-[50px] border-2 border-gray-800 hover:border-darksecondary mb-4 rounded-lg;'  placeholder='Etienne Steven' type="text" id="name" name="name" required onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className='pt-2 justify-center grid'>
                <label htmlFor="email" className='text-secondary text-center'>Votre adresse mail</label>
                <input type="email" id="email" name="email"
                    placeholder='prenom.nom@gmail.com' className='flex-col gap-5 w-full h-full sm:w-[500px] sm:h-[50px] mb-4 font-medium pl-[5px] rounded-[50px] border-2 border-gray-800 hover:border-darksecondary rounded-lg;'
                     required onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='pt-4 justify-center grid'>
                  <label className='text-secondary text-center'>Votre Sujet</label>
                  <input
                    type='text'
                    name='sujet'
                    placeholder='Recrutement, Projet, Autre...'
                    className='flex-col gap-5 w-full h-full sm:w-[500px] sm:h-[50px] font-medium pl-[5px] rounded-[50px] bg-gray-[#DCDCDC] border-2 border-gray-800 hover:border-darksecondary mb-4 rounded-lg; block;'
                    required
                  />
                </div>
                <div className='justify-center grid'>
                  <label className='text-secondary text-center'>Votre message</label>
                  <textarea
                    name='entry'
                    id="entry"
                    placeholder='Salut !'
                    className='pt-3 gap-5 w-full h-full sm:w-[500px] sm:h-[50px] font-medium pl-[5px] rounded-[50px] border-2 border-gray-800 hover:border-darksecondary rounded-lg ;'
                    required
                    onChange={(e) => setEntry(e.target.value)}
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
          <form onSubmit={handleSubmit}>
            <div>
              <div>
                <div className='justify-center pt-4 grid'>
                  <label htmlFor="name" className="text-center">Votre Nom</label>
                  <input className='text-coral  w-full h-full sm:w-[500px] sm:h-[50px] flex-col gap-5  font-medium pl-[5px] rounded-[50px] border-2 border-gray-800 hover:border-primary mb-4 rounded-lg;'  placeholder='Etienne Steven' type="text" id="name" name="name" required onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className='pt-2 justify-center grid'>
                  <label htmlFor="email" className='text-coral text-center'>Votre adresse mail</label>
                  <input type="email" id="email" name="email"
                      placeholder='prenom.nom@gmail.com' className='flex-col gap-5 w-full h-full sm:w-[500px] sm:h-[50px] mb-4 font-medium pl-[5px] rounded-[50px] border-2 border-gray-800 hover:border-primary rounded-lg;'
                      required onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='pt-4 justify-center grid'>
                    <label className='text-coral text-center'>Votre Sujet</label>
                    <input
                      type='text'
                      name='sujet'
                      placeholder='Recrutement, Projet, Autre...'
                      className='flex-col gap-5 w-full h-full sm:w-[500px] sm:h-[50px] font-medium pl-[5px] rounded-[50px] bg-gray-[#DCDCDC] border-2 border-gray-800 hover:border-primary mb-4 rounded-lg; block;'
                      required
                    />
                </div>
                <div className='justify-center grid'>
                  <label className='text-coral text-center'>Votre message</label>
                  <textarea
                    name='entry'
                    id="entry"
                    placeholder='Salut !'
                    className='pt-3 gap-5 w-full h-full sm:w-[500px] sm:h-[50px] font-medium pl-[5px] rounded-[50px] border-2 border-gray-800 hover:border-primary rounded-lg ;'
                    required
                    onChange={(e) => setEntry(e.target.value)}
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
