"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

const events = [
  {
    title: "Day 1",
    date: "TBD",
    description: "Saree, Tie, Chocolate, Film & Rose Day",
    icon: "🌹",
  },
  {
    title: "Day 2",
    date: "TBD",
    description: "Horror Day & Famous Duo Day",
    icon: "👻",
  },
  {
    title: "Day 3",
    date: "TBD",
    description: "Cosplay & Retro Day",
    icon: "🎭",
  },
  {
    title: "Day 4",
    date: "TBD",
    description: "Traditional Day & Group Day",
    icon: "👔",
  },
  {
    title: "Day 5",
    date: "TBD",
    description: "Foundation's Cultural Night",
    icon: "🎪",
  },
  {
    title: "Day 6",
    date: "TBD",
    description: "University's Cultural Night",
    icon: "✨",
  },
]

export function EventsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="min-h-screen py-20 px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-[#FDB61A] drop-shadow-[0_0_10px_rgba(253,182,26,0.3)]">
          Event Schedule
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-xl backdrop-blur-sm bg-[#1E293B]/90 hover:bg-[#1E293B] 
                transition-all duration-300 transform hover:-translate-y-2 border border-[#FDB61A]/20 
                hover:border-[#FDB61A]/40 shadow-[0_0_15px_rgba(0,0,0,0.3)]"
            >
              <div className="text-4xl mb-4">{event.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-[#FDB61A] group-hover:text-white transition-colors">
                {event.title}
              </h3>
              <p className="text-sm text-gray-400 mb-2">{event.date}</p>
              <p className="text-gray-200 leading-relaxed">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

