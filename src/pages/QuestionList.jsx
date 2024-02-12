import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import QuestionCard from "../components/QuestionCard";


const  QuestionList = () => {

  const [question, setQuestion] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [category,setCategory]=useState("")

 
  const BASE_URL = "https://655b152bab37729791a8849a.mockapi.io/data";

  const getData = async () => {
    try {
      const { data } = await axios(
        BASE_URL
      );
      console.log(data);
      setQuestion(data);
      setError(false); // işlem başarılı olursa erroru false a çekiyorum
    } catch (error) {
      console.log(error);
      setError(true); //catche düştüğünde error ini true değerine çekiyorum
    } finally {
      setLoading(false); // işlem try a da catche de girse farketmez her türlü loadingi false çekiyoruz ki ne olduğunu kullancıya yansıtabilelim
    }
  };
useEffect(() => {
  getData();
}, [])
console.log(question);
const handleSubmit=(e)=>{
  e.preventDefault()
  getData()
    }

  if (error) {
    return <p>Something went wrong..... </p>;
  }

  return (
    <div className="container mt-3">
     <h1 className="text-center">Interview Question List</h1>
      <div className="d-sm-block d-md-flex">
        {loading === true ? (
          <p> Loading....</p>
        ) : (
          <>

            <article id="product-panel">
            <div className="container ">
     

      <form onSubmit={handleSubmit}>
      <div className="d-flex justify-content-center">
       
        <select classname="form-select"
          name="Types"
          id="Types"
          onChange={(e) => setCategory(e.target.value)}
        >
        <option selected>Select Category</option>
          <option >React</option>
          <option>NodeJs</option>
          <option>Html-Css</option>
          <option ></option>
        </select>
        </div>
      </form>
    </div>
            <Row className="justify-content-center">
            {/* {question.filter((a)=>a.category==="All").map((questions) =>)} */}
              {question.filter((a)=>a.category.toLowerCase().includes(category.toLowerCase())).map((questions) => (
               
                <Col  xl={12} key={questions.id}>
                <QuestionCard questions={questions} getData={getData}/></Col>
              ))}</Row>
            </article>
            
          </>
        )}
      </div>
    </div>
  );
};

export default  QuestionList;
