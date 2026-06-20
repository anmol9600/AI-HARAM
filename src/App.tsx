import { useState } from 'react';
import { Hero, ValueProps } from './components/HeroAndValues';
import { About, Services } from './components/AboutAndServices';
import { Packages, Gallery } from './components/PackagesAndGallery';
import { Reviews, MapSection } from './components/ReviewsAndMap';
import { Navbar, Footer, BookingModal } from './components/Layout';
import { FormState } from './types';

export default function App() {
  const [formState, setFormState] = useState<FormState>({
    isOpen: false,
    selectedPackage: undefined
  });

  const handleOpenBooking = (packageId?: string) => {
    setFormState({ isOpen: true, selectedPackage: packageId });
  };

  const handleCloseBooking = () => {
    setFormState({ isOpen: false });
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans antialiased text-stone-900 selection:bg-gold-200 selection:text-emerald-950">
      <Navbar onBookClick={() => handleOpenBooking()} />
      
      <main>
        <Hero onBook={() => handleOpenBooking()} />
        <ValueProps />
        <About />
        <Packages onBook={(pkgId) => handleOpenBooking(pkgId)} />
        <Services />
        <Gallery />
        <MapSection />
        <Reviews />
      </main>

      <Footer />

      <BookingModal 
        isOpen={formState.isOpen} 
        onClose={handleCloseBooking} 
        selectedPackage={formState.selectedPackage} 
      />
    </div>
  );
}

