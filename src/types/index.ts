interface todoItemType {
  text: string;
  isComplete: boolean;
}

type modeType = "All" | "Active" | "Completed";

type TodoListProps = {
  list: todoItemType[];
  mode: modeType;
  checkTodo: (text: string) => void;
  deleteTodo: (text: string) => void;
};
