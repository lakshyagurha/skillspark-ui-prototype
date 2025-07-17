
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle, Clock } from "lucide-react";

const questions = [
  {
    id: 1,
    type: "multiple-choice",
    question: "What is the primary purpose of a transformer architecture in deep learning?",
    options: [
      "To transform images into different formats",
      "To handle sequential data using attention mechanisms",
      "To compress neural network models",
      "To convert between different programming languages"
    ],
    correctAnswer: 1,
    category: "Deep Learning"
  },
  {
    id: 2,
    type: "coding",
    question: "Write a Python function that implements a simple linear regression using gradient descent. The function should take X (features) and y (targets) as input and return the learned weights.",
    category: "Machine Learning Implementation"
  },
  {
    id: 3,
    type: "multiple-choice",
    question: "Which of the following best describes prompt engineering?",
    options: [
      "Writing code to train neural networks",
      "Designing and optimizing input prompts for AI models",
      "Engineering hardware for AI workloads",
      "Creating prompts for user interfaces"
    ],
    correctAnswer: 1,
    category: "Prompt Engineering"
  }
];

const AssessmentQuestion = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const questionId = parseInt(id || "1");
  const question = questions.find(q => q.id === questionId);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [codeAnswer, setCodeAnswer] = useState("");

  const handleNext = () => {
    if (questionId < questions.length) {
      navigate(`/assess/qs/${questionId + 1}`);
    } else {
      navigate("/assess/results");
    }
  };

  if (!question) {
    navigate("/assess/results");
    return null;
  }

  const progress = (questionId / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="outline" className="px-3 py-1">
              Question {questionId} of {questions.length}
            </Badge>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Clock size={16} />
              <span>No time limit</span>
            </div>
          </div>
          <Progress value={progress} className="w-full h-2" />
        </div>

        <Card className="bg-white shadow-lg border-0">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                {question.category}
              </Badge>
            </div>
            <CardTitle className="text-2xl font-semibold leading-relaxed mt-4">
              {question.question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {question.type === "multiple-choice" ? (
              <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
                <div className="space-y-4">
                  {question.options?.map((option, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-gray-50 transition-colors">
                      <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer text-base">
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            ) : (
              <div className="space-y-4">
                <Label htmlFor="code-editor" className="text-sm font-medium text-gray-700">
                  Write your solution:
                </Label>
                <div className="bg-gray-900 rounded-lg p-4">
                  <Textarea
                    id="code-editor"
                    placeholder="def linear_regression(X, y, learning_rate=0.01, epochs=1000):
    # Your implementation here
    pass"
                    value={codeAnswer}
                    onChange={(e) => setCodeAnswer(e.target.value)}
                    className="min-h-[300px] font-mono text-sm bg-transparent text-green-400 border-0 resize-none focus:ring-0"
                  />
                </div>
                <p className="text-sm text-gray-600">
                  Hint: Initialize weights, compute predictions, calculate loss, and update weights using gradient descent.
                </p>
              </div>
            )}

            <div className="flex justify-between items-center pt-6 border-t">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <CheckCircle size={16} className="text-green-500" />
                <span>Auto-saved</span>
              </div>
              <Button 
                onClick={handleNext}
                disabled={question.type === "multiple-choice" ? !selectedAnswer : !codeAnswer.trim()}
                className="px-8 py-2 bg-blue-600 hover:bg-blue-700"
              >
                {questionId < questions.length ? "Next Question" : "Finish Assessment"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AssessmentQuestion;
