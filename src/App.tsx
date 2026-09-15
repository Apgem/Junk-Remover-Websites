import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { EstimateModal } from './components/EstimateModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { WorkPage } from './pages/WorkPage';
import { AboutPage } from './pages/AboutPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';
import { PageId } from './types';
import { Phone, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from './data/content';

export function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isEstimateOpen, setIsEstimateOpen] = useState(false);

  // Sync with window.location.hash for direct linking & back button support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = ['home', 'services', 'work', 'about', 'reviews', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return <ServicesPage onNavigate={navigateTo} onOpenEstimate={() => setIsEstimateOpen(true)} />;
      case 'work':
        return <WorkPage onNavigate={navigateTo} onOpenEstimate={() => setIsEstimateOpen(true)} />;
      case 'about':
        return <AboutPage onNavigate={navigateTo} onOpenEstimate={() => setIsEstimateOpen(true)} />;
      case 'reviews':
        return <ReviewsPage onNavigate={navigateTo} onOpenEstimate={() => setIsEstimateOpen(true)} />;
      case 'contact':
        return <ContactPage onNavigate={navigateTo} />;
      case 'home':
      default:
        return <HomePage onNavigate={navigateTo} onOpenEstimate={() => setIsEstimateOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#090a0c] text-[#f2f2ee]">
      {/* Primary Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenEstimate={() => setIsEstimateOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenEstimate={() => setIsEstimateOpen(true)}
      />

      {/* Persistent Mobile Bottom Conversion Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-[#090a0c]/95 backdrop-blur-md border-t border-white/10 p-3 flex items-center gap-3">
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex-1 py-3 rounded-md bg-white/10 border border-white/15 text-white flex items-center justify-center gap-2 font-mono-tag text-xs font-bold"
        >
          <Phone className="w-3.5 h-3.5 text-[#ff5500]" />
          <span>CALL</span>
        </a>
        <button
          onClick={() => setIsEstimateOpen(true)}
          className="flex-1 py-3 rounded-md bg-[#ff5500] text-white flex items-center justify-center gap-1.5 font-mono-tag text-xs font-bold shadow-lg shadow-[#ff5500]/20"
        >
          <span>ESTIMATE</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Fast Estimate Request Modal */}
      <EstimateModal
        isOpen={isEstimateOpen}
        onClose={() => setIsEstimateOpen(false)}
      />
    </div>
  );
}

export default App;
