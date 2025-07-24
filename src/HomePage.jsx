import React from 'react';

export default function HomePage() {
  return (
    <main className="bg-white text-black font-sora">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl">
          Future-Forward Marketing for the Digital Age
        </h1>
        <p className="text-gray-600 mt-6 text-lg max-w-xl">
          Digital Web King helps you dominate the digital space with AI-powered, data-driven strategies.
        </p>
        <div className="mt-10 flex gap-4">
          <a
            href="#features"
            className="px-6 py-3 rounded-md bg-[#0072FF] text-white font-semibold hover:bg-[#005fd1] transition"
          >
            Explore Features
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-md border-2 border-black text-black font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">What We Offer</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We blend creativity with analytics to deliver unmatched marketing ROI. Here’s how:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-2">AI Strategy</h3>
              <p className="text-gray-600">We craft data-backed campaigns that learn and adapt in real time.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-2">SEO & Performance</h3>
              <p className="text-gray-600">Rank higher, convert better, and optimize every funnel touchpoint.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-2">Creative Content</h3>
              <p className="text-gray-600">Bold storytelling meets scroll-stopping design across formats.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-24 px-6 text-white bg-gradient-to-r from-[#00E6A0] to-[#0072FF]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
          <p className="mb-8 text-lg">
            Let’s create marketing that works — and wows. Reach out now to kickstart your growth journey.
          </p>
          <a
            href="mailto:hello@digitalwebking.com"
            className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}
