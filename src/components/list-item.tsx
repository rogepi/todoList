import { memo, useCallback, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { Todo } from "../pages/todo"

interface ITodoListItemProps {
  todo: Todo
  check: (id: number, check: boolean) => void
  edit: (id: number, content: string) => void
  del: (id: number) => void
}

const TodoListItem = memo(({ todo, check, edit, del }: ITodoListItemProps) => {
  const { t } = useTranslation()
  const [isEdit, setIsEdit] = useState(false)
  const [tmp, setTmp] = useState('')
  const checkRef = useRef<HTMLInputElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const checkHandler = useCallback(() => {
    if (checkRef.current)
      check(todo.id, checkRef.current.checked)
  }, [])

  const editHandler = useCallback(() => {
    if (inputRef.current) {
      setTmp(inputRef.current?.value)
      inputRef.current.focus()
    }
    setIsEdit(true)
  }, [])

  const overHandler = useCallback(() => {
    if (inputRef.current)
      edit(todo.id, inputRef.current?.value)
    setIsEdit(false)
  }, [])

  const cancelHandler = () => {
    if (inputRef.current)
      inputRef.current.value = tmp
    setIsEdit(false)
  }
  return (
    <div className=" bg-white my-1 p-1 rounded text-black
    flex justify-between items-center" key={todo.id}>
      <div className="flex items-center">
        <input type="checkbox" ref={checkRef} defaultChecked={todo.check} onChange={checkHandler} className="mr-1" />
        <input disabled={!isEdit} ref={inputRef} className="outline-none" type="text" defaultValue={todo.content} />
      </div>
      <div className="space-x-1">
        {
          isEdit ?
            <>
              <button onClick={() => overHandler()} className="w-10 bg-green-400 rounded px-1 text-white font-semibold">{t("todo.yes")}</button>
              <button onClick={() => cancelHandler()} className="w-10 bg-red-400 rounded px-1 text-white font-semibold">{t("todo.no")}</button>
            </> :
            <>
              <button onClick={() => editHandler()} className="w-10 bg-green-400 rounded px-1 text-white font-semibold">{t("todo.edit")}</button>
              <button onClick={() => del(todo.id)} className="w-10 bg-red-400 rounded px-1 text-white font-semibold">{t("todo.del")}</button>
            </>
        }
      </div>
    </div>
  )
})

export default TodoListItem