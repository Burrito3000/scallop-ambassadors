'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function ApplicationForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    x: '',
    instagram: '',
    tiktok: '',
    youtube: '',
    telegram: '',
    otherChannels: '',
  });
  const [files, setFiles] = useState<File[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Integrate with CRM/sheets API
    // For now, just redirect to thank you page
    setTimeout(() => {
      router.push('/ambassadors/thank-you');
    }, 500);
  };

  return (
    <section id="apply" className="py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-1/4 w-48 h-48 bg-scallop-blue/10 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-scallop-blue/10 rounded-full filter blur-3xl opacity-50"></div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-5 py-2 rounded-full bg-scallop-blue/10 border border-scallop-blue/20 text-scallop-blue mb-6 shadow-sm">
            <span className="text-sm font-semibold">Apply Now</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 text-center tracking-tight leading-[1.1]">
            Application Form
          </h2>
          <p className="text-2xl text-gray-600 mb-16 text-center font-light">
            Fill out the form below and our team will get in touch with you
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-premium-lg">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Required Fields */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Required Information</h3>
            
            <div>
              <label htmlFor="name" className="block text-base font-semibold text-gray-900 mb-2.5">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-scallop-blue focus:outline-none transition-colors text-lg"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-base font-semibold text-gray-900 mb-2.5">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-scallop-blue focus:outline-none transition-colors text-lg"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="country" className="block text-base font-semibold text-gray-900 mb-2.5">
                Country <span className="text-red-500">*</span>
              </label>
              <select
                id="country"
                name="country"
                required
                value={formData.country}
                onChange={handleInputChange}
                className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-scallop-blue focus:outline-none transition-colors text-lg"
              >
                <option value="">Select your country</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
                <option value="AU">Australia</option>
                <option value="DE">Germany</option>
                <option value="FR">France</option>
                <option value="SG">Singapore</option>
                <option value="JP">Japan</option>
                <option value="KR">South Korea</option>
                <option value="IN">India</option>
                <option value="BR">Brazil</option>
                <option value="MX">Mexico</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Social Media Accounts */}
          <div className="space-y-6 pt-8 border-t border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Social Media Accounts</h3>
            
            <div>
              <label htmlFor="x" className="block text-base font-semibold text-gray-900 mb-2.5">
                X (Twitter)
              </label>
              <input
                type="text"
                id="x"
                name="x"
                value={formData.x}
                onChange={handleInputChange}
                className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-scallop-blue focus:outline-none transition-colors text-lg"
                placeholder="@yourhandle"
              />
            </div>

            <div>
              <label htmlFor="instagram" className="block text-base font-semibold text-gray-900 mb-2.5">
                Instagram
              </label>
              <input
                type="text"
                id="instagram"
                name="instagram"
                value={formData.instagram}
                onChange={handleInputChange}
                className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-scallop-blue focus:outline-none transition-colors text-lg"
                placeholder="@yourhandle"
              />
            </div>

            <div>
              <label htmlFor="tiktok" className="block text-base font-semibold text-gray-900 mb-2.5">
                TikTok
              </label>
              <input
                type="text"
                id="tiktok"
                name="tiktok"
                value={formData.tiktok}
                onChange={handleInputChange}
                className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-scallop-blue focus:outline-none transition-colors text-lg"
                placeholder="@yourhandle"
              />
            </div>

            <div>
              <label htmlFor="youtube" className="block text-base font-semibold text-gray-900 mb-2.5">
                YouTube
              </label>
              <input
                type="text"
                id="youtube"
                name="youtube"
                value={formData.youtube}
                onChange={handleInputChange}
                className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-scallop-blue focus:outline-none transition-colors text-lg"
                placeholder="Channel URL or handle"
              />
            </div>

            <div>
              <label htmlFor="telegram" className="block text-base font-semibold text-gray-900 mb-2.5">
                Telegram
              </label>
              <input
                type="text"
                id="telegram"
                name="telegram"
                value={formData.telegram}
                onChange={handleInputChange}
                className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-scallop-blue focus:outline-none transition-colors text-lg"
                placeholder="@yourhandle"
              />
            </div>

            <div>
              <label htmlFor="otherChannels" className="block text-base font-semibold text-gray-900 mb-2.5">
                Other Channels (Optional)
              </label>
              <textarea
                id="otherChannels"
                name="otherChannels"
                value={formData.otherChannels}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-scallop-blue focus:outline-none transition-colors text-lg"
                placeholder="List any other social media channels or platforms"
              />
            </div>
          </div>

          {/* Upload Field */}
          <div className="space-y-4 pt-8 border-t border-gray-200">
            <div>
              <label htmlFor="references" className="block text-base font-semibold text-gray-900 mb-2.5">
                References
              </label>
              <input
                type="file"
                id="references"
                name="references"
                multiple
                accept="image/*,video/*,.pdf,.doc,.docx"
                onChange={handleFileChange}
                className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-scallop-blue focus:outline-none transition-colors text-lg file:mr-4 file:py-2.5 file:px-5 file:rounded-lg file:border-0 file:text-base file:font-semibold file:bg-scallop-blue file:text-white hover:file:opacity-90"
              />
              <p className="mt-2 text-sm text-gray-600">
                For example: past events, social media insights, presentations, photos or short videos
              </p>
              {files.length > 0 && (
                <p className="mt-2 text-sm text-scallop-blue">
                  {files.length} file(s) selected
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-scallop-blue text-white px-12 py-6 rounded-full hover:opacity-90 transition-all duration-200 font-semibold text-xl shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
        </div>
      </div>
    </section>
  );
}

