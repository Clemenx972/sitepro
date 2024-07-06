import Skill, { SkillProps } from "./skill";

const frontSkills: SkillProps[] = [
  {
    name: "HTML",
  },
  {
    name: "CSS",
  },
  {
    name: "JavaScript",
  },
  {
    name: "TypeScript",
  },
  {
    name: "TailwindCSS",
  },
  {
    name: "C++",
    customIcon: "cpp",
  },
  {
    name: "Python",
  },
  {
    name: "Postgresql",
  },
  {
    name: "MySql",
  },
];

const backSkills: SkillProps[] = [
  {
    name: "ReactJS",
  },
  {
    name: "NextJS",
  },
];

const serviceSkills: SkillProps[] = [
  {
    name: "Github",
    url: "https://github.com/Clemenx972",
  },
  {
    name: "Vercel",
  },
  {
    name: "Mongodb",
  },
  {
    name: "Grafana",
  },
  {
    name: "Cisco CCNAV",
    customIcon: "cisco",
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
            <div className='grid grid-cols-1 sm:grid-cols-3'>
              {/* Cols 1 */}
              <div className='grid py-3 sm:py-0 justify-center'>
                <h5 className='text-lg text-coral font-bold text-center'>
                  Langages
                </h5>
                {frontSkills.map((skill, index) => (
                  <Skill key={index} {...skill} />
                ))}
              </div>

              {/* Cols 2 */}
              <div className='grid py-3 sm:py-0 justify-center'>
                <h5 className='text-lg text-coral font-bold text-center'>
                  Librairies
                </h5>
                {backSkills.map((skill, index) => (
                  <Skill key={index} {...skill} />
                ))}
              </div>

              {/* Cols 3 */}
              <div className='grid py-3 sm:py-0 justify-center'>
                <h5 className='text-lg text-coral font-bold text-center'>
                  Services
                </h5>
                {serviceSkills.map((skill, index) => (
                  <Skill key={index} {...skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
