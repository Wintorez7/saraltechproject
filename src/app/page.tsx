import { CTASection } from '@/components/cta-section';
import { FeaturedServices } from '@/components/featured-services';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { Navbar } from '@/components/navbar';
import { PopularDestinations } from '@/components/popular-destinations';
import { Testimonials } from '@/components/testimonials';
// import { createCustomerWithCustomId, getCustomers } from '@/server/functions/customers';

export const runtime = 'edge';

export default async function Home() {
  'use server';

  // either use server actions


  // or fetch the api
  // const response = await fetch(`http://localhost:3000/api`);
  // const customers = (await response.json()).result; // <-- you will have to work with types quite a bit

  return (
    <main className="min-h-screen flex flex-col">
        <Navbar />
        <HeroSection />
        <FeaturedServices />
        <PopularDestinations />
        <Testimonials/>
        <CTASection/>
        <Footer/>
    </main>
  );
}
