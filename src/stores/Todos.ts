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

export const useTodoList = () => {
  const [todo, setTodo] = useRecoilState(todoListState);

  const addTodo = (name: string, status: string) => {
    let id: number = Number(todo[todo.length - 1].id) + 1;
    setTodo((oldTodo) => [...oldTodo, { id: id + "", name: name, status: status }]);
  };

  const deleteTodo = (id: string) => {
    setTodo((oldTodo) => oldTodo.filter((obj) => obj.id !== id));
  };

  return { todo, addTodo, deleteTodo };
};
