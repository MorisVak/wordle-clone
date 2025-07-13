import PlayButton from "./playButton";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/playingField");
  };
  return (
    <div className="info-container">
      <header>WORDLE CLONE</header>
      <p className="info-text">Get 6 chances to guess a 5-letter word.</p>
      <PlayButton handleClick={handleNavigation} />
      <p>Clone created by Maurice Mecke</p>
    </div>
  );
};

export default Info;
