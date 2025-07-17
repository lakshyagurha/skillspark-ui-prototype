
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Circle, Lock, PlayCircle, Clock, BookOpen, ExternalLink, ArrowDown, ArrowRight } from "lucide-react";

const roadmapData = [
  {
    id: 1,
    title: "Mathematics",
    description: "Linear Algebra, Calculus, Mathematical Analysis",
    status: "completed",
    progress: 100,
    position: { x: 1, y: 1 },
    prerequisites: [],
    topics: [
      { name: "Linear Algebra, Calculus, Mathematical Analysis", completed: true },
      { name: "Differential Calculus", completed: true }
    ],
    resources: [
      { title: "Mathematics for Machine Learning", type: "Course", platform: "Coursera" },
      { title: "Algebra and Differential Calculus", type: "Course", platform: "Coursera" }
    ]
  },
  {
    id: 2,
    title: "Statistics",
    description: "Statistics, CLT, Hypothesis Testing, Probability",
    status: "in-progress",
    progress: 75,
    position: { x: 2, y: 1 },
    prerequisites: [1],
    topics: [
      { name: "Statistics, CLT", completed: true },
      { name: "Hypothesis Testing", completed: true },
      { name: "Probability and Sampling", completed: false },
      { name: "AB Testing", completed: false },
      { name: "Increasing Test Sensitivity", completed: false }
    ],
    resources: [
      { title: "Introduction to Statistics", type: "Course", platform: "Coursera" },
      { title: "Hypothesis Testing", type: "Course", platform: "Coursera" },
      { title: "Probability and Statistics", type: "Course", platform: "Coursera" },
      { title: "Practitioner's Guide to Statistical Tests", type: "Article", platform: "Medium" },
      { title: "Experiment Design Article", type: "Article", platform: "Blog" }
    ]
  },
  {
    id: 3,
    title: "Econometrics",
    description: "Pre-requisites, Regression, Time series, Fitting Distributions",
    status: "available",
    progress: 0,
    position: { x: 1, y: 2 },
    prerequisites: [1, 2],
    topics: [
      { name: "Pre-requisites of Econometrics", completed: false },
      { name: "Regression, Time series, Fitting Distributions", completed: false }
    ],
    resources: [
      { title: "Fundamentals of Econometrics", type: "Book", platform: "Academic" },
      { title: "Intro to Econometrics", type: "Book", platform: "Academic" }
    ]
  },
  {
    id: 4,
    title: "Machine Learning",
    description: "Supervised & Unsupervised Learning, Neural Networks",
    status: "locked",
    progress: 0,
    position: { x: 2, y: 2 },
    prerequisites: [2, 3],
    topics: [
      { name: "Supervised Learning Algorithms", completed: false },
      { name: "Unsupervised Learning", completed: false },
      { name: "Neural Network Fundamentals", completed: false }
    ],
    resources: [
      { title: "Machine Learning Course", type: "Course", platform: "Coursera" },
      { title: "Deep Learning Specialization", type: "Course", platform: "Coursera" }
    ]
  },
  {
    id: 5,
    title: "Deep Learning",
    description: "CNNs, RNNs, Transformers, Computer Vision",
    status: "locked",
    progress: 0,
    position: { x: 1, y: 3 },
    prerequisites: [4],
    topics: [
      { name: "Convolutional Neural Networks", completed: false },
      { name: "Recurrent Neural Networks", completed: false },
      { name: "Transformers & Attention", completed: false }
    ],
    resources: [
      { title: "Deep Learning with PyTorch", type: "Course", platform: "Udacity" },
      { title: "Computer Vision Fundamentals", type: "Course", platform: "edX" }
    ]
  },
  {
    id: 6,
    title: "MLOps & Production",
    description: "Model Deployment, Monitoring, Scalability",
    status: "locked",
    progress: 0,
    position: { x: 2, y: 3 },
    prerequisites: [4, 5],
    topics: [
      { name: "Model Deployment Strategies", completed: false },
      { name: "ML Pipeline Design", completed: false },
      { name: "Model Monitoring & Maintenance", completed: false }
    ],
    resources: [
      { title: "MLOps Fundamentals", type: "Course", platform: "Coursera" },
      { title: "Production ML Systems", type: "Course", platform: "Google Cloud" }
    ]
  }
];

