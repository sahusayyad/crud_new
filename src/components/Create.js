import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Create = () => {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const history=useNavigate();

    // const header={"Access-Control-Allow-Origin":"*"};

    const handelSubmit=(e)=>{
        
        console.log("clicked name "+name+" email "+email);
        e.preventDefault();
        
        axios
            .post(
                `http://localhost:9191/crud`,
                { name:name,email:email }
            )
            .then(() => {
              history("/read");
            });
            
    }

  return <>
  <Navbar />
  
  <div className='container'>
    <div className='my-2 p-2'><h1>Create Operation</h1></div>
    
  <form>
  <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="text" 
        className="form-control" 
        id="nameInputPassword1"
        onChange={(e)=>setName(e.target.value)}
        
        />
  </div>
  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" 
        className="form-control" 
        id="exampleInputEmail1" 
        aria-describedby="emailHelp"
        onChange={(e)=>setEmail(e.target.value)}
        
        />
  </div>
  
 
  <button type="submit" className="btn btn-primary" onClick={handelSubmit}>Submit</button>
</form>
  </div>
    
  </>
}

export default Create;