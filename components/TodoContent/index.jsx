import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {
  TodoList,
  TodoDone,
  TodoAll,
} from "./../../components";

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
        className="col-md-auto mb-5"
        style={{ borderRadius: "10px", backgroundColor: "#92b4e3", boxShadow: "3px 3px" }}
      >
        <div className="button-group">
          <Button
            onClick={() => {
              handleTodoTab();
            }}
            className={
              todoTab ? "btn m-5 btn-success" : "btn m-5 btn-secondary"
            }
          >
            To Do
          </Button>
          <Button
            onClick={() => {
              handleDoneTab();
            }}
            className={
              doneTab ? "btn m-5 btn-success" : "btn m-5 btn-secondary"
            }
          >
            Done
          </Button>
          <Button
            onClick={() => {
              handleAllTab();
            }}
            className={allTab ? "btn m-5 btn-success" : "btn m-5 btn-secondary"}
          >
            All Tasks
          </Button>
        </div>
        <div className="todo-group p-3">
          {todoTab ? <TodoList /> : null}

          {doneTab ? <TodoDone /> : null}

          {allTab ? <TodoAll /> : null}
        </div>
      </div>
    </div>
  );
};
