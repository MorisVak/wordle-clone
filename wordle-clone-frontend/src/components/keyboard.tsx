import KeyboardLine from "./keyboardLine";

interface KeyboardProps {
  handleNormalKey: (key: string) => void;
  handleBackspace: () => void;
  handleEnter: () => void;
  guesses: string[];
  wordOfTheDay: string;
}

const keys: string[][] = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Backspace"],
];

const Keyboard = ({
  handleEnter,
  handleBackspace,
  handleNormalKey,
  guesses,
  wordOfTheDay,
}: KeyboardProps) => {
  return (
    <div>
      {keys.map((line, index) => (
        <KeyboardLine
          key={index}
          line={line}
          handleNormalKey={handleNormalKey}
          handleBackspace={handleBackspace}
          handleEnter={handleEnter}
          guesses={guesses}
          solution={wordOfTheDay}
        />
      ))}
    </div>
  );
};

export default Keyboard;
