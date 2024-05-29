import { cn } from "@/lib/utils";
import Image from "next/image";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
  logo?: string;
  icon?: React.ElementType;
  addFilter?: boolean;
}

export function ProjectCard({
  title,
  description,
  tags,
  logo,
  link,
  icon,
  addFilter = false,
}: Props) {
  const Icon = icon ?? null;

  return (
    <Card
      className={cn(
        "relative flex flex-col overflow-hidden border border-muted p-3",
        "transition-all duration-300 ease-in-out",
        "hover:shadow-[0_0_20px_4px] hover:shadow-primary/15",
        "hover:scale-[1.01] hover:border-primary/25",
      )}
    >
      <CardHeader>
        <div className="space-y-1">
          <CardTitle className="flex items-center justify-between gap-1 text-base">
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 underline-offset-2 transition-all duration-300 after:hidden after:content-['_↗'] hover:underline hover:after:inline-block"
              >
                {title}
              </a>
            ) : (
              title
            )}

            {logo && (
              <Image
                src={logo}
                alt={`${title} logo`}
                width={52}
                height={20}
                className={cn(
                  "absolute right-1 top-1 aspect-[1.6] object-contain md:aspect-[2.4]",
                  {
                    "brightness-200 contrast-200": addFilter,
                  },
                )}
              />
            )}

            {Icon && (
              <Icon
                className={cn(
                  "absolute right-1 top-1 w-7 stroke-rose-500/85 stroke-[1.4]",
                )}
              />
            )}
          </CardTitle>
          <CardDescription className="text-xs">{description}</CardDescription>
        </div>
      </CardHeader>

      <CardContent className="mt-auto flex">
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge variant="secondary" key={tag}>
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
