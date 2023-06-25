import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import Currency from "./Currency";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Star from "./Star";



function Product({ cartData, setCartData }) {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  // const stars=product.rating


  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handelClick = (product) => {
    setCartData([...cartData, product])

   
  };
  console.log(product);
  const handelGoBack = () => {
    navigate('/product', { replace: true })
  }

//  const reactStars=()=>{
//   <ReactStars
//   size={30}
//   isHalf={true}
//   value={product.rating}
// /> }


  const ShowProduct = () => {
    return (
      <div className="productOne">

        <div className="app">
          <div className="imgContainer">
            <TransformWrapper defaultScale={1} defaultPositionX={100} defaultPositionY={200}>
              <TransformComponent>
            <img src={product.image} alt={product.title}
              height='400px' width='400px'
            />
            </TransformComponent>
            </TransformWrapper>
          </div>
        </div>
        <div className="productBox" >
          <h4 className="category">
            {product.category}
          </h4>
          <h1 className="">{product.title}</h1>
          <p className="">
            Rating {product.rating && product.rating.rate}
            <i className=""></i>
          </p>
          <b className="price">
            {/* ${product.convertToRupees()} */}
            <Currency /> 
          </b>
          {/* <div onChange={reactStars()}> */}
          
          {/* </div> */}
          <div className="ratingValue">
           <Star stars={product.rating && product.rating.rate} />
           </div>
           {/* <ReactStars
             size={30}
            isHalf={true}
           />  */}
          
          {/* <StarRating rating={rating} /> */}
         
          <p className="description">{product.description}</p>
          <button className="button">
            Buy Now
          </button>
          <Link to="#" className="button button1" onClick={() => {
            handelClick(product)
          }}>
            Add to Cart
          </Link>
        </div>
      </div>
    )

  }

  return (
    <div className="body">
      <div className="productTwo">
        <div className="">
          <h1 className=""></h1>
          <button className="button" onClick={handelGoBack}>Back</button>
          <hr />
        </div>
        <div className="">
          <ShowProduct />

        </div>
      </div>
      {/* <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide><img src='assets/bg1.jpg' alt='shopping' style={{ width: '100%' }} /></SwiperSlide>
        <SwiperSlide><img src='assets/home.jpg' alt='shopping' style={{ width: '100%' }} /></SwiperSlide>
        <SwiperSlide><img src='assets/product.jpg' alt='shopping' style={{ width: '100%' }} /></SwiperSlide>
        <SwiperSlide><img src='assets/bg1.jpg' alt='shopping' style={{ width: '100%' }} /></SwiperSlide>
        
      </Swiper> */}
    </div>
  );
}

export default Product;