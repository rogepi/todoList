import { Todo } from "../pages/todo"
import TodoListItem from "./list-item"

interface ITodoListProps {
  list: Todo[]
  check: (id: number, check: boolean) => void
  edit: (id: number, content: string) => void
  del: (id: number) => void
}

const TodoList = ({ list, check, edit, del }: ITodoListProps) => {
  return (
    <div>
      {
        list.map(item =>
          <TodoListItem key={item.id} todo={item} check={check} edit={edit} del={del} />
        )
      }
    </div>
  )
}

export default TodoList