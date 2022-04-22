
import { GoLinkExternal } from 'react-icons/go'
import { AirtableRecord } from '../../interface';


const Card: React.FC<AirtableRecord> = (props: AirtableRecord) => {
  return (
    <div className="h-auto space-y-6 bg-secondary/20 p-4 rounded shadow-xl">
      <img src={props.image[0].thumbnails.large.url} className="w-auto h-auto " alt={props.title} />
      <h2 className="text-2xl font-medium font-heading">{props.title}</h2>
      <p>{props.description}</p>
      <ul className="flex gap-2 text-xs">
        {props.tags.map((tag, index) => (
          <li key={index} className="bg-secondary px-2 py-1 rounded">
            {tag}
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        <a
          href={props.siteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-white/70 transition-colors">
          visit site <GoLinkExternal className="ml-1" />
        </a>
        {props.githubLink && props.githubLink.length === 0 ? (
          <p className="flex items-center">github - not available</p>
        ) : (
          <a
            href={props.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-white/70 transition-colors">
            github <GoLinkExternal className="ml-1" />
          </a>
        )}
      </div>
    </div>
  );
}

export default Card;