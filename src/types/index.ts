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

type TodoHeaderProps = {
  mode: modeType;
  changeMode: (text: string) => void;
};

type MenuButtonProps = {
  mode: modeType;
  changeMode: (text: string) => void;
  text: string;
  pd?: string;
};

type TodoBottomProps = {
  addTodo: (text: string) => void;
};

type themeType = "light" | "dark";
