
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, Target, Users } from "lucide-react";

const Welcome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full">
              <Brain className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Master AI with
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              Personalized Learning
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover your AI knowledge level, get a custom learning roadmap, and build real skills 
            with hands-on projects and AI-powered guidance.
          </p>
          <Link to="/assess/qs/1">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Start Your Assessment
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl font-semibold">Skill Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-600 leading-relaxed">
                Take our comprehensive assessment to identify your current AI knowledge and skill gaps.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-xl font-semibold">Custom Roadmap</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-600 leading-relaxed">
                Get a personalized learning path tailored to your goals and current skill level.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-xl font-semibold">AI Mentorship</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-600 leading-relaxed">
                Learn with AI-powered guidance, instant feedback, and personalized recommendations.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What You'll Learn</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Machine Learning Fundamentals",
              "Neural Networks",
              "Deep Learning",
              "Natural Language Processing",
              "Computer Vision",
              "Prompt Engineering",
              "Transformers",
              "MLOps",
              "AI Ethics",
              "Reinforcement Learning"
            ].map((skill) => (
              <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm font-medium bg-gray-100 hover:bg-blue-100 transition-colors">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
