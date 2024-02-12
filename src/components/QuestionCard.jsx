import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const QuestionCard = ({ questions, getData }) => {
  const { question, answer } = questions;

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <Card className="rounded-2 m-auto player-kart mt-4 text-center w-50">
        <Card.Body>
          <div className=" d-flex justify-content-between align-items-center">
            <Card.Title className=" d-flex justify-content-between align-items-center  ">
              {question}
            </Card.Title>
            <div>
              {!open ? (
                <i
                  className="icon fa-solid fa-circle-down "
                  onClick={() => setOpen(true)}
                ></i>
              ) : (
                <i
                  className="fa-solid fa-circle-up"
                  onClick={() => setOpen(false)}
                ></i>
              )}
              <i
                className="icon fa-solid fa-pen-to-square"
                onClick={() =>
                  navigate("/update-question", { state: { questions } })
                }
              ></i>
            </div>
          </div>
          {open && <Card.Text>{answer}</Card.Text>}
        </Card.Body>
      </Card>
    </div>
  );
};

export default QuestionCard;
