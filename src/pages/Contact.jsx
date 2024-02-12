import React, { useState } from "react";
import emailjs from "emailjs-com";

const About = () => {
  const[name,setName]=useState("")
  const[mail,setMail]=useState("")
  const [text, setText] = useState("");
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_i9jxmzw",
        e.target,
        "SVzeZJwYP8zhDqpK5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      setText(""); 
      setName(""); 
      setMail(""); 
  }

  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center ">
        <div className="col-md-7">
          <div className="card new p-3 py-4">
          <h1 className="text-center">Contact</h1>
          <form  onSubmit={sendEmail}>
          <div className="mb-3">
          <label htmlFor="add-name" className="form-label">
           Name
          </label>
          <input onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            name="name"
            value={name}
            
           
            required
          />
        </div>
          <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">
      Email address
    </label>
    <input input onChange={(e) => setMail(e.target.value)}
      type="email"
      className="form-control"
      id="exampleFormControlInput1"
      placeholder="name@example.com"
      required
      value={mail}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">
      Message
    </label>
    <textarea input onChange={(e) => setText(e.target.value)}
      className="form-control"
      id="exampleFormControlTextarea1"
      rows={3}
      defaultValue={""}
      value={text}
    />
  </div>
  <div className="text-center">
          <button type="submit" className="add-to-cart btn btn-success btn-sm">
            Submit
          </button>
          </div>
  </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
