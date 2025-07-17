import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  CheckCircle, 
  Circle, 
  Lock, 
  PlayCircle, 
  Clock, 
  BookOpen, 
  ExternalLink, 
  Star, 
  Sparkles,
  Brain,
  Code,
  Database,
  Zap,
  Target,
  Award
} from "lucide-react";

const roadmapData = [
  {
    id: 1,
    title: "Mathematics Foundation",
    description: "Linear Algebra, Calculus, Statistics",
    status: "completed",
    progress: 100,
    position: { x: 50, y: 10 },
    connections: [2, 3],
    icon: Target,
    color: "from-green-400 to-green-600",
    borderColor: "border-green-400",
    bgColor: "bg-green-50"
  },
  {
    id: 2,
    title: "Programming Fundamentals",
    description: "Python, Data Structures, Algorithms",
    status: "completed",
    progress: 100,
    position: { x: 20, y: 25 },
    connections: [4, 5],
    icon: Code,
    color: "from-blue-400 to-blue-600",
    borderColor: "border-blue-400",
    bgColor: "bg-blue-50"
  },
  {
    id: 3,
    title: "Statistics & Probability",
    description: "Statistical Analysis, Hypothesis Testing",
    status: "in-progress",
    progress: 75,
    position: { x: 80, y: 25 },
    connections: [4, 6],
    icon: Brain,
    color: "from-purple-400 to-purple-600",
    borderColor: "border-purple-400",
    bgColor: "bg-purple-50"
  },
  {
    id: 4,
    title: "Machine Learning",
    description: "Supervised & Unsupervised Learning",
    status: "available",
    progress: 0,
    position: { x: 35, y: 45 },
    connections: [7, 8],
    icon: Zap,
    color: "from-yellow-400 to-yellow-600",
    borderColor: "border-yellow-400",
    bgColor: "bg-yellow-50"
  },
  {
    id: 5,
    title: "Data Analysis",
    description: "Pandas, NumPy, Visualization",
    status: "available",
    progress: 0,
    position: { x: 10, y: 45 },
    connections: [7],
    icon: Database,
    color: "from-cyan-400 to-cyan-600",
    borderColor: "border-cyan-400",
    bgColor: "bg-cyan-50"
  },
  {
    id: 6,
    title: "Advanced Statistics",
    description: "Bayesian Methods, Time Series",
    status: "locked",
    progress: 0,
    position: { x: 65, y: 45 },
    connections: [8, 9],
    icon: Brain,
    color: "from-indigo-400 to-indigo-600",
    borderColor: "border-indigo-400",
    bgColor: "bg-indigo-50"
  },
  {
    id: 7,
    title: "Deep Learning",
    description: "Neural Networks, CNNs, RNNs",
    status: "locked",
    progress: 0,
    position: { x: 25, y: 65 },
    connections: [10],
    icon: Award,
    color: "from-red-400 to-red-600",
    borderColor: "border-red-400",
    bgColor: "bg-red-50"
  },
  {
    id: 8,
    title: "MLOps",
    description: "Model Deployment, Monitoring",
    status: "locked",
    progress: 0,
    position: { x: 50, y: 65 },
    connections: [10],
    icon: Star,
    color: "from-orange-400 to-orange-600",
    borderColor: "border-orange-400",
    bgColor: "bg-orange-50"
  },
  {
    id: 9,
    title: "Advanced AI",
    description: "Transformers, LLMs, Research",
    status: "locked",
    progress: 0,
    position: { x: 75, y: 65 },
    connections: [10],
    icon: Sparkles,
    color: "from-pink-400 to-pink-600",
    borderColor: "border-pink-400",
    bgColor: "bg-pink-50"
  },
  {
    id: 10,
    title: "AI Specialization",
    description: "Research, Innovation, Leadership",
    status: "locked",
    progress: 0,
    position: { x: 50, y: 85 },
    connections: [],
    icon: Award,
    color: "from-violet-400 to-violet-600",
    borderColor: "border-violet-400",
    bgColor: "bg-violet-50"
  }
];

