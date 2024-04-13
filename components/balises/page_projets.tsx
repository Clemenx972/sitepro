import ProjectCard from "./ProjectCard";
import { Projects } from "./liste_projects";
import React from "react";

const Page = () => {
  return (
    <div style={{ backgroundImage: "url(/oui.jpeg)" }}
    className='w-full h-full flex items-center justify-center bg-center bg-cover'>
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
  );
};

export default Page;
