import { PlusCircle, FileBox, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { DiagramType, diagramTypes } from "@/lib/diagram-types";

interface SidebarProps {
  currentDiagram: string | null;
  setCurrentDiagram: (id: string | null) => void;
}

export function Sidebar({ currentDiagram, setCurrentDiagram }: SidebarProps) {
  const [diagrams, setDiagrams] = useState<{id: string, name: string, type: DiagramType}[]>([]);
  
  const createNewDiagram = (type: DiagramType) => {
    const newId = `diagram-${Date.now()}`;
    const newDiagram = {
      id: newId,
      name: `${type.name} ${diagrams.length + 1}`,
      type: type
    };
    
    setDiagrams([...diagrams, newDiagram]);
    setCurrentDiagram(newId);
  };

  const deleteDiagram = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setDiagrams(diagrams.filter(d => d.id !== id));
    if (currentDiagram === id) {
      setCurrentDiagram(null);
    }
  };

  return (
    <div className="w-64 border-r bg-white p-4 overflow-auto hidden md:block">
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Create New</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="diagram-types">
            <AccordionTrigger>Diagram Types</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 mt-2">
                {diagramTypes.map((type) => (
                  <Button
                    key={type.id}
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => createNewDiagram(type)}
                  >
                    <type.icon className="mr-2 h-4 w-4" />
                    {type.name}
                  </Button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold mb-2">My Diagrams</h2>
        {diagrams.length === 0 ? (
          <div className="text-sm text-gray-500 italic">
            No diagrams yet. Create a new one to get started.
          </div>
        ) : (
          <div className="space-y-1">
            {diagrams.map((diagram) => (
              <div 
                key={diagram.id}
                className={`flex items-center p-2 rounded-md cursor-pointer ${
                  currentDiagram === diagram.id ? "bg-slate-100" : "hover:bg-slate-50"
                }`}
                onClick={() => setCurrentDiagram(diagram.id)}
              >
                <FileBox className="h-4 w-4 mr-2" />
                <span className="text-sm truncate flex-1">{diagram.name}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 opacity-0 group-hover:opacity-100 hover:opacity-100"
                  onClick={(e) => deleteDiagram(diagram.id, e)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}