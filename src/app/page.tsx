import { ProjectCard } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Separator } from "@/components/ui/separator";
import { RESUME_DATA } from "@/data/resume-data";
import { cn } from "@/lib/utils";
import { MailIcon, PhoneIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name}`,
  description: RESUME_DATA.about,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-background">
        {/* Intro */}
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-8 space-y-1.5 md:col-span-9">
            {/* Name */}
            <h1 className="w-fit bg-gradient-to-r from-muted-foreground via-white to-muted-foreground bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
              {RESUME_DATA.name}
            </h1>

            {/* About */}
            <p className="max-w-md text-pretty text-xs text-muted-foreground md:text-sm">
              {RESUME_DATA.about}
            </p>

            {/* Location */}
            <p className="max-w-md items-center text-pretty pt-0.5 text-xs text-foreground/75">
              {RESUME_DATA.location}
            </p>

            {/* Socials & Contact */}
            <div className="flex items-end gap-x-0.5 pt-1 text-sm text-muted-foreground md:h-1/2 md:-translate-y-4 md:gap-x-2">
              {RESUME_DATA.contact.email ? (
                <Button variant="outline" size="icon" asChild>
                  <a
                    href={`mailto:${RESUME_DATA.contact.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MailIcon className="size-3.5 md:size-5" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <Button variant="outline" size="icon" asChild>
                  <a
                    href={`tel:${RESUME_DATA.contact.tel}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PhoneIcon className="size-3.5 md:size-5" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button key={social.name} variant="outline" size="icon" asChild>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="size-3.5 md:size-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Avatar */}
          <div className="relative col-span-4 w-full md:col-span-3">
            <div className="absolute -mt-2 ml-1 aspect-square w-full rounded-full bg-gradient-to-br from-fuchsia-300/50 via-cyan-400/50 to-orange-400/50 blur-3xl" />

            <Image
              src={RESUME_DATA.avatarUrl}
              alt={`Avatar of ${RESUME_DATA.name}`}
              width={900}
              height={1600}
              className="relative w-full object-contain"
            />
          </div>
        </div>

        <Separator />

        {/* Summary */}
        <Section>
          <h2
            className={cn(
              "w-fit bg-gradient-to-r from-lime-200 to-teal-400 bg-clip-text text-3xl font-bold text-transparent",
            )}
          >
            About Me
          </h2>
          <div className="text-pretty text-sm text-muted-foreground">
            {RESUME_DATA.summary}
          </div>
        </Section>

        <Separator />

        {/* Work Experience */}
        <Section>
          <h2
            className={cn(
              "w-fit bg-gradient-to-r from-rose-400 to-amber-400 bg-clip-text text-3xl font-bold text-transparent",
            )}
          >
            Work Experience
          </h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader className="space-y-2.5">
                  <div className="flex items-center justify-between gap-x-2">
                    <h3 className="inline-flex items-center justify-center gap-x-2 font-semibold leading-none">
                      <Image
                        src={work.logo}
                        alt={`${work.company} logo`}
                        width={20}
                        height={20}
                        className="aspect-square"
                      />

                      <a
                        className="text-lg underline-offset-2 transition-all duration-300 after:hidden after:content-['_↗']"
                        href={work.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {work.company}
                      </a>

                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge variant="secondary" key={badge}>
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>

                    <div className="text-sm tabular-nums text-muted-foreground">
                      {work.start} - {work.end}
                    </div>
                  </div>

                  <h4 className="leading-none">{work.title}</h4>
                </CardHeader>
                <CardContent className="mt-4 text-sm">
                  {work.description}
                </CardContent>
              </Card>
            );
          })}
        </Section>

        <Separator />

        {/* Education */}
        <Section>
          <h2
            className={cn(
              "w-fit bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-3xl font-bold text-transparent",
            )}
          >
            Education
          </h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm tabular-nums text-muted-foreground">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2">
                  <div className="flex flex-col gap-2">
                    {education.degree}
                    {education.details}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </Section>

        <Separator />

        {/* Skills */}
        <Section>
          <h2
            className={cn(
              "w-fit bg-gradient-to-r from-fuchsia-300 to-violet-400 bg-clip-text text-3xl font-bold text-transparent",
            )}
          >
            Skills and Interests
          </h2>
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-1">
                {RESUME_DATA.skills.map((skill) => {
                  return (
                    <Badge variant="secondary" key={skill}>
                      {skill}
                    </Badge>
                  );
                })}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Interests</h3>
              <div className="text-pretty text-sm text-muted-foreground">
                {RESUME_DATA.interests}
              </div>
            </div>
          </div>
        </Section>

        <Separator />

        {/* Projects */}
        <Section className="scroll-mb-16">
          <h2
            className={cn(
              "w-fit bg-gradient-to-r from-cyan-300 to-emerald-400 bg-clip-text text-3xl font-bold text-transparent",
            )}
          >
            Hobby Projects & Open Source
          </h2>
          <div className="-mx-1.5 grid grid-cols-1 gap-3 md:grid-cols-2">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                  logo={"logo" in project ? project.logo : undefined}
                  icon={"icon" in project ? project.icon : undefined}
                  addFilter={project.title === "White Ink Capital"}
                />
              );
            })}
          </div>
        </Section>
      </section>
    </main>
  );
}
