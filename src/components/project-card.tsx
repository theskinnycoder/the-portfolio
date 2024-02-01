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
}

export function ProjectCard({ title, description, tags, link }: Props) {
  return (
    <Card className="border-muted flex flex-col p-3 overflow-hidden border">
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle className="text-base">
            {link ? (
              <a
                href={link}
                target="_blank"
                className="hover:underline inline-flex items-center gap-1"
              >
                {title}{" "}
                <span className="size-1 bg-green-500 rounded-full"></span>
              </a>
            ) : (
              title
            )}
          </CardTitle>
          <div className="print:visible hidden font-mono text-xs underline">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <CardDescription className="font-mono text-xs">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex mt-auto">
        <div className="flex flex-wrap gap-1 mt-2">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px]"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
