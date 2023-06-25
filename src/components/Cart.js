import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'


function Cart({ data, setData }) {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState([]);


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

    

    const ShowProducts = () => {
        return (
            <>

                {data.map((product) => {
                    return (
                        <>
                            <div className="cartOne">
                                <div className="" key={product.id}>

                                    <div className="cartTwo">
                                        <div className="imgContainer">
                                            <img src={product.image} alt={product.title}
                                                height='200px'
                                            />
                                        </div>
                                        <div className="bodyContainer">
                                            <h5 className="cartThree">Id -
                                                {product.id}
                                            </h5>

                                            <h5 className="cartThree">UserId -
                                                {product.title}
                                            </h5>

                                            <a href="#" class="button">
                                                Buy Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </>
        );
    };

    const handelGoBack = () => {
        navigate('/', { replace: true })
    }
    return (
        <div className="body">
            <div>
                <div className="">
                    <div className="">
                        <div className="">
                            <h1 className="h1">Cart Products</h1>
                            <button className="button" onClick={handelGoBack}>Back</button>
                            <hr />
                        </div>
                    </div>
                    <div className="">
                        <ShowProducts />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
