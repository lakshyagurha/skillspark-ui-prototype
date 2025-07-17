
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Circle, Lock, PlayCircle, Clock, BookOpen } from "lucide-react";

const roadmapData = [
  {
    id: 1,
    title: "AI Fundamentals",
    description: "Core concepts and mathematical foundations",
    status: "completed",
    progress: 100,
    modules: [
      { id: "1", title: "Introduction to AI", completed: true },
      { id: "2", title: "Linear Algebra Basics", completed: true },
      { id: "3", title: "Statistics & Probability", completed: true }
    ],
    estimatedHours: 12,
    difficulty: "Beginner"
  },
  {
    id: 2,
    title: "Machine Learning Basics",
    description: "Supervised and unsupervised learning algorithms",
    status: "in-progress",
    progress: 65,
    modules: [
      { id: "4", title: "Regression Analysis", completed: true },
      { id: "5", title: "Classification Methods", completed: true },
      { id: "6", title: "Clustering & Dimensionality", completed: false }
    ],
    estimatedHours: 20,
    difficulty: "Intermediate"
  },
  {
    id: 3,
    title: "Deep Learning",
    description: "Neural networks and advanced architectures",
    status: "available",
    progress: 0,
    modules: [
      { id: "7", title: "Neural Network Fundamentals", completed: false },
      { id: "8", title: "Convolutional Networks", completed: false },
      { id: "9", title: "Recurrent Networks", completed: false }
    ],
    estimatedHours: 35,
    difficulty: "Advanced"
  },
  {
    id: 4,
    title: "Natural Language Processing",
    description: "Text processing and language models",
    status: "locked",
    progress: 0,
    modules: [
      { id: "10", title: "Text Preprocessing", completed: false },
      { id: "11", title: "Language Models", completed: false },
      { id: "12", title: "Transformers", completed: false }
    ],
    estimatedHours: 28,
    difficulty: "Advanced"
  },
  {
    id: 5,
    title: "Computer Vision",
    description: "Image processing and computer vision techniques",
    status: "locked",
    progress: 0,
    modules: [
      { id: "13", title: "Image Processing", completed: false },
      { id: "14", title: "Object Detection", completed: false },
      { id: "15", title: "Image Generation", completed: false }
    ],
    estimatedHours: 32,
    difficulty: "Advanced"
  },
  {
    id: 6,
    title: "MLOps & Deployment",
    description: "Model deployment and production systems",
    status: "locked",
    progress: 0,
    modules: [
      { id: "16", title: "Model Versioning", completed: false },
      { id: "17", title: "Deployment Strategies", completed: false },
      { id: "18", title: "Monitoring & Maintenance", completed: false }
    ],
    estimatedHours: 25,
    difficulty: "Expert"
  }
];

const Roadmap = () => {
  const [selectedTrack, setSelectedTrack] = useState<number | null>(null);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-6 w-6 text-green-600" />;
      case "in-progress":
        return <PlayCircle className="h-6 w-6 text-blue-600" />;
      case "available":
        return <Circle className="h-6 w-6 text-gray-400" />;
      default:
        return <Lock className="h-6 w-6 text-gray-300" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "border-green-200 bg-green-50";
      case "in-progress":
        return "border-blue-200 bg-blue-50";
      case "available":
        return "border-gray-200 bg-white hover:bg-gray-50";
      default:
        return "border-gray-200 bg-gray-50";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-blue-100 text-blue-800";
      case "Advanced":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-purple-100 text-purple-800";
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Learning Roadmap</h1>
        <p className="text-xl text-gray-600 mb-8">
          Personalized path based on your assessment results
        </p>
      </div>

      <div className="grid gap-6 md:gap-8">
        {roadmapData.map((track, index) => (
          <div key={track.id} className="relative">
            {/* Connection line */}
            {index < roadmapData.length - 1 && (
              <div className="absolute left-8 top-24 w-0.5 h-16 bg-gray-200 z-0"></div>
            )}
            
            <Card 
              className={`relative z-10 transition-all duration-300 cursor-pointer ${getStatusColor(track.status)} ${
                selectedTrack === track.id ? 'ring-2 ring-blue-500 shadow-lg' : 'shadow-md hover:shadow-lg'
              }`}
              onClick={() => setSelectedTrack(selectedTrack === track.id ? null : track.id)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(track.status)}
                    <div>
                      <CardTitle className="text-xl font-semibold mb-2">{track.title}</CardTitle>
                      <p className="text-gray-600">{track.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <Badge className={getDifficultyColor(track.difficulty)}>
                      {track.difficulty}
                    </Badge>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock size={14} />
                      <span>{track.estimatedHours}h</span>
                    </div>
                  </div>
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
                <CardContent className="pt-0">
                  <div className="border-t pt-6">
                    <h4 className="font-semibold mb-4 flex items-center space-x-2">
                      <BookOpen size={16} />
                      <span>Modules</span>
                    </h4>
                    <div className="grid gap-3">
                      {track.modules.map((module) => (
                        <div
                          key={module.id}
                          className="flex items-center justify-between p-3 bg-white rounded-lg border"
                        >
                          <div className="flex items-center space-x-3">
                            {module.completed ? (
                              <CheckCircle size={16} className="text-green-600" />
                            ) : (
                              <Circle size={16} className="text-gray-400" />
                            )}
                            <span className={module.completed ? "text-gray-900" : "text-gray-600"}>
                              {module.title}
                            </span>
                          </div>
                          {track.status !== "locked" && (
                            <Link to={`/module/${module.id}`}>
                              <Button
                                variant={module.completed ? "outline" : "default"}
                                size="sm"
                                disabled={track.status === "locked"}
                              >
                                {module.completed ? "Review" : "Start"}
                              </Button>
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>
        ))}
      </div>

      <div className="text-center pt-8">
        <p className="text-gray-600 mb-4">
          Complete modules to unlock advanced tracks and earn certificates
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
