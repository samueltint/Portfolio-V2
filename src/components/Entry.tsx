import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { type ReactNode, type JSX } from "react";
import { Card, CardContent } from "./ui/card";

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
    <Card className={`relative p-4 ${clickable ? "" : "hover:shadow-md"}`}>
      <CardContent className="flex flex-col gap-2 pb-2 pt-0 px-2">
        {/* added min-w-0 so the title container can shrink/truncate inside the header */}
        <div className="flex items-center text-xl sm:text-2xl leading-8 text-foreground min-w-0 pr-12">
          <span className="truncate">{title}</span>
          {subtitle && (
            <span className="ml-2 italic text-accent-foreground font-normal truncate">
              {" - " + subtitle}
            </span>
          )}
        </div>
        {showExternal && (
          <ExternalLink className="absolute top-2 right-2 h-12 w-12 aspect-square p-2 stroke-muted-foreground transition-all" />
        )}
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
        <div className="text-md sm:text-lg whitespace-pre-wrap pt-4">
          {children}
        </div>
      </CardContent>
    </Card>
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
