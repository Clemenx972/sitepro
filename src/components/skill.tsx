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

      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-1xl hover:text-primary"
        >
          {name}
        </a>
      ) : (
        <span className="text-1xl">{name}</span>
      )}
    </li>
  );
}
