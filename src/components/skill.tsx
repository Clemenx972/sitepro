import { useEffect, useState } from "react";
import colorToggle from "./colorTogle";

export interface SkillProps {
  name: string;
  customIcon?: string;
  url?: string;
}

export default function Skill(skill: SkillProps) {
  const [colorState, setColorState] = useState(colorToggle.state);
  useEffect(() => {
    const interval = setInterval(() => {
      setColorState(colorToggle.state);
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return (
    <li className='flex items-center gap-1 text-lg'>
      <span>
        <img
          src={`/images/icones/${
            skill.customIcon || skill.name.toLowerCase()
          }.svg`}
          alt={skill.name}
          height={30}
          width={20}
        />
      </span>
      <div className='w-2' /> {/* Spacer */}
      <div>
        {colorState ? (
          <div className='text-secondary text-lg'>
            {skill.url ? (
              <a
                href={skill.url}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-orange-600'
              >
                {skill.name}
              </a>
            ) : (
              <span>{skill.name}</span>
            )}
          </div>
        ) : (
          <div className='text-coral text-lg'>
            {skill.url ? (
              <a
                href={skill.url}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-primary'
              >
                {skill.name}
              </a>
            ) : (
              <span>{skill.name}</span>
            )}
          </div>
        )}
      </div>
    </li>
  );
}
