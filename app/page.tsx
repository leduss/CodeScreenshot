"use client";

import CTA from '@/components/landing/cta';
import Features from '@/components/landing/features';
import FAQ from '@/components/landing/faq';
import FreeVsPro from '@/components/landing/free-vs-pro';
import Footer from '@/components/landing/footer';
import Hero from '@/components/landing/hero';
import HowItWorks from '@/components/landing/how-it-works';
import Navbar from '@/components/landing/navbar';
import Pricing from '@/components/landing/pricing';
import SocialPublishing from '@/components/landing/social-publishing';

const Home = () => {
  return (
    <div className="noise-bg relative min-h-screen overflow-auto bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <FreeVsPro />
        <SocialPublishing />
        <HowItWorks />
        <FAQ />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
