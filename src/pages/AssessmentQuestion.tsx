
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Star, Code, ArrowRight } from "lucide-react";

const AssessmentQuestion = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState("");
  
  const questionNumber = parseInt(id || "1");
  const totalQuestions = 5;
  const progress = (questionNumber / totalQuestions) * 100;

  // Demo questions
  const questions = [
    {
      id: 1,
      type: "mcq",
      question: "What is the primary purpose of a neural network's activation function?",
      options: [
        "To initialize weights randomly",
        "To introduce non-linearity into the model",
        "To reduce overfitting",
        "To normalize input data"
      ]
    },
    {
      id: 2,
      type: "coding",
      question: "Complete the Python function to calculate the sigmoid activation:",
      code: `import numpy as np

def sigmoid(x):
    # Your code here
    return ___`,
      options: [
        "1 / (1 + np.exp(-x))",
        "np.tanh(x)",
        "max(0, x)",
        "x / (1 + abs(x))"
      ]
    },
    {
      id: 3,
      type: "mcq",
      question: "Which of the following best describes 'overfitting' in machine learning?",
      options: [
        "Model performs well on training data but poorly on test data",
        "Model performs poorly on both training and test data",
        "Model takes too long to train",
        "Model uses too much memory"
      ]
    },
    {
      id: 4,
      type: "coding",
      question: "What would be the output shape after this convolution operation?",
      code: `# Input tensor: (batch_size=32, channels=3, height=224, width=224)
# Convolution: kernel_size=3, stride=1, padding=1, out_channels=64

conv_output_shape = ___`,
      options: [
        "(32, 64, 224, 224)",
        "(32, 64, 222, 222)",
        "(32, 3, 224, 224)",
        "(32, 64, 226, 226)"
      ]
    },
    {
      id: 5,
      type: "mcq",
      question: "What is the main advantage of using attention mechanisms in neural networks?",
      options: [
        "Faster training time",
        "Ability to focus on relevant parts of input",
        "Reduced memory usage",
        "Better gradient flow"
      ]
    }
  ];

  const currentQuestion = questions[questionNumber - 1];

  const handleNext = () => {
    if (questionNumber < totalQuestions) {
      navigate(`/assess/qs/${questionNumber + 1}`);
    } else {
      navigate("/assess/results");
    }
  };

  return (
    <div className="min-h-screen bg-background star-pattern flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="h-6 w-6 text-primary fill-primary" />
            <h1 className="text-2xl font-bold text-foreground">AI Assessment</h1>
          </div>
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
            <span>Question {questionNumber} of {totalQuestions}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="bg-card/80 backdrop-blur-sm border-border shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              {currentQuestion.type === "coding" ? (
                <Code className="h-5 w-5 text-primary" />
              ) : (
                <Star className="h-5 w-5 text-primary fill-primary" />
              )}
              {currentQuestion.question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {currentQuestion.type === "coding" && (
              <div className="bg-secondary/50 rounded-lg p-4 font-mono text-sm border border-border">
                <pre className="text-foreground whitespace-pre-wrap">{currentQuestion.code}</pre>
              </div>
            )}
            
            <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
              {currentQuestion.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label 
                    htmlFor={`option-${index}`} 
                    className="flex-1 cursor-pointer text-foreground"
                  >
                    {currentQuestion.type === "coding" ? (
                      <code className="bg-secondary/30 px-2 py-1 rounded text-sm">{option}</code>
                    ) : (
                      option
                    )}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="flex justify-end pt-4">
              <Button 
                onClick={handleNext}
                disabled={!selectedAnswer}
                className="bg-gradient-primary hover:opacity-90 text-white"
              >
                {questionNumber < totalQuestions ? "Next Question" : "View Results"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AssessmentQuestion;
