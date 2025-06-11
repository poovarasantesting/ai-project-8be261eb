import { ActivitySquare, Workflow, GitBranch, Network, Share2 } from "lucide-react";

export interface DiagramType {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  description: string;
}

export const diagramTypes: DiagramType[] = [
  {
    id: "flowchart",
    name: "Flowchart",
    icon: Workflow,
    description: "Create process flows and algorithms"
  },
  {
    id: "mindmap",
    name: "Mind Map",
    icon: Share2,
    description: "Visualize ideas and concepts"
  },
  {
    id: "entity-relationship",
    name: "ER Diagram",
    icon: ActivitySquare,
    description: "Design database relationships"
  },
  {
    id: "network",
    name: "Network Diagram",
    icon: Network,
    description: "Model computer networks"
  },
  {
    id: "git-flow",
    name: "Git Flow",
    icon: GitBranch,
    description: "Visualize source control flows"
  }
];