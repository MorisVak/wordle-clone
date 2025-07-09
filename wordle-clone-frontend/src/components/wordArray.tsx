import "../styles.css";
import { useEffect, useState } from "react";

interface WordArrayProps {
  guess: string;
  filledLine: boolean;
  wordOfTheDay: string;
}

const guessLength = 5;

const WordArray = ({ guess, filledLine, wordOfTheDay }: WordArrayProps) => {
  const [classNames, setClassNames] = useState<string[]>(
    Array(guessLength).fill("single-boxes")
  );
  const tiles = [];

  useEffect(() => {
    if (filledLine) {
      for (let i = 0; i < guessLength; i++) {
        const char = guess[i];
        setTimeout(() => {
          setClassNames((prev) => {
            const updated = [...prev];
            if (char === wordOfTheDay[i]) {
              updated[i] = "single-boxes correct flip";
            } else if (wordOfTheDay.includes(char)) {
              updated[i] = "single-boxes almost flip";
            } else {
              updated[i] = "single-boxes no flip";
            }
            return updated;
          });
        }, i * 300);
      }
    }
  }, [guess, filledLine, wordOfTheDay]);

  for (let i = 0; i < guessLength; i++) {
    const char = guess[i];
    tiles.push(
      <div key={i} className={classNames[i]}>
        {char}
      </div>
    );
  }

  return <div className="char-boxes">{tiles}</div>;
};
export default WordArray;
