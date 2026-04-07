import { useState, useEffect } from 'react'

const slides = [
  {
    id: 1,
    title: 'Fast Parcel Delivery',
    subtitle: 'Get your parcels delivered within hours',
    image: '🚀',
    color: 'from-blue-600 to-cyan-600',
    description: 'Experience lightning-fast delivery service across 64 districts'
  },
  {
    id: 2,
    title: 'Real-time Tracking',
    subtitle: 'Know where your parcel is at every moment',
    image: '📍',
    color: 'from-purple-600 to-pink-600',
    description: 'Live GPS tracking with instant notifications'
  },
  {
    id: 3,
    title: 'Affordable Rates',
    subtitle: 'Best prices in the market',
    image: '💰',
    color: 'from-green-600 to-emerald-600',
    description: 'Transparent pricing with zero hidden charges'
  },
  {
    id: 4,
    title: 'Insured Delivery',
    subtitle: 'Your parcels are safe with us',
    image: '🛡️',
    color: 'from-orange-600 to-red-600',
    description: 'Full insurance coverage on all deliveries'
  }
]

export default function Carousel() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [autoPlay])

  const goToSlide = (index) => {
    setCurrent(index)
    setAutoPlay(false)
  }

  const nextSlide = () => {
    setCurrent(prev => (prev + 1) % slides.length)
    setAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrent(prev => (prev - 1 + slides.length) % slides.length)
    setAutoPlay(false)
  }

  const slide = slides[current]

  return (
    <div
      className="relative w-full h-96 md:h-screen overflow-hidden rounded-lg"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      {/* Slides */}
      {slides.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className={`w-full h-full bg-gradient-to-r ${s.color} flex items-center justify-center px-4`}>
            <div className="text-center text-white animate-fade-in">
              <div className="text-7xl md:text-9xl mb-6 animate-bounce">{s.image}</div>
              <h2 className="text-3xl md:text-6xl font-bold mb-4 animate-slide-up">{s.title}</h2>
              <p className="text-lg md:text-2xl mb-4 opacity-90 animate-slide-up-delay">{s.subtitle}</p>
              <p className="text-sm md:text-lg opacity-80 max-w-2xl mx-auto animate-slide-up-delay-2">
                {s.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/60 text-white p-2 rounded-full transition-all duration-300 md:p-3 animate-pulse"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/60 text-white p-2 rounded-full transition-all duration-300 md:p-3 animate-pulse"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === current
                ? 'bg-white w-8 h-3'
                : 'bg-white/50 hover:bg-white/75 w-3 h-3'
            }`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 bg-black/40 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur">
        {current + 1} / {slides.length}
      </div>
    </div>
  )
}
