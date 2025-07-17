
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { 
  Play, 
  BookOpen, 
  Github, 
  MessageSquare, 
  Send, 
  Bot, 
  User, 
  Clock,
  CheckCircle,
  Star
} from "lucide-react";

const moduleData = {
  "1": {
    title: "Introduction to AI",
    description: "Learn the fundamental concepts of artificial intelligence",
    difficulty: "Beginner",
    duration: "2 hours",
    progress: 100,
    completed: true
  },
  "4": {
    title: "Regression Analysis",
    description: "Master linear and polynomial regression techniques",
    difficulty: "Intermediate", 
    duration: "3 hours",
    progress: 75,
    completed: false
  }
};

const resources = [
  {
    type: "video",
    title: "Linear Regression Fundamentals",
    description: "Complete guide to understanding linear regression",
    duration: "45 min",
    url: "#",
    thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400"
  },
  {
    type: "article",
    title: "Mathematical Foundations of Regression",
    description: "Deep dive into the math behind regression algorithms",
    readTime: "15 min",
    url: "#"
  },
  {
    type: "code",
    title: "Regression Implementation Examples",
    description: "Practical Python implementations with real datasets",
    language: "Python",
    url: "#"
  }
];

const aiMessages = [
  {
    role: "assistant",
    content: "Welcome! I'm here to help you master regression analysis. What would you like to explore first?",
    timestamp: "2 min ago"
  },
  {
    role: "user", 
    content: "Can you explain the difference between linear and polynomial regression?",
    timestamp: "1 min ago"
  },
  {
    role: "assistant",
    content: "Great question! Linear regression fits a straight line (y = mx + b) through your data points, assuming a linear relationship. Polynomial regression, on the other hand, can fit curved lines by using higher-degree terms like x², x³, etc. This allows it to capture more complex, non-linear patterns in your data.\n\nFor example:\n- Linear: House price = a × size + b\n- Polynomial: House price = a × size + b × size² + c\n\nWould you like me to show you a practical example?",
    timestamp: "Just now"
  }
];

const Module = () => {
  const { id } = useParams();
  const [code, setCode] = useState(`# Linear Regression Implementation
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

# Generate sample data
X = np.random.randn(100, 1)
y = 2 * X.flatten() + 1 + 0.1 * np.random.randn(100)

# Create and train the model
model = LinearRegression()
model.fit(X, y)

# Make predictions
predictions = model.predict(X)

# Visualize results
plt.scatter(X, y, alpha=0.5)
plt.plot(X, predictions, color='red', linewidth=2)
plt.xlabel('Feature')
plt.ylabel('Target')
plt.title('Linear Regression Example')
plt.show()

print(f"Coefficient: {model.coef_[0]:.2f}")
print(f"Intercept: {model.intercept_:.2f}")`);

  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState(aiMessages);

  const module = moduleData[id as keyof typeof moduleData];

  if (!module) {
    return <div>Module not found</div>;
  }

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    const userMessage = {
      role: "user" as const,
      content: newMessage,
      timestamp: "Just now"
    };
    
    setMessages([...messages, userMessage]);
    setNewMessage("");
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        role: "assistant" as const,
        content: "That's an excellent question! Let me break this down for you with a practical example...",
        timestamp: "Just now"
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="grid lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3 space-y-8">
        {/* Module Header */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-bold mb-2">{module.title}</CardTitle>
                <p className="text-gray-600 mb-4">{module.description}</p>
                <div className="flex items-center space-x-4">
                  <Badge className="bg-blue-100 text-blue-800">{module.difficulty}</Badge>
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <Clock size={14} />
                    <span>{module.duration}</span>
                  </div>
                  {module.completed && (
                    <div className="flex items-center space-x-1 text-sm text-green-600">
                      <CheckCircle size={14} />
                      <span>Completed</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-blue-600 mb-1">{module.progress}%</div>
                <p className="text-sm text-gray-600">Progress</p>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Learning Resources */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5" />
              <span>Learning Resources</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {resources.map((resource, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      {resource.type === "video" && <Play className="h-5 w-5 text-blue-600" />}
                      {resource.type === "article" && <BookOpen className="h-5 w-5 text-blue-600" />}
                      {resource.type === "code" && <Github className="h-5 w-5 text-blue-600" />}
                    </div>
                    <div>
                      <h3 className="font-semibold">{resource.title}</h3>
                      <p className="text-sm text-gray-600">{resource.description}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        {resource.duration && (
                          <span className="text-xs text-gray-500">⏱️ {resource.duration}</span>
                        )}
                        {resource.readTime && (
                          <span className="text-xs text-gray-500">📖 {resource.readTime}</span>
                        )}
                        {resource.language && (
                          <Badge variant="outline" className="text-xs">{resource.language}</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    {resource.type === "video" ? "Watch" : resource.type === "article" ? "Read" : "View"}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Code Editor */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Github className="h-5 w-5" />
              <span>Practice Code</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-900 rounded-lg p-4">
              <Textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="min-h-[400px] font-mono text-sm bg-transparent text-green-400 border-0 resize-none focus:ring-0"
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm text-gray-600">
                Try modifying the parameters or adding new features to the regression model
              </p>
              <Button className="bg-green-600 hover:bg-green-700">
                Run Code
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Module Actions */}
        <div className="flex justify-between items-center">
          <Link to={`/module/${id}/quiz`}>
            <Button variant="outline" size="lg">
              Take Quiz
            </Button>
          </Link>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Mark as Complete
          </Button>
        </div>
      </div>

      {/* AI Assistant Sidebar */}
      <div className="lg:col-span-1">
        <Card className="sticky top-8 h-[600px] flex flex-col">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-lg">
              <Bot className="h-5 w-5 text-blue-600" />
              <span>AI Assistant</span>
            </CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className="flex-1 flex flex-col p-0">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[80%] ${message.role === "user" ? "bg-blue-600 text-white" : "bg-gray-100"} rounded-lg p-3`}>
                      <div className="flex items-start space-x-2">
                        {message.role === "assistant" && <Bot size={16} className="text-blue-600 mt-0.5" />}
                        {message.role === "user" && <User size={16} className="text-white mt-0.5" />}
                        <div className="flex-1">
                          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                          <p className="text-xs opacity-70 mt-1">{message.timestamp}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <Separator />
            <div className="p-4">
              <div className="flex space-x-2">
                <Textarea
                  placeholder="Ask me anything about regression..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="min-h-[60px] resize-none"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                />
                <Button onClick={handleSendMessage} size="sm" className="self-end">
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Module;
