'use client'

import { useEffect, useRef } from 'react'

/**
 * The hero's architectural perspective backdrop, ported from the inline canvas
 * script in `RISE8 WEBSITE/RISE8 Website.html`. Static — it paints once per
 * resize, so it costs nothing after first paint and needs no reduced-motion gate.
 */
export default function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const host = canvas.closest('.hero') as HTMLElement | null
    if (!host) return

    const draw = () => {
      const W = host.offsetWidth
      const H = host.offsetHeight
      if (!W || !H) return
      canvas.width = W
      canvas.height = H
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const bg = ctx.createLinearGradient(0, 0, W * 0.6, H)
      bg.addColorStop(0, '#12151b')
      bg.addColorStop(0.5, '#1a1e26')
      bg.addColorStop(1, '#1f2330')
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, W, H)

      // Vanishing point — upper right.
      const vpx = W * 0.72
      const vpy = H * -0.15

      const cols = 22
      for (let i = 0; i <= cols; i++) {
        const bx = (W / cols) * i
        const t = i / cols
        const alpha = 0.04 + Math.abs(t - 0.5) * 0.06
        ctx.beginPath()
        ctx.moveTo(bx, H)
        ctx.lineTo(vpx, vpy)
        ctx.strokeStyle = `rgba(180,195,210,${alpha})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      }

      const floors = 18
      for (let i = 1; i < floors; i++) {
        const frac = Math.pow(i / floors, 1.6)
        const y = H - frac * (H - vpy) - vpy * frac
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(W, y)
        ctx.strokeStyle = `rgba(180,195,210,${0.03 + frac * 0.07})`
        ctx.lineWidth = 0.4
        ctx.stroke()
      }

      ;[0.28, 0.52, 0.71].forEach((pos, idx) => {
        const bx = W * pos
        const gr = ctx.createLinearGradient(bx, H, vpx, vpy)
        gr.addColorStop(0, 'rgba(77,200,211,0)')
        gr.addColorStop(0.3, `rgba(77,200,211,${0.18 - idx * 0.04})`)
        gr.addColorStop(0.7, `rgba(77,200,211,${0.08 - idx * 0.02})`)
        gr.addColorStop(1, 'rgba(77,200,211,0)')
        ctx.beginPath()
        ctx.moveTo(bx, H)
        ctx.lineTo(vpx, vpy)
        ctx.strokeStyle = gr
        ctx.lineWidth = 1.2 - idx * 0.3
        ctx.stroke()
      })

      const winCols = 8
      const winRows = 5
      for (let r = 1; r <= winRows; r++) {
        for (let c = 0; c < winCols; c++) {
          const frac = Math.pow(r / (winRows + 1), 1.5)
          const y = H - frac * (H - vpy) - vpy * frac
          const rowH = H * 0.025 * (1 - frac * 0.6)
          const xSpread = W * (0.85 + frac * 0.1)
          const xStart = (W - xSpread) / 2
          const cellW = xSpread / winCols
          const wx = xStart + c * cellW + cellW * 0.15
          const ww = cellW * 0.55
          const lean = (wx - vpx) * 0.008 * frac
          // Deterministic "lit window" pattern — the source used Math.random(),
          // which would repaint differently on every resize.
          const lit = (r * 7 + c * 3) % 4 === 0 ? 0.12 : 0
          const alpha = frac * 0.22 + lit
          ctx.fillStyle = `rgba(77,200,211,${alpha * 0.5})`
          ctx.fillRect(wx + lean, y - rowH, ww, rowH * 0.7)
          ctx.strokeStyle = `rgba(77,200,211,${alpha})`
          ctx.lineWidth = 0.4
          ctx.strokeRect(wx + lean, y - rowH, ww, rowH * 0.7)
        }
      }

      const glow = ctx.createRadialGradient(W * 0.6, H * 0.22, 0, W * 0.6, H * 0.22, W * 0.35)
      glow.addColorStop(0, 'rgba(77,200,211,0.09)')
      glow.addColorStop(0.5, 'rgba(77,200,211,0.03)')
      glow.addColorStop(1, 'rgba(77,200,211,0)')
      ctx.fillStyle = glow
      ctx.fillRect(0, 0, W, H)

      // Film grain.
      for (let i = 0; i < 6000; i++) {
        const gx = ((i * 6151) % 1000) / 1000
        const gy = ((i * 3011) % 997) / 997
        ctx.fillStyle = `rgba(255,255,255,${(((i * 17) % 100) / 100) * 0.018})`
        ctx.fillRect(gx * W, gy * H, 1, 1)
      }
    }

    draw()
    const ro = new ResizeObserver(draw)
    ro.observe(host)
    return () => ro.disconnect()
  }, [])

  return <canvas ref={ref} aria-hidden="true" />
}
