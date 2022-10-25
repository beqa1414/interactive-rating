import React from 'react';
import styles from  '../Components/RatingSubmit.module.css'
import img_mobile from '../Images/illustration-thank-you.svg'


const RatingSubmit = ({selectedNum}) => {



    return (
        <div className={styles.submitted}>
           <div className={styles.img_icon}>
            <img src={img_mobile} />
           </div>
           <div className={styles.selected}>You selected {selectedNum} out of 5
           </div>
           <h1 className={styles.thanks}>Thank you!</h1>
           <p className={styles.text}>
            {" "}
           We appreciate you taking the time to give a rating. If you ever need
           more support, don’t hesitate to get in touch! {" "}
           </p>
        </div>
    );
}

export default RatingSubmit;
