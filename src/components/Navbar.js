import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";



function Navbar({ data, setData }) {
    const [searchTerm, setSearchTerm] = useState("");

    const filterProduct = (e) => {
        const updateList = data.filter((item) => {
            return item.title.toLowerCase().includes(searchTerm.toLowerCase());
        });

        setData(updateList)
    };

    useEffect(() => {
        filterProduct();
    }, [searchTerm])

    return (
        <div>
            <div className='top'>
                <p>fake.store@gmail.com</p>
                <p>+65 11 188 888</p>
            </div>
            <div className='nextTop'>
                <h1>Fake Store</h1>

                <div className='searchBar'>
                    <input type='text' name='text' placeholder='Search....' onChange={(e) => {

                        setSearchTerm(e.target.value)
                    }} />
                </div>
            </div>

            <nav>
                <div className='navBar'>

                    <div className='center'>
                        <Link className='link' to="/">Home</Link>
                        <Link className='link' to="/product">Product</Link>
                        <Link className='link' to="/contact">Contact </Link>
                        <Link className='link' to="/addProduct">Add Product </Link>
                    </div>
                    <div className='right'>
                        <Link to="/loginpage"><button>LogIn</button></Link>
                        <Link to="/register"><button>Register</button></Link>
                        <Link to="/cart"><button>Cart</button></Link>
                    </div>

                </div>
            </nav>

        </div>
    )
}

export default Navbar;
