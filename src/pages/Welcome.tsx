
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, Target, Users, Star, Sparkles } from "lucide-react";

const Welcome = () => {
  return (
    <div className="min-h-screen bg-background star-pattern">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6 relative">
            <div className="bg-gradient-primary p-4 rounded-full relative">
              <Brain className="h-12 w-12 text-white" />
              <Star className="absolute -top-2 -right-2 h-6 w-6 text-primary fill-primary animate-pulse" />
              <Sparkles className="absolute -bottom-1 -left-1 h-4 w-4 text-primary fill-primary animate-pulse delay-700" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight">
            Master AI with
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              Personalized Learning
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover your AI knowledge level, get a custom learning roadmap, and build real skills 
            with hands-on projects and AI-powered guidance.
          </p>
          <Link to="/assess/qs/1">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative">
              <Star className="mr-2 h-5 w-5 fill-white" />
              Start Your Assessment
              <Sparkles className="ml-2 h-4 w-4 fill-white animate-pulse" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-card/80 backdrop-blur-sm border-border shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2">
              <Star className="h-4 w-4 text-primary/30 fill-primary/30" />
            </div>
            <CardHeader className="text-center pb-4">
              <div className="bg-primary/20 p-3 rounded-full w-fit mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-semibold text-foreground">Skill Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-muted-foreground leading-relaxed">
                Take our comprehensive assessment to identify your current AI knowledge and skill gaps.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-border shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2">
              <Sparkles className="h-4 w-4 text-primary/30 fill-primary/30" />
            </div>
            <CardHeader className="text-center pb-4">
              <div className="bg-primary/20 p-3 rounded-full w-fit mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-semibold text-foreground">Custom Roadmap</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-muted-foreground leading-relaxed">
                Get a personalized learning path tailored to your goals and current skill level.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-border shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2">
              <Star className="h-4 w-4 text-primary/30 fill-primary/30" />
            </div>
            <CardHeader className="text-center pb-4">
              <div className="bg-primary/20 p-3 rounded-full w-fit mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-semibold text-foreground">AI Mentorship</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-muted-foreground leading-relaxed">
                Learn with AI-powered guidance, instant feedback, and personalized recommendations.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border relative overflow-hidden">
          <div className="absolute top-4 right-4">
            <Sparkles className="h-6 w-6 text-primary/20 fill-primary/20" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center flex items-center justify-center gap-2">
            <Star className="h-6 w-6 text-primary fill-primary" />
            What You'll Learn
          </h2>
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
              <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm font-medium bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors border border-border">
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
