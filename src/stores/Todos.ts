import { atom, useRecoilState } from "recoil";
import { Todo } from "types/useTodo";

const todoListState = atom({
  key: "TodoList",
  default: [
    {
      id: "1",
      name: "Learn React",
      status: "complete",
    },
    {
      id: "2",
      name: "Learn Recoil",
      status: "update",
    },
    {
      id: "3",
      name: "Learn Testing React",
      status: "new",
    },
  ] as Todo[],
});

const statusUpdate = atom({
  key: "updateTodoList",
  default: {
    id: "",
    name: "",
    status: "",
    type: false,
  },
});

export const useTodoList = () => {
  const [todo, setTodo] = useRecoilState(todoListState);
  const [sTodo, setSTodo] = useRecoilState(statusUpdate);

  const callUpdate = (id: string) => {
    let arr = todo.filter((obj) => obj.id === id);
    if (arr.length > 0) {
      setSTodo({ ...arr[0], type: !sTodo.type });
    }
  };

  const addTodo = (name: string, status: string) => {
    let id: number = Number(todo[todo.length - 1].id) + 1;
    setTodo((oldTodo) => [...oldTodo, { id: id + "", name: name, status: status }]);
  };

  const updateTodo = (id: string, name: string, status: string) => {
    setTodo((oldTodo) => oldTodo.map((val) => (val.id === id ? { id, name, status } : val)));
  };

  const deleteTodo = (id: string) => {
    setTodo((oldTodo) => oldTodo.filter((obj) => obj.id !== id));
  };

  return { todo, sTodo, addTodo, updateTodo, deleteTodo, callUpdate };
};
