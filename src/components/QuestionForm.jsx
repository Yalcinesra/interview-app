
import axios from "axios";
import { useNavigate } from "react-router-dom";
const QuestionForm = ({handleSubmit, formVeri, setFormVeri,getData }) => {
  const BASE_URL = "https://655b152bab37729791a8849a.mockapi.io/data/";
  const navigate=useNavigate()

  const deleteData = async (id) => {
    await axios.delete(`${BASE_URL}${formVeri.id}/`);
  navigate(-1);
    getData();
    
  };
  return (
    <article
      id="add-product"
      className="mb-4 mt-4  col col-lg-8 mx-auto border rounded-2 bg-opacity-50 bg-light"
    >
      <form className="p-2" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="add-question" className="form-label">
            Question
          </label>
          <input
            type="text"
            className="form-control"
            name="question"
            value={formVeri.question}
            onChange={(e) => setFormVeri({ ...formVeri, question: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="add-answer" className="form-label">
            Answer
          </label>
          <textarea
            type="text"
            className="form-control textarea"
            name="answer"
            value={formVeri.answer}
            onChange={(e) => setFormVeri({ ...formVeri, answer: e.target.value })}
            required
          />
        </div>
        <div className="mb-3 d-flex flex-column " >
          <label htmlFor="add-category" className="form-label">
          Question Category
          </label>
          <select classname="form-select"
          name="Types"
          id="Types"
          onChange={(e) =>setFormVeri({ ...formVeri, category: e.target.value })}
        >
        <option selected>Select Category</option>
          <option  value="react">React</option>
          <option value="NodeJs">NodeJs</option>
          <option value="Html-Css">Html-Css</option>
      
        </select>
          
        
        </div>
        
        
        
        <div className="text-center">
          <button type="submit" className="add-to-cart btn btn-success btn-sm m-2">
           {!formVeri.id ? "Save To Question" : "Update To Question"} 
          </button>
          {formVeri.id && <button type="button" className=" add-to cart btn btn-danger btn-sm m-2"  onClick={() => deleteData(formVeri.id)   }> Delete From Question</button>}
        </div>
      </form>
    </article>
  );
};

export default QuestionForm;
