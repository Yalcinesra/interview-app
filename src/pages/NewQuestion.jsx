import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import QuestionForm from "../components/QuestionForm";

const NewQuestion = () => {
  const navigate = useNavigate();
  const initialValue = {
    category: "",
    question: "",
    answer: "",
  };
  const [formVeri, setFormVeri] = useState(initialValue);
  // initialStatei apinin benden istediği değerlere göre oluşturdum ki herhangi bir ek düzenleme yapmadan veriyi olduğu gibi apiye gönderebileyim.

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      "https://655b152bab37729791a8849a.mockapi.io/data",
      formVeri
    );
    navigate(-1);
    setFormVeri(initialValue);
  };

  return (
    <div className="container">
      <article
        id="add-product"
        className="mb-4 mt-4 col col-lg-5 mx-auto border rounded-2 bg-opacity-50 bg-light"
      >
        <h1 className="text-center"> New Question</h1>

        <QuestionForm
          handleSubmit={handleSubmit}
          formVeri={formVeri}
          setFormVeri={setFormVeri}
        />
      </article>
    </div>
  );
};

export default NewQuestion;
