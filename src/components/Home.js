import React from 'react'
import Products from './Products'
import { Link, useNavigate } from 'react-router-dom'


function Home() {
    return (
        <div className="body">
            <div className='hero'>
                <div className='img'>
                </div>
                <div className="containerOne">
                    <div className='box'>
                        <h5>NEW SEASON ARRIVALS</h5>
                        <p>CHECK OUT ALL THE TRENDS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
