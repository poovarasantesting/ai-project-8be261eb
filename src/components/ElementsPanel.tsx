import { Square, Circle, Triangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ElementsPanelProps {
  onAddElement: (type: string) => void;
}

export function ElementsPanel({ onAddElement }: ElementsPanelProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">Elements</h3>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="basic-shapes">
          <AccordionTrigger>Basic Shapes</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-2 gap-2 pt-2">
              <Button 
                variant="outline" 
                className="h-20 flex flex-col items-center justify-center gap-1"
                onClick={() => onAddElement('rectangle')}
              >
                <Square className="h-8 w-8" />
                <span className="text-xs">Rectangle</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-20 flex flex-col items-center justify-center gap-1"
                onClick={() => onAddElement('circle')}
              >
                <Circle className="h-8 w-8" />
                <span className="text-xs">Circle</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-20 flex flex-col items-center justify-center gap-1"
                onClick={() => onAddElement('diamond')}
              >
                <div className="h-8 w-8 border-2 rotate-45 flex items-center justify-center">
                  <span className="rotate-[-45deg]">◆</span>
                </div>
                <span className="text-xs">Diamond</span>
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="flowchart">
          <AccordionTrigger>Flowchart</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-2 gap-2 pt-2">
              <Button 
                variant="outline" 
                className="h-20 flex flex-col items-center justify-center gap-1"
                onClick={() => onAddElement('rectangle')}
              >
                <div className="h-8 w-10 border-2 flex items-center justify-center">
                  <span className="text-xs">Process</span>
                </div>
                <span className="text-xs">Process</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-20 flex flex-col items-center justify-center gap-1"
                onClick={() => onAddElement('diamond')}
              >
                <div className="h-8 w-8 border-2 rotate-45 flex items-center justify-center">
                  <span className="rotate-[-45deg] text-xs">?</span>
                </div>
                <span className="text-xs">Decision</span>
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}