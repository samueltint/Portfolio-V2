import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { type ReactNode, type JSX } from "react";
import { Card, CardContent } from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface EntryCardProps {
  title: string;
  subtitle?: string;
  tags?: string[];
  clickable?: boolean;
  showExternal?: boolean;
  description?: ReactNode;
  body?: ReactNode;
  images?: {
    original: string;
    description: string;
  }[];
}

function Header({
  title,
  subtitle,
  tags,
  showExternal,
}: Pick<EntryCardProps, "title" | "subtitle" | "tags" | "showExternal">) {
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="text-xl sm:text-2xl leading-8 text-foreground min-w-0 pr-12">
        {title}
        {subtitle && (
          <span className="text-xl sm:text-2xl leading-8 italic text-muted-foreground min-w-0 pr-12">
            {` - ${subtitle}`}
          </span>
        )}
        {tags && (
          <div className="flex flex-wrap flex-1 gap-2 pt-4">
            {tags.map((tag) => (
              <div
                key={tag}
                className="whitespace-nowrap py-1 px-3 w-fit rounded-full text-xs sm:text-md text-muted bg-muted-foreground"
              >
                {tag}
              </div>
            ))}
          </div>
        )}
      </div>
      {showExternal && (
        <ExternalLink className="absolute top-2 right-2 h-12 w-12 aspect-square p-2 stroke-muted-foreground transition-all" />
      )}
    </div>
  );
}

function EntryCard({
  title,
  subtitle,
  tags,
  clickable,
  showExternal,
  description,
  body,
  images,
}: EntryCardProps): JSX.Element {
  const useAccordion = !!body && !!description;

  return (
    <Card
      className={`relative p-4 ${
        clickable || useAccordion ? "" : "hover:shadow-md"
      }`}
    >
      <CardContent className="flex flex-col gap-2 pb-2 pt-0 px-2">
        {useAccordion ? (
          <Accordion
            type="single"
            collapsible
            className="w-full ring-0 no-underline"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex flex-col w-full gap-4">
                  <Header
                    title={title}
                    subtitle={subtitle}
                    tags={tags}
                    showExternal={showExternal}
                  />
                  <div className="text-lg sm:text-xl whitespace-pre-wrap ring-0 no-underline">
                    {description}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                {body}
                {images != null && (
                  <div className="px-12">
                    <Carousel className="lg:max-w-1/2">
                      <CarouselContent>
                        {images.map((image) => (
                          <CarouselItem key={image.original}>
                            <div className="flex flex-col gap-2">
                              <img
                                src={image.original}
                                alt={image.description}
                                className="rounded-md object-cover aspect-video"
                              />
                              <p className="text-sm text-muted-foreground">
                                {image.description}
                              </p>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ) : (
          <>
            <Header
              title={title}
              subtitle={subtitle}
              tags={tags}
              showExternal={showExternal}
            />
            {description && (
              <div className="text-md sm:text-lg whitespace-pre-wrap ring-0 no-underline">
                {description}
              </div>
            )}
            {body}
          </>
        )}
      </CardContent>
    </Card>
  );
}

interface EntryProps {
  title: string;
  subtitle?: string;
  tags?: string[];
  description: ReactNode;
  body: ReactNode;
  link?: string;
  page?: string;
  images?: {
    original: string;
    description: string;
  }[];
}

export default function Entry({
  title,
  subtitle,
  tags,
  description,
  body,
  link,
  page,
  images,
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
            description={description}
            body={body}
            images={images}
          />
        </a>
      ) : page ? (
        <Link to={page}>
          <EntryCard
            title={title}
            subtitle={subtitle}
            tags={tags}
            clickable
            description={description}
            body={body}
            images={images}
          />
        </Link>
      ) : (
        <div>
          <EntryCard
            title={title}
            subtitle={subtitle}
            tags={tags}
            description={description}
            body={body}
            images={images}
          />
        </div>
      )}
    </>
  );
}
