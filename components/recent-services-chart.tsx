"use client"

import { useEffect, useRef } from "react"

export function RecentServicesChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = 200

    // Data for the chart
    const data = [12, 19, 15, 22, 25, 18, 30]
    const labels = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"]

    // Chart dimensions
    const padding = 40
    const chartWidth = canvas.width - padding * 2
    const chartHeight = canvas.height - padding * 2
    const barWidth = (chartWidth / data.length) * 0.6
    const barSpacing = (chartWidth / data.length) * 0.4

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw axes
    ctx.beginPath()
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, canvas.height - padding)
    ctx.lineTo(canvas.width - padding, canvas.height - padding)
    ctx.strokeStyle = "#e2e8f0"
    ctx.stroke()

    // Find max value for scaling
    const maxValue = Math.max(...data) * 1.2

    // Draw bars
    data.forEach((value, index) => {
      const x = padding + (barWidth + barSpacing) * index + barSpacing / 2
      const barHeight = (value / maxValue) * chartHeight
      const y = canvas.height - padding - barHeight

      // Draw bar
      ctx.fillStyle = "#3b82f6"
      ctx.fillRect(x, y, barWidth, barHeight)

      // Draw value above bar
      ctx.fillStyle = "#64748b"
      ctx.font = "12px Inter, sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(value.toString(), x + barWidth / 2, y - 5)

      // Draw label below bar
      ctx.fillStyle = "#64748b"
      ctx.textAlign = "center"
      ctx.fillText(labels[index], x + barWidth / 2, canvas.height - padding + 15)
    })

    // Draw y-axis labels
    for (let i = 0; i <= 4; i++) {
      const value = Math.round((maxValue * i) / 4)
      const y = canvas.height - padding - (chartHeight * i) / 4

      ctx.fillStyle = "#94a3b8"
      ctx.font = "10px Inter, sans-serif"
      ctx.textAlign = "right"
      ctx.fillText(value.toString(), padding - 5, y + 3)

      // Draw horizontal grid line
      ctx.beginPath()
      ctx.moveTo(padding, y)
      ctx.lineTo(canvas.width - padding, y)
      ctx.strokeStyle = "#e2e8f0"
      ctx.stroke()
    }
  }, [])

  return (
    <div className="w-full h-[250px]">
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
      <div className="text-center text-sm text-muted-foreground mt-2">Servicios completados esta semana</div>
    </div>
  )
}
