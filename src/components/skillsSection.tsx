import Skill from "./skill";
const skillFront = [
  {
    nom: "html",
    src: "./public/images/icones/html-svg.svg",
  },
  {
    nom: "css",
    src: "./public/images/icones/css-svg.svg",
  },
  {
    nom: "react",
    src: "./public/images/icones/react-svg.svg",
  },
  {
    nom: "javascript",
    src: "./public/images/icones/javascript-svg.svg",
  },
  {
    nom: "typescript",
    src: "./public/images/icones/typescript-svg.svg",
  },
  {
    nom: "tailwind",
    src: "./public/images/icones/tailwind-svg.svg",
  },
];

const skillBack = [
  {
    nom: "C++",
    src: "./public/images/icones/cpp-svg.svg",
  },
  {
    nom: "Python",
    src: "./public/images/icones/python-svg.svg",
  },
  {
    nom: "Mysql",
    src: "./public/images/icones/mysql-svg.svg",
  },
  {
    nom: "postgresql",
    src: "./public/images/icones/postgresql-svg.svg",
  },
];

const skills = [
  {
    nom: "Github",
    src: "./public/images/icones/github-svg.svg",
    url: "https://github.com/Clemenx972",
  },
  {
    nom: "Vercel",
    src: "./public/images/icones/vercel-svg.svg",
  },
  {
    nom: "Cisco CCNAV",
    src: "./public/images/icones/cisco-svg.svg",
    url: "./public/Steven_ETIENNE-Routing Switch-certificate CISCO.pdf",
  },
];

export default function SkillsSection() {
  return (
    <>
      <section id='competences'>
        <div className='items-center sm:py-16 lg:px-16'>
          <div className='mt-4 md:mt-0 h-full w-full'>
            <h4 className='text-coral text-2xl mb-6 sm:mb-10 text-4x1 text-center font-extrabold '>
              Compétences
            </h4>
            <div className='grid grid-cols-3'>
              <div className='grid'>
                <h5 className='text-lg text-coral font-bold text-center'>
                  Front-end
                </h5>
                {skillFront.map((skill, index) => (
                  <div>
                    <Skill name={skill.nom} src={skill.src} />
                  </div>
                ))}
              </div>
              <div>
                <h5 className='text-lg text-coral font-bold text-center'>
                  Back-end
                </h5>
                {skillBack.map((skill, index) => (
                  <div key={index} className='flex items-center gap-1 text-lg'>
                    <span>
                      <img src={skill.src} height={30} width={20} />
                    </span>
                    <span className='text-xl text-coral'>{skill.nom}</span>
                  </div>
                ))}
              </div>
              <div>
                <h5 className='text-l font-bold justify-center text-center'>
                  Autre
                </h5>
                {skills.map((skill, index) => (
                  <div key={index} className='flex items-center gap-1 text-lg'>
                    <span>
                      <img src={skill.src} height={30} width={20} />
                    </span>
                    if (skill?.url !== undefined)
                    {
                      <span className='text-xl text-coral'>
                        <a href={skill.url} target='_blank'>
                          {skill.nom}
                        </a>
                      </span>
                    }
                    <span className='text-xl text-coral'>{skill.nom}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
