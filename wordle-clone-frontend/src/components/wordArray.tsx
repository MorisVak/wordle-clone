import SingleChar from "./singleChar";

interface WordArrayProps {
  wordArray: string[];
}

const WordArray = ({ wordArray }: WordArrayProps) => {
  return (
    <div className="char-boxes">
      {wordArray.map((val, ind) => (
        <SingleChar key={ind} singleChar={val} />
      ))}
    </div>
  );
};
export default WordArray;
