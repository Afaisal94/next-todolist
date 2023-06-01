import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { TodoList, TodoDone, TodoAll } from "./../../components";

export const TodoContent = () => {
  const [todoTab, setTodoTab] = useState(true);
  const [doneTab, setDoneTab] = useState(false);
  const [allTab, setAllTab] = useState(false);

  const handleTodoTab = () => {
    setTodoTab(true);
    setDoneTab(false);
    setAllTab(false);
  };

  const handleDoneTab = () => {
    setDoneTab(true);
    setTodoTab(false);
    setAllTab(false);
  };

  const handleAllTab = () => {
    setAllTab(true);
    setTodoTab(false);
    setDoneTab(false);
  };
  return (
    <div className="row justify-content-md-center mb-5">
      <div
        className="col-md-6 mb-5"
        style={{
          borderRadius: "10px",
          backgroundColor: "#92b4e3",
          boxShadow: "3px 3px",
        }}
      >
        <div className="row m-5">
          <div className="col-md-4 col-4">
            <center>
              <Button
                onClick={() => {
                  handleTodoTab();
                }}
                className={todoTab ? "btn btn-success" : "btn btn-secondary"}
              >
                To Do
              </Button>
            </center>
          </div>
          <div className="col-md-4 col-4">
            <center>
              <Button
                onClick={() => {
                  handleDoneTab();
                }}
                className={doneTab ? "btn btn-success" : "btn btn-secondary"}
              >
                Done
              </Button>
            </center>
          </div>
          <div className="col-md-4 col-4">
            <center>
              <Button
                onClick={() => {
                  handleAllTab();
                }}
                className={allTab ? "btn btn-success" : "btn btn-secondary"}
              >
                All Tasks
              </Button>
            </center>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="todo-group p-3">
              {todoTab ? <TodoList /> : null}

              {doneTab ? <TodoDone /> : null}

              {allTab ? <TodoAll /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
