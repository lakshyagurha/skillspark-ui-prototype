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
  Brain,
  Code,
  Database,
  Zap,
  Target,
  Award,
  Sparkles,
  Star
} from "lucide-react";

const roadmapData = [
  // Level 1 - Foundation
  {
    id: 1,
    title: "Mathematics Foundation",
    description: "Linear Algebra, Calculus, Statistics",
    status: "completed",
    progress: 100,
    level: 1,
    position: 0,
    icon: Target,
    color: "bg-green-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  },
  {
    id: 2,
    title: "Programming Fundamentals",
    description: "Python, Data Structures, Algorithms",
    status: "completed",
    progress: 100,
    level: 1,
    position: 1,
    icon: Code,
    color: "bg-blue-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  
  // Level 2 - Core Skills
  {
    id: 3,
    title: "Statistics & Probability",
    description: "Statistical Analysis, Hypothesis Testing",
    status: "in-progress",
    progress: 75,
    level: 2,
    position: 0,
    icon: Brain,
    color: "bg-purple-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  },
  {
    id: 4,
    title: "Data Analysis",
    description: "Pandas, NumPy, Visualization",
    status: "available",
    progress: 0,
    level: 2,
    position: 1,
    icon: Database,
    color: "bg-cyan-500",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200"
  },
  
  // Level 3 - Machine Learning
  {
    id: 5,
    title: "Machine Learning",
    description: "Supervised & Unsupervised Learning",
    status: "available",
    progress: 0,
    level: 3,
    position: 0,
    icon: Zap,
    color: "bg-yellow-500",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200"
  },
  {
    id: 6,
    title: "Advanced Statistics",
    description: "Bayesian Methods, Time Series",
    status: "locked",
    progress: 0,
    level: 3,
    position: 1,
    icon: Brain,
    color: "bg-indigo-500",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200"
  },
  
  // Level 4 - Advanced Topics
  {
    id: 7,
    title: "Deep Learning",
    description: "Neural Networks, CNNs, RNNs",
    status: "locked",
    progress: 0,
    level: 4,
    position: 0,
    icon: Award,
    color: "bg-red-500",
    bgColor: "bg-red-50",
    borderColor: "border-red-200"
  },
  {
    id: 8,
    title: "MLOps",
    description: "Model Deployment, Monitoring",
    status: "locked",
    progress: 0,
    level: 4,
    position: 1,
    icon: Star,
    color: "bg-orange-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200"
  },
  {
    id: 9,
    title: "Advanced AI",
    description: "Transformers, LLMs, Research",
    status: "locked",
    progress: 0,
    level: 4,
    position: 2,
    icon: Sparkles,
    color: "bg-pink-500",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200"
  },
  
  // Level 5 - Specialization
  {
    id: 10,
    title: "AI Specialization",
    description: "Research, Innovation, Leadership",
    status: "locked",
    progress: 0,
    level: 5,
    position: 0,
    icon: Award,
    color: "bg-violet-500",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-200"
  }
];

const Roadmap = () => {
  const [selectedNode, setSelectedNode] = useState<number | null>(null);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "in-progress":
        return <PlayCircle className="h-5 w-5 text-blue-500" />;
      case "available":
        return <Circle className="h-5 w-5 text-yellow-500" />;
      default:
        return <Lock className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed": return "Completed";
      case "in-progress": return "In Progress";
      case "available": return "Available";
      default: return "Locked";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800";
      case "in-progress": return "bg-blue-100 text-blue-800";
      case "available": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-600";
    }
  };

  // Group nodes by level
  const nodesByLevel = roadmapData.reduce((acc, node) => {
    if (!acc[node.level]) acc[node.level] = [];
    acc[node.level].push(node);
    return acc;
  }, {} as Record<number, typeof roadmapData>);

  const levelTitles = {
    1: "Foundation",
    2: "Core Skills", 
    3: "Machine Learning",
    4: "Advanced Topics",
    5: "Specialization"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
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
            Your personalized journey through AI mastery - from foundations to specialization
          </p>
        </div>

        {/* Tree Structure */}
        <div className="relative">
          {Object.entries(nodesByLevel).map(([level, nodes], levelIndex) => (
            <div key={level} className="mb-16 relative">
              {/* Level Title */}
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Level {level}: {levelTitles[parseInt(level) as keyof typeof levelTitles]}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
              </div>

              {/* Nodes Grid */}
              <div className={`grid gap-8 justify-center ${
                nodes.length === 1 ? 'grid-cols-1 max-w-md mx-auto' :
                nodes.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto' :
                'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto'
              }`}>
                {nodes.map((node) => {
                  const IconComponent = node.icon;
                  const isSelected = selectedNode === node.id;
                  
                  return (
                    <Card 
                      key={node.id}
                      className={`${node.bgColor} ${node.borderColor} border-2 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                        node.status === 'locked' ? 'opacity-60' : ''
                      } ${isSelected ? 'ring-4 ring-blue-300' : ''}`}
                      onClick={() => setSelectedNode(isSelected ? null : node.id)}
                    >
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className={`p-3 rounded-lg ${node.color} shadow-md`}>
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex items-center space-x-2">
                            {getStatusIcon(node.status)}
                            <Badge className={getStatusColor(node.status)}>
                              {getStatusText(node.status)}
                            </Badge>
                          </div>
                        </div>
                        
                        <CardTitle className="text-xl font-bold text-gray-800 mb-2">
                          {node.title}
                        </CardTitle>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {node.description}
                        </p>
                        
                        {node.progress > 0 && (
                          <div className="mt-4 space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium text-gray-600">Progress</span>
                              <span className="text-sm font-bold text-blue-600">{node.progress}%</span>
                            </div>
                            <Progress value={node.progress} className="h-2" />
                          </div>
                        )}
                      </CardHeader>
                      
                      {isSelected && (
                        <CardContent className="pt-0 border-t border-gray-200 animate-in fade-in duration-300">
                          <div className="space-y-4 mt-4">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div className="flex items-center space-x-2">
                                <Clock className="h-4 w-4 text-gray-500" />
                                <span className="text-gray-600">2-4 weeks</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <BookOpen className="h-4 w-4 text-gray-500" />
                                <span className="text-gray-600">5 modules</span>
                              </div>
                            </div>
                            
                            <Link to={`/module/${node.id}`}>
                              <Button 
                                className={`w-full ${node.color} hover:opacity-90 text-white shadow-md hover:shadow-lg transition-all duration-300`}
                                disabled={node.status === 'locked'}
                              >
                                {node.status === 'completed' ? 'Review Content' :
                                 node.status === 'in-progress' ? 'Continue Learning' :
                                 node.status === 'available' ? 'Start Learning' : 'Locked'}
                              </Button>
                            </Link>
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  );
                })}
              </div>

              {/* Connection Lines to Next Level */}
              {levelIndex < Object.keys(nodesByLevel).length - 1 && (
                <div className="flex justify-center mt-12">
                  <div className="w-1 h-12 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full opacity-60"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 p-6 shadow-lg">
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
              Click on any module to see details and start your learning journey
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6 text-lg">
            Ready to advance your AI skills? Continue with your next available module
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/profile">
              <Button variant="outline" size="lg" className="px-8">
                View Progress
              </Button>
            </Link>
            <Link to="/module/3">
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