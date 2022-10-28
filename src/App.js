import { useState } from 'react';
import './App.css';
import Rating from './Components/Rating'
import RatingSubmit from './Components/RatingSubmit';


function App() {
  const [selectedNum,setSelectNum] = useState(null)
  const [selected,setIsSelected] = useState(false)
  return (
   
    <div className="App">
       {!selected && (
      <Rating
      selectedNum={selectedNum}
      setSelectedNum={setSelectNum}
      setIsSelected={setIsSelected}
      
    /> )}

{selected && <RatingSubmit selectedNum={selectedNum}/>}
     

    </div>
    
  
  );
}

export default App;
