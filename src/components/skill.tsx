export default function Skill(name: string, icon: string, url?: string) {
  return (
    <li className="flex items-center gap-1 text-lg">
      <span>
        <img
          src={`/images/icones/${icon}.png`}
          alt={name}
          height={30}
          width={20}
        />
      </span>
      <span className="text-1xl">{name}</span>
    </li>
  );
}
