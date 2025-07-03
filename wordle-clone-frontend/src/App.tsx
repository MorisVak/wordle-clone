import { useEffect, useState } from "react";
import WordArray from "./components/wordArray";
import "./App.css";

function App() {
  const [wordArrays, setWordArrays] = useState<string[][]>(() =>
    Array.from({ length: 6 }, () => Array(5).fill(""))
  );
  const [arraysFilledBoolean, setArraysFilledBoolean] = useState<boolean[]>(
    Array(6).fill(false)
  );
  const [wordOfTheDay, setWordOfTheDay] = useState<string>("crawl");
  const [allAttempsUsed, setAllAttempsUsed] = useState<boolean>(false);
  const [guess, setGuess] = useState<string>("");

  const handleEnter = () => {
    const currentArray = arraysFilledBoolean.map((val) => val);
    currentArray.forEach((val) => {
      if (!val) {
        val = true;
      }
    });
    setArraysFilledBoolean(currentArray);
  };

  const handleBackspace = () => {
    if (guess.length > 0) {
      setGuess((actualGuess) => {
        const update = actualGuess.slice(0, -1);
        console.log("after removing", update);
        return update;
      });
    }
  };

  const handleNormalLetter = (key: string) => {
    if (guess.length < 5)
      setGuess((prevGuess) => {
        if (prevGuess.length < 5) {
          const update = prevGuess + key;
          console.log("UPDATED", update);
          handleFillingArray(update);
          return update;
        } else {
          return prevGuess;
        }
      });
  };

  const handleFillingArray = (newGuess: string) => {
    const currentIndex = arraysFilledBoolean.indexOf(false);
    console.log("INDEX : ", currentIndex);
    console.log("NEW GUESS : ", newGuess);

    const mutatedArray = [...wordArrays];
    for (let i = 0; i < guess.length; i++) {
      mutatedArray[currentIndex][i] = newGuess[i];
    }
    console.log(mutatedArray);

    setWordArrays(mutatedArray);
  };

  const handleTyping = (event: KeyboardEvent) => {
    const key = event.key;
    console.log("USED KEY : ", key);

    if (key === "Backspace") {
      handleBackspace();
    } else if (key === "Enter" && guess.length === 5) {
      handleEnter();
    } else if (/^[a-z]$/.test(key)) {
      handleNormalLetter(key);
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", handleTyping);

    return () => window.removeEventListener("keyup", handleTyping);
  }, []);

  return (
    <>
      <div>
        {wordArrays.map((val, index) => (
          <WordArray key={index} wordArray={val} />
        ))}
      </div>
    </>
  );
}

export default App;
