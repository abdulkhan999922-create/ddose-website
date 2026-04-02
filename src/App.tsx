import { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import StartHere from './pages/StartHere';
import BrandGuide from './pages/BrandGuide';
import DosageCalculator from './pages/DosageCalculator';
import AskDDose from './pages/AskDDose';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'start':
        return <StartHere />;
      case 'brands':
        return <BrandGuide />;
      case 'calculator':
        return <DosageCalculator />;
      case 'contact':
        return <AskDDose />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
