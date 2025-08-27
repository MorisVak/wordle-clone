import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PlayingField from "./pages/playingField";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playingField" element={<PlayingField />} />
      </Routes>
    </Router>
  );
};

export default App;
