import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PropertiesPanelProps {
  selectedElement: any;
  updateElement: (id: string, updates: any) => void;
  deleteElement: (id: string) => void;
}

export function PropertiesPanel({ 
  selectedElement,
  updateElement,
  deleteElement
}: PropertiesPanelProps) {
  if (!selectedElement) {
    return (
      <div className="p-2 text-center text-sm text-gray-500">
        Select an element to edit its properties
      </div>
    );
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateElement(selectedElement.id, { text: e.target.value });
  };

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateElement(selectedElement.id, { width: parseInt(e.target.value) || 0 });
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateElement(selectedElement.id, { height: parseInt(e.target.value) || 0 });
  };

  const handleFillColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateElement(selectedElement.id, { 
      style: { 
        ...selectedElement.style, 
        fill: e.target.value 
      } 
    });
  };

  const handleStrokeColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateElement(selectedElement.id, { 
      style: { 
        ...selectedElement.style, 
        stroke: e.target.value 
      } 
    });
  };

  const handleStrokeWidthChange = (value: string) => {
    updateElement(selectedElement.id, { 
      style: { 
        ...selectedElement.style, 
        strokeWidth: parseInt(value) 
      } 
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">Properties</h3>
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => deleteElement(selectedElement.id)}
        >
          <Trash className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="element-text">Text</Label>
          <Input
            id="element-text"
            value={selectedElement.text}
            onChange={handleTextChange}
          />
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-2">
            <Label htmlFor="element-width">Width</Label>
            <Input
              id="element-width"
              type="number"
              value={selectedElement.width}
              onChange={handleWidthChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="element-height">Height</Label>
            <Input
              id="element-height"
              type="number"
              value={selectedElement.height}
              onChange={handleHeightChange}
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="fill-color">Fill Color</Label>
          <div className="flex items-center gap-2">
            <div 
              className="w-6 h-6 border rounded" 
              style={{ backgroundColor: selectedElement.style?.fill || '#ffffff' }}
            />
            <Input
              id="fill-color"
              type="text"
              value={selectedElement.style?.fill || '#ffffff'}
              onChange={handleFillColorChange}
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="stroke-color">Stroke Color</Label>
          <div className="flex items-center gap-2">
            <div 
              className="w-6 h-6 border rounded" 
              style={{ backgroundColor: selectedElement.style?.stroke || '#000000' }}
            />
            <Input
              id="stroke-color"
              type="text"
              value={selectedElement.style?.stroke || '#000000'}
              onChange={handleStrokeColorChange}
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="stroke-width">Stroke Width</Label>
          <Select 
            value={`${selectedElement.style?.strokeWidth || 1}`}
            onValueChange={handleStrokeWidthChange}
          >
            <SelectTrigger>
              <SelectValue placeholder="Stroke width" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1px</SelectItem>
              <SelectItem value="2">2px</SelectItem>
              <SelectItem value="3">3px</SelectItem>
              <SelectItem value="4">4px</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}