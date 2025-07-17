
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Bot, 
  TrendingUp, 
  Target, 
  BookOpen, 
  Award, 
  ArrowRight,
  CheckCircle,
  Lightbulb
} from "lucide-react";

const ModuleFeedback = () => {
  const { id } = useParams();

  const feedback = {
    overallScore: 85,
    strengths: [
      "Excellent understanding of linear regression fundamentals",
      "Strong grasp of mathematical concepts behind regression",
      "Good application of regression in practical scenarios"
    ],
    improvements: [
      "Review polynomial regression applications",
      "Practice interpreting regression coefficients",
      "Explore regularization techniques"
    ],
    recommendations: [
      {
        title: "Advanced Regression Techniques",
        description: "Learn about Ridge, Lasso, and Elastic Net regression",
        type: "Next Module",
        difficulty: "Intermediate"
      },
      {
        title: "Feature Engineering for Regression",
        description: "Master the art of creating meaningful features",  
        type: "Skill Builder",
        difficulty: "Advanced"
      },
      {
        title: "Regression in Practice",
        description: "Real-world case studies and projects",
        type: "Project",
        difficulty: "Intermediate"
      }
    ],
    detailedAnalysis: {
      conceptualUnderstanding: 90,
      practicalApplication: 80,
      mathematicalFoundation: 85,
      codeImplementation: 75
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full w-fit mx-auto mb-6">
          <Bot className="h-12 w-12 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">AI-Generated Feedback</h1>
        <p className="text-xl text-gray-600">
          Personalized insights based on your quiz performance and learning patterns
        </p>
      </div>

      {/* Overall Performance */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold mb-4">Overall Performance</CardTitle>
          <div className="text-5xl font-bold text-blue-600 mb-2">{feedback.overallScore}%</div>
          <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">
            Excellent Progress
          </Badge>
        </CardHeader>
      </Card>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Detailed Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-blue-600" />
              <span>Skill Breakdown</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {Object.entries(feedback.detailedAnalysis).map(([skill, score]) => (
              <div key={skill} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium capitalize">
                    {skill.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                  <span className="font-semibold text-blue-600">{score}%</span>
                </div>
                <Progress value={score} className="h-2" />
              </div>
            ))}
          </CardContent>  
        </Card>

        {/* Strengths & Improvements */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-green-700">
                <CheckCircle className="h-5 w-5" />
                <span>Key Strengths</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {feedback.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{strength}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-orange-700">
                <Lightbulb className="h-5 w-5" />
                <span>Areas for Improvement</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {feedback.improvements.map((improvement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{improvement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* AI Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-purple-600" />
            <span>Personalized Recommendations</span>
          </CardTitle>
          <p className="text-gray-600 mt-2">
            Based on your performance, here are the next steps to accelerate your learning:
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {feedback.recommendations.map((rec, index) => (
              <div key={index} className="flex items-center justify-between p-6 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    {rec.type === "Next Module" && <BookOpen className="h-6 w-6 text-purple-600" />}
                    {rec.type === "Skill Builder" && <Target className="h-6 w-6 text-purple-600" />}
                    {rec.type === "Project" && <Award className="h-6 w-6 text-purple-600" />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{rec.title}</h3>
                    <p className="text-gray-600 mb-2">{rec.description}</p>
                    <div className="flex items-center space-x-3">
                      <Badge variant="outline">{rec.type}</Badge>
                      <Badge className={
                        rec.difficulty === "Beginner" ? "bg-green-100 text-green-800" :
                        rec.difficulty === "Intermediate" ? "bg-blue-100 text-blue-800" :
                        "bg-orange-100 text-orange-800"
                      }>
                        {rec.difficulty}
                      </Badge>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="flex items-center space-x-2">
                  <span>Start</span>
                  <ArrowRight size={16} />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Detailed AI Feedback */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bot className="h-5 w-5 text-blue-600" />
            <span>Detailed AI Analysis</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <p className="text-gray-700">
              <strong>Conceptual Mastery:</strong> You demonstrate excellent understanding of regression fundamentals. Your ability to explain the mathematical intuition behind linear regression is particularly strong. The way you connected the concepts of minimizing error to finding the optimal line shows deep comprehension.
            </p>
          </div>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
            <p className="text-gray-700">
              <strong>Problem-Solving Approach:</strong> Your systematic approach to tackling regression problems is commendable. You correctly identified the need to analyze data patterns before choosing between linear and polynomial regression, which shows good analytical thinking.
            </p>
          </div>
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
            <p className="text-gray-700">
              <strong>Areas for Growth:</strong> While your theoretical knowledge is solid, focusing on practical implementation would strengthen your skills. Consider working through more coding exercises, particularly those involving feature preprocessing and model evaluation metrics.
            </p>
          </div>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
            <p className="text-gray-700">
              <strong>Next Steps:</strong> You're ready to tackle more advanced regression techniques. I recommend exploring regularization methods (Ridge, Lasso) as they build naturally on your current knowledge while introducing important concepts about overfitting and model complexity.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4">
        <Link to="/roadmap">
          <Button variant="outline" size="lg">
            View Full Roadmap
          </Button>
        </Link>
        <Link to="/module/7">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Continue to Next Module
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ModuleFeedback;
