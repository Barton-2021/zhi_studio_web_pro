/*
 * @Author: Chen_陈工
 * @Date: 2025-09-29 00:01:18
 * @LastEditors: Do not edit
 * @LastEditTime: 2025-09-29 00:02:38
 * @FilePath: \zhi_studio_web_pro\components\Reveal.js
 */
import { useEffect, useRef } from 'react'

export default function Reveal({ children, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal-visible')
          obs.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  )
}
