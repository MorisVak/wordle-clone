interface WordArrayProps {
  guess: string;
}

const guessLength = 5;

const WordArray = ({ guess }: WordArrayProps) => {
  const tiles = [];

  for (let i = 0; i < guessLength; i++) {
    const char = guess[i];
    tiles.push(
      <div key={i} className="single-boxes">
        {char}
      </div>
    );
  }

  return <div className="char-boxes">{tiles}</div>;
};
export default WordArray;
