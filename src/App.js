import { useState } from 'react';
import './App.css';
import Rating from './Components/Rating'
import RatingSubmit from './Components/RatingSubmit';


function App() {
  const [nums,setNums] = useState([1,2,3,4,5])
  const [selectedNum,setSelectNum] = useState(null)
  const [selected,setIsSelected] = useState(false)
  return (
   
    <div className="App">
       {!selected && (
      <Rating
      nums={nums}
      setNums={setNums}
      selectedNum={selectedNum}
      setSelectedNum={setSelectNum}
      setIsSelected={setIsSelected}
      
    /> )}

{selected && <RatingSubmit selectedNum={selectedNum}/>}
     

    </div>
    
  
  );
}

export default App;
