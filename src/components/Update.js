import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar"


const Update = () => {

  const { state } = useLocation();
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const navigate=useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:9191/crud/${state}`)
    .then((res)=>{
      setName(res.data.name);
      setEmail(res.data.email);
    });
  },[]);
  

function handelSubmit(e){
  e.preventDefault();
  axios.put(`http://localhost:9191/crud`,{id:state,name:name,email:email})
  .then(()=>{
    navigate("/read");
  });

}

  return (
    <>
      <Navbar />
      <div className="container">
      <div className='my-2 p-2'><h1>Update Operation</h1></div>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="nameInputPassword1"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handelSubmit}
          >
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default Update;
