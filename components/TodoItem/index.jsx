import React from "react";
import { Row, Col } from "react-bootstrap";
import { BsCheckCircle, BsXCircle } from "react-icons/bs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { completeTodo, deleteTodo } from "../../hooks/useTodo";

export const TodoItem = (props) => {
  const { id, task, isCompleted } = props;
  const queryClient = useQueryClient();

  const { mutate: completing } = useMutation({
    mutationFn: async () => {
      await completeTodo({ id });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["todos"] });
      await queryClient.invalidateQueries({ queryKey: ["doneTasks"] });
      await queryClient.invalidateQueries({ queryKey: ["allTasks"] });
    },
  });

  const { mutate: deleting } = useMutation({
    mutationFn: async () => {
      await deleteTodo({ id });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["todos"] });
      await queryClient.invalidateQueries({ queryKey: ["doneTasks"] });
      await queryClient.invalidateQueries({ queryKey: ["allTasks"] });
    },
  });

  const HandleComplete = async (id) => {
    await completing(id);
  };
  const HandleDelete = async (id) => {
    await deleting(id);
  };
  return (
    <div>
      <Row
        className="p-2"
        style={{
          borderRadius: "10px",
          marginBottom: "10px",
          backgroundColor: "white",
          boxShadow: "2px 2px",
        }}
      >
        <Col md={8} style={{ textAlign: "center" }}>
          <p style={{ margin: "auto" }}>{task}</p>
        </Col>
        <Col md={4} style={{ textAlign: "center" }}>
          <div className="action-group" style={{ margin: "auto" }}>
            {!isCompleted ? (
              <span
                onClick={() => {
                  HandleComplete(id);
                }}
              >
                <BsCheckCircle color="green" style={{ margin: "5px" }} />
              </span>
            ) : null}

            <span
              onClick={() => {
                HandleDelete(id);
              }}
            >
              <BsXCircle color="red" style={{ margin: "5px" }} />
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
};
