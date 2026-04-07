import { useState, useEffect } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Ahmed Hassan',
    role: 'Business Owner',
    company: 'Tech Solutions Ltd',
    avatar: '👨‍💼',
    quote: 'DeliveryParcel has been a game-changer for my business. The reliability and speed are unmatched. My customers love the real-time tracking!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
  },
  {
    id: 2,
    name: 'Fatima Khan',
    role: 'E-commerce Manager',
    company: 'Online Store Pro',
    avatar: '👩‍💼',
    quote: 'The best delivery service we\'ve used. Their customer support is always ready to help. The pricing is very competitive too!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
  },
  {
    id: 3,
    name: 'Rajib Roy',
    role: 'Individual Customer',
    company: 'Regular User',
    avatar: '😊',
    quote: 'Fast, reliable, and affordable. I send parcels every week and they never disappoint. Highly recommended!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
  },
  {
    id: 4,
    name: 'Sophia Ahmed',
    role: 'Logistic Coordinator',
    company: 'Supply Chain Leaders',
    avatar: '👩‍🔬',
    quote: 'We switched to DeliveryParcel and saw a 40% reduction in delivery time. Their platform is user-friendly and efficient.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

  useEffect(() => {
    if (!isAutoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoplay])

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setIsAutoplay(false)
    setTimeout(() => setIsAutoplay(true), 10000)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoplay(false)
    setTimeout(() => setIsAutoplay(true), 10000)
  }

  const goToSlide = (index) => {
    setCurrent(index)
    setIsAutoplay(false)
    setTimeout(() => setIsAutoplay(true), 10000)
  }

  const testimonial = testimonials[current]

  return (
    <section className="py-20 px-4 lg:px-0 bg-gradient-to-br from-base-100 via-primary/5 to-base-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Customers</span> Say
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Join thousands of happy customers who trust DeliveryParcel for their parcel delivery needs
          </p>
        </div>

        {/* Main Testimonial Slider */}
        <div className="relative mb-12 group">
          {/* Main Card */}
          <div className="bg-white dark:bg-base-200 rounded-2xl shadow-2xl p-8 md:p-12 min-h-96 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 opacity-10 text-5xl">💬</div>

            {/* Content with Animation */}
            <div key={testimonial.id} className="animate-fade-in">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-2xl text-yellow-400 animate-float" style={{ animationDelay: `${i * 0.1}s` }}>
                    ⭐
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg md:text-xl text-base-content mb-8 italic leading-relaxed animate-slide-up">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 mb-6 animate-slide-up-delay">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-base-content/70">{testimonial.role}</p>
                  <p className="text-primary font-semibold text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 btn btn-circle btn-ghost opacity-0 group-hover:opacity-100 transition-all duration-300 md:flex items-center justify-center"
            >
              ❮
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 btn btn-circle btn-ghost opacity-0 group-hover:opacity-100 transition-all duration-300 md:flex items-center justify-center"
            >
              ❯
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === current
                    ? 'w-8 bg-primary shadow-lg'
                    : 'w-3 bg-base-300 hover:bg-primary/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Buttons */}
          <div className="flex justify-center gap-4 mt-6 md:hidden">
            <button onClick={prevSlide} className="btn btn-circle btn-primary">
              ❮
            </button>
            <button onClick={nextSlide} className="btn btn-circle btn-primary">
              ❯
            </button>
          </div>
        </div>

        {/* Mini Thumbnails - Show all testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {testimonials.map((t, index) => (
            <div
              key={t.id}
              onClick={() => goToSlide(index)}
              className={`p-4 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                index === current
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-base-200 dark:bg-base-300 hover:shadow-md'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{t.avatar}</span>
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-xs opacity-75">{t.role}</p>
                </div>
              </div>
              <p className={`text-xs line-clamp-2 ${index === current ? 'opacity-90' : 'opacity-70'}`}>
                {t.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
