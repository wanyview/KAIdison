import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import AgentChat from './components/AgentChat';
import ComparisonRadar from './components/ComparisonRadar';
import PredictionCurve from './components/PredictionCurve';
import DigitalTwinLab from './components/DigitalTwinLab';
import { LogEntry, AgentRole } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [logs, setLogs] = useState<LogEntry[]>([]);

  // Simulate some initial system logs
  useEffect(() => {
    const initialLogs: LogEntry[] = [
        { id: '1', timestamp: new Date(Date.now() - 100000).toISOString(), agent: AgentRole.COORDINATOR, action: 'Initialized KAIdison MAS environment.', status: 'success' },
        { id: '2', timestamp: new Date(Date.now() - 80000).toISOString(), agent: AgentRole.TECH_MODELER, action: 'Loaded Neuralink N1 specs for digital twin.', status: 'success' },
        { id: '3', timestamp: new Date(Date.now() - 60000).toISOString(), agent: AgentRole.ETHICIST, action: 'Flagged potential privacy risk in sleep decoding.', status: 'warning' },
        { id: '4', timestamp: new Date(Date.now() - 20000).toISOString(), agent: AgentRole.PREDICTOR, action: 'Updating 2025 growth curves based on recent funding.', status: 'processing' },
    ];
    setLogs(initialLogs);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard logs={logs} />;
      case 'twin':
        return <DigitalTwinLab />;
      case 'salon':
        return <AgentChat />;
      case 'analysis':
        return <ComparisonRadar />;
      case 'prediction':
        return <PredictionCurve />;
      default:
        return <Dashboard logs={logs} />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-950 text-slate-200 overflow-hidden font-sans">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 ml-64 p-8 overflow-hidden h-full flex flex-col">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;