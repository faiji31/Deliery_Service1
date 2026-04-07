import { useState, useEffect } from 'react'

const slides = [
  {
    id: 1,
    title: 'Fast Parcel Delivery',
    subtitle: 'Get your parcels delivered within hours',
    emoji: '🚀',
    gradient: 'from-blue-600 via-blue-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1586528116477-09c5441bda33?w=1200&h=500&fit=crop',
  },
  {
    id: 2,
    title: 'Real-time Tracking',
    subtitle: 'Track your parcel with GPS precision',
    emoji: '📍',
    gradient: 'from-purple-600 via-purple-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f70424dde?w=1200&h=500&fit=crop',
  },
  {
    id: 3,
    title: 'Safe & Insured',
    subtitle: '100% insurance coverage on all deliveries',
    emoji: '🛡️',
    gradient: 'from-emerald-600 via-green-500 to-teal-500',
    image: 'https://images.unsplash.com/photo-1454165804600-c6e6b4a63669?w=1200&h=500&fit=crop',
  },
  {
    id: 4,
    title: 'Best Rates',
    subtitle: 'Affordable pricing with zero hidden charges',
    emoji: '💰',
    gradient: 'from-orange-600 via-red-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200&h=500&fit=crop',
  },
]

export default function Carousel() {
  const [current, setCurrent] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

  useEffect(() => {
    if (!isAutoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoplay])

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
    setIsAutoplay(false)
    setTimeout(() => setIsAutoplay(true), 8000)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoplay(false)
    setTimeout(() => setIsAutoplay(true), 8000)
  }

  const goToSlide = (index) => {
    setCurrent(index)
    setIsAutoplay(false)
    setTimeout(() => setIsAutoplay(true), 8000)
  }

  const slide = slides[current]

  return (
    <div
      className="relative w-full h-80 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group"
      onMouseEnter={() => setIsAutoplay(false)}
      onMouseLeave={() => setIsAutoplay(true)}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url('${slide.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} opacity-65 transition-opacity duration-1000`}></div>
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-6 text-center">
        {/* Emoji with Enhanced Animation */}
        <div
          className="text-6xl md:text-8xl mb-6 animate-bounce"
          style={{ animationDuration: '2s', animation: 'bounce 2s infinite' }}
        >
          {slide.emoji}
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg animate-slide-up">
          {slide.title}
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl opacity-95 drop-shadow-md mb-8 max-w-2xl animate-slide-up-delay">
          {slide.subtitle}
        </p>

        {/* CTA Button */}
        <button className="btn btn-lg btn-white text-primary font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-slide-up-delay-2">
          Send Parcel 📦
        </button>
      </div>

      {/* Navigation Arrows - Hidden on mobile, visible on hover on desktop */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 btn btn-circle btn-ghost btn-lg text-white opacity-0 md:opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm hover:bg-white/30 shadow-lg"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 btn btn-circle btn-ghost btn-lg text-white opacity-0 md:opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm hover:bg-white/30 shadow-lg"
      >
        ❯
      </button>

      {/* Slide Indicators - Clickable Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 backdrop-blur-sm ${
              index === current
                ? 'w-8 bg-white shadow-lg scale-100'
                : 'w-3 bg-white/50 hover:bg-white/75 hover:scale-110'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 z-20 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold shadow-lg">
        {current + 1} / {slides.length}
      </div>

      {/* Mobile Navigation Buttons */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-4 md:hidden">
        <button
          onClick={prevSlide}
          className="btn btn-sm btn-circle btn-white text-primary font-bold"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="btn btn-sm btn-circle btn-white text-primary font-bold"
        >
          ❯
        </button>
      </div>
    </div>
  )
}
