import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { supabase, type ContactSubmission } from '../lib/supabase';

export default function AskDDose() {
  const [name, setName] = useState('');
  const [question, setQuestion] = useState('');
  const [bloodReport, setBloodReport] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !question) {
      alert('Please fill in your name and question');
      return;
    }

    setIsSubmitting(true);

    const submission: ContactSubmission = {
      name,
      question,
      blood_report_values: bloodReport || undefined,
    };

    const { error } = await supabase.from('contact_submissions').insert([submission]);

    if (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your question. Please try again.');
    } else {
      setIsSubmitted(true);
      setName('');
      setQuestion('');
      setBloodReport('');
      setTimeout(() => setIsSubmitted(false), 5000);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 mb-4">
            <Send className="text-white" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ask D Dose
          </h1>
          <p className="text-xl text-gray-600">
            Have questions about vitamin D3 and K2? We're here to help.
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
            <CheckCircle className="text-green-600 mx-auto mb-4" size={48} />
            <h2 className="text-2xl font-bold text-green-900 mb-2">
              Thank You!
            </h2>
            <p className="text-green-800">
              We've received your question and will get back to you soon.
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-8 border border-amber-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-900 font-semibold mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-900 font-semibold mb-2">
                  Your Question <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Ask us anything about vitamin D3, K2, dosages, or supplementation..."
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                />
              </div>

              <div>
                <label className="block text-gray-900 font-semibold mb-2">
                  Blood Report Values
                  <span className="text-gray-500 text-sm font-normal ml-2">(Optional)</span>
                </label>
                <textarea
                  value={bloodReport}
                  onChange={(e) => setBloodReport(e.target.value)}
                  placeholder="Paste your vitamin D test results or other relevant blood work values here..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                />
                <p className="text-sm text-gray-600 mt-1">
                  If you have recent blood test results, paste them here for more personalized guidance
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-amber-600 hover:to-yellow-700 transition-all transform hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Submit Question
                  </>
                )}
              </button>
            </form>
          </div>
        )}

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              What We Can Help With
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>Interpreting your vitamin D blood test results</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>Choosing the right D3+K2 supplement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>Understanding dosage recommendations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>Timing and absorption tips</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>Questions about D3 and K2 synergy</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Important Disclaimer
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              D Dose provides educational information only. We are not medical professionals
              and cannot provide medical advice, diagnose conditions, or prescribe treatments.
              Always consult with a qualified healthcare provider before starting any
              supplementation, especially if you have health conditions or take medications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