const Roadmap = () => {
  const [selectedTrack, setSelectedTrack] = useState<number | null>(null);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "in-progress":
        return <PlayCircle className="h-5 w-5 text-blue-600" />;
      case "available":
        return <Circle className="h-5 w-5 text-orange-500" />;
      default:
        return <Lock className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "border-green-200 bg-green-50";
      case "in-progress":
        return "border-blue-200 bg-blue-50";
      case "available":
        return "border-orange-200 bg-orange-50";
      default:
        return "border-gray-200 bg-gray-100";
    }
  };

  const getResourceTypeColor = (type: string) => {
    switch (type) {
      case "Course":
        return "bg-purple-100 text-purple-800";
      case "Book":
        return "bg-blue-100 text-blue-800";
      case "Article":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const renderConnections = () => {
    const connections: JSX.Element[] = [];
    
    roadmapData.forEach((track) => {
      track.prerequisites.forEach((prereqId) => {
        const prereq = roadmapData.find(t => t.id === prereqId);
        if (prereq) {
          // Create connection line between prerequisites and current track
          connections.push(
            <div key={`${prereqId}-${track.id}`} className="absolute">
              {track.position.y > prereq.position.y ? (
                <ArrowDown className="h-6 w-6 text-blue-500" />
              ) : (
                <ArrowRight className="h-6 w-6 text-blue-500" />
              )}
            </div>
          );
        }
      });
    });
    
    return connections;
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Learning Roadmap</h1>
        <p className="text-xl text-gray-600 mb-8">
          Comprehensive learning path with detailed prerequisites and resources
        </p>
      </div>

      {/* Roadmap Grid Layout */}
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {roadmapData.map((track) => (
            <div key={track.id} className="relative">
              {/* Track Card */}
              <Card 
                className={`transition-all duration-300 cursor-pointer ${getStatusColor(track.status)} ${
                  selectedTrack === track.id ? 'ring-2 ring-blue-500 shadow-lg scale-105' : 'shadow-md hover:shadow-lg'
                }`}
                onClick={() => setSelectedTrack(selectedTrack === track.id ? null : track.id)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-lg">
                        {track.id}
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold mb-1">{track.title}</CardTitle>
                        <p className="text-sm text-gray-600 leading-relaxed">{track.description}</p>
                      </div>
                    </div>
                    {getStatusIcon(track.status)}
                  </div>
                  
                  {track.progress > 0 && (
                    <div className="mt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Progress</span>
                        <span className="text-sm text-gray-600">{track.progress}%</span>
                      </div>
                      <Progress value={track.progress} className="h-2" />
                    </div>
                  )}
                </CardHeader>

                {selectedTrack === track.id && (
                  <CardContent className="pt-0 space-y-6">
                    {/* Prerequisites */}
                    {track.prerequisites.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-3 text-gray-900">Prerequisites</h4>
                        <div className="flex flex-wrap gap-2">
                          {track.prerequisites.map((prereqId) => {
                            const prereq = roadmapData.find(t => t.id === prereqId);
                            return prereq ? (
                              <Badge key={prereqId} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                {prereq.title}
                              </Badge>
                            ) : null;
                          })}
                        </div>
                      </div>
                    )}

                    {/* Topics/Subtopics */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center space-x-2">
                        <BookOpen size={16} />
                        <span>Topics to Master</span>
                      </h4>
                      <div className="space-y-2">
                        {track.topics.map((topic, index) => (
                          <div key={index} className="flex items-center space-x-3 p-2 rounded-lg bg-white/50">
                            <input 
                              type="checkbox" 
                              checked={topic.completed}
                              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                              readOnly
                            />
                            <span className={`text-sm ${topic.completed ? 'text-gray-900 line-through' : 'text-gray-700'}`}>
                              {topic.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Resources */}
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-900">Recommended Resources</h4>
                      <div className="space-y-3">
                        {track.resources.map((resource, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                            <div className="flex-1">
                              <p className="font-medium text-gray-900">{resource.title}</p>
                              <p className="text-sm text-gray-600">{resource.platform}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Badge className={getResourceTypeColor(resource.type)}>
                                {resource.type}
                              </Badge>
                              <ExternalLink size={16} className="text-gray-400" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4 border-t">
                      <Link to={`/module/${track.id}`}>
                        <Button 
                          className="w-full" 
                          disabled={track.status === "locked"}
                          variant={track.status === "completed" ? "outline" : "default"}
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

      {/* Legend */}
      <div className="bg-white rounded-lg border p-6 mt-8">
        <h3 className="font-semibold mb-4">Legend</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-sm">Completed</span>
          </div>
          <div className="flex items-center space-x-2">
            <PlayCircle className="h-5 w-5 text-blue-600" />
            <span className="text-sm">In Progress</span>
          </div>
          <div className="flex items-center space-x-2">
            <Circle className="h-5 w-5 text-orange-500" />
            <span className="text-sm">Available</span>
          </div>
          <div className="flex items-center space-x-2">
            <Lock className="h-5 w-5 text-gray-400" />
            <span className="text-sm">Locked</span>
          </div>
        </div>
      </div>

      <div className="text-center pt-8">
        <p className="text-gray-600 mb-4">
          Complete prerequisites to unlock advanced topics and earn certificates
        </p>
        <Link to="/profile">
          <Button variant="outline" size="lg">
            View Your Progress
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Roadmap;
