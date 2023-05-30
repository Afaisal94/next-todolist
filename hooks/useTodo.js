import axios from "axios";

let baseApiUrl = "https://todo.lazycoding.buzz";

const getTodos = async () => {
  const response = await axios.get(
    `${baseApiUrl}/todos/filter/false`
  );
  return response.data;
};

const getDone = async () => {
  const response = await axios.get(
    `${baseApiUrl}/todos/filter/true`
  );
  return response.data;
};

const getAll = async () => {
  const response = await axios.get(`${baseApiUrl}/todos`);
  return response.data;
};

const createTodo = async ({ task }) => {
  const response = await axios.post(`${baseApiUrl}/todos`, {
    task,
  });
  return response.data;
};

const completeTodo = async ({ id }) => {
    const isCompleted = 1;
    await axios.patch(`${baseApiUrl}/todos/${id}`, {isCompleted});
    return id;
};

const deleteTodo = async ({ id }) => {
    await axios.delete(`${baseApiUrl}/todos/${id}`);
    return id;
};

export { getTodos, getDone, getAll, createTodo, completeTodo, deleteTodo };
