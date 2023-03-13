import { useState } from "react";
import "./App.css";
import Rating from "./Components/Rating";
import RatingSubmit from "./Components/RatingSubmit";
import star from "./Images/icon-star.svg";
import img_mobile from "./Images/illustration-thank-you.svg";

function App() {
  const [selectedNum, setSelectNum] = useState(null);
  const [selected, setIsSelected] = useState(false);

  const selectNum = (e) => {
    setSelectNum(e.target.value);
  };

  const handleSubmit = (selecte) => {
    setIsSelected(selecte);
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
          star={star}
        />
      )}

      {selected && (
        <RatingSubmit
          selectedNum={selectedNum}
          title="Thank you!"
          text="We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!"
          img_mobile={img_mobile}
        />
      )}
    </div>
  );
}

export default App;
