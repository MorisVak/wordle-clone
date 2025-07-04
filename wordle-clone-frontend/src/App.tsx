import { useEffect, useState } from "react";
import WordArray from "./components/wordArray";
import "./styles.css";

const wordOfTheDay = "crawl";

function App() {
  const [guesses, setGuesses] = useState<string[]>(Array(6).fill(null));
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [currentGuess, setCurrentGuess] = useState<string>("");

  const handleTyping = (event: KeyboardEvent) => {
    if (gameOver) {
      return;
    }
    const key = event.key;
    if (key === "Enter") {
      if (currentGuess.length !== 5) {
        return;
      }
      //get index of current playing position
      const currentAttemptIndex = guesses.findIndex((val) => val == null);
      //checking if result is correct
      const correctGuess = currentGuess.toLocaleLowerCase() === wordOfTheDay;
      const newWordArray = [...guesses];
      newWordArray[currentAttemptIndex] = currentGuess;

      if (currentAttemptIndex === 5) {
        setGameOver(true);
      }

      if (correctGuess) {
        setGameOver(true);
      }
      setGuesses(newWordArray);
      setCurrentGuess("");
    }

    if (key === "Backspace") {
      if (currentGuess.length === 0) {
        return;
      }
      setCurrentGuess(currentGuess.slice(0, -1));
      return;
    }

    if (currentGuess.length >= 5) {
      return;
    }

    setCurrentGuess((oldGuess) => oldGuess + key);
  };

  useEffect(() => {
    window.addEventListener("keyup", handleTyping);

    return () => window.removeEventListener("keyup", handleTyping);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentGuess]);

  return (
    <>
      <div className="board">
        {guesses.map((val, index) => {
          const isCurrentGuess =
            index === guesses.findIndex((val) => val == null);
          return (
            <WordArray
              key={index}
              guess={isCurrentGuess ? currentGuess : val ?? ""}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
