import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Trophy, Target, BookOpen, Clock, TrendingUp, Award, Circle, User, Mail, Layers, ListChecks } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Legend } from "recharts";
import { CardDescription } from "@/components/ui/card";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Dummy data for the profile page
  const profileData = {
    name: "John Doe",
    email: "john.doe@example.com",
    level: "Intermediate",
    points: 1250,
    coursesCompleted: 7,
    modulesCompleted: 23,
    lastActivity: "2 days ago",
  };

  const learningStats = [
    { name: "Jan", modules: 4, quiz: 3 },
    { name: "Feb", modules: 6, quiz: 5 },
    { name: "Mar", modules: 5, quiz: 4 },
    { name: "Apr", modules: 7, quiz: 6 },
    { name: "May", modules: 6, quiz: 5 },
  ];

  const completionData = [
    { name: "Completed", value: 75 },
    { name: "Remaining", value: 25 },
  ];

  const COLORS = ["#0088FE", "#00C49F"];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Profile</h1>
        <p className="text-xl text-gray-600">
          Track your progress and achievements in AI learning
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="stats">Statistics</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center space-x-2">
                  <User size={16} className="text-gray-500" />
                  <span>Name: {profileData.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail size={16} className="text-gray-500" />
                  <span>Email: {profileData.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Layers size={16} className="text-gray-500" />
                  <span>Level: {profileData.level}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award size={16} className="text-gray-500" />
                  <span>Points: {profileData.points}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">
                  Learning Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center space-x-2">
                  <BookOpen size={16} className="text-gray-500" />
                  <span>Courses Completed: {profileData.coursesCompleted}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ListChecks size={16} className="text-gray-500" />
                  <span>Modules Completed: {profileData.modulesCompleted}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={16} className="text-gray-500" />
                  <span>Last Activity: {profileData.lastActivity}</span>
                </div>
                <div className="mt-4">
                  <Progress value={60} />
                  <div className="text-sm text-gray-500 mt-1">
                    60% of current track completed
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                Current Learning Path
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-lg font-medium">AI Fundamentals</p>
                  <p className="text-gray-500">
                    Core concepts and mathematical foundations
                  </p>
                </div>
                <Badge variant="secondary">In Progress</Badge>
              </div>
              <div className="mt-4">
                <Progress value={35} />
                <div className="text-sm text-gray-500 mt-1">
                  35% of modules completed
                </div>
              </div>
              <div className="mt-4">
                <Button>Continue Learning</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stats" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                Learning Statistics
              </CardTitle>
              <CardDescription>Monthly progress overview</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={learningStats}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="modules" fill="#8884d8" name="Modules" />
                  <Bar dataKey="quiz" fill="#82ca9d" name="Quizzes" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                Completion Rate
              </CardTitle>
              <CardDescription>Overall course completion status</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    dataKey="value"
                    data={completionData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  >
                    {completionData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="text-yellow-500" size={20} />
                  <span>First Module Completed</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">Completed the first module in AI Fundamentals.</p>
                <Button variant="secondary" className="mt-4">View Details</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="text-green-500" size={20} />
                  <span>Quiz Master</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">Scored above 90% in a module quiz.</p>
                <Button variant="secondary" className="mt-4">View Details</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="text-blue-500" size={20} />
                  <span>Consistent Learner</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">Completed 5 modules in the last month.</p>
                <Button variant="secondary" className="mt-4">View Details</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;
