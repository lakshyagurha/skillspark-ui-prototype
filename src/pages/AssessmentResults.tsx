
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy, Star, ArrowRight, Target, Brain, Code, Zap } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const AssessmentResults = () => {
  const overallScore = 78;
  
  const skillData = [
    { name: "Machine Learning Basics", score: 85, color: "hsl(199, 89%, 48%)" },
    { name: "Neural Networks", score: 72, color: "hsl(217, 91%, 60%)" },
    { name: "Deep Learning", score: 65, color: "hsl(199, 89%, 58%)" },
    { name: "NLP", score: 80, color: "hsl(217, 91%, 70%)" },
    { name: "Computer Vision", score: 70, color: "hsl(199, 89%, 38%)" }
  ];

  const pieData = [
    { name: "Correct", value: 78, color: "hsl(199, 89%, 48%)" },
    { name: "Incorrect", value: 22, color: "hsl(217, 32%, 17%)" }
  ];

  return (
    <div className="min-h-screen bg-background star-pattern p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Trophy className="h-8 w-8 text-primary fill-primary" />
            <h1 className="text-3xl font-bold text-foreground">Assessment Complete!</h1>
            <Star className="h-6 w-6 text-primary fill-primary animate-pulse" />
          </div>
          <p className="text-muted-foreground text-lg">Here's how you performed</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <Card className="lg:col-span-1 bg-card/80 backdrop-blur-sm border-border shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-foreground">
                <Star className="h-5 w-5 text-primary fill-primary" />
                Overall Score
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">{overallScore}%</div>
                    <div className="text-sm text-muted-foreground">Score</div>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Correct Answers</span>
                  <span className="text-primary font-medium">4/5</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Time Taken</span>
                  <span className="text-foreground">8 minutes</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2 bg-card/80 backdrop-blur-sm border-border shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Target className="h-5 w-5 text-primary" />
                Skill Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={skillData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 32%, 17%)" />
                    <XAxis 
                      dataKey="name" 
                      stroke="hsl(215, 20%, 65%)"
                      fontSize={12}
                      angle={-45}
                      textAnchor="end"
                      height={80}
                    />
                    <YAxis stroke="hsl(215, 20%, 65%)" />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: "hsl(222, 47%, 11%)",
                        border: "1px solid hsl(217, 32%, 17%)",
                        borderRadius: "8px",
                        color: "hsl(213, 31%, 91%)"
                      }}
                    />
                    <Bar dataKey="score" fill="hsl(199, 89%, 48%)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="bg-card/80 backdrop-blur-sm border-border shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Brain className="h-5 w-5 text-primary" />
                Strengths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Star className="h-4 w-4 text-primary fill-primary" />
                  <span className="text-foreground">Machine Learning Fundamentals</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="h-4 w-4 text-primary fill-primary" />
                  <span className="text-foreground">Mathematical Concepts</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="h-4 w-4 text-primary fill-primary" />
                  <span className="text-foreground">Algorithm Understanding</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-border shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Target className="h-5 w-5 text-primary" />
                Areas for Improvement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-foreground">Deep Learning Architecture</span>
                  <Progress value={65} className="w-20 h-2" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground">Neural Network Design</span>
                  <Progress value={72} className="w-20 h-2" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground">Advanced Optimization</span>
                  <Progress value={58} className="w-20 h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-secondary border-border shadow-lg">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Ready for Your Learning Journey?</h3>
              <Star className="h-5 w-5 text-primary fill-primary animate-pulse" />
            </div>
            <p className="text-muted-foreground mb-6">
              Based on your assessment, we've created a personalized roadmap to help you master AI concepts.
            </p>
            <Link to="/roadmap">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white">
                View Your Roadmap
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AssessmentResults;
