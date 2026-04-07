import Carousel from '../components/Carousel'
import ComparisonSection from '../components/ComparisonSection'
import TestimonialSection from '../components/TestimonialSection'

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Carousel Section */}
      <section className="px-4 lg:px-0 py-4 pt-0">
        <div className="max-w-7xl mx-auto">
          <Carousel />
        </div>
      </section>

      {/* Key Features / Highlights Section */}
      <section className="py-20 px-4 lg:px-0 bg-base-100">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Key Strengths</span>
            </h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Everything you need to know about what makes us the best delivery service
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

            {/* Feature 1 */}
            <div className="card bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in">
              <div className="card-body">
                <div className="text-5xl mb-4 animate-float">⚡</div>
                <h3 className="card-title text-2xl">Lightning Fast</h3>
                <p className="text-base-content/70">
                  Guaranteed 2-4 hour delivery in most areas. Same-day delivery available!
                </p>
                <div className="card-actions justify-end mt-4">
                  <span className="badge badge-primary">2-4 Hours</span>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="card bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="card-body">
                <div className="text-5xl mb-4 animate-float" style={{ animationDelay: '0.2s' }}>📍</div>
                <h3 className="card-title text-2xl">GPS Tracking</h3>
                <p className="text-base-content/70">
                  Real-time GPS tracking with live notifications at every step.
                </p>
                <div className="card-actions justify-end mt-4">
                  <span className="badge badge-secondary">Real-time</span>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="card bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="card-body">
                <div className="text-5xl mb-4 animate-float" style={{ animationDelay: '0.4s' }}>💰</div>
                <h3 className="card-title text-2xl">Best Rates</h3>
                <p className="text-base-content/70">
                  Affordable pricing with zero hidden charges. Pay only for what you use.
                </p>
                <div className="card-actions justify-end mt-4">
                  <span className="badge badge-success">60৳ - 150৳</span>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="card bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="card-body">
                <div className="text-5xl mb-4 animate-float" style={{ animationDelay: '0.6s' }}>🛡️</div>
                <h3 className="card-title text-2xl">Full Insurance</h3>
                <p className="text-base-content/70">
                  100% insurance coverage on all parcels. Your peace of mind guaranteed.
                </p>
                <div className="card-actions justify-end mt-4">
                  <span className="badge badge-error">100% Safe</span>
                </div>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="card bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="card-body">
                <div className="text-5xl mb-4 animate-float" style={{ animationDelay: '0.8s' }}>🌍</div>
                <h3 className="card-title text-2xl">Wide Coverage</h3>
                <p className="text-base-content/70">
                  Available across 64+ districts. We deliver almost everywhere!
                </p>
                <div className="card-actions justify-end mt-4">
                  <span className="badge badge-warning">64+ Areas</span>
                </div>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="card bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="card-body">
                <div className="text-5xl mb-4 animate-float" style={{ animationDelay: '1s' }}>💬</div>
                <h3 className="card-title text-2xl">24/7 Support</h3>
                <p className="text-base-content/70">
                  Dedicated customer support available round the clock for your queries.
                </p>
                <div className="card-actions justify-end mt-4">
                  <span className="badge badge-info">Always Online</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center animate-slide-up">
            <button className="btn btn-primary btn-lg gap-2 hover:gap-3 transition-all duration-300">
              Start Shipping Now 🚀
            </button>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <ComparisonSection />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Additional Value Propositions */}
      <section className="py-20 px-4 lg:px-0 bg-base-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">DeliveryParcel</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Unique Value 1 */}
            <div className="flex gap-4 animate-slide-in-left">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white text-2xl">
                  ✓
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Experienced Team</h3>
                <p className="text-base-content/70">
                  With over 5 years of experience in the delivery industry, our team knows exactly how to handle your parcels safely and efficiently.
                </p>
              </div>
            </div>

            {/* Unique Value 2 */}
            <div className="flex gap-4 animate-slide-in-right">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white text-2xl">
                  ✓
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Technology-Driven</h3>
                <p className="text-base-content/70">
                  We use the latest technology to provide real-time tracking, automated updates, and seamless integration with your business systems.
                </p>
              </div>
            </div>

            {/* Unique Value 3 */}
            <div className="flex gap-4 animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-success text-white text-2xl">
                  ✓
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Eco-Friendly</h3>
                <p className="text-base-content/70">
                  We're committed to reducing carbon footprint through optimized routes and eco-friendly packaging solutions.
                </p>
              </div>
            </div>

            {/* Unique Value 4 */}
            <div className="flex gap-4 animate-slide-in-right" style={{ animationDelay: '0.1s' }}>
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-warning text-white text-2xl">
                  ✓
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Scalable Solutions</h3>
                <p className="text-base-content/70">
                  Growing business? Our scalable solutions can handle everything from single parcels to thousands of daily shipments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}

      {/* CTA Section */}
      <section className="py-20 px-4 lg:px-0 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            Join Thousands of Happy Customers
          </h2>
          <p className="text-xl mb-8 opacity-90 animate-slide-up-delay">
            Experience fast, reliable, and affordable parcel delivery today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up-delay-2">
            <button className="btn btn-lg btn-ghost text-white hover:btn-white hover:text-primary font-bold">
              Send Parcel Now
            </button>
            <button className="btn btn-lg btn-outline text-white hover:bg-white/20 border-white">
              Schedule Pickup
            </button>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 lg:px-0 bg-base-100">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-base-content/70 mb-4">🚀 Frontend Stack</p>
          <p className="font-semibold mb-2">React + Vite + Tailwind CSS + Daisy UI + React Router</p>
          <p className="text-sm text-base-content/70">
            ⚡ Backend Ready: Express + MongoDB (Native Driver)
          </p>
        </div>
      </section>
    </div>
  )
}
