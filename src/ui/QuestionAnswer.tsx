import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { keyframes } from "@mui/system";
import { Answer } from "../business/question";

const shakeAnimation = keyframes`
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-10px); }
  40% { transform: translateX(10px); }
  60% { transform: translateX(-10px); }
  80% { transform: translateX(10px); }
`;

const jumpAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
`;

interface QuestionAnswerProps {
  answers: Answer[];
  selectedAnswer: string | null;
  isAnswerChecked: boolean;
  isCorrect: boolean;
  onAnswerChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const QuestionAnswer: React.FC<QuestionAnswerProps> = ({
  answers,
  selectedAnswer,
  isAnswerChecked,
  isCorrect,
  onAnswerChange,
}) => {
  return (
    <FormControl component="fieldset">
      <RadioGroup
        value={selectedAnswer}
        onChange={onAnswerChange}
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {answers.map((answer, index) => (
          <FormControlLabel
            key={index}
            value={answer.text}
            control={<Radio />}
            label={
              <Typography variant="body1" fontWeight={500}>
                {answer.text}
              </Typography>
            }
            sx={{
              animation: isAnswerChecked
                ? isCorrect && answer.text === selectedAnswer
                  ? `${jumpAnimation} 0.5s ease-in-out`
                  : !isCorrect
                  ? `${shakeAnimation} 0.5s ease-in-out`
                  : "none"
                : "none",
              color: isAnswerChecked
                ? answer.text === selectedAnswer
                  ? isCorrect
                    ? "success.main"
                    : "error.main"
                  : "text.primary"
                : "text.primary",
              "& .MuiRadio-root": {
                color: isAnswerChecked
                  ? answer.text === selectedAnswer
                    ? isCorrect
                      ? "success.main"
                      : "error.main"
                    : "primary.main"
                  : "primary.main",
              },
              "& .MuiTypography-root": {
                color: isAnswerChecked
                  ? answer.text === selectedAnswer
                    ? isCorrect
                      ? "success.main"
                      : "error.main"
                    : "text.primary"
                  : "text.primary",
              },
            }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
