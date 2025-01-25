import { Suspense } from "react"
import { Card } from "@/components/ui/card"
import { ParallaxBackground } from "@/components/parallax-background"
import { BackButton } from "@/components/back-button"
import { CulturalShowcase } from "@/components/cultural-showcase"
import ErrorBoundary from "@/components/error-boundary"

const events = [
  {
    title: "Cultural Events",
    items: [
      {
        name: "Dance Competition",
        description: "Solo, Duet, and Group performances across various dance forms",
        categories: ["Classical", "Contemporary", "Folk", "Western"],
        venue: "Main Auditorium",
      },
      {
        name: "Music Festival",
        description: "Vocal and instrumental performances showcasing diverse musical talents",
        categories: ["Classical Vocal", "Western Vocal", "Instrumental", "Band Wars"],
        venue: "Open Air Theatre",
      },
      {
        name: "Theatre & Drama",
        description: "Theatrical performances and dramatic presentations",
        categories: ["One Act Play", "Street Play", "Mime", "Monologue"],
        venue: "Mini Auditorium",
      },
    ],
  },
  {
    title: "Literary Events",
    items: [
      {
        name: "Debate Competition",
        description: "English and Hindi debate competitions on contemporary topics",
        categories: ["Parliamentary Debate", "Conventional Debate"],
        venue: "Conference Hall",
      },
      {
        name: "Poetry Slam",
        description: "Original poetry performances in multiple languages",
        categories: ["English", "Hindi", "Marathi"],
        venue: "Literary Club",
      },
    ],
  },
  {
    title: "Art Events",
    items: [
      {
        name: "Art Exhibition",
        description: "Display of student artwork and installations",
        categories: ["Painting", "Sculpture", "Digital Art", "Photography"],
        venue: "Art Gallery",
      },
      {
        name: "Fashion Show",
        description: "Showcase of designer collections by fashion design students",
        categories: ["Ethnic Wear", "Western Wear", "Fusion"],
        venue: "Main Ground",
      },
    ],
  },
]

export default function EventsPage() {
  return (
    <main className="relative min-h-screen pt-20 pb-16">
      <ParallaxBackground />
      <BackButton />
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-[#D8B4FE] to-[#8B5CF6] text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(216,180,254,0.3)]">
          Events
        </h1>

        {/* Wrap CulturalShowcase with ErrorBoundary and Suspense */}
        <div className="mb-16">
          <ErrorBoundary>
            <Suspense fallback={<div className="w-full min-h-[400px] rounded-xl bg-[#1E293B] animate-pulse" />}>
              <CulturalShowcase />
            </Suspense>
          </ErrorBoundary>
        </div>

        <div className="space-y-16">
          {events.map((section) => (
            <div key={section.title} className="space-y-8">
              <h2 className="text-3xl font-bold text-[#D8B4FE] text-center">{section.title}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.items.map((event) => (
                  <Card
                    key={event.name}
                    className="p-6 backdrop-blur-sm bg-[#1E293B]/90 hover:bg-[#1E293B] 
                      border-[#8B5CF6]/20 hover:border-[#8B5CF6]/40 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-white mb-3">{event.name}</h3>
                    <p className="text-gray-300 mb-4">{event.description}</p>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold text-[#D8B4FE] mb-1">Categories:</h4>
                        <ul className="text-gray-300 text-sm list-disc list-inside">
                          {event.categories.map((category) => (
                            <li key={category}>{category}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#D8B4FE]">Venue:</h4>
                        <p className="text-gray-300 text-sm">{event.venue}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

