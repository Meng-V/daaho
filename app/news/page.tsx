import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { MapPin, Calendar, ExternalLink, Users } from "lucide-react"
import PublicLaunch from "@/images/news/PublicLaunch.jpg"
import AsianAmerican from "@/images/news/ExhibitionFlyer2025.jpg"
import EventFlyer from "@/images/news/EventFlier2025.png"

// Event data structure duplicated from daaho-news with minor adjustments
const events = [
  {
    id: "sharing-stories-2025-exhibit",
    title: "Sharing Our Stories & Histories as Asian Americans in Ohio",
    date: "October 8-27, 2025",
    dateSort: new Date("2025-10-25"),
    type: "Featured Event",
    location: "Mason Public Library, 200 Reading Road, Mason, OH 45040",
    shortDescription:
      "DAAHO is hosting a pop-up exhibit at Mason Public Library, displaying original historical materials about Asian American students at Miami University in the early 20th century.",
    fullDescription: `Co-led by Miami University's Department of Media, Journalism, and Film (Dr. Hongmei Li) and the Walter Havighurst Special Collections and University Archives (Alia Levar Wegner), the Documenting Asian American Histories in Ohio project (DAAHO) is an interdisciplinary initiative aimed at documenting, preserving, and digitizing the history, culture, and contributions of Asian and Asian American history in Ohio. It is funded by the National Historical Publications & Records Commission.

Curated by former Miami student Carver Spangle, DAAHO is hosting a pop-up exhibit at Mason Public Library, displaying original historical materials about Asian American students at Miami University in the early 20th century. The exhibit lasts from October 8-27, 2025 and features the Japanese students: Pete Hironaka (1927-2015), Koichi Hasegawa, and Chonosuke Ito, as well as Chinese students Chin-Wu Huang, H. H. Chuang, and C. H. Chuang, in addition to Thai prince Prasobsukh Sukhsvasti (1911-1985) and Thai student Swasdi Nitibhon.

A community event will be held from 10am to 12pm on October 25, 2025 at Mason Public Library to share the Asian stories and histories. The event is open to all. Everyone is welcome.`,
    communityEvent: {
      date: "October 25, 2025",
      time: "10:00 AM - 12:00 PM",
      description:
        "Community event to share Asian stories and histories. Open to all. Everyone is welcome.",
    },
    featuredPeople: [
      "Pete Hironaka (1927-2015)",
      "Koichi Hasegawa",
      "Chonosuke Ito",
      "Chin-Wu Huang",
      "H. H. Chuang",
      "C. H. Chuang",
      "Prince Prasobsukh Sukhsvasti (1911-1985)",
      "Swasdi Nitibhon",
    ],
    sponsors: [
      "DAAHO",
      "Miami Libraries",
      "NHPRC",
      "Miami Dept. of Media, Journalism & Film",
      "AWARE Ohio",
    ],
    images: [
      { src: AsianAmerican, aspectRatio: "portrait" },
      { src: EventFlyer, aspectRatio: "portrait" },
    ],
  },
  {
    id: "roundtable-march-2025",
    title:
      "A Roundtable Discussion – Making the Invisible Visible: Documenting Asian Histories in Ohio through a Collaborative Digital Edition",
    date: "March 13-16, 2025",
    dateSort: new Date("2025-03-13"),
    type: "Conference",
    status: "past",
    location: "Columbus, Ohio, Greater Columbus Convention Center",
    eventLink: "https://www.asianstudies.org/conference/general-information/past-annual-conferences/",
    shortDescription:
      "The Association of Asian Studies Conference offers a unique opportunity to engage with Asian Studies and explore the latest research and ideas in the field.",
    fullDescription: `Funded by National Historical Publications & Records Commission, the DAAHO project aims to document and digitize Asian American histories in Ohio since the 19th century. The interdisciplinary research team consists of scholars, librarians and archivists at Miami University, OSU, University of California Irvine and other places, and aims to systematically collect dispersed materials and turn them into a coherent database that allows students, educators, scholars, and community members to access the rich and diverse histories and contributions of Asians in the nation's heartland. Come to learn more about this significant project and see how you can be part of it.

The Association of Asian Studies Conference offers a unique opportunity to engage with Asian Studies and explore the latest research and ideas in the field. DAAHO project members will present on the current status of the project and future plans in an engaging roundtable discussion. Moderated by Dr. Pranav Jani (The Ohio State University), our roundtable will discuss the project's recent launch, focusing on current engagement and research with community organizations. Dr. Li will discuss the aims and significance of the DAAHO as well as preliminary findings. Co-PI Dr. Yong Chen will discuss research on Asian food culture as an important part of both Asian American community formation and identity expression. Co-PI Alia Levar Wegner and Dr. Ann-Marie Davis will share information about relevant archival collections as well as technical aspects in developing a collaborative digital edition. Community leader and public historian James Tecco will discuss his use of oral history and storytelling with Asian & Pacific Islander communities in the Cincinnati region. Making visible what was previously invisible in American history, our project will offer new insights on Asian border crossings in Ohio while inspiring new models for preserving and promoting marginalized histories of all minority populations.`,
    sponsors: ["DAAHO", "Association of Asian Studies", "NHPRC"],
    images: [],
  },
  {
    id: "daaho-project-launch-2024",
    title: "DAAHO Project Launch",
    date: "July 20, 2024",
    dateSort: new Date("2024-07-20"),
    type: "Launch",
    status: "past",
    location: "Mason City Hall in Mason, Ohio",
    shortDescription:
      "Official launch event for the Asian American History Project: Making the Invisible Visible.",
    fullDescription:
      "On July 20, the Asian American History Project: Making the Invisible Visible was officially launched at Mason City Hall in Mason, Ohio. Supported by the National Historical Publications & Records Commission (NHPRC), this initiative seeks to preserve and amplify the underrepresented stories of Asian American communities in Ohio. The event brought together historians, community leaders, educators, and advocates to celebrate this significant milestone. The launch featured presentations that outlined the project’s goals, including documenting oral histories, digitizing historical records, and engaging the public in conversations about the rich and diverse contributions of Asian Americans. Attendees had the opportunity to connect, share personal stories, and discuss ways to collaborate on this important work. The event underscored the collective effort required to ensure these histories are accessible for future generations.",
    images: [
      { src: PublicLaunch, alt: "DAAHO Project Launch group photo", aspectRatio: "video" },
    ],
  },
]

