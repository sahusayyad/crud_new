import axios from "axios";
import React, { useEffect ,useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
const Read = () => {
  const [data, setData] = useState([]);
  const nevigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:9191/crud").then((res) => {
      setData(res.data);
    });
  }, []);

  function getData() {
    axios.get("http://localhost:9191/crud").then((res) => {
      setData(res.data);
    });
  }

  function handelEdit(id) {
    nevigate("/update", { state: id });
  }

  function handleDelete(id) {
    axios.delete(`http://localhost:9191/crud/${id}`).then(() => {
      getData();
    });
  }

  return (
    <>
      <Navbar />

      <div className="container">
        <h1 className="my-2 p-2">Read Operation</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          {data.map((eachData) => {
            return (
              <>
                <tbody>
                  <tr>
                    <th scope="row">{eachData.id}</th>
                    <td>{eachData.name}</td>
                    <td>{eachData.email}</td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => handelEdit(eachData.id)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(eachData.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Read;
