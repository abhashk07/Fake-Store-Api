import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
// import Pagination from "./Pagination";

function Products({ data, setData }) {
  const [filter, setFilter] = useState(data);
  
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;
  const [recodes, setRecodes] = useState([]);

  
  
  const npage = Math.ceil(data.length / recordsPerPage);
  const number=[...Array(npage+1).keys()].slice(1)


  useEffect(() => {
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const recodes = data.slice(firstIndex, lastIndex);
    setRecodes(recodes);
  }, [currentPage, data])




  const filterProduct = (cat) => {
    console.log(cat);
    const updateList = data.filter((x) => x.category === cat);
    setRecodes(updateList)
  };

  const ShowBtn = () => {
    return (
      <div className="homeBtn">
        <button className="button hbtn1" onClick={() => setFilter(data)}>
          ALL
        </button>
        <button
          className="button"
          onClick={() => filterProduct("men's clothing")}
        >
          Men's Clothing
        </button>
        <button
          className="button"
          onClick={() => filterProduct("women's clothing")}
        >
          Women's Clothing
        </button>
        <button
          className="button"
          onClick={() => filterProduct("jewelery")}
        >
          Jewelery
        </button>
        <button
          className="button"
          onClick={() => filterProduct("electronics")}
        >
          Electronics
        </button>
      </div>
    )
  }

  const ShowProducts = () => {
    return (
      <>
        {recodes.map((product) => (
          <>
            <div className="productBody">
              <div className="boxTwo" key={product.id}>
                <img
                  src={product.image}
                  alt={product.title} />
                <div className="boxThree">
                  <div className="button2">
                    <h5>
                      {product.title.substring(0, 12)}...
                    </h5>
                    <p>${product.price}</p>
                  </div>
                  <Link to={`/products/${product.id}`}

                    class="button button1 button2">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </>
        ))}
      </>
    );
  };
  const handelGoBack = () => {
    navigate('/', { replace: true })
  }
  return (
    <div className="body">
      <div className="">
        <div className="">
          <div className="">
            <h1 className="h1">Latest Products</h1>
            <button className="button" onClick={handelGoBack}>Back</button>
          </div>
        </div>
        <div className="productBody2">
          <h1>New Season Arrivals</h1>
        </div>
        <div className="homeBtn">
          <ShowBtn />
        </div>
        <div className="boxOne">
          <ShowProducts />
        </div>
      </div>
    {/* <Pagination /> */}
      {/* Pagination IMP Part-1 */}
       <nav>
        <ul className="pagination">
          <li className="page-item">
            <a href='#' className="page-link" onClick={prePage}>Prev</a>
          </li>
          {
            number.map((n, i) => {
              <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                <a href='#' className="page-item" onClick={() => changeCurrentPage(n)} >{n}</a>
              </li>
            })
          }
          <li className="page-item">
            <a href='#' className="page-link" onClick={nextPage}>Next</a>
          </li>
        </ul>
      </nav> 
    </div>
  );


//  Pagination Part-2
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  function changeCurrentPage(id) {
    setCurrentPage(id)
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1)
    }
  }
}

export default Products;
