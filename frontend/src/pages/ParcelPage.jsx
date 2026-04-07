import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { parcelAPI } from '../services/api';
import { COMPANY } from '../constants/branding';

const PRICING_CONFIG = {
  serviceCenter: {
    dhaka: 'Dhaka',
    chattogram: 'Chattogram',
    sylhet: 'Sylhet',
    rangpur: 'Rangpur',
    rajshahi: 'Rajshahi',
    khulna: 'Khulna',
    barisal: 'Barisal',
  },
  parcelType: {
    document: 'Document',
    nonDocument: 'Non-Document',
  },
  pricing: {
    // Same city pricing
    sameCity: {
      document: { base: 60, perKg: 0 },
      nonDocument: { base: 110, perKg: 15 },
    },
    // Outside city pricing
    outsideCity: {
      document: { base: 80, perKg: 0 },
      nonDocument: { base: 150, perKg: 20 },
    },
  },
};

export default function ParcelPage() {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState(0);

  const [formData, setFormData] = useState({
    senderName: '',
    senderPhone: '',
    senderAddress: '',
    senderServiceCenter: 'Dhaka',
    receiverName: '',
    receiverPhone: '',
    receiverAddress: '',
    receiverServiceCenter: 'Dhaka',
    parcelType: 'document',
    weight: 0,
    description: '',
    specialInstructions: '',
  });

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: '/parcel' } });
    }
  }, [isAuthenticated, navigate]);

  // Calculate price
  useEffect(() => {
    let price = 0;
    const isSameCity = formData.senderServiceCenter === formData.receiverServiceCenter;
    const pricingType = isSameCity ? 'sameCity' : 'outsideCity';
    const pricing = PRICING_CONFIG.pricing[pricingType][formData.parcelType];

    price = pricing.base;
    if (formData.weight > 0) {
      price += Math.ceil(formData.weight) * pricing.perKg;
    }

    setCalculatedPrice(price);
  }, [formData.senderServiceCenter, formData.receiverServiceCenter, formData.parcelType, formData.weight]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validation
    if (!formData.senderName.trim()) {
      setError('Sender name is required');
      return;
    }
    if (!formData.senderPhone.trim()) {
      setError('Sender phone is required');
      return;
    }
    if (!formData.receiverName.trim()) {
      setError('Receiver name is required');
      return;
    }
    if (!formData.receiverPhone.trim()) {
      setError('Receiver phone is required');
      return;
    }
    if (!formData.description.trim()) {
      setError('Parcel description is required');
      return;
    }

    setLoading(true);

    try {
      const parcelData = {
        ...formData,
        weight: parseFloat(formData.weight) || 0,
        estimatedPrice: calculatedPrice,
      };

      const response = await parcelAPI.create(parcelData);
      setSuccess(`Parcel created successfully! Tracking ID: ${response.parcel?.trackingId || 'N/A'}`);

      // Reset form
      setFormData({
        senderName: '',
        senderPhone: '',
        senderAddress: '',
        senderServiceCenter: 'Dhaka',
        receiverName: '',
        receiverPhone: '',
        receiverAddress: '',
        receiverServiceCenter: 'Dhaka',
        parcelType: 'document',
        weight: 0,
        description: '',
        specialInstructions: '',
      });

      // Redirect after 2 seconds
      setTimeout(() => {
        navigate('/my-parcels');
      }, 2000);
    } catch (err) {
      setError(err.message || 'Failed to create parcel');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center mb-4">
            <span className="text-5xl">{COMPANY.logo}</span>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white ml-3">{COMPANY.name}</h1>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Book a Parcel</h2>
          <p className="text-gray-600 dark:text-gray-300">{COMPANY.tagline}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
              {error && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="text-red-700 dark:text-red-400">{error}</p>
                </div>
              )}

              {success && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-green-700 dark:text-green-400">{success}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Sender Information */}
                <div className="border-b pb-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">1</span>
                    Sender Information
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="senderName"
                      placeholder="Full Name"
                      value={formData.senderName}
                      onChange={handleChange}
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />

                    <input
                      type="tel"
                      name="senderPhone"
                      placeholder="Phone Number"
                      value={formData.senderPhone}
                      onChange={handleChange}
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />

                    <input
                      type="text"
                      name="senderAddress"
                      placeholder="Address"
                      value={formData.senderAddress}
                      onChange={handleChange}
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
                    />

                    <select
                      name="senderServiceCenter"
                      value={formData.senderServiceCenter}
                      onChange={handleChange}
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
                    >
                      {Object.entries(PRICING_CONFIG.serviceCenter).map(([key, value]) => (
                        <option key={key} value={value}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Receiver Information */}
                <div className="border-b pb-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">2</span>
                    Receiver Information
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="receiverName"
                      placeholder="Full Name"
                      value={formData.receiverName}
                      onChange={handleChange}
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />

                    <input
                      type="tel"
                      name="receiverPhone"
                      placeholder="Phone Number"
                      value={formData.receiverPhone}
                      onChange={handleChange}
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />

                    <input
                      type="text"
                      name="receiverAddress"
                      placeholder="Address"
                      value={formData.receiverAddress}
                      onChange={handleChange}
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
                    />

                    <select
                      name="receiverServiceCenter"
                      value={formData.receiverServiceCenter}
                      onChange={handleChange}
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
                    >
                      {Object.entries(PRICING_CONFIG.serviceCenter).map(([key, value]) => (
                        <option key={key} value={value}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Parcel Details */}
                <div className="border-b pb-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">3</span>
                    Parcel Details
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Parcel Type
                      </label>
                      <select
                        name="parcelType"
                        value={formData.parcelType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="document">Document</option>
                        <option value="nonDocument">Non-Document</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Weight (kg)
                      </label>
                      <input
                        type="number"
                        name="weight"
                        min="0"
                        step="0.1"
                        value={formData.weight}
                        onChange={handleChange}
                        placeholder="0"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <textarea
                      name="description"
                      placeholder="Describe the parcel (e.g., Books, Electronics, Clothing)"
                      value={formData.description}
                      onChange={handleChange}
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2 resize-none"
                      rows="3"
                      required
                    />

                    <textarea
                      name="specialInstructions"
                      placeholder="Special instructions (optional)"
                      value={formData.specialInstructions}
                      onChange={handleChange}
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2 resize-none"
                      rows="2"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 rounded-lg transition-all"
                >
                  {loading ? 'Creating Parcel...' : 'Create Parcel'}
                </button>
              </form>
            </div>
          </div>

          {/* Pricing Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 sticky top-20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Pricing</h3>

              {/* Route Type */}
              <div className="mb-6 pb-6 border-b">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Route Type:</p>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  {formData.senderServiceCenter === formData.receiverServiceCenter ? '🏙️ Same City' : '🚚 Outside City'}
                </p>
              </div>

              {/* Parcel Type Pricing */}
              <div className="mb-6 pb-6 border-b">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Pricing Details:</p>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700 dark:text-gray-300">Type:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {formData.parcelType === 'document' ? 'Document' : 'Non-Document'}
                    </span>
                  </div>

                  {(() => {
                    const isSameCity = formData.senderServiceCenter === formData.receiverServiceCenter;
                    const pricingType = isSameCity ? 'sameCity' : 'outsideCity';
                    const pricing = PRICING_CONFIG.pricing[pricingType][formData.parcelType];

                    return (
                      <>
                        <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                          <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Base Charge:</p>
                          <p className="text-lg font-bold text-blue-600 dark:text-blue-400">৳{pricing.base}</p>
                        </div>

                        {formData.weight > 0 && (
                          <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                            <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                              Weight ({formData.weight} kg × ৳{pricing.perKg}/kg):
                            </p>
                            <p className="text-lg font-bold text-orange-600 dark:text-orange-400">
                              ৳{Math.ceil(formData.weight) * pricing.perKg}
                            </p>
                          </div>
                        )}
                      </>
                    );
                  })()}
                </div>
              </div>

              {/* Total Price */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Estimated Total</p>
                <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">৳{calculatedPrice}</p>
              </div>

              {/* Info Box */}
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-xs text-blue-700 dark:text-blue-400">
                  💡 <strong>Note:</strong> This is an estimated price. Final price may vary based on actual weight and dimensions.
                </p>
              </div>

              {/* Pricing Guide */}
              <div className="mt-6 pt-6 border-t">
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Pricing Guide</p>
                <div className="space-y-2 text-xs text-gray-600 dark:text-gray-400">
                  <div>
                    <strong className="text-gray-900 dark:text-white">Same City:</strong>
                    <p>Doc: ৳60 | Non-Doc: ৳110 + weight</p>
                  </div>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Outside City:</strong>
                    <p>Doc: ৳80 | Non-Doc: ৳150 + weight</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
