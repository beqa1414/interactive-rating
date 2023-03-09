import { useState } from "react";
import "./App.css";
import Rating from "./Components/Rating";
import RatingSubmit from "./Components/RatingSubmit";

function App() {
  const [selectedNum, setSelectNum] = useState(null);
  const [selected, setIsSelected] = useState(false);

  const selectNum = (e) => {
    setSelectNum(e.target.innerText);
  };
  return (
    <div className="App">
      {!selected && (
        <Rating
          selectedNum={selectedNum}
          selectNum={selectNum}
          setIsSelected={setIsSelected}
        />
      )}

      {selected && <RatingSubmit selectedNum={selectedNum} />}
    </div>
  );
}

export default App;
