import { useEffect, useState } from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { supabase, type Brand } from '../lib/supabase';

export default function BrandGuide() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBrands() {
      const { data, error } = await supabase
        .from('brands')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) {
        console.error('Error fetching brands:', error);
      } else {
        setBrands(data || []);
      }
      setLoading(false);
    }

    fetchBrands();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
          Brand Guide: D3+K2 in India
        </h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Compare popular vitamin D3+K2 supplements available in India. Our recommendations
          are based on dosage accuracy, bioavailability, and value for money.
        </p>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-amber-500 border-t-transparent"></div>
            <p className="mt-4 text-gray-600">Loading brands...</p>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-amber-100 mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Brand Name</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Dose</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Form</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Price Range</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold">Status</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold">Buy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {brands.map((brand) => (
                      <tr
                        key={brand.id}
                        className={`hover:bg-amber-50 transition-colors ${
                          brand.is_recommended ? 'bg-amber-50/50' : ''
                        }`}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-gray-900">{brand.name}</span>
                            {brand.is_recommended && (
                              <Star className="text-amber-500 fill-amber-500" size={16} />
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-700">{brand.dose}</td>
                        <td className="px-6 py-4 text-gray-700">{brand.form}</td>
                        <td className="px-6 py-4 text-gray-700">{brand.price_range}</td>
                        <td className="px-6 py-4 text-center">
                          {brand.is_recommended ? (
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-medium">
                              <Star size={14} className="fill-amber-500 text-amber-500" />
                              Recommended
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm">
                              {brand.name.includes('D3') && !brand.name.includes('K2') ? 'D3 Only' : 'Good'}
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {brand.amazon_link ? (
                            <a
                              href={brand.amazon_link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded-lg transition-colors"
                            >
                              <ExternalLink size={16} />
                              Amazon
                            </a>
                          ) : (
                            <span className="text-gray-400 text-sm">-</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-md border border-amber-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Star className="text-amber-500 fill-amber-500" size={20} />
                  What Makes a Brand Recommended?
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>Optimal D3:K2 ratio (typically 50-100 IU D3 per 1 mcg K2)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>Uses K2 as MK-7 form (better absorption)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>Third-party tested for purity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>Good value for money</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>Easily available across India</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 rounded-lg p-6 shadow-md border border-amber-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Important Notes
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Always consult your doctor before starting supplementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Get your vitamin D levels tested before and after</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Take with a fat-containing meal for better absorption</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Prices may vary by retailer and location</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>This page contains affiliate links. If you purchase through these links, D Dose earns a small commission at no extra cost to you.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Not Sure Which Dose You Need?</h3>
              <p className="text-lg mb-6">
                Use our dosage calculator to find the right amount based on your body weight,
                current levels, and lifestyle factors.
              </p>
              <button className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors inline-flex items-center gap-2">
                <ExternalLink size={20} />
                Try the Calculator
              </button>
            </div>

            <div className="mt-8 text-center text-sm text-gray-600 bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p>
                This page contains affiliate links. If you purchase through these links,
                D Dose earns a small commission at no extra cost to you.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
