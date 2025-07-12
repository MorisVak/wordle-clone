import { useEffect, useState } from "react";
import WordArray from "./components/wordArray";
import "./styles.css";
import Keyboard from "./components/keyboard";

const solution = "crawl";

function App() {
  const [guesses, setGuesses] = useState<string[]>(Array(6).fill(null));
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [currentGuess, setCurrentGuess] = useState<string>("");

  useEffect(() => {
    const handleTyping = (event: KeyboardEvent) => {
      const key = event.key;
      if (key === "Enter") {
        handleEnter();
      }

      if (key === "Backspace") {
        handleBackspace();
      }
      if (/^[a-z]$/.test(key.toLocaleLowerCase())) {
        handleNormalKey(key);
      }
    };
    window.addEventListener("keyup", handleTyping);

    return () => window.removeEventListener("keyup", handleTyping);
  }, [currentGuess, gameOver, guesses]);

  const handleEnter = () => {
    if (currentGuess.length !== 5 || gameOver) {
      return;
    }
    //get index of current playing position
    const currentAttemptIndex = guesses.findIndex((val) => val == null);
    //checking if result is correct
    const correctGuess = currentGuess.toLocaleLowerCase() === solution;
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
  };

  const handleBackspace = () => {
    if (currentGuess.length === 0 || gameOver) {
      return;
    }
    setCurrentGuess(currentGuess.slice(0, -1));
    return;
  };

  const handleNormalKey = (key: string) => {
    if (currentGuess.length >= 5 || gameOver) {
      return;
    }
    setCurrentGuess((oldGuess) => oldGuess + key);
  };

  return (
    <>
      <header>Wordle Clone</header>
      <div className="board">
        {guesses.map((val, index) => {
          const isCurrentGuess =
            index === guesses.findIndex((val) => val == null);
          return (
            <WordArray
              key={index}
              guess={isCurrentGuess ? currentGuess : val ?? ""}
              filledLine={!isCurrentGuess && val != null}
              wordOfTheDay={solution}
            />
          );
        })}
        <div className="keyboard">
          <Keyboard
            handleBackspace={handleBackspace}
            handleEnter={handleEnter}
            handleNormalKey={handleNormalKey}
            guesses={guesses}
            wordOfTheDay={solution}
          />
        </div>
      </div>
    </>
  );
}

export default App;
