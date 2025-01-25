"use client"

import { useEffect, useRef } from "react"

export function CircularLoader() {
  // Reference to the canvas element
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let rotation = 0

    const draw = () => {
      // Clear the canvas for each frame
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Set canvas dimensions (400x400 pixels)
      canvas.width = 400
      canvas.height = 400

      // Calculate center point
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Draw outer circle (static)
      ctx.beginPath()
      ctx.arc(centerX, centerY, 180, 0, Math.PI * 2)
      ctx.strokeStyle = "#ffffff" // White color for outer circle
      ctx.lineWidth = 1
      ctx.stroke()

      // Save the current canvas state
      ctx.save()
      // Move to center point for rotation
      ctx.translate(centerX, centerY)
      ctx.rotate(rotation)

      // Draw rotating white segments
      ctx.strokeStyle = "#FDB61A" // Golden glow color
      ctx.shadowColor = "#FDB61A"
      ctx.shadowBlur = 15
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 0
      ctx.lineWidth = 20

      // Draw three segments equally spaced
      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        // Draw arc for each segment (120 degrees apart)
        ctx.arc(0, 0, 150, (i * Math.PI * 2) / 3, (i * Math.PI * 2) / 3 + Math.PI / 4)
        ctx.stroke()
      }

      // Restore canvas state
      ctx.restore()

      // Update rotation for animation
      rotation += 0.02

      // Continue animation loop
      animationFrameId = requestAnimationFrame(draw)
    }

    // Start the animation
    draw()

    // Cleanup function to cancel animation on unmount
    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="mx-auto" style={{ width: "400px", height: "400px" }} />
}

