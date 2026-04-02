import { Sun, AlertCircle, Heart, Bone } from 'lucide-react';

export default function StartHere() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
          Start Here: Understanding D3 and K2
        </h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Everything you need to know about vitamin D3 and K2 supplementation in India
        </p>

        <div className="space-y-12">
          <section className="bg-amber-50 rounded-xl p-8 border border-amber-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-amber-500 rounded-full p-3">
                <Sun className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  What is Vitamin D3?
                </h2>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vitamin D3 (cholecalciferol) is a fat-soluble vitamin that your body produces
              when skin is exposed to sunlight. It's crucial for:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Calcium and phosphorus absorption for strong bones</li>
              <li>Immune system function and disease resistance</li>
              <li>Mood regulation and mental health</li>
              <li>Muscle strength and cardiovascular health</li>
              <li>Cell growth and neuromuscular function</li>
            </ul>
          </section>

          <section className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 rounded-full p-3">
                <AlertCircle className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Why Are Indians Deficient?
                </h2>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Despite living in a sunny country, 70-90% of Indians have insufficient
              vitamin D levels. Here's why:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                <strong>Darker skin tone:</strong> Higher melanin reduces vitamin D synthesis
                by 50-90%
              </li>
              <li>
                <strong>Indoor lifestyle:</strong> Urban jobs and air-conditioned spaces limit
                sun exposure
              </li>
              <li>
                <strong>Cultural factors:</strong> Clothing preferences and sun avoidance habits
              </li>
              <li>
                <strong>Pollution:</strong> Blocks UVB rays needed for D3 production
              </li>
              <li>
                <strong>Diet:</strong> Traditional vegetarian diets lack D3-rich foods
              </li>
              <li>
                <strong>Geography:</strong> Northern regions get less UVB during winter months
              </li>
            </ul>
          </section>

          <section className="bg-amber-50 rounded-xl p-8 border border-amber-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-green-500 rounded-full p-3">
                <Bone className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  What is Vitamin K2?
                </h2>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vitamin K2 (menaquinone) is a lesser-known but critical nutrient that works
              as a traffic director for calcium in your body:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Activates proteins that bind calcium to bones and teeth</li>
              <li>Prevents calcium from depositing in arteries and soft tissues</li>
              <li>Supports cardiovascular health</li>
              <li>Works synergistically with vitamin D3</li>
            </ul>
            <div className="mt-4 p-4 bg-yellow-100 rounded-lg border border-yellow-300">
              <p className="text-gray-800 font-medium">
                <strong>Important:</strong> Vitamin K2 is different from K1 (found in leafy
                greens). K2 is found in fermented foods and animal products, which are often
                limited in Indian diets.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-purple-500 rounded-full p-3">
                <Heart className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  How D3 and K2 Work Together
                </h2>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think of D3 and K2 as a team:
            </p>
            <div className="space-y-4">
              <div className="bg-amber-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Vitamin D3's Role:</p>
                <p className="text-gray-700">
                  Increases calcium absorption from your gut and produces proteins that
                  need activation
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Vitamin K2's Role:</p>
                <p className="text-gray-700">
                  Activates those proteins to direct calcium to bones and prevent arterial
                  calcification
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-300">
                <p className="font-semibold text-gray-900 mb-2">The Result:</p>
                <p className="text-gray-700">
                  Strong bones, healthy teeth, and protected arteries. Taking high doses
                  of D3 without K2 can lead to increased calcium in the blood without
                  proper distribution, potentially causing arterial stiffness.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Optimize Your Levels?</h2>
            <p className="text-lg mb-6">
              Understanding the science is the first step. Now let's find the right dose
              for your unique situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#calculator"
                className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
              >
                Calculate Your Dose
              </a>
              <a
                href="#brands"
                className="bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-800 transition-colors"
              >
                View Recommended Brands
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
