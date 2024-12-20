import React, { useState } from 'react';
import { Layout } from './components/common/Layout';
import { RightPanel } from './components/rightPanel/RightPanel';
import OutpatientPage from './pages/outpatient';
import ChemotherapyPage from './pages/chemotherapy';
import InpatientPage from './pages/inpatient';
import PalliativePage from './pages/palliative';

function App() {
  const [activeModule, setActiveModule] = useState('outpatient');

  const renderModule = () => {
    switch (activeModule) {
      case 'outpatient':
        return <OutpatientPage />;
      case 'chemotherapy':
        return <ChemotherapyPage />;
      case 'inpatient':
        return <InpatientPage />;
      case 'palliative':
        return <PalliativePage />;
      default:
        return <OutpatientPage />;
    }
  };

  return (
    <Layout>
      <div className="flex h-[calc(100vh-64px)]">
        <div className="flex-1 p-6">
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setActiveModule('outpatient')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 btn-animate border-3d ${
                activeModule === 'outpatient' 
                  ? 'bg-blue-500 text-white btn-pulse' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              Outpatient
            </button>
            <button
              onClick={() => setActiveModule('chemotherapy')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 btn-animate border-3d ${
                activeModule === 'chemotherapy' 
                  ? 'bg-green-500 text-white btn-pulse' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              Chemotherapy
            </button>
            <button
              onClick={() => setActiveModule('inpatient')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 btn-animate border-3d ${
                activeModule === 'inpatient' 
                  ? 'bg-purple-500 text-white btn-pulse' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              Inpatient
            </button>
            <button
              onClick={() => setActiveModule('palliative')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 btn-animate border-3d ${
                activeModule === 'palliative' 
                  ? 'bg-red-500 text-white btn-pulse' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              Palliative Care
            </button>
          </div>
          <div className="border-3d rounded-2xl">
            {renderModule()}
          </div>
        </div>
        <RightPanel />
      </div>
    </Layout>
  );
}

export default App;