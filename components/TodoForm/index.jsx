import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { createTodo } from "../../hooks/useTodo";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const TodoForm = () => {
  const queryClient = useQueryClient();

  const [task, setTask] = useState("");

  const { mutate } = useMutation({
    mutationFn: async () => {
      await createTodo({ task });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["todos"] });
      await queryClient.invalidateQueries({ queryKey: ["doneTasks"] });
      await queryClient.invalidateQueries({ queryKey: ["allTasks"] });
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await mutate();
    setTask("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Row>
          <Col md={3} sm={2}></Col>
          <Col md={5} sm={6}>
            <Form.Control
              type="text"
              placeholder="Enter new task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              required
            />
          </Col>
          <Col md={1} sm={2}>
            <div className="d-grid gap-2">
              <Button variant="info" type="submit">
                Save
              </Button>
            </div>
          </Col>
          <Col md={3} sm={2}></Col>
        </Row>
      </form>
    </div>
  );
};
