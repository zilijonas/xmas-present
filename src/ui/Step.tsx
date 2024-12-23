import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Answer } from "../business/question";
import { useWizard } from "../core/wizard-context";
import { useSoundPlayer } from "../hooks/useSoundPlayer";
import { QuestionAnswer } from "./QuestionAnswer";

export interface StepProps {
  title: string;
  description?: string;
  imageSrc?: string;
  buttonText: string;
  answers?: Answer[];
  question?: string;
  onClick?: () => void | Promise<void>;
}

export const Step: React.FC<StepProps> = ({
  title,
  description,
  buttonText,
  imageSrc,
  answers,
  question,
  onClick,
}) => {
  const { playSound } = useSoundPlayer();
  const { activeStep, next, prev } = useWizard();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, [activeStep]);

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(event.target.value);
    setIsAnswerChecked(false);
  };

  const handleNext = () => {
    if (!answers) {
      next();
      setIsLoading(false);
      return;
    }

    if (!selectedAnswer) return;

    const selectedAnswerObj = answers.find((a) => a.text === selectedAnswer);
    if (!selectedAnswerObj) return;

    setIsAnswerChecked(true);
    setIsCorrect(selectedAnswerObj.correct);

    if (selectedAnswerObj.correct) {
      playSound("correct");
      setIsLoading(true);
      setTimeout(() => {
        next();
        setSelectedAnswer(null);
        setIsAnswerChecked(false);
        setIsLoading(false);
      }, 1000);
    } else {
      playSound("incorrect");
      setIsLoading(false);
    }
  };

  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap={4}
      m={2}
      p={{ xs: 2, md: 6 }}
      maxWidth={{ xs: "100%", md: "60%" }}
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: 2,
      }}
    >
      {imageSrc && (
        <Box
          component="img"
          src={imageSrc}
          alt={title}
          loading="lazy"
          sx={{
            maxWidth: "100%",
            height: "auto",
            maxHeight: 300,
            borderRadius: 2,
          }}
        />
      )}

      <Typography variant="h3" align="center" fontWeight={500} px={4}>
        {question || title}
      </Typography>

      {!!description && (
        <Typography variant="body1" align="center" px={4}>
          {description}
        </Typography>
      )}

      {answers && answers.length > 0 && (
        <QuestionAnswer
          answers={answers}
          selectedAnswer={selectedAnswer}
          isAnswerChecked={isAnswerChecked}
          isCorrect={isCorrect}
          onAnswerChange={handleAnswerChange}
        />
      )}

      <Stack gap={1}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNextClick}
          size="large"
          disabled={
            (answers && answers.length > 0 && !selectedAnswer) || isLoading
          }
        >
          <Box sx={{ position: "relative" }}>
            {isLoading && (
              <CircularProgress
                size={24}
                color="inherit"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  marginTop: "-12px",
                  marginLeft: "-12px",
                }}
              />
            )}
            <span style={{ visibility: isLoading ? "hidden" : "visible" }}>
              {buttonText}
            </span>
          </Box>
        </Button>
        {activeStep > 0 && (
          <Button variant="text" color="primary" onClick={prev} size="large">
            Atgal
          </Button>
        )}
      </Stack>
    </Stack>
  );

  async function handleNextClick() {
    setIsLoading(true);
    if (onClick) {
      try {
        await onClick();
      } finally {
        handleNext();
      }
    } else {
      handleNext();
    }
  }
};
