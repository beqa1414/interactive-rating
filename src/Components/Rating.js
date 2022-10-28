import React from 'react'
import styles from './Rating.module.css'
import star from '../Images/icon-star.svg'



function Rating({selectedNum,setSelectedNum,setIsSelected}) {
  const selectNum = (e) =>{
    setSelectedNum(e.target.innerText)
  }

  const HendleSubmit = () =>{
    setIsSelected(true)
  }
 
  return (
  <div className={styles.card}>
<div className={styles.oval}>
  <div className={styles.star_icon}>
    <img src={star} alt='start_icon'/>
  </div>
</div>
<h1 className={styles.title}>How did we do?</h1>

<p className={styles.text}>Please let us know how we did with your 
support request. All feedback is appreciated 
to help us improve our offering!</p>
<div className={styles.numbers}>
  <span className={`${styles.num_ovals}  ${selectedNum === '1' && styles.num_active}`} onClick={selectNum}>1</span>
  <span className={`${styles.num_ovals}  ${selectedNum === '2' && styles.num_active}`} onClick={selectNum}>2</span>
  <span className={`${styles.num_ovals}  ${selectedNum === '3' && styles.num_active}`} onClick={selectNum}>3</span>
  <span className={`${styles.num_ovals}  ${selectedNum === '4' && styles.num_active}`} onClick={selectNum}>4</span>
  <span className={`${styles.num_ovals}  ${selectedNum === '5' && styles.num_active}`} onClick={selectNum}>5</span>
</div>
<button className={styles.submit} onClick={HendleSubmit}>SUBMIT</button>
  </div>
  )
}

export default Rating