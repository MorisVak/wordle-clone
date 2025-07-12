import { useEffect, useState } from "react";

interface KeyboardLineProps {
  line: string[];
  handleNormalKey: (key: string) => void;
  handleBackspace: () => void;
  handleEnter: () => void;
  guesses: string[];
  solution: string;
}

const KeyboardLine = ({
  line,
  handleNormalKey,
  handleBackspace,
  handleEnter,
  guesses,
  solution,
}: KeyboardLineProps) => {
  const [classNames, setClassNames] = useState<string[]>(
    Array(line.length).fill("single-key")
  );
  const [isGreen, setIsGreen] = useState<boolean[]>(
    Array(line.length).fill(false)
  );
  const keys = [];
  useEffect(() => {
    setClassNames((prev) => {
      const oldGreen = [...isGreen]; // you can safely read this once
      const updated = [...prev];
      for (let a = 0; a < line.length; a++) {
        if (line[a] === "Enter" || line[a] === "Backspace") continue;

        if (!oldGreen[a]) {
          for (const guess of guesses) {
            if (!guess || !guess.includes(line[a].toLowerCase())) continue;

            for (let x = 0; x < guess.length; x++) {
              const char = guess[x].toLowerCase();
              if (line[a].toLowerCase() === char) {
                if (char === solution[x]) {
                  oldGreen[a] = true;
                  updated[a] = "single-key key-correct";
                  continue;
                } else if (solution.includes(char) && !oldGreen[a]) {
                  updated[a] = "single-key key-almost";
                  continue;
                } else if (!oldGreen[a]) {
                  updated[a] = "single-key key-no";
                  continue;
                }
              }
            }
          }
        } else {
          continue;
        }
      }
      setIsGreen(oldGreen); // update only once
      return updated;
    });
  }, [guesses, solution, line]);

  for (let i = 0; i < line.length; i++) {
    if (line[i] === "Enter") {
      keys.push(
        <div key={`index-${i}`} className="single-key" onClick={handleEnter}>
          {line[i]}
        </div>
      );
    } else if (line[i] === "Backspace") {
      keys.push(
        <div
          key={`index-${i}`}
          className="single-key"
          onClick={handleBackspace}
        >
          {line[i]}
        </div>
      );
    } else {
      keys.push(
        <div
          key={`index-${i}`}
          className={classNames[i]}
          onClick={() => handleNormalKey(line[i])}
        >
          {line[i]}
        </div>
      );
    }
  }

  return <div className="keyboard-row">{keys}</div>;
};

export default KeyboardLine;
