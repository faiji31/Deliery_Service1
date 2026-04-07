export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Hassan',
      role: 'Business Owner',
      avatar: '👨‍💼',
      rating: 5,
      content: 'DeliveryParcel has been a game-changer for my business. The reliability and speed are unmatched. My customers love the real-time tracking!',
      company: 'Tech Solutions Ltd'
    },
    {
      id: 2,
      name: 'Fatima Khan',
      role: 'E-commerce Manager',
      avatar: '👩‍💼',
      rating: 5,
      content: 'The best delivery service we\'ve used. Their customer support is always ready to help. The pricing is very competitive too!',
      company: 'Online Store Pro'
    },
    {
      id: 3,
      name: 'Rajib Roy',
      role: 'Customer',
      avatar: '👨‍🎓',
      rating: 5,
      content: 'Fast, reliable, and affordable. I send parcels every week and they never disappoint. Highly recommended!',
      company: 'Individual Customer'
    },
    {
      id: 4,
      name: 'Sophia Ahmed',
      role: 'Logistic Coordinator',
      avatar: '👩‍🏔️',
      rating: 5,
      content: 'We switched to DeliveryParcel and saw a 40% reduction in delivery time. Their platform is user-friendly and efficient.',
      company: 'Supply Chain Leaders'
    }
  ]

  return (
    <section className="py-20 px-4 lg:px-0 bg-base-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Customers</span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Real testimonials from our satisfied customers and business partners
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="card-body">
                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl animate-pulse">
                      ⭐
                    </span>
                  ))}
                </div>

                {/* Content */}
                <p className="text-base-content/80 mb-4 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Divider */}
                <div className="divider my-2"></div>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div className="flex-1">
                    <p className="font-bold text-base-content">{testimonial.name}</p>
                    <p className="text-sm text-base-content/60">{testimonial.role}</p>
                    <p className="text-xs text-primary font-semibold">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in">
          {[
            { label: 'Happy Customers', value: '50K+' },
            { label: 'Completed Deliveries', value: '100K+' },
            { label: 'Average Rating', value: '4.9/5' },
            { label: 'Countries Served', value: '1' }
          ].map((stat, index) => (
            <div
              key={index}
              className="card bg-gradient-to-br from-primary to-secondary text-white shadow-lg hover:shadow-2xl transition hover:scale-105"
            >
              <div className="card-body items-center text-center">
                <p className="text-3xl md:text-4xl font-bold">{stat.value}</p>
                <p className="text-sm opacity-90">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
