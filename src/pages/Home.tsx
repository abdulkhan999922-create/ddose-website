import { Sun, Shield, Calculator } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 mb-6">
            <Sun className="text-white" size={40} />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Know your D.
            <br />
            <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">
              Get your dose right.
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            India's only dedicated Vitamin D3+K2 guide. Science-backed information
            to help you optimize your vitamin D levels safely and effectively.
          </p>
          <button
            onClick={() => onNavigate('calculator')}
            className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-amber-600 hover:to-yellow-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Calculate Your Dose
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-md border border-amber-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What is Vitamin D3?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Vitamin D3 (cholecalciferol) is essential for calcium absorption, bone
              health, immune function, and overall wellbeing. Despite abundant
              sunshine, over 70% of Indians are vitamin D deficient due to indoor
              lifestyles, skin tone, and dietary factors.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md border border-amber-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why K2 Matters
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Vitamin K2 (menaquinone) works synergistically with D3 to direct calcium
              to your bones and teeth, not your arteries. Taking D3 without K2 can lead
              to calcium buildup in soft tissues. K2 ensures calcium goes where it
              should.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl p-8 md:p-12 text-white text-center">
          <Shield className="inline-block mb-4" size={48} />
          <h2 className="text-3xl font-bold mb-4">
            Why D3 and K2 Together?
          </h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Taking high doses of D3 alone can deplete vitamin K2 and cause improper
            calcium distribution. The combination ensures optimal bone health while
            protecting your cardiovascular system. It's not just about getting enough
            D3 — it's about getting it right.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('start')}
              className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
            >
              Learn More
            </button>
            <button
              onClick={() => onNavigate('brands')}
              className="bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-800 transition-colors flex items-center justify-center gap-2"
            >
              <Calculator size={20} />
              View Brand Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
