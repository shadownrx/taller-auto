"use client"

import { useEffect, useRef } from "react"

export function StatusDistributionChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = 200

    // Data for the pie chart
    const data = [
      { label: "Completados", value: 65, color: "#22c55e" },
      { label: "En proceso", value: 25, color: "#f59e0b" },
      { label: "Pendientes", value: 10, color: "#94a3b8" },
    ]

    // Calculate total
    const total = data.reduce((sum, item) => sum + item.value, 0)

    // Draw pie chart
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2 - 20
    const radius = Math.min(centerX, centerY) * 0.8

    let startAngle = 0
    data.forEach((item) => {
      const sliceAngle = (item.value / total) * 2 * Math.PI

      // Draw slice
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle)
      ctx.closePath()
      ctx.fillStyle = item.color
      ctx.fill()

      startAngle += sliceAngle
    })

    // Draw center circle (donut hole)
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius * 0.6, 0, 2 * Math.PI)
    ctx.fillStyle = "white"
    ctx.fill()

    // Draw legend
    const legendY = centerY + radius + 20
    data.forEach((item, index) => {
      const legendX = centerX - radius + index * ((2 * radius) / data.length)

      // Draw color box
      ctx.fillStyle = item.color
      ctx.fillRect(legendX, legendY, 12, 12)

      // Draw label
      ctx.fillStyle = "#64748b"
      ctx.font = "12px Inter, sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(`${item.label} (${item.value}%)`, legendX + 40, legendY + 10)
    })
  }, [])

  return (
    <div className="w-full h-[250px]">
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </div>
  )
}
