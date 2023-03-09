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

  const handleSubmit = () => {
    setIsSelected(true);
  };
  return (
    <div className="App">
      {!selected && (
        <Rating
          selectedNum={selectedNum}
          selectNum={selectNum}
          // setIsSelected={setIsSelected}
          handleSubmit={handleSubmit}
          // mainTitle={mainTitle.title}
          title={"How did we do?"}
          text="Please let us know how we did with your support request. All feedback is
          appreciated to help us improve our offering!"
        />
      )}

      {selected && <RatingSubmit selectedNum={selectedNum} />}
    </div>
  );
}

export default App;
