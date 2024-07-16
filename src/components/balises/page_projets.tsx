import colorToggle from "@/components/colorTogle";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { Projects } from "./liste_projects";

const Page = () => {
  const [colorState, setColorState] = useState(colorToggle.state);
  useEffect(() => {
    const interval = setInterval(() => {
      setColorState(colorToggle.state);
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div>
        {colorState ? (
          <h4 className='text-secondary text-2xl mb-6 sm:mb-10 text-4x1 text-center font-extrabold '>
            Mes Projets
          </h4>
        ) : (
          <h4 className='text-coral text-2xl mb-6 sm:mb-10 text-4x1 text-center font-extrabold '>
            Mes Projets
          </h4>
        )}
      </div>
      <div
        style={{ backgroundImage: "url(/oui.jpeg)" }}
        className='w-full h-full flex items-center justify-center bg-center bg-cover'
      >
        <div className='grid sm:grid-cols-2 gap-4 '>
          {Projects.map((Project, index) => (
            <ProjectCard
              key={index}
              title={Project.title}
              text={Project.text}
              image={Project.src}
              git={Project.git}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
