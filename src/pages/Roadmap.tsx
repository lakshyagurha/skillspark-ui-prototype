
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Circle, Lock, PlayCircle, Clock, BookOpen, ExternalLink, Star, Sparkles } from "lucide-react";

const roadmapData = [
  {
    id: 1,
    title: "Mathematics Foundation",
    description: "Linear Algebra, Calculus, Mathematical Analysis",
    status: "completed",
    progress: 100,
    level: 1,
    prerequisites: [],
    connections: [2, 3],
    topics: [
      { name: "Linear Algebra", completed: true },
      { name: "Calculus", completed: true },
      { name: "Mathematical Analysis", completed: true }
    ],
    resources: [
      { title: "Mathematics for ML", type: "Course", platform: "Coursera" },
      { title: "Linear Algebra Basics", type: "Book", platform: "MIT" }
    ]
  },
  {
    id: 2,
    title: "Statistics & Probability",
    description: "Statistical Analysis, Hypothesis Testing, Probability Theory",
    status: "in-progress",
    progress: 75,
    level: 2,
    prerequisites: [1],
    connections: [4, 5],
    topics: [
      { name: "Descriptive Statistics", completed: true },
      { name: "Hypothesis Testing", completed: true },
      { name: "Probability Distributions", completed: false },
      { name: "Bayesian Statistics", completed: false }
    ],
    resources: [
      { title: "Statistics Fundamentals", type: "Course", platform: "edX" },
      { title: "Probability Theory", type: "Book", platform: "Stanford" }
    ]
  },
  {
    id: 3,
    title: "Programming Fundamentals",
    description: "Python, Data Structures, Algorithms",
    status: "completed",
    progress: 100,
    level: 2,
    prerequisites: [1],
    connections: [4, 6],
    topics: [
      { name: "Python Programming", completed: true },
      { name: "Data Structures", completed: true },
      { name: "Algorithms", completed: true },
      { name: "Object-Oriented Programming", completed: true }
    ],
    resources: [
      { title: "Python for Data Science", type: "Course", platform: "Coursera" },
      { title: "Algorithm Design", type: "Book", platform: "Princeton" }
    ]
  },
  {
    id: 4,
    title: "Machine Learning",
    description: "Supervised & Unsupervised Learning, Feature Engineering",
    status: "available",
    progress: 0,
    level: 3,
    prerequisites: [2, 3],
    connections: [7, 8],
    topics: [
      { name: "Supervised Learning", completed: false },
      { name: "Unsupervised Learning", completed: false },
      { name: "Feature Engineering", completed: false },
      { name: "Model Evaluation", completed: false }
    ],
    resources: [
      { title: "ML Specialization", type: "Course", platform: "Coursera" },
      { title: "Hands-On ML", type: "Book", platform: "O'Reilly" }
    ]
  },
  {
    id: 5,
    title: "Data Analysis & Visualization",
    description: "Pandas, NumPy, Matplotlib, Data Processing",
    status: "available",
    progress: 0,
    level: 3,
    prerequisites: [2, 3],
    connections: [6, 7],
    topics: [
      { name: "Data Manipulation", completed: false },
      { name: "Data Visualization", completed: false },
      { name: "Statistical Analysis", completed: false },
      { name: "Data Cleaning", completed: false }
    ],
    resources: [
      { title: "Data Analysis with Python", type: "Course", platform: "freeCodeCamp" },
      { title: "Python Data Science Handbook", type: "Book", platform: "O'Reilly" }
    ]
  },
  {
    id: 6,
    title: "Database Management",
    description: "SQL, NoSQL, Data Modeling",
    status: "locked",
    progress: 0,
    level: 3,
    prerequisites: [3],
    connections: [8, 9],
    topics: [
      { name: "SQL Fundamentals", completed: false },
      { name: "Database Design", completed: false },
      { name: "NoSQL Databases", completed: false },
      { name: "Data Warehousing", completed: false }
    ],
    resources: [
      { title: "SQL for Data Science", type: "Course", platform: "Coursera" },
      { title: "Database Systems", type: "Book", platform: "Academic" }
    ]
  },
  {
    id: 7,
    title: "Deep Learning",
    description: "Neural Networks, CNNs, RNNs, Transformers",
    status: "locked",
    progress: 0,
    level: 4,
    prerequisites: [4, 5],
    connections: [10],
    topics: [
      { name: "Neural Network Fundamentals", completed: false },
      { name: "Convolutional Networks", completed: false },
      { name: "Recurrent Networks", completed: false },
      { name: "Transformer Architecture", completed: false }
    ],
    resources: [
      { title: "Deep Learning Specialization", type: "Course", platform: "Coursera" },
      { title: "Deep Learning Book", type: "Book", platform: "MIT Press" }
    ]
  },
  {
    id: 8,
    title: "MLOps & Deployment",
    description: "Model Deployment, CI/CD, Monitoring",
    status: "locked",
    progress: 0,
    level: 4,
    prerequisites: [4, 6],
    connections: [10],
    topics: [
      { name: "Model Deployment", completed: false },
      { name: "Container Technologies", completed: false },
      { name: "Model Monitoring", completed: false },
      { name: "CI/CD Pipelines", completed: false }
    ],
    resources: [
      { title: "MLOps Fundamentals", type: "Course", platform: "Google Cloud" },
      { title: "Building ML Systems", type: "Book", platform: "O'Reilly" }
    ]
  },
  {
    id: 9,
    title: "Big Data Technologies",
    description: "Spark, Hadoop, Distributed Computing",
    status: "locked",
    progress: 0,
    level: 4,
    prerequisites: [6],
    connections: [10],
    topics: [
      { name: "Apache Spark", completed: false },
      { name: "Hadoop Ecosystem", completed: false },
      { name: "Distributed Systems", completed: false },
      { name: "Stream Processing", completed: false }
    ],
    resources: [
      { title: "Big Data with Spark", type: "Course", platform: "edX" },
      { title: "Hadoop Definitive Guide", type: "Book", platform: "O'Reilly" }
    ]
  },
  {
    id: 10,
    title: "AI Specialization",
    description: "Advanced AI, Research, Innovation",
    status: "locked",
    progress: 0,
    level: 5,
    prerequisites: [7, 8, 9],
    connections: [],
    topics: [
      { name: "AI Research Methods", completed: false },
      { name: "Advanced Algorithms", completed: false },
      { name: "Ethics in AI", completed: false },
      { name: "Innovation Projects", completed: false }
    ],
    resources: [
      { title: "AI for Everyone", type: "Course", platform: "Coursera" },
      { title: "AI Research Papers", type: "Article", platform: "arXiv" }
    ]
  }
];

