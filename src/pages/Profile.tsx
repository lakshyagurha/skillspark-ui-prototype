
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Trophy, 
  Target, 
  Calendar, 
  BookOpen, 
  Award,
  TrendingUp,
  Clock,
  Star,
  CheckCircle
} from "lucide-react";

const Profile = () => {
  const userStats = {
    name: "John Doe",
    email: "john.doe@example.com",
    joinDate: "March 2024",
    overallProgress: 68,
    completedModules: 12,
    totalModules: 18,
    skillLevel: "Intermediate",
    weeklyGoal: 5,
    weeklyProgress: 3,
    currentStreak: 7,
    longestStreak: 15,
    totalHours: 45,
    certificates: 3
  };

  const skillBreakdown = [
    { skill: "Machine Learning", progress: 85, level: "Advanced" },
    { skill: "Deep Learning", progress: 65, level: "Intermediate" },
    { skill: "Natural Language Processing", progress: 45, level: "Beginner" },
    { skill: "Computer Vision", progress: 70, level: "Intermediate" },
    { skill: "MLOps", progress: 30, level: "Beginner" },
    { skill: "AI Ethics", progress: 90, level: "Expert" }
  ];

  const recentActivity = [
    { 
      action: "Completed Quiz",
      module: "Regression Analysis", 
      score: 85,
      date: "2 hours ago",
      type: "quiz"
    },
    { 
      action: "Finished Module",
      module: "Introduction to AI", 
      date: "1 day ago",
      type: "module"
    },
    { 
      action: "Started Learning Path",
      module: "Machine Learning Basics", 
      date: "3 days ago",
      type: "path"
    },
    { 
      action: "Earned Certificate",
      module: "AI Fundamentals", 
      date: "5 days ago",
      type: "certificate"
    }
  ];

  const achievements = [
    { 
      title: "First Steps", 
      description: "Completed your first module",
      icon: "🎯",
      earned: true,
      date: "March 15, 2024"
    },
    { 
      title: "Quick Learner", 
      description: "Completed 5 modules in one week",
      icon: "⚡",
      earned: true,
      date: "March 22, 2024"
    },
    { 
      title: "Streak Master", 
      description: "Maintained a 7-day learning streak",
      icon: "🔥",
      earned: true,
      date: "March 28, 2024"
    },
    { 
      title: "Knowledge Seeker", 
      description: "Complete 10 modules",
      icon: "📚",
      earned: false,
      progress: 80
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "bg-purple-100 text-purple-800";
      case "Advanced": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-blue-100 text-blue-800";
      default: return "bg-orange-100 text-orange-800";
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "quiz": return <Target className="h-4 w-4 text-blue-600" />;
      case "module": return <BookOpen className="h-4 w-4 text-green-600" />;
      case "path": return <TrendingUp className="h-4 w-4 text-purple-600" />;
      case "certificate": return <Award className="h-4 w-4 text-yellow-600" />;
      default: return <Circle className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="text-2xl font-bold">JD</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{userStats.name}</h1>
                <p className="text-gray-600 mb-2">{userStats.email}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>Joined {userStats.joinDate}</span>
                  </div>
                  <Badge className={getLevelColor(userStats.skillLevel)}>
                    {userStats.skillLevel}
                  </Badge>
                </div>
              </div>
            </div>
            <Button variant="outline">Edit Profile</Button>
          </div>
        </CardHeader>
      </Card>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Stats Cards */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Trophy className="h-4 w-4 text-yellow-600" />
                  <span className="text-sm text-gray-600">Overall Progress</span>
                </div>
                <span className="font-semibold">{userStats.overallProgress}%</span>
              </div>
              <Progress value={userStats.overallProgress} className="h-2" />
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{userStats.completedModules}</div>
                  <p className="text-xs text-gray-600">Modules Done</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{userStats.certificates}</div>
                  <p className="text-xs text-gray-600">Certificates</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{userStats.currentStreak}</div>
                  <p className="text-xs text-gray-600">Day Streak</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">{userStats.totalHours}</div>
                  <p className="text-xs text-gray-600">Hours Learned</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Weekly Goal</CardTitle>
            </CardHeader>  
            <CardContent>
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-blue-600">
                  {userStats.weeklyProgress}/{userStats.weeklyGoal}
                </div>
                <p className="text-sm text-gray-600">Modules this week</p>
              </div>
              <Progress value={(userStats.weeklyProgress / userStats.weeklyGoal) * 100} className="h-2" />
              <p className="text-xs text-gray-600 mt-2 text-center">
                {userStats.weeklyGoal - userStats.weeklyProgress} more to reach your goal!
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-8">
          {/* Skills Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-blue-600" />
                <span>Skill Progress</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                {skillBreakdown.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{skill.skill}</span>
                      <div className="flex items-center space-x-3">
                        <Badge className={getLevelColor(skill.level)} variant="secondary">
                          {skill.level}
                        </Badge>
                        <span className="font-semibold text-blue-600">{skill.progress}%</span>
                      </div>
                    </div>
                    <Progress value={skill.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-green-600" />
                <span>Recent Activity</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      {getActivityIcon(activity.type)}
                      <div>
                        <p className="font-medium">{activity.action}</p>
                        <p className="text-sm text-gray-600">{activity.module}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      {activity.score && (
                        <div className="font-semibold text-blue-600 mb-1">{activity.score}%</div>
                      )}
                      <p className="text-xs text-gray-500">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-yellow-600" />
                <span>Achievements</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-lg border ${
                      achievement.earned 
                        ? "bg-yellow-50 border-yellow-200" 
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-2xl">{achievement.icon}</div>
                      {achievement.earned && (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      )}
                    </div>
                    <h3 className="font-semibold mb-1">{achievement.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                    {achievement.earned ? (
                      <p className="text-xs text-gray-500">Earned {achievement.date}</p>
                    ) : (
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Progress</span>
                          <span>{achievement.progress}%</span>
                        </div>
                        <Progress value={achievement.progress} className="h-1" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
