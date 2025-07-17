
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Clock } from "lucide-react";

const quizData = {
  title: "Regression Analysis Quiz",
  questions: [
    {
      id: 1,
      question: "What is the primary goal of linear regression?",
      options: [
        "To classify data into categories",
        "To find the best-fitting line through data points",
        "To cluster similar data points",
        "To reduce data dimensionality"
      ],
      correctAnswer: 1,
      explanation: "Linear regression aims to find the line of best fit that minimizes the difference between predicted and actual values."
    },
    {
      id: 2,
      question: "Which metric is commonly used to evaluate regression models?",
      options: [
        "Accuracy",
        "Precision",
        "Mean Squared Error (MSE)",
        "F1-Score"
      ],
      correctAnswer: 2,
      explanation: "MSE measures the average squared difference between predicted and actual values, making it ideal for regression evaluation."
    },
    {
      id: 3,
      question: "What happens when you add polynomial terms to linear regression?",
      options: [
        "The model becomes less flexible",
        "The model can capture non-linear relationships",
        "The model always performs worse",
        "The model becomes simpler"
      ],
      correctAnswer: 1,
      explanation: "Adding polynomial terms allows the model to fit curved relationships in the data, increasing its flexibility."
    }
  ]
};

const ModuleQuiz = () => {
  const { id } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const handleNext = () => {
    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
      setQuizCompleted(true);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    quizData.questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / quizData.questions.length) * 100);
  };

  const score = calculateScore();
  const progress = ((currentQuestion + 1) / quizData.questions.length) * 100;

  if (showResults) {
    return (
      <div className="max-w-4xl mx-auto space-y-8">
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4">
              {score >= 70 ? (
                <div className="bg-green-100 p-4 rounded-full w-fit mx-auto">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
              ) : (
                <div className="bg-orange-100 p-4 rounded-full w-fit mx-auto">
                  <XCircle className="h-12 w-12 text-orange-600" />
                </div>
              )}
            </div>
            <CardTitle className="text-3xl font-bold mb-2">Quiz Complete!</CardTitle>
            <div className="text-4xl font-bold text-blue-600 mb-2">{score}%</div>
            <p className="text-gray-600">
              You got {quizData.questions.filter((q, i) => selectedAnswers[q.id] === q.correctAnswer).length} out of {quizData.questions.length} questions correct
            </p>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Review Your Answers</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {quizData.questions.map((question, index) => {
              const userAnswer = selectedAnswers[question.id];
              const isCorrect = userAnswer === question.correctAnswer;
              
              return (
                <div key={question.id} className="space-y-3">
                  <div className="flex items-start space-x-3">
                    {isCorrect ? (
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <h3 className="font-medium mb-2">{question.question}</h3>
                      <div className="space-y-2">
                        {question.options.map((option, optionIndex) => (
                          <div 
                            key={optionIndex}
                            className={`p-3 rounded-lg border ${
                              optionIndex === question.correctAnswer 
                                ? "bg-green-50 border-green-200" 
                                : optionIndex === userAnswer && !isCorrect
                                ? "bg-red-50 border-red-200"
                                : "bg-gray-50 border-gray-200"
                            }`}
                          >
                            <div className="flex items-center space-x-2">
                              {optionIndex === question.correctAnswer && (
                                <CheckCircle size={16} className="text-green-600" />
                              )}
                              {optionIndex === userAnswer && !isCorrect && (
                                <XCircle size={16} className="text-red-600" />
                              )}
                              <span className={optionIndex === question.correctAnswer ? "font-medium" : ""}>
                                {option}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-800">
                          <strong>Explanation:</strong> {question.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        <div className="flex justify-center space-x-4">
          <Link to={`/module/${id}`}>
            <Button variant="outline" size="lg">
              Back to Module
            </Button>
          </Link>
          <Link to={`/module/${id}/feedback`}>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get AI Feedback
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const question = quizData.questions[currentQuestion];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{quizData.title}</h1>
          <p className="text-gray-600">Test your understanding of regression concepts</p>
        </div>
        <Badge variant="outline" className="px-3 py-1">
          Question {currentQuestion + 1} of {quizData.questions.length}
        </Badge>
      </div>

      <Progress value={progress} className="h-2" />

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">{question.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup 
            value={selectedAnswers[question.id]?.toString() || ""}
            onValueChange={(value) => handleAnswerSelect(question.id, parseInt(value))}
          >
            <div className="space-y-4">
              {question.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-gray-50 transition-colors">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>

          <div className="flex justify-between items-center mt-8 pt-6 border-t">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Clock size={16} />
              <span>No time limit</span>
            </div>
            <Button 
              onClick={handleNext}
              disabled={selectedAnswers[question.id] === undefined}
              className="px-8"
            >
              {currentQuestion < quizData.questions.length - 1 ? "Next Question" : "Finish Quiz"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ModuleQuiz;
