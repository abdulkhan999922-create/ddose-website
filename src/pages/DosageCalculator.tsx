import { useState } from 'react';
import { Calculator, Info } from 'lucide-react';

interface CalculatorResults {
  d3Dose: number;
  k2Dose: number;
  explanation: string;
}

export default function DosageCalculator() {
  const [weight, setWeight] = useState('');
  const [bloodLevel, setBloodLevel] = useState('');
  const [skinTone, setSkinTone] = useState('');
  const [sunExposure, setSunExposure] = useState('');
  const [results, setResults] = useState<CalculatorResults | null>(null);

  const calculateDose = () => {
    const weightNum = parseFloat(weight);
    const bloodLevelNum = bloodLevel ? parseFloat(bloodLevel) : 0;

    if (!weightNum || !skinTone || !sunExposure) {
      alert('Please fill in all required fields');
      return;
    }

    let baseDose = 0;

    if (bloodLevelNum > 0) {
      if (bloodLevelNum < 20) {
        baseDose = 5000;
      } else if (bloodLevelNum < 30) {
        baseDose = 4000;
      } else if (bloodLevelNum < 40) {
        baseDose = 2000;
      } else {
        baseDose = 1000;
      }
    } else {
      baseDose = 4000;
    }

    if (skinTone === 'dark' || skinTone === 'very-dark') {
      baseDose += 1000;
    }

    if (sunExposure === 'minimal') {
      baseDose += 1000;
    } else if (sunExposure === 'none') {
      baseDose += 2000;
    } else if (sunExposure === 'good') {
      baseDose -= 1000;
    }

    if (weightNum > 90) {
      baseDose += 1000;
    } else if (weightNum < 50) {
      baseDose -= 500;
    }

    baseDose = Math.max(1000, Math.min(10000, baseDose));

    const k2Dose = Math.round(baseDose / 50);

    let explanation = '';
    if (bloodLevelNum > 0) {
      if (bloodLevelNum < 20) {
        explanation = 'Your levels are severely deficient. A higher dose is recommended to bring levels up quickly. Retest after 8-12 weeks.';
      } else if (bloodLevelNum < 30) {
        explanation = 'Your levels are insufficient. A moderate-high dose will help achieve optimal levels. Retest after 8-12 weeks.';
      } else if (bloodLevelNum < 40) {
        explanation = 'Your levels are in a good range. A maintenance dose will help sustain optimal levels.';
      } else {
        explanation = 'Your levels are optimal. A low maintenance dose is sufficient.';
      }
    } else {
      explanation = 'Based on your profile, this is a standard starting dose for most Indians. Get tested after 12 weeks to adjust.';
    }

    setResults({
      d3Dose: baseDose,
      k2Dose: k2Dose,
      explanation: explanation,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 mb-4">
            <Calculator className="text-white" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dosage Calculator
          </h1>
          <p className="text-xl text-gray-600">
            Get a personalized D3+K2 dosage recommendation based on your unique profile
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 flex gap-3">
          <Info className="text-blue-600 flex-shrink-0 mt-1" size={20} />
          <p className="text-blue-900 text-sm">
            This calculator provides general guidance only. Always consult with a healthcare
            provider before starting supplementation, especially if you have existing health
            conditions or take medications.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-amber-100">
          <div className="space-y-6">
            <div>
              <label className="block text-gray-900 font-semibold mb-2">
                Body Weight (kg) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter your weight in kg"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-gray-900 font-semibold mb-2">
                Current Vitamin D Blood Level (ng/mL)
                <span className="text-gray-500 text-sm font-normal ml-2">(Optional)</span>
              </label>
              <input
                type="number"
                value={bloodLevel}
                onChange={(e) => setBloodLevel(e.target.value)}
                placeholder="Leave blank if not tested"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <p className="text-sm text-gray-600 mt-1">
                Optimal range: 40-60 ng/mL. If you haven't tested, leave this blank.
              </p>
            </div>

            <div>
              <label className="block text-gray-900 font-semibold mb-2">
                Skin Tone <span className="text-red-500">*</span>
              </label>
              <select
                value={skinTone}
                onChange={(e) => setSkinTone(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="">Select your skin tone</option>
                <option value="fair">Fair (Burns easily in sun)</option>
                <option value="medium">Medium (Tans gradually)</option>
                <option value="dark">Dark (Rarely burns)</option>
                <option value="very-dark">Very Dark (Never burns)</option>
              </select>
              <p className="text-sm text-gray-600 mt-1">
                Darker skin requires more sun exposure to produce the same amount of vitamin D
              </p>
            </div>

            <div>
              <label className="block text-gray-900 font-semibold mb-2">
                Daily Sun Exposure <span className="text-red-500">*</span>
              </label>
              <select
                value={sunExposure}
                onChange={(e) => setSunExposure(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="">Select your sun exposure</option>
                <option value="none">None (Always indoors)</option>
                <option value="minimal">Minimal (Less than 15 min/day)</option>
                <option value="moderate">Moderate (15-30 min/day)</option>
                <option value="good">Good (30+ min/day, arms/legs exposed)</option>
              </select>
              <p className="text-sm text-gray-600 mt-1">
                Direct sun exposure on skin without sunscreen between 10 AM - 3 PM
              </p>
            </div>

            <button
              onClick={calculateDose}
              className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-amber-600 hover:to-yellow-700 transition-all transform hover:scale-[1.02] shadow-lg"
            >
              Calculate My Dose
            </button>
          </div>
        </div>

        {results && (
          <div className="bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl shadow-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6 text-center">Your Recommended Dose</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <p className="text-amber-100 text-sm font-semibold mb-2">Vitamin D3</p>
                <p className="text-4xl font-bold">{results.d3Dose.toLocaleString()} IU</p>
                <p className="text-amber-100 text-sm mt-2">per day</p>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <p className="text-amber-100 text-sm font-semibold mb-2">Vitamin K2</p>
                <p className="text-4xl font-bold">{results.k2Dose} mcg</p>
                <p className="text-amber-100 text-sm mt-2">per day</p>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 mb-6">
              <p className="text-lg leading-relaxed">{results.explanation}</p>
            </div>

            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Take with a meal containing healthy fats for better absorption</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Consistency is key - take daily at the same time</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Retest blood levels after 8-12 weeks and adjust if needed</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Optimal blood level target: 40-60 ng/mL</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
