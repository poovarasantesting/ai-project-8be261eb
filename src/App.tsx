import { useState } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { DiagramEditor } from '@/components/DiagramEditor';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';

function App() {
  const [currentDiagram, setCurrentDiagram] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          currentDiagram={currentDiagram}
          setCurrentDiagram={setCurrentDiagram}
        />
        <DiagramEditor 
          diagramId={currentDiagram} 
        />
      </div>
      <Toaster />
    </div>
  );
}

export default App;