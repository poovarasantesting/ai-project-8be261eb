import { useRef, useState, useEffect } from "react";

interface CanvasProps {
  elements: any[];
  selectedElement?: any;
  setSelectedElement?: (element: any) => void;
  updateElement?: (id: string, updates: any) => void;
  isPreview?: boolean;
}

export function Canvas({ 
  elements, 
  selectedElement, 
  setSelectedElement,
  updateElement,
  isPreview = false
}: CanvasProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleElementClick = (element: any, e: React.MouseEvent) => {
    if (isPreview) return;
    e.stopPropagation();
    setSelectedElement?.(element);
  };

  const handleCanvasClick = () => {
    if (isPreview) return;
    setSelectedElement?.(null);
  };

  const handleMouseDown = (element: any, e: React.MouseEvent) => {
    if (isPreview) return;
    setIsDragging(true);
    setDragStart({ 
      x: e.clientX - element.x, 
      y: e.clientY - element.y 
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !selectedElement || !updateElement) return;
    
    const canvasRect = canvasRef.current?.getBoundingClientRect();
    if (!canvasRect) return;
    
    const x = Math.max(0, e.clientX - dragStart.x);
    const y = Math.max(0, e.clientY - dragStart.y);
    
    updateElement(selectedElement.id, { x, y });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, selectedElement, dragStart]);

  const renderElement = (element: any) => {
    const isSelected = selectedElement?.id === element.id;
    
    switch (element.type) {
      case 'rectangle':
        return (
          <div
            key={element.id}
            className={`absolute flex items-center justify-center border-2 ${
              isSelected && !isPreview ? 'border-blue-500' : 'border-gray-800'
            } bg-white cursor-move`}
            style={{
              left: `${element.x}px`,
              top: `${element.y}px`,
              width: `${element.width}px`,
              height: `${element.height}px`,
              backgroundColor: element.style?.fill || 'white',
              borderColor: isSelected && !isPreview ? 'rgb(59, 130, 246)' : element.style?.stroke || 'black',
              borderWidth: `${element.style?.strokeWidth || 1}px`,
            }}
            onClick={(e) => handleElementClick(element, e)}
            onMouseDown={(e) => handleMouseDown(element, e)}
          >
            <span className="text-center pointer-events-none">{element.text}</span>
          </div>
        );
      
      case 'circle':
        return (
          <div
            key={element.id}
            className={`absolute flex items-center justify-center border-2 ${
              isSelected && !isPreview ? 'border-blue-500' : 'border-gray-800'
            } rounded-full bg-white cursor-move`}
            style={{
              left: `${element.x}px`,
              top: `${element.y}px`,
              width: `${element.width}px`,
              height: `${element.height}px`,
              backgroundColor: element.style?.fill || 'white',
              borderColor: isSelected && !isPreview ? 'rgb(59, 130, 246)' : element.style?.stroke || 'black',
              borderWidth: `${element.style?.strokeWidth || 1}px`,
            }}
            onClick={(e) => handleElementClick(element, e)}
            onMouseDown={(e) => handleMouseDown(element, e)}
          >
            <span className="text-center pointer-events-none">{element.text}</span>
          </div>
        );
        
      case 'diamond':
        return (
          <div
            key={element.id}
            className={`absolute flex items-center justify-center bg-white cursor-move`}
            style={{
              left: `${element.x}px`,
              top: `${element.y}px`,
              width: `${element.width}px`,
              height: `${element.height}px`,
              transform: 'rotate(45deg)',
              backgroundColor: element.style?.fill || 'white',
              border: `${element.style?.strokeWidth || 1}px solid ${
                isSelected && !isPreview ? 'rgb(59, 130, 246)' : element.style?.stroke || 'black'
              }`,
            }}
            onClick={(e) => handleElementClick(element, e)}
            onMouseDown={(e) => handleMouseDown(element, e)}
          >
            <span className="text-center pointer-events-none" style={{ transform: 'rotate(-45deg)' }}>
              {element.text}
            </span>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div 
      ref={canvasRef}
      className="relative w-full h-full bg-gray-50 border-gray-200" 
      onClick={handleCanvasClick}
      style={{ minHeight: '500px' }}
    >
      <div className="absolute inset-0 w-full h-full">
        {elements.map(renderElement)}
      </div>
    </div>
  );
}