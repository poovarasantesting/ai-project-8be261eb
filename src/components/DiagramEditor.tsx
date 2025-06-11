import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Canvas } from "@/components/Canvas";
import { ElementsPanel } from "@/components/ElementsPanel";
import { PropertiesPanel } from "@/components/PropertiesPanel";

interface DiagramEditorProps {
  diagramId: string | null;
}

export function DiagramEditor({ diagramId }: DiagramEditorProps) {
  const [elements, setElements] = useState<any[]>([]);
  const [selectedElement, setSelectedElement] = useState<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Reset editor state when diagram changes
    if (diagramId) {
      setElements([]);
      setSelectedElement(null);
    }
  }, [diagramId]);

  const addElement = (elementType: string) => {
    const newElement = {
      id: `element-${Date.now()}`,
      type: elementType,
      x: 100,
      y: 100,
      width: 120,
      height: 80,
      text: `New ${elementType}`,
      style: {
        fill: '#ffffff',
        stroke: '#000000',
        strokeWidth: 1,
      }
    };
    
    setElements([...elements, newElement]);
    toast({
      title: "Element added",
      description: `Added new ${elementType} to the diagram`,
    });
  };

  const updateElement = (id: string, updates: any) => {
    setElements(elements.map(el => 
      el.id === id ? { ...el, ...updates } : el
    ));
    
    if (selectedElement?.id === id) {
      setSelectedElement({ ...selectedElement, ...updates });
    }
  };

  const deleteElement = (id: string) => {
    setElements(elements.filter(el => el.id !== id));
    if (selectedElement?.id === id) {
      setSelectedElement(null);
    }
    
    toast({
      title: "Element deleted",
      description: "The selected element has been removed",
    });
  };

  if (!diagramId) {
    return (
      <div className="flex-1 flex items-center justify-center bg-slate-100 p-6">
        <div className="text-center max-w-md p-6 bg-white rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-2">Welcome to DiagramFlow</h2>
          <p className="text-slate-600 mb-4">
            Create professional diagrams easily with our intuitive editor.
          </p>
          <div className="flex justify-center">
            <Button>Create a new diagram</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      <Tabs defaultValue="editor" className="flex-1 flex flex-col">
        <div className="border-b px-4">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="editor">Editor</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="editor" className="flex-1 flex overflow-hidden m-0">
          <div className="w-56 border-r bg-white p-4 overflow-y-auto">
            <ElementsPanel onAddElement={addElement} />
          </div>
          <div className="flex-1 overflow-auto">
            <Canvas 
              elements={elements}
              selectedElement={selectedElement}
              setSelectedElement={setSelectedElement}
              updateElement={updateElement}
            />
          </div>
          <div className="w-64 border-l bg-white p-4 overflow-y-auto">
            <PropertiesPanel 
              selectedElement={selectedElement}
              updateElement={updateElement}
              deleteElement={deleteElement}
            />
          </div>
        </TabsContent>
        <TabsContent value="preview" className="flex-1 overflow-auto m-0">
          <div className="h-full w-full flex items-center justify-center bg-slate-100 p-8">
            <div className="bg-white p-4 shadow-md rounded-md">
              <Canvas 
                elements={elements}
                isPreview={true}
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}