const Roadmap = () => {
  const [selectedTrack, setSelectedTrack] = useState<number | null>(null);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-400" />;
      case "in-progress":
        return <PlayCircle className="h-5 w-5 text-blue-400" />;
      case "available":
        return <Circle className="h-5 w-5 text-yellow-400" />;
      default:
        return <Lock className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "border-green-400/30 bg-green-400/10 shadow-green-400/20";
      case "in-progress":
        return "border-blue-400/30 bg-blue-400/10 shadow-blue-400/20";
      case "available":
        return "border-yellow-400/30 bg-yellow-400/10 shadow-yellow-400/20";
      default:
        return "border-gray-500/30 bg-gray-500/10 shadow-gray-500/20";
    }
  };

  const getResourceTypeColor = (type: string) => {
    switch (type) {
      case "Course":
        return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      case "Book":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "Article":
        return "bg-green-500/20 text-green-300 border-green-500/30";
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  const renderConnections = () => {
    return roadmapData.map((track) => 
      track.connections.map((connectionId) => {
        const connectedTrack = roadmapData.find(t => t.id === connectionId);
        if (!connectedTrack) return null;
        
        return (
          <div key={`${track.id}-${connectionId}`} className="absolute pointer-events-none">
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id={`gradient-${track.id}-${connectionId}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#34d399" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              <path
                d={`M 0 0 Q 50 50 100 100`}
                stroke={`url(#gradient-${track.id}-${connectionId})`}
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                className="animate-pulse"
              />
            </svg>
          </div>
        );
      })
    );
  };

  const groupedByLevel = roadmapData.reduce((acc, track) => {
    if (!acc[track.level]) acc[track.level] = [];
    acc[track.level].push(track);
    return acc;
  }, {} as Record<number, typeof roadmapData>);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated background stars */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <Star 
            key={i}
            className={`absolute text-blue-400/20 animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              fontSize: `${Math.random() * 0.5 + 0.5}rem`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-8 w-8 text-blue-400 mr-3" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              AI Learning Roadmap
            </h1>
            <Sparkles className="h-8 w-8 text-blue-400 ml-3" />
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Navigate your journey through the world of Artificial Intelligence with our comprehensive learning path
          </p>
        </div>

        {/* Tree Structure */}
        <div className="relative">
          {Object.entries(groupedByLevel).map(([level, tracks]) => (
            <div key={level} className="mb-16 relative">
              <div className="text-center mb-8">
                <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 text-lg">
                  Level {level}
                </Badge>
              </div>
              
              <div className={`grid gap-8 ${tracks.length === 1 ? 'grid-cols-1 max-w-md mx-auto' : 
                              tracks.length === 2 ? 'grid-cols-1 md:grid-cols-2' : 
                              'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
                {tracks.map((track) => (
                  <div key={track.id} className="relative group">
                    {/* Connection lines */}
                    {track.connections.length > 0 && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 h-16 w-0.5 bg-gradient-to-b from-blue-400 to-transparent"></div>
                    )}
                    
                    <Card 
                      className={`relative transition-all duration-500 cursor-pointer border-2 ${getStatusColor(track.status)} ${
                        selectedTrack === track.id ? 'ring-2 ring-blue-400 shadow-2xl scale-105' : 'shadow-xl hover:shadow-2xl hover:scale-102'
                      } backdrop-blur-sm`}
                      onClick={() => setSelectedTrack(selectedTrack === track.id ? null : track.id)}
                    >
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <CardHeader className="relative z-10 pb-4">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="relative">
                              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                {track.id}
                              </div>
                              <div className="absolute -top-1 -right-1">
                                {getStatusIcon(track.status)}
                              </div>
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-xl font-bold text-white mb-2">{track.title}</CardTitle>
                              <p className="text-sm text-gray-300 leading-relaxed">{track.description}</p>
                            </div>
                          </div>
                        </div>
                        
                        {track.progress > 0 && (
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium text-gray-300">Progress</span>
                              <span className="text-sm text-blue-400 font-semibold">{track.progress}%</span>
                            </div>
                            <Progress value={track.progress} className="h-2 bg-gray-700" />
                          </div>
                        )}

                        {/* Prerequisites */}
                        {track.prerequisites.length > 0 && (
                          <div className="mt-4">
                            <div className="flex flex-wrap gap-2">
                              {track.prerequisites.map((prereqId) => {
                                const prereq = roadmapData.find(t => t.id === prereqId);
                                return prereq ? (
                                  <Badge key={prereqId} variant="outline" className="bg-gray-800/50 text-gray-300 border-gray-600 text-xs">
                                    Requires: {prereq.title}
                                  </Badge>
                                ) : null;
                              })}
                            </div>
                          </div>
                        )}
                      </CardHeader>

                      {selectedTrack === track.id && (
                        <CardContent className="relative z-10 pt-0 space-y-6 animate-in fade-in duration-300">
                          {/* Topics */}
                          <div>
                            <h4 className="font-semibold mb-3 flex items-center space-x-2 text-white">
                              <BookOpen size={16} className="text-blue-400" />
                              <span>Learning Topics</span>
                            </h4>
                            <div className="grid grid-cols-1 gap-2">
                              {track.topics.map((topic, index) => (
                                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800/30 border border-gray-700/50">
                                  <input 
                                    type="checkbox" 
                                    checked={topic.completed}
                                    className="w-4 h-4 text-blue-500 rounded focus:ring-blue-500 bg-gray-700 border-gray-600"
                                    readOnly
                                  />
                                  <span className={`text-sm ${topic.completed ? 'text-green-400 line-through' : 'text-gray-300'}`}>
                                    {topic.name}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Resources */}
                          <div>
                            <h4 className="font-semibold mb-3 text-white">Recommended Resources</h4>
                            <div className="space-y-3">
                              {track.resources.map((resource, index) => (
                                <div key={index} className="flex items-center justify-between p-3 bg-gray-800/40 rounded-lg border border-gray-700/50">
                                  <div className="flex-1">
                                    <p className="font-medium text-white">{resource.title}</p>
                                    <p className="text-sm text-gray-400">{resource.platform}</p>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Badge className={`${getResourceTypeColor(resource.type)} border text-xs`}>
                                      {resource.type}
                                    </Badge>
                                    <ExternalLink size={16} className="text-gray-400 hover:text-blue-400 transition-colors" />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Action Button */}
                          <div className="pt-4 border-t border-gray-700/50">
                            <Link to={`/module/${track.id}`}>
                              <Button 
                                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 shadow-lg" 
                                disabled={track.status === "locked"}
                              >
                                {track.status === "completed" ? "Review Materials" : 
                                 track.status === "in-progress" ? "Continue Learning" : 
                                 track.status === "available" ? "Start Learning" : "Locked"}
                              </Button>
                            </Link>
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 mt-16">
          <h3 className="font-semibold mb-4 text-white text-center">Learning Path Legend</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span className="text-sm text-gray-300">Completed</span>
            </div>
            <div className="flex items-center space-x-2">
              <PlayCircle className="h-5 w-5 text-blue-400" />
              <span className="text-sm text-gray-300">In Progress</span>
            </div>
            <div className="flex items-center space-x-2">
              <Circle className="h-5 w-5 text-yellow-400" />
              <span className="text-sm text-gray-300">Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <Lock className="h-5 w-5 text-gray-500" />
              <span className="text-sm text-gray-300">Locked</span>
            </div>
          </div>
        </div>

        <div className="text-center pt-12">
          <p className="text-gray-400 mb-6 text-lg">
            Master each level to unlock advanced AI concepts and build your expertise
          </p>
          <Link to="/profile">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-3 text-lg shadow-lg">
              Track Your Progress
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
