"use client"

import { useEffect, useRef, useState } from "react"

function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
      },
      { threshold: 0.2, ...options }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return [ref, inView]
}

export default function TimelineCard({ step, side, index }) {
  const [ref, inView] = useInView()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)")
    setIsMobile(mq.matches)
    const handler = (e) => setIsMobile(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  const isLeft = isMobile ? true : side === "left"

  const cardStyle = {
    width: isMobile ? "calc(100% - 40px)" : "calc(50% - 48px)",
    marginLeft: isLeft ? 0 : "auto",
    marginRight: isLeft ? "auto" : 0,
    background: side === "left" ? "#2b2a2b36" : "#8b090941",
    border: "1px solid #bb0e34",
    borderRadius: "16px",
    padding: "1.5rem",
    opacity: inView ? 1 : 0,
    transform: inView
      ? "translateX(0)"
      : `translateX(${isLeft ? "-32px" : "32px"})`,
    transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`,
  }

  const dotStyle = {
    position: "absolute",
    left: isMobile ? "16px" : "50%",
    top: "1.75rem",
    transform: "translateX(-50%)",
    width: "14px",
    height: "14px",
    borderRadius: "50%",
    background: "#8d0814",
    zIndex: 2,
  }

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        flexDirection: isMobile ? "row" : isLeft ? "row" : "row-reverse",
        position: "relative",
        marginBottom: "3rem",
        paddingLeft: isMobile ? "40px" : 0,
      }}
    >
      <div style={cardStyle}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: "2rem", fontWeight: 700, color: "#ffffff" }}>
            {step.number}
          </span>
        </div>

        <p style={{ fontWeight: 700, margin: "0.75rem 0 0.4rem", color: "#dfdddd" }}>
          {step.title}
        </p>
        <p style={{ fontSize: "13.5px", color: "#706f6f", lineHeight: 1.6, margin: "0 0 0.85rem" }}>
          {step.description}
        </p>

      </div>

      <div style={dotStyle} />
    </div>
  )
}