interface KeyboardLineProps {
  line: string[];
  handleNormalKey: (key: string) => void;
  handleBackspace: () => void;
  handleEnter: () => void;
}

const KeyboardLine = ({
  line,
  handleNormalKey,
  handleBackspace,
  handleEnter,
}: KeyboardLineProps) => {
  const keys = [];

  for (let i = 0; i < line.length; i++) {
    if (line[i] === "Enter") {
      keys.push(
        <div className="single-key" onClick={handleEnter}>
          {line[i]}
        </div>
      );
    } else if (line[i] === "Backspace") {
      keys.push(
        <div className="single-key" onClick={handleBackspace}>
          {line[i]}
        </div>
      );
    } else {
      keys.push(
        <div className="single-key" onClick={() => handleNormalKey(line[i])}>
          {line[i]}
        </div>
      );
    }
  }

  return <div className="keyboard-row">{keys}</div>;
};

export default KeyboardLine;
