export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 px-4 lg:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
              Hello Deliery Parcel
            </h1>
            <p className="text-xl md:text-2xl text-base-content/80 mb-8">
              Fast, Reliable & Affordable Parcel Delivery Service
            </p>
            <p className="text-base md:text-lg text-base-content/60 max-w-2xl mx-auto">
              Send your parcels with confidence. Track in real-time and get guaranteed delivery at your doorstep.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="btn btn-primary btn-lg text-white font-bold">
              📦 Send a Parcel
            </button>
            <button className="btn btn-outline btn-lg font-bold">
              🔍 Track Order
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <p className="text-3xl font-bold text-primary">50K+</p>
                <p className="text-sm">Deliveries</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <p className="text-3xl font-bold text-primary">24/7</p>
                <p className="text-sm">Support</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <p className="text-3xl font-bold text-primary">64+</p>
                <p className="text-sm">Districts</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <p className="text-3xl font-bold text-primary">4.8/5</p>
                <p className="text-sm">Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 lg:px-0 bg-base-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-lg text-base-content/70">
              Everything you need for seamless parcel delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition">
              <div className="card-body">
                <div className="text-5xl mb-4">📦</div>
                <h3 className="card-title text-xl">Quick Pickup</h3>
                <p className="text-base-content/70">
                  We pick up your parcels from anywhere in the city within 2 hours of booking.
                </p>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-sm btn-ghost">Learn more →</button>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition">
              <div className="card-body">
                <div className="text-5xl mb-4">🚚</div>
                <h3 className="card-title text-xl">Real-time Tracking</h3>
                <p className="text-base-content/70">
                  Track your parcel in real-time with GPS location updates and delivery notifications.
                </p>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-sm btn-ghost">Learn more →</button>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition">
              <div className="card-body">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="card-title text-xl">Best Rates</h3>
                <p className="text-base-content/70">
                  Competitive pricing with no hidden charges. Get the best rates in the market.
                </p>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-sm btn-ghost">Learn more →</button>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition">
              <div className="card-body">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="card-title text-xl">Insurance Coverage</h3>
                <p className="text-base-content/70">
                  All parcels are insured. Claim your money back if anything goes wrong.
                </p>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-sm btn-ghost">Learn more →</button>
                </div>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition">
              <div className="card-body">
                <div className="text-5xl mb-4">⏱️</div>
                <h3 className="card-title text-xl">Fast Delivery</h3>
                <p className="text-base-content/70">
                  Same-day delivery available for most areas. Get your parcel delivered in hours.
                </p>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-sm btn-ghost">Learn more →</button>
                </div>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition">
              <div className="card-body">
                <div className="text-5xl mb-4">✨</div>
                <h3 className="card-title text-xl">Easy Booking</h3>
                <p className="text-base-content/70">
                  Simple and intuitive booking process. Schedule pickups in just a few clicks.
                </p>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-sm btn-ghost">Learn more →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 lg:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-base-content/70">
              Three simple steps to send your parcel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="badge badge-lg badge-primary text-white text-xl font-bold w-16 h-16 flex items-center justify-center">
                  1
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">Book Pickup</h3>
              <p className="text-base-content/70">
                Enter your pickup location, recipient address, and parcel details. Choose your preferred time.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="badge badge-lg badge-primary text-white text-xl font-bold w-16 h-16 flex items-center justify-center">
                  2
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">We Pick It Up</h3>
              <p className="text-base-content/70">
                Our rider arrives at your location and securely picks up your parcel. Get instant confirmation.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="badge badge-lg badge-primary text-white text-xl font-bold w-16 h-16 flex items-center justify-center">
                  3
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">Delivered!</h3>
              <p className="text-base-content/70">
                Track your parcel in real-time and receive it at the destination. Get delivery confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 lg:px-0 bg-base-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple Pricing</h2>
            <p className="text-lg text-base-content/70">
              No hidden charges. What you see is what you pay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Price Card 1 */}
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-2xl">Documents</h3>
                <p className="text-4xl font-bold text-primary">60 ৳</p>
                <p className="text-sm text-base-content/70">Same city delivery</p>
                <ul className="list-disc list-inside space-y-2 text-sm my-4">
                  <li>Up to 500g</li>
                  <li>Same-day delivery</li>
                  <li>Insurance included</li>
                </ul>
                <button className="btn btn-outline w-full">Choose Plan</button>
              </div>
            </div>

            {/* Price Card 2 - Popular */}
            <div className="card bg-primary text-primary-content shadow-lg md:scale-105">
              <div className="card-body">
                <div className="badge badge-success">POPULAR</div>
                <h3 className="card-title text-2xl">Small Parcel</h3>
                <p className="text-4xl font-bold">110 ৳</p>
                <p className="text-sm opacity-90">Same city delivery</p>
                <ul className="list-disc list-inside space-y-2 text-sm my-4">
                  <li>Up to 2kg</li>
                  <li>Same-day delivery</li>
                  <li>Insurance included</li>
                  <li>Free tracking</li>
                </ul>
                <button className="btn bg-white text-primary w-full hover:bg-gray-100">
                  Choose Plan
                </button>
              </div>
            </div>

            {/* Price Card 3 */}
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-2xl">Large Parcel</h3>
                <p className="text-4xl font-bold text-primary">150 ৳</p>
                <p className="text-sm text-base-content/70">Same city delivery</p>
                <ul className="list-disc list-inside space-y-2 text-sm my-4">
                  <li>Up to 10kg</li>
                  <li>Same-day delivery</li>
                  <li>Insurance included</li>
                  <li>Priority handling</li>
                </ul>
                <button className="btn btn-outline w-full">Choose Plan</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 lg:px-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Send Your Parcel?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers. Fast, reliable, and affordable delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-lg btn-white text-primary font-bold">
              Send Parcel Now
            </button>
            <button className="btn btn-lg btn-outline btn-white text-white border-white hover:bg-white/20">
              Learn More
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
