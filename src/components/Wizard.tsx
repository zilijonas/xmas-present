import { Box, keyframes } from "@mui/material";
import { useMemo } from "react";
import alfa from "../assets/images/alfa.jpeg";
import darkSanta from "../assets/images/dark-santa.png";
import dovana from "../assets/images/dovana.png";
import elfDead from "../assets/images/elf-dead.png";
import elfLove from "../assets/images/elf-love.png";
import elfPrank from "../assets/images/elf-prank.png";
import garry from "../assets/images/garry.jpeg";
import maybach from "../assets/images/maybach.jpeg";
import whore from "../assets/images/whore.jpeg";
import zirniai from "../assets/images/zirniai.png";
import { useWizard } from "../core/wizard-context";
import { useSongPlayer } from "../hooks/useSongPlayer";
import { useSoundPlayer } from "../hooks/useSoundPlayer";
import questions from "../questions.json";
import { Step, StepProps } from "../ui/Step";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Wizard = () => {
  const { changeSong } = useSongPlayer();
  const { playSound } = useSoundPlayer();
  const steps: StepProps[] = useMemo(
    () => [
      {
        title: "Pradedam?",
        description:
          "Gali pradėt tiek per kompą, tiek per planšetę, tiek per trupkę - nesiparinam vpš, chill. Tik pasigarsink įrenginį, nes čia ir garselių visokių bus.",
        buttonText: "Paliubomu",
        onClick: async () => {
          playSound("lesgo");
          await new Promise((resolve) => setTimeout(resolve, 7000));
          changeSong("xmas-lofi");
        },
      },
      {
        title: "Labas, Silvija! Su šv. Kalėdom!",
        description:
          "Patekai į Kalėdinę viktoriną! Bet nors ji ir kalėdinė, pusė klausimų - vapšė randominiai, tad nepasimesk. O atsakius į visus klausimus teisingai sužinosi, kokia gi dovana tavęs laukia! P.S. Ar girdėjai lesgo? O melodiją, kuri dabar groja? Jei ne, tai tada gal kitą įrenginį įsijunk...",
        imageSrc: darkSanta,
        buttonText: "Nu bandom",
      },
      {
        title: questions[0].question,
        answers: questions[0].answers,
        imageSrc: whore,
        buttonText: "Facs",
      },
      {
        title: questions[1].question,
        answers: questions[1].answers,
        imageSrc: zirniai,
        buttonText: "Gal kažką normaliai?",
      },
      {
        title: questions[2].question,
        answers: questions[2].answers,
        imageSrc: maybach,
        buttonText: "Važiuojam, Džesika",
      },
      {
        title: questions[3].question,
        description: questions[3].description,
        answers: questions[3].answers,
        imageSrc: elfDead,
        buttonText: "Niaukiam pirmyn",
      },
      {
        title: questions[4].question,
        answers: questions[4].answers,
        imageSrc: elfPrank,
        buttonText: "Davai zūlinam",
      },
      {
        title: questions[5].question,
        answers: questions[5].answers,
        imageSrc: garry,
        buttonText: "Tik į priekį, voveruškos",
      },
      {
        title: questions[6].question,
        answers: questions[6].answers,
        imageSrc: elfLove,
        buttonText: "Nu vsio",
      },
      {
        title: "Sveikinimai! Įveikei viktoriną kaip tikra alfa!",
        description:
          "Na ką gi, dabar jau galiu drąsiai sakyt - tikrai nusipelnei žinoti kokia dovana tavęs laukia.",
        imageSrc: alfa,
        buttonText: "Žiūrom",
        onClick: async () => {
          changeSong("potter");
          await new Promise((resolve) => setTimeout(resolve, 10000));
        },
      },
      {
        title: "Expecto Belenka, ane?- onum!",
        description:
          "Vasario 11 dieną (19val Compensoj) Tavęs laukia simfoninio orkestro atliekamas Hogwartso natų muzikinis vakaras. Turi net du bilietus - pas ką juos atsiimti - puikiai žinai, o su kuo norėsi eiti - čia jau Tavo reikalas (bet neabejoju, jog rauki, kas tikrai nori kartu ;)).",
        imageSrc: dovana,
        buttonText: "Bonusiux - Lino giesmė xd (prašau nerodyk niekam)",
        onClick: () => {
          changeSong("sweet-child");
        },
      },
    ],
    [playSound, changeSong]
  );

  const { activeStep } = useWizard();

  return (
    <>
      {steps.map((step, index) => (
        <Box
          key={index}
          alignSelf="center"
          justifyContent="center"
          sx={{
            display: activeStep === index ? "flex" : "none",
            animation:
              activeStep === index ? `${fadeIn} 0.3s ease-in-out` : "none",
            position: "relative",
          }}
        >
          <Step {...step} />
        </Box>
      ))}
    </>
  );
};
