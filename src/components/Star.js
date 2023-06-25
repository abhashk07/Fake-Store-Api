// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from 'react-router-dom'

// const Star = ({stars} ) => {
//     const { id } = useParams();
//   const [product, setProduct] = useState([]);


//   const starTotal = 5;
//   const fullStar = '\u2605';
//   const halfStar= "☆";
//   const emptyStar = '\u2606';
//   const starsArr = [];
//   const x=stars;
//   const y=Math.floor(x);
//   const c=x-y;
//   for (let i = 0; i < y; i++) {
     
//       starsArr.push(<span key={i} className="star">{fullStar}</span>);
//     } 
  

//   return( <div className="star-rating"><div>{starsArr.map((st,i)=>(
//     <span>{st}</span>
//   ))}{c!==0 ?<span> {halfStar}</span>:""}</div></div>
//   )
// };

// export default Star;

import React from 'react'
import ReactStars from 'react-rating-stars-component';

function Star({stars}) {
  return (
    <div className='ratingContainer'>
      <ReactStars
      count={5}
      value={stars}
      size={24}
      isHalf={true}
      color1={'#ffd700'}
      color2={'#c5c5c5'}
      classNames='costomStars'
      edit={false}></ReactStars>
      {/* <p>{stars}</p> */}
    </div>
  )
}

export default Star
