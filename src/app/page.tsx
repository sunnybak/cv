import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Blog from "@/components/blog";


export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary.map((s) => s).join(" "),
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between mx-auto max-w-4xl">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty font-mono text-m text-muted-foreground">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.contact.email ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <PhoneIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}>
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
              {RESUME_DATA.contact.calendly ? (
                <Button
                  className="size-8 min-w-20"
                  variant="default"
                  size="icon"
                  // style={{ backgroundColor: "black" }}
                  asChild
                >
                  <a href={RESUME_DATA.contact.calendly} target="_blank">
                    15m Call
                  </a>
                </Button>
              ) : null
              }
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <a href={`tel:${RESUME_DATA.contact.tel}`}>
                  <span className="underline">{RESUME_DATA.contact.tel}</span>
                </a>
              ) : null}
            </div>
          </div>

          <Avatar className="size-28">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Tabs defaultValue="resume" className="">
          <TabsList className="flex mx-auto max-w-4xl h-8">
            <TabsTrigger value="resume" className="w-1/2 h-6">Resume</TabsTrigger>
            <TabsTrigger value="blog" className="w-1/2 h-6">Projects</TabsTrigger>
          </TabsList>
          <TabsContent value="resume" className="py-8 mx-auto max-w-4xl">

            <Section>
              <h2 className="text-xl font-bold">About</h2>
              {RESUME_DATA.summary.map((summary) => (
                <p key={summary} className="text-pretty font-mono text-sm text-muted-foreground">
                  {summary}
                </p>
              ))}
            </Section>
            <Section>
              <h2 className="text-xl font-bold pt-6">Experience</h2>
              {RESUME_DATA.work.map((work) => {
                return (
                  <Card key={work.company}>
                    <CardHeader>
                      <div className="flex items-center justify-between gap-x-2 text-base">
                        <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                          <Image src={work.logo} alt={`${work.company} logo`} className="w-4 h-4" />
                          <a className="hover:underline" href={(work as any).link}>
                            {work.company}
                          </a>

                          <span className="inline-flex gap-x-1">
                            {work.badges.map((badge) => (
                              <Badge
                                variant="secondary"
                                className="align-middle text-xs"
                                key={badge}
                              >
                                {badge}
                              </Badge>
                            ))}
                          </span>
                        </h3>
                        <div className="text-sm tabular-nums text-gray-500">
                          {work.start} - {work.end}
                        </div>
                      </div>

                      <h4 className="font-mono text-sm leading-none">
                        {work.title}
                      </h4>
                    </CardHeader>
                    <CardContent className="mt-2 text-xs">
                      {work.description.split("▪").map((bulletPoint) => (
                        <p key={bulletPoint} className="text-pretty font-mono text-sm text-muted-foreground">
                          ▪ {bulletPoint}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                );
              })}
            </Section>
            <Section>
              <h2 className="text-xl font-bold pt-6">Education</h2>
              {RESUME_DATA.education.map((education) => {
                return (
                  <Card key={education.school}>
                    <CardHeader>
                      <div className="flex items-center justify-between gap-x-2 text-base">
                        <div className="flex items-center gap-x-1">
                          <Image src={education.logo} alt={`${education.school} logo`} className="w-4 h-4" />
                          <h3 className="font-semibold leading-none">
                            {education.school}
                          </h3>
                        </div>
                        <div className="text-sm tabular-nums text-gray-500">
                          {education.start} - {education.end}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="mt-2">{education.degree}</CardContent>
                  </Card>
                );
              })}
            </Section>
            <Section>
              <h2 className="text-xl font-bold pt-6">Skills</h2>
              <div className="flex flex-wrap gap-1">
                {RESUME_DATA.skills.map((skill) => {
                  return <Badge key={skill}>{skill}</Badge>;
                })}
              </div>
            </Section>
            <Section className="print-force-new-page scroll-mb-16">
              <h2 className="text-xl font-bold pt-6">Paid Internships</h2>
              <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-1 print:gap-2 md:grid-cols-1 lg:grid-cols-1">
                {RESUME_DATA.internships.map((internship) => {
                  return (
                    <ProjectCard
                      key={internship.title}
                      logo={internship.logo}
                      title={internship.title}
                      description={internship.description}
                      tags={internship.techStack}
                      link={"link" in internship ? internship.link.href : undefined}
                    />
                  );
                })}
              </div>
            </Section>
          </TabsContent>
          <TabsContent value="blog" className="w-full">
            <Blog />
          </TabsContent>
        </Tabs>
      </section>

      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