// Sort events by date (latest first)
const sortedEvents = [...events].sort(
  (a, b) => b.dateSort.getTime() - a.dateSort.getTime(),
)

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="border-b bg-gradient-to-br from-background via-secondary/30 to-background">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              News & Events
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore our exhibitions, conferences, and community events documenting Asian American histories in Ohio.
              All events are sorted from latest to earliest.
            </p>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            {sortedEvents.map((event) => (
              <article id={event.id} key={event.id} className="scroll-mt-28 border-b pb-12 last:border-b-0">
                {/* Event Header */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <Badge className="bg-primary text-primary-foreground">
                    {event.type}
                  </Badge>
                  <Badge variant="secondary">{event.date}</Badge>
                  {event.status === "upcoming" && (
                    <Badge className="bg-green-600 text-white">Upcoming</Badge>
                  )}
                </div>

                {/* Event Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                  {event.title}
                </h2>

                {/* Location */}
                <div className="flex items-start gap-3 mb-6">
                  <MapPin className="size-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-muted-foreground">{event.location}</p>
                </div>

                {/* Image Placeholders */}
                {event.images && event.images.length > 0 && (
                  <div
                    className={`grid gap-4 mb-8 ${
                      event.images.length === 1
                        ? "grid-cols-1"
                        : event.images.length === 2
                          ? "md:grid-cols-2"
                          : "md:grid-cols-3"
                    }`}
                  >
                    {event.images.map((image: any, idx: number) => (
                      <div
                        key={idx}
                        className={`relative rounded-lg overflow-hidden bg-muted border ${
                          image.aspectRatio === "video"
                            ? "aspect-video"
                            : image.aspectRatio === "portrait"
                              ? "aspect-[3/4]"
                              : "aspect-square"
                        }`}
                      >
                        {image.src ? (
                          <Image
                            src={image.src}
                            alt={image.alt || "Event image"}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        ) : (
                          <div className="h-full w-full flex items-center justify-center text-center p-6">
                            <p className="text-sm text-muted-foreground">[
                              {image.placeholder || "Image"}
                            ]</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Event Link Button */}
                {event.eventLink && (
                  <div className="mb-8">
                    <Button size="lg" asChild>
                      <a
                        href={event.eventLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Event Link
                        <ExternalLink className="ml-2 size-4" />
                      </a>
                    </Button>
                  </div>
                )}

                <div className="max-w-none mb-8 space-y-4 leading-relaxed">
                  {event.fullDescription.split("\n\n").map((paragraph, idx) => (
                    <p key={idx} className="text-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Community Event Section */}
                {event.communityEvent && (
                  <div className="mb-8 p-6 bg-accent rounded-lg border-l-4 border-primary">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <Calendar className="size-5 text-primary" />
                      Community Event <span> <Badge className="bg-green-600 text-white mb-1">Upcoming</Badge></span>
                    </h3>
                    <p className="text-foreground mb-3 leading-relaxed">
                      {event.communityEvent.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
                      <span className="text-primary">{event.communityEvent.date}</span>
                      <span className="text-muted-foreground">{event.communityEvent.time}</span>
                    </div>
                  </div>
                )}

                {event.sponsors && event.sponsors.length > 0 && (
                  <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg border-2 border-primary/20">
                    <h3 className="text-xl font-bold mb-4 text-primary">Co-Sponsored By</h3>
                    <div className="flex flex-wrap gap-3">
                      {event.sponsors.map((sponsor: string, idx: number) => (
                        <Badge key={idx} className="bg-primary text-primary-foreground text-sm py-2 px-4">
                          {sponsor}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
