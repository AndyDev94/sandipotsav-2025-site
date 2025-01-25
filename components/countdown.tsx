"use client"

export function Countdown() {
  return (
    <div className="flex gap-4 justify-center items-center mt-8">
      {[
        { label: "DAYS", value: "--" },
        { label: "HOURS", value: "--" },
        { label: "MINUTES", value: "--" },
        { label: "SECONDS", value: "--" },
      ].map(({ label, value }) => (
        <div
          key={label}
          className="flex flex-col items-center bg-[#1E293B]/90 backdrop-blur-md rounded-lg p-4 min-w-[100px]
          border border-[#FDB61A]/30 shadow-[0_0_15px_rgba(253,182,26,0.15)]"
        >
          <span className="text-3xl font-bold text-white drop-shadow-[0_0_8px_rgba(253,182,26,0.5)]">{value}</span>
          <span className="text-xs text-[#FDB61A] mt-1">{label}</span>
        </div>
      ))}
    </div>
  )
}

