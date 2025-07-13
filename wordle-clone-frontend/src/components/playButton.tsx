interface PlayButtonProps {
  handleClick: () => void;
}

const PlayButton = ({ handleClick }: PlayButtonProps) => {
  return (
    <div>
      <button onClick={handleClick}>Play</button>
    </div>
  );
};

export default PlayButton;
