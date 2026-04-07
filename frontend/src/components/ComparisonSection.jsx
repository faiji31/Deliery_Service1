export default function ComparisonSection() {
  const comparisons = [
    {
      feature: 'Delivery Speed',
      us: '2-4 hours',
      competitor1: '6-8 hours',
      competitor2: '8-12 hours',
      icon: '⚡'
    },
    {
      feature: 'Coverage Areas',
      us: '64+ Districts',
      competitor1: '45 Districts',
      competitor2: '30 Districts',
      icon: '🗺️'
    },
    {
      feature: 'Insurance',
      us: '100% Coverage',
      competitor1: 'Limited',
      competitor2: 'None',
      icon: '🛡️'
    },
    {
      feature: 'Pricing',
      us: 'Most Affordable',
      competitor1: 'Higher',
      competitor2: 'Highest',
      icon: '💰'
    },
    {
      feature: 'Tracking',
      us: 'Real-time GPS',
      competitor1: 'Hourly Updates',
      competitor2: 'Daily Report',
      icon: '📍'
    },
    {
      feature: 'Customer Support',
      us: '24/7 Available',
      competitor1: '9-6 Available',
      competitor2: 'Email Only',
      icon: '💬'
    }
  ]

  return (
    <section className="py-20 px-4 lg:px-0 bg-base-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why We're <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Different</span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            See how DeliveryParcel compares to other delivery services
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="overflow-x-auto">
          <div className="min-w-full grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {/* Header Row */}
            <div className="md:col-span-4">
              <div className="grid grid-cols-4 gap-4">
                {/* Feature Column */}
                <div className="p-4 font-bold text-center md:text-left">Feature</div>

                {/* DeliveryParcel - Highlighted */}
                <div className="p-4 font-bold text-center bg-primary/10 rounded-lg border-2 border-primary animate-pulse">
                  <div className="text-2xl mb-1">🚀</div>
                  DeliveryParcel
                  <div className="badge badge-primary mt-1">Best</div>
                </div>

                {/* Competitor 1 */}
                <div className="p-4 font-bold text-center opacity-60">
                  <div className="text-2xl mb-1">📦</div>
                  Competitor A
                </div>

                {/* Competitor 2 */}
                <div className="p-4 font-bold text-center opacity-60">
                  <div className="text-2xl mb-1">📬</div>
                  Competitor B
                </div>
              </div>
            </div>

            {/* Comparison Rows */}
            {comparisons.map((comp, index) => (
              <div
                key={index}
                className="md:col-span-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid grid-cols-4 gap-4 items-center p-4 rounded-lg hover:bg-base-200 transition-all duration-300">
                  {/* Feature */}
                  <div className="font-semibold flex items-center gap-2">
                    <span className="text-2xl">{comp.icon}</span>
                    {comp.feature}
                  </div>

                  {/* DeliveryParcel - Highlighted */}
                  <div className="text-center p-3 bg-primary/10 rounded-lg border border-primary font-bold text-primary">
                    ✓ {comp.us}
                  </div>

                  {/* Competitor 1 */}
                  <div className="text-center p-3 text-base-content/70">
                    {comp.competitor1}
                  </div>

                  {/* Competitor 2 */}
                  <div className="text-center p-3 text-base-content/70">
                    {comp.competitor2}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="text-center animate-slide-up">
          <button className="btn btn-primary btn-lg gap-2">
            Get Started Today 🚀
          </button>
        </div>
      </div>
    </section>
  )
}
