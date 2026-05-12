'use client'

import { useEffect, useRef, useState } from 'react'

const SplineScene = () => {
  const containerRef = useRef(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let app = null

    const loadSpline = async () => {
      try {
        const { Application } = await import('@splinetool/runtime')
        if (containerRef.current) {
          const canvas = document.createElement('canvas')
          canvas.id = 'spline-canvas'
          containerRef.current.appendChild(canvas)

          app = new Application(canvas)
          await app.load('https://prod.spline.design/IViJKdw1b38SWduu/scene.splinecode')
          setLoaded(true)
        }
      } catch (err) {
        console.warn('Spline load failed, continuing without 3D scene:', err)
      }
    }

    // Delay load slightly so hero text appears fast
    const timer = setTimeout(loadSpline, 300)

    return () => {
      clearTimeout(timer)
      if (app) {
        app.dispose()
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="spline-container"
      style={{
        opacity: loaded ? 1 : 0,
        transition: 'opacity 1.5s ease',
      }}
    />
  )
}

export default SplineScene
