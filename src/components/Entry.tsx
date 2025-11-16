import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { type ReactNode, type JSX } from "react";

interface EntryCardProps {
  title: string;
  subtitle?: string;
  tags?: string[];
  clickable?: boolean;
  showExternal?: boolean;
  children?: ReactNode;
}

function EntryCard({
  title,
  subtitle,
  tags,
  clickable,
  showExternal,
  children,
}: EntryCardProps): JSX.Element {
  return (
    <div
      className={
        "relative bg-background p-4 shadow-md rounded-2xl transition-all" +
        (clickable ? " hover:bg-muted hover:-mx-0.5" : "")
      }
    >
      {showExternal && (
        <ExternalLink className="absolute top-2 right-2 h-12 w-12 aspect-square p-2 stroke-muted-foreground transition-all" />
      )}
      <div className="flex flex-col items-start p-1 gap-2">
        <div className=" text-xl sm:text-2xl leading-8 text-foreground">
          {title}
          {subtitle && (
            <span className="py-2 whitespace-nowrap sm:py-0 italic text-xl sm:text-2xl text-accent-foreground font-normal inline">
              {" - " + subtitle}
            </span>
          )}
        </div>
        <div className="flex flex-wrap flex-1 gap-2 ">
          {tags && (
            <>
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="whitespace-nowrap py-1 px-3 w-fit rounded-full text-xs sm:text-md text-muted bg-muted-foreground"
                >
                  {tag}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      <div className="pl-2 text-md sm:text-lg whitespace-pre-wrap">
        {children}
      </div>
    </div>
  );
}

interface EntryProps {
  title: string;
  subtitle?: string;
  tags?: string[];
  children?: ReactNode;
  link?: string;
  page?: string;
}

export default function Entry({
  title,
  subtitle,
  tags,
  children,
  link,
  page,
}: EntryProps): JSX.Element {
  return (
    <>
      {link ? (
        <a href={link} target="_blank" rel="noreferrer">
          <EntryCard
            title={title}
            subtitle={subtitle}
            tags={tags}
            clickable
            showExternal
          >
            {children}
          </EntryCard>
        </a>
      ) : page ? (
        <Link to={page}>
          <EntryCard title={title} subtitle={subtitle} tags={tags} clickable>
            {children}
          </EntryCard>
        </Link>
      ) : (
        <div>
          <EntryCard title={title} subtitle={subtitle} tags={tags}>
            {children}
          </EntryCard>
        </div>
      )}
    </>
  );
}
