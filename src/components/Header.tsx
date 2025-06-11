import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export function Header() {
  const { toast } = useToast();

  const handleExport = () => {
    toast({
      title: "Diagram exported",
      description: "Your diagram has been exported successfully",
    });
  };

  return (
    <header className="border-b bg-white shadow-sm">
      <div className="flex h-16 items-center px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Menu className="h-6 w-6 md:hidden" />
          <span className="text-xl font-bold">DiagramFlow</span>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" onClick={handleExport}>
            Export
          </Button>
          <Button>Save</Button>
        </div>
      </div>
    </header>
  );
}