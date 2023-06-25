import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AddProductForm from "./AddProductForm";

function Register() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/users/`)
      .then((res) => {
        setData(res?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const ShowProducts = () => {
    return (
      <>
        {data.map((register) => {
          return (
            <>
              <div className="one">
                <div className="two" key={register.id}>
                  <div className="three">
                    <h5 className="four">Id -{register.id}</h5>

                    <h5 className="four">Email -{register.email}</h5>

                    <h5 className="four">UserName -{register.username}</h5>

                    <h5 className="four">Password -{register.password}</h5>

                    <h5 className="four">Phone -{register.phone}</h5>
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
    navigate("/", { replace: true });
  };
  return (
    <div className="body">
      <div>
        <div className="">
          <div className="">
            <div className="">
              <h1 className="h1">Cart Products</h1>
              <button className="button" onClick={handelGoBack}>
                Back
              </button>
              <hr />
            </div>
          </div>
          <div className="">
            <ShowProducts />
            <div>
              <h1>Add Product</h1>
              <AddProductForm />
              {/* ...other components */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