const Roadmap = () => {
  const [selectedNode, setSelectedNode] = useState<number | null>(null);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "in-progress":
        return <PlayCircle className="h-4 w-4 text-blue-500" />;
      case "available":
        return <Circle className="h-4 w-4 text-yellow-500" />;
      default:
        return <Lock className="h-4 w-4 text-gray-400" />;
    }
  };

  const renderConnections = () => {
    return roadmapData.map((node) =>
      node.connections.map((targetId) => {
        const target = roadmapData.find((n) => n.id === targetId);
        if (!target) return null;

        const startX = node.position.x;
        const startY = node.position.y + 8;
        const endX = target.position.x;
        const endY = target.position.y - 2;

        const midY = startY + (endY - startY) / 2;

        return (
          <g key={`${node.id}-${targetId}`}>
            <defs>
              <linearGradient id={`gradient-${node.id}-${targetId}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <path
              d={`M ${startX} ${startY} Q ${startX} ${midY} ${endX} ${endY}`}
              stroke={`url(#gradient-${node.id}-${targetId})`}
              strokeWidth="3"
              fill="none"
              strokeDasharray={node.status === "completed" ? "0" : "8,4"}
              className={`transition-all duration-500 ${
                hoveredNode === node.id || hoveredNode === targetId
                  ? "stroke-opacity-100 drop-shadow-lg"
                  : "stroke-opacity-60"
              }`}
            />
            {/* Connection dots */}
            <circle
              cx={startX}
              cy={startY}
              r="4"
              fill="url(#gradient-connection)"
              className="drop-shadow-sm"
            />
            <circle
              cx={endX}
              cy={endY}
              r="4"
              fill="url(#gradient-connection)"
              className="drop-shadow-sm"
            />
          </g>
        );
      })
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-full shadow-lg">
              <Brain className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            AI Learning Roadmap
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Navigate your personalized journey through AI mastery with our interactive learning tree
          </p>
        </div>

        {/* Tree Visualization */}
        <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, #60a5fa 2px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          <div className="relative p-8">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-[800px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="gradient-connection" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Render connections */}
              {renderConnections()}

              {/* Render nodes */}
              {roadmapData.map((node) => {
                const IconComponent = node.icon;
                const isSelected = selectedNode === node.id;
                const isHovered = hoveredNode === node.id;
                
                return (
                  <g key={node.id}>
                    {/* Node background glow */}
                    {(isSelected || isHovered) && (
                      <circle
                        cx={node.position.x}
                        cy={node.position.y}
                        r="12"
                        fill={`url(#gradient-${node.id})`}
                        opacity="0.3"
                        filter="url(#glow)"
                      />
                    )}
                    
                    {/* Main node */}
                    <foreignObject
                      x={node.position.x - 8}
                      y={node.position.y - 6}
                      width="16"
                      height="12"
                      className="overflow-visible"
                    >
                      <div
                        className={`relative transform transition-all duration-300 cursor-pointer ${
                          isSelected || isHovered ? 'scale-110' : 'scale-100'
                        }`}
                        onMouseEnter={() => setHoveredNode(node.id)}
                        onMouseLeave={() => setHoveredNode(null)}
                        onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
                      >
                        <Card className={`w-64 ${node.bgColor} ${node.borderColor} border-2 shadow-lg hover:shadow-xl transition-all duration-300 ${
                          node.status === 'locked' ? 'opacity-60' : ''
                        }`}>
                          <CardHeader className="pb-3">
                            <div className="flex items-center justify-between mb-2">
                              <div className={`p-2 rounded-lg bg-gradient-to-r ${node.color} shadow-md`}>
                                <IconComponent className="h-5 w-5 text-white" />
                              </div>
                              <div className="flex items-center space-x-2">
                                {getStatusIcon(node.status)}
                                <Badge variant="outline" className="text-xs">
                                  {node.status === 'completed' ? 'Done' : 
                                   node.status === 'in-progress' ? 'Active' :
                                   node.status === 'available' ? 'Ready' : 'Locked'}
                                </Badge>
                              </div>
                            </div>
                            <CardTitle className="text-lg font-bold text-gray-800 leading-tight">
                              {node.title}
                            </CardTitle>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              {node.description}
                            </p>
                            
                            {node.progress > 0 && (
                              <div className="mt-3 space-y-1">
                                <div className="flex justify-between items-center">
                                  <span className="text-xs font-medium text-gray-600">Progress</span>
                                  <span className="text-xs font-bold text-blue-600">{node.progress}%</span>
                                </div>
                                <Progress value={node.progress} className="h-2" />
                              </div>
                            )}
                          </CardHeader>
                          
                          {isSelected && (
                            <CardContent className="pt-0 animate-in fade-in duration-300">
                              <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-medium text-gray-700">Duration</span>
                                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                                    <Clock size={14} />
                                    <span>2-4 weeks</span>
                                  </div>
                                </div>
                                
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-medium text-gray-700">Resources</span>
                                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                                    <BookOpen size={14} />
                                    <span>5 modules</span>
                                  </div>
                                </div>
                                
                                <Link to={`/module/${node.id}`}>
                                  <Button 
                                    className={`w-full mt-3 bg-gradient-to-r ${node.color} hover:shadow-lg transition-all duration-300`}
                                    disabled={node.status === 'locked'}
                                  >
                                    {node.status === 'completed' ? 'Review' :
                                     node.status === 'in-progress' ? 'Continue' :
                                     node.status === 'available' ? 'Start Learning' : 'Locked'}
                                  </Button>
                                </Link>
                              </div>
                            </CardContent>
                          )}
                        </Card>
                      </div>
                    </foreignObject>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 p-6 shadow-lg">
          <h3 className="font-bold text-lg mb-4 text-center text-gray-800">Learning Path Guide</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium text-gray-700">Completed</span>
            </div>
            <div className="flex items-center space-x-3">
              <PlayCircle className="h-5 w-5 text-blue-500" />
              <span className="text-sm font-medium text-gray-700">In Progress</span>
            </div>
            <div className="flex items-center space-x-3">
              <Circle className="h-5 w-5 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">Available</span>
            </div>
            <div className="flex items-center space-x-3">
              <Lock className="h-5 w-5 text-gray-400" />
              <span className="text-sm font-medium text-gray-700">Locked</span>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Click on any node to see detailed information and start your learning journey
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6 text-lg">
            Ready to advance your AI skills? Start with your next available module
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/profile">
              <Button variant="outline" size="lg" className="px-8">
                View Progress
              </Button>
            </Link>
            <Link to="/module/4">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8">
                Continue Learning
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